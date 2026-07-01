import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { futureMatchBaseline } from "./futureMatchBaselineData.js";
import { mlbBacktest } from "./mlbBacktestData.js";
import { worldCupBacktest } from "./worldCupBacktestData.js";
import "./styles.css";

const SPORT_KEY = import.meta.env.VITE_ODDS_SPORT_KEY || "soccer_fifa_world_cup";
const MLB_SPORT_KEY = import.meta.env.VITE_ODDS_MLB_SPORT_KEY || "baseball_mlb";
const FUTURES_KEY = import.meta.env.VITE_ODDS_FUTURES_KEY || "soccer_fifa_world_cup_winner";
const REGION = import.meta.env.VITE_ODDS_REGION || "us";
const API_KEY = import.meta.env.VITE_ODDS_API_KEY || "";
const SNAPSHOT_KEY = "worldcup-moneylines:snapshots";
const PICKS_KEY = "worldcup-moneylines:picks";
const MODEL_PICKS_KEY = "worldcup-moneylines:model-picks";
const TEAM_RATINGS_KEY = "worldcup-moneylines:team-ratings";
const INTEL_NOTES_KEY = "worldcup-moneylines:intel-notes";
// Durable vault-backed persistence endpoint (served by the Vite dev plugin, see
// vite.config.js). All model-training state is mirrored to a git-committable JSON file in the
// vault so it survives dev-server restarts, port changes, and browser clears. localStorage
// stays as a fast offline cache and the production fallback.
const STATE_ENDPOINT = "/api/state";
const STATS_ENDPOINT = "/api/stats";
const STATS_KEY = "worldcup-moneylines:stats";
const STATE_VERSION = 1;
const STATS_HISTORY_CAP = 180; // keep ~a season of daily stat snapshots
const BASE_STAKE = 100;
const PREFERRED_BOOK = "draftkings";
const REFRESH_COOLDOWN_MS = 20 * 60 * 1000; // rate limit: 20 min between API pulls, manual or auto
const AUTO_REFRESH_KEY = "worldcup-moneylines:auto-refresh";

function makeBaselineResearchModels(data) {
  return Object.fromEntries((data.matches || []).map((match) => [
    `${match.homeTeam} vs ${match.awayTeam}`,
    {
      source: `Future baseline · Group ${match.group}`,
      confidence: match.homeElo != null && match.awayElo != null ? 0.52 : 0.35,
      notes: `${data.note} Elo diff ${match.eloDiff == null ? "unknown" : match.eloDiff}. Injury flags ${match.homeInjuryFlag}/${match.awayInjuryFlag}.`,
      outcomes: match.probabilities
    }
  ]));
}

const matchResearchModels = makeBaselineResearchModels(futureMatchBaseline);

const kalshiFuturesProbabilities = {
  France: 0.291,
  Argentina: 0.213,
  Spain: 0.107,
  England: 0.094,
  Brazil: 0.071,
  Portugal: 0.062,
  USA: 0.039,
  Morocco: 0.036,
  Mexico: 0.031,
  Colombia: 0.028,
  Norway: 0.021,
  Belgium: 0.011,
  "Bosnia and Herzegovina": 0.01
};

// === Edge Algorithm v1.2 configuration ===
// v0.1 set researchPrior to 0, so the "algorithm chance" was just the market's own
// no-vig number (Edge Algorithm v0.1.md: "algorithm chance = 100% market no-vig";
// Probability and Value Math.md: "a real betting edge needs a better model than the
// market"). v1.0 adds an INDEPENDENT projection (a goals/strength model built from the
// xG/team-strength inputs the vault already tracks in Model Lab.md) and blends it with
// the market. The two numbers below are the MAXIMUM model weight, used only when both
// teams are fully rated; the live weight is shrunk when data is thin, intel is pending,
// or a match has started (Bankroll and Risk Rules.md).
const algorithmWeights = {
  marketNoVig: 0.55,   // weight on market consensus no-vig when fully rated
  researchPrior: 0.45  // weight on the independent model (surfaced as "Research" in the UI)
};

// World Cup knockout scoring baseline for the Poisson goals model. The vault has no
// explicit goal model, so this is inferred best practice: a Dixon-Coles bivariate-Poisson
// driven by the xG-for / xG-against inputs already stored on each team (Model Lab.md).
const LEAGUE_AVG_GOALS = 1.35;
const MAX_GOALS = 8;
const DIXON_COLES_RHO = -0.05;   // mild low-score correction that lifts 0-0/1-1 (draw) mass
const MIN_XG = 0.2;              // floor so a blank/zero xG input cannot zero out a lambda
const KELLY_FRACTION = 0.25;     // quarter-Kelly — conservative, matches the vault's tone
const MAX_STAKE_FRACTION = 0.01; // Bankroll and Risk Rules.md: "No pick gets a recommendation above 1%"
const STALE_MINUTES = 90;        // a best line older than this (vs now) is treated as stale data

// MLB model calibration (all in logit units — see mlbModel). Tuned so team-strength gaps and
// starter xERA gaps land in MLB's realistic, compressed win-probability range rather than the
// soccer model's wider spread. Data: MLB Stats API standings (team run diff) + Baseball Savant
// xERA (MLB Research Important Info.md — "xStats"), neither needing an API key.
const MLB_HOME_LOGIT = 0.16;        // logistic(0.16) ≈ 54% home baseline
const MLB_STRENGTH_K = 0.27;        // run-diff-based strength gap (~±2) -> compressed win% range
const XERA_LOGIT_PER_RUN = 0.35;    // one run of starter xERA edge, in logit units
const MAX_XERA_LOGIT = 0.8;         // cap on the single-matchup starter swing
const SOCCER_DRAW_SOFT_CAP = 0.34;  // World Cup backtest: draw predictions were the biggest miss pattern
const SOCCER_DRAW_ANCHOR_WEIGHT = 0.25;
const MLB_BACKTEST_COMPRESSION = 0.78; // 2025 postseason backtest was overconfident, especially away/high-conf picks
const MLB_BACKTEST_CAP = 0.82;
// MLB After Loss Trend Prior.md: a small bounce-back nudge, applied ONLY when a team lost its
// last game, measured against a 0.50 league-average after-loss baseline. Scale kept small so it
// is "never stronger than starting pitcher/lineup/bullpen" (0.637 after-loss -> ~+2% win prob).
const AFTERLOSS_LOGIT_SCALE = 0.6;
const AFTERLOSS_LEAGUE_AVG = 0.5;
const INTEL_STATUS_MULTIPLIER = {
  Watch: 0.65,
  Confirmed: 1,
  Cleared: 0
};
const INTEL_IMPACT_MULTIPLIER = {
  Low: 0.35,
  Medium: 0.7,
  High: 1
};
const INTEL_CATEGORY_STRENGTH = {
  MLB: {
    Starters: 0.34,
    Injuries: 0.24,
    Lineups: 0.18,
    Weather: 0.1,
    "Travel/rest": 0.12,
    "Market move": 0.08
  },
  Soccer: {
    Injuries: 0.22,
    Suspensions: 0.2,
    Lineups: 0.16,
    Weather: 0.08,
    "Travel/rest": 0.12,
    "Market move": 0.08
  }
};

// Results-based soccer Elo (auto-learning). Persisted in localStorage, seeded neutral, and
// updated automatically from /scores — so soccer strength self-corrects from real outcomes
// without hand-tuning xG/form after every match.
const ELO_KEY = "worldcup-moneylines:elo";
const DEFAULT_ELO = 1500;
const ELO_K = 32;                // update speed per match
const ELO_GOAL_TILT_SCALE = 500; // Elo points per unit of goal-expectation tilt
const MAX_ELO_TILT = 0.2;        // a result-driven swing can move a lambda by at most ±20%

// User request: hide long-shot noise from the algorithm's candidate lists. Below this
// blended model probability, a row is dropped entirely from Value/Algorithm/Bankroll
// Watch/Model Lab — it never reaches the "is this a pick" stage. Default 33%, adjustable
// live from the topbar. This is a candidate-list floor, not a market/board filter: raw
// odds boards (Soccer/MLB match cards, Futures) still show every price for line shopping.
const DEFAULT_MIN_PROBABILITY = 0.33;
const MIN_PROBABILITY_KEY = "worldcup-moneylines:min-probability";

// Live inputs mirrored from React state (see syncAlgorithmInputs) so the pure algorithm
// functions can read team ratings + intel without changing every call site's signature.
let ratingRegistry = {};
let intelRegistry = [];
let minProbabilityFilter = DEFAULT_MIN_PROBABILITY;
// Keyed by `${localDateKey}::${normalizedTeamName}` -> { pitcher, xera }. Set by
// fetchMlbStarterQuality() during refreshOdds; read by mlbModel()/getStarterInfo(). Not React
// state — it's fetched data the user doesn't edit, so a plain module registry (same pattern
// as ratingRegistry) avoids threading it through every call site.
let mlbStarterRegistry = {};
// Auto-derived MLB team strength (from MLB Stats API standings), keyed by normalized team
// name. Read as a FALLBACK in getRating(): a manual Model Lab rating still wins, but with
// no manual MLB ratings this is what actually turns the MLB model on (before this existed,
// every MLB game fell through to market-only because no MLB team had a rating).
let mlbTeamRatingRegistry = {};
// Live Kalshi win-probabilities keyed by team name; null until a successful fetch, then used
// by futureValueRows() in place of the hardcoded kalshiFuturesProbabilities snapshot.
let liveKalshiProbabilities = null;
// Adaptive model/market blend weight, set from the app's measured track record each render
// (see computeAdaptiveModelWeight). Falls back to the static algorithmWeights.researchPrior.
let adaptiveModelWeight = null;
// Results-based soccer Elo, keyed by normalized team name. Mirrored from React state each
// render; read by soccerModel() via getElo(). Empty/absent -> DEFAULT_ELO -> zero tilt.
let eloRegistry = {};
// Each MLB team's most recent completed-game result ("win"|"loss"), from /scores. Mirrored
// from persisted stats each render; read by mlbModel() to gate the after-loss prior.
let mlbLastResultRegistry = {};

const sampleEvents = [
  makeEvent("sample-ivory-coast-norway", "2026-06-30T17:00:00.000Z", "Ivory Coast", "Norway", [
    ["Bovada research", "bovada-research", 300, 250, 105],
    ["Market note", "market-note", 295, 245, 110]
  ]),
  makeEvent("sample-france-sweden", "2026-06-30T21:00:00.000Z", "France", "Sweden", [
    ["Bovada research", "bovada-research", -185, 300, 575],
    ["Market note", "market-note", -180, 295, 560]
  ]),
  makeEvent("sample-mexico-ecuador", "2026-07-01T01:00:00.000Z", "Mexico", "Ecuador", [
    ["Bovada research", "bovada-research", 140, 205, 230],
    ["Market note", "market-note", 135, 210, 235]
  ])
];

const sampleMlbEvents = [
  makeEvent("sample-white-sox-orioles", "2026-06-30T22:35:00.000Z", "Baltimore Orioles", "Chicago White Sox", [
    ["ESPN/DraftKings research", "espn-dk-research", -143, null, 122],
    ["Market note", "mlb-market-note", -140, null, 125]
  ]),
  makeEvent("sample-pirates-phillies", "2026-06-30T22:45:00.000Z", "Philadelphia Phillies", "Pittsburgh Pirates", [
    ["VegasInsider consensus", "vegasinsider-research", -199, null, 185],
    ["Market note", "mlb-market-note", -190, null, 180]
  ]),
  makeEvent("sample-dodgers-athletics", "2026-07-01T02:05:00.000Z", "Athletics", "Los Angeles Dodgers", [
    ["Research placeholder", "mlb-research", 170, null, -205],
    ["Market note", "mlb-market-note", 165, null, -198]
  ])
];

const advanceMarkets = [
  {
    match: "Ivory Coast vs Norway",
    source: "Research note",
    prices: [
      ["Ivory Coast to advance", 210],
      ["Norway to advance", -260]
    ],
    note: "Track separately from 90-minute moneyline because extra time and penalties are included."
  },
  {
    match: "France vs Sweden",
    source: "Research note",
    prices: [
      ["France to advance", -420],
      ["Sweden to advance", 320]
    ],
    note: "France is the clean favorite, but the price can get steep fast."
  },
  {
    match: "Mexico vs Ecuador",
    source: "Research note",
    prices: [
      ["Mexico to advance", -150],
      ["Ecuador to advance", 125]
    ],
    note: "Compare this to the 90-minute line because draw probability changes the value story."
  }
];

const sampleFutures = [
  ["France", 225],
  ["Argentina", 350],
  ["England", 700],
  ["Spain", 700],
  ["Brazil", 1200],
  ["Portugal", 1200],
  ["Morocco", 2000],
  ["Colombia", 3000],
  ["USA", 3000],
  ["Norway", 5000],
  ["Mexico", 6000],
  ["Ecuador", 15000],
  ["Ivory Coast", 30000],
  ["Sweden", 40000]
].map(([team, price]) => ({
  id: `future-${team}`,
  team,
  price,
  source: "Bovada research",
  lastUpdate: "2026-06-30T17:45:00.000Z"
}));

const researchCards = [
  {
    title: "DraftKings",
    status: "Preferred book",
    body: "Prioritize DraftKings in Bankroll Watch because the current workflow is built around using the free $200 there.",
    link: "https://sportsbook.draftkings.com/"
  },
  {
    title: "PrizePicks",
    status: "Projection source",
    body: "Not a sportsbook moneyline feed. Track props, team picks, payout-multiplier markets, and pick notes separately.",
    link: "https://www.prizepicks.com/category/soccer"
  },
  {
    title: "The Odds API",
    status: "Starter feed",
    body: "Use soccer_fifa_world_cup and baseball_mlb with h2h for moneylines, plus soccer_fifa_world_cup_winner for futures.",
    link: "https://the-odds-api.com/liveapi/guides/v4/"
  },
  {
    title: "MLB lane",
    status: "Live API source",
    body: "Use baseball_mlb with h2h for moneyline. Model upgrades should consider starting pitchers, bullpens, xwOBA, park, weather, lineup, and CLV.",
    link: "https://the-odds-api.com/sports-odds-data/mlb-odds.html"
  }
];

const mlbResearchNotes = [
  {
    title: "Data feed",
    body: "The Odds API supports MLB with sport key baseball_mlb and h2h for moneyline, plus spreads and totals when needed."
  },
  {
    title: "Comparison screens",
    body: "Covers, ESPN odds, VegasInsider, DraftKings, FanDuel, and Yahoo are useful line-shopping/reference sources. Keep them as context unless API-backed."
  },
  {
    title: "Model inputs",
    body: "MLB needs pitcher and lineup context: starter quality, bullpen fatigue, xwOBA/xSLG, park factors, weather, handedness splits, and closing-line value."
  }
];

const mlbAfterLossTrends = {
  source: "TeamRankings",
  link: "https://www.teamrankings.com/mlb/trend/win_trends/is_after_loss?range=yearly_mlb_since_2022",
  updatedLabel: "Since 2022",
  top: [
    { team: "LA Dodgers", record: "184-105-0", winPct: 0.637, mov: 1.5, runLine: 0.3 },
    { team: "Houston", record: "192-135-0", winPct: 0.587, mov: 0.8, runLine: 0.3 },
    { team: "Atlanta", record: "179-136-0", winPct: 0.568, mov: 0.6, runLine: -0.2 },
    { team: "Milwaukee", record: "179-138-0", winPct: 0.565, mov: 0.6, runLine: 0.3 },
    { team: "Philadelphia", record: "183-147-0", winPct: 0.555, mov: 0.6, runLine: 0.1 },
    { team: "San Diego", record: "189-152-0", winPct: 0.554, mov: 0.5, runLine: 0.2 }
  ],
  bottom: [
    { team: "Colorado", record: "168-297-0", winPct: 0.361, mov: -1.5, runLine: -0.2 },
    { team: "Chi Sox", record: "167-275-0", winPct: 0.378, mov: -1.0, runLine: -0.1 },
    { team: "Sacramento", record: "175-259-0", winPct: 0.403, mov: -1.0, runLine: 0.1 },
    { team: "Kansas City", record: "176-233-0", winPct: 0.43, mov: -0.6, runLine: 0 },
    { team: "Washington", record: "183-241-0", winPct: 0.432, mov: -0.9, runLine: 0.3 },
    { team: "LA Angels", record: "180-233-0", winPct: 0.436, mov: -0.4, runLine: 0.2 }
  ]
};

// Map the TeamRankings short names above to full Odds/MLB Stats API team names — the exact
// team-mapping step the note flagged as "not yet automated". (Sacramento = the Athletics.)
const AFTERLOSS_TEAM_ALIAS = {
  "LA Dodgers": "Los Angeles Dodgers",
  Houston: "Houston Astros",
  Atlanta: "Atlanta Braves",
  Milwaukee: "Milwaukee Brewers",
  Philadelphia: "Philadelphia Phillies",
  "San Diego": "San Diego Padres",
  Colorado: "Colorado Rockies",
  "Chi Sox": "Chicago White Sox",
  Sacramento: "Athletics",
  "Kansas City": "Kansas City Royals",
  Washington: "Washington Nationals",
  "LA Angels": "Los Angeles Angels"
};

// After-loss win% keyed by normalized full team name, built once from the trend table above.
const AFTERLOSS_WINPCT = {};
[...mlbAfterLossTrends.top, ...mlbAfterLossTrends.bottom].forEach((row) => {
  const fullName = AFTERLOSS_TEAM_ALIAS[row.team] || row.team;
  AFTERLOSS_WINPCT[normalizeTeamName(fullName)] = row.winPct;
});

const intelSources = [
  {
    sport: "MLB",
    title: "MLB Injury Report",
    category: "Injuries",
    body: "Official league injury hub. Use it first for status, IL placement, and team-level injury context.",
    link: "https://www.mlb.com/injuries"
  },
  {
    sport: "MLB",
    title: "MLB Probable Pitchers",
    category: "Starters",
    body: "Check starter confirmation, handedness, ERA, and matchup timing before trusting a baseball moneyline.",
    link: "https://www.mlb.com/probable-pitchers"
  },
  {
    sport: "MLB",
    title: "RotoWire Daily Lineups",
    category: "Lineups",
    body: "Fast lineup confirmation board. Best used near lock to catch scratches, rest days, and batting-order changes.",
    link: "https://www.rotowire.com/baseball/daily-lineups.php"
  },
  {
    sport: "MLB",
    title: "ESPN MLB Injuries",
    category: "Injuries",
    body: "Second injury source for cross-checking player status and recent notes.",
    link: "https://www.espn.com/mlb/injuries"
  },
  {
    sport: "MLB",
    title: "Covers MLB Injuries",
    category: "Injuries",
    body: "Betting-focused injury board to compare against official and ESPN notes.",
    link: "https://www.covers.com/sport/baseball/mlb/injuries"
  },
  {
    sport: "MLB",
    title: "RotoGrinders Weather",
    category: "Weather",
    body: "Check wind, rain delay risk, temperature, and park conditions before backing totals or run-sensitive moneylines.",
    link: "https://rotogrinders.com/weather/mlb"
  },
  {
    sport: "Soccer",
    title: "ESPN World Cup Injuries",
    category: "Injuries",
    body: "Tournament injury tracker for major player availability swings and national-team updates.",
    link: "https://www.espn.com/soccer/story/_/id/48572979/2026-fifa-world-cup-injuries-tracker-which-stars-miss-latest-info"
  },
  {
    sport: "Soccer",
    title: "FIFA Match Centre",
    category: "Lineups",
    body: "Use for official match details, lineups, venue context, and late team news when available.",
    link: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
  }
];

const intelChecklist = [
  {
    sport: "MLB",
    title: "Baseball pre-bet check",
    items: [
      "Probable pitcher confirmed and not scratched.",
      "Starting lineup posted; key bats are active.",
      "Bullpen was not overused in the last 1-3 games.",
      "Weather, wind, roof, and park conditions do not break the model read.",
      "Line has not moved past the fair price from Value or Bankroll Watch."
    ]
  },
  {
    sport: "Soccer",
    title: "Soccer pre-bet check",
    items: [
      "Injuries and suspensions checked for both teams.",
      "Starting XI or reliable projected XI matches the model assumptions.",
      "Rotation/rest/travel context does not reduce favorite strength.",
      "Venue, heat, altitude, and weather are accounted for.",
      "Moneyline is compared against draw/to-advance market context."
    ]
  }
];

const seedIntelNotes = [
  {
    id: "intel-mlb-starters",
    sport: "MLB",
    match: "Tonight's MLB board",
    category: "Starters",
    impact: "High",
    status: "Watch",
    sourceUrl: "https://www.mlb.com/probable-pitchers",
    note: "Confirm both starting pitchers before using the best pick for tonight. A pitcher scratch should force a full re-price."
  },
  {
    id: "intel-mlb-lineups",
    sport: "MLB",
    match: "Tonight's MLB board",
    category: "Lineups",
    impact: "Medium",
    status: "Watch",
    sourceUrl: "https://www.rotowire.com/baseball/daily-lineups.php",
    note: "Check if key bats are sitting. A missing top-of-order hitter matters more than a bench player."
  },
  {
    id: "intel-soccer-team-news",
    sport: "Soccer",
    match: "World Cup knockout slate",
    category: "Injuries",
    impact: "High",
    status: "Watch",
    sourceUrl: "https://www.espn.com/soccer/story/_/id/48572979/2026-fifa-world-cup-injuries-tracker-which-stars-miss-latest-info",
    note: "Verify star availability and starting XI before trusting any Soccer moneyline."
  }
];

const todayNotes = [
  {
    match: "Ivory Coast vs Norway",
    time: "1 p.m. ET",
    note: "Norway showed as the cleaner favorite-side profile, but this match is live/started. Re-check score and live price before recording a pick."
  },
  {
    match: "France vs Sweden",
    time: "5 p.m. ET",
    note: "France is strong but expensive straight-up. Sweden is more interesting through props, handicap, or long-shot notes than raw moneyline."
  },
  {
    match: "Mexico vs Ecuador",
    time: "9 p.m. ET",
    note: "Most interesting moneyline research spot. Mexico has venue edge; Ecuador has upset/transition profile. Compare to-advance and 90-minute prices."
  }
];

const seedPicks = [
  {
    id: "pick-norway-advance",
    match: "Ivory Coast vs Norway",
    market: "To advance",
    selection: "Norway",
    source: "Bovada research",
    price: "-260",
    confidence: "Medium",
    status: "Watch",
    note: "Only useful if live state still supports it; game started at 1 p.m. ET."
  },
  {
    id: "pick-mexico-ecuador",
    match: "Mexico vs Ecuador",
    market: "90-minute moneyline",
    selection: "Compare Mexico ML vs Ecuador value",
    source: "Bovada / aggregator",
    price: "",
    confidence: "Lean",
    status: "Research",
    note: "This is the best price-shopping match on the slate."
  },
  {
    id: "pick-prizepicks",
    match: "France vs Sweden",
    market: "PrizePicks props",
    selection: "Look for Sweden volume props",
    source: "PrizePicks",
    price: "",
    confidence: "Research",
    status: "Research",
    note: "France ML may be too expensive, so props may be more useful."
  }
];

const seedTeamRatings = [
  { team: "France", xgFor: 2.1, xgAgainst: 0.8, form: 8.8, homeEdge: 0, news: "Market leader; strong group-stage profile." },
  { team: "Sweden", xgFor: 1.2, xgAgainst: 1.35, form: 5.8, homeEdge: 0, news: "Underdog profile; props may be better than moneyline." },
  { team: "Mexico", xgFor: 1.45, xgAgainst: 0.95, form: 7.2, homeEdge: 0.25, news: "Venue/home-context edge in Mexico City." },
  { team: "Ecuador", xgFor: 1.2, xgAgainst: 1.05, form: 6.7, homeEdge: 0, news: "Upset profile; compare to-advance vs 90-minute." },
  { team: "Norway", xgFor: 1.8, xgAgainst: 1.05, form: 7.5, homeEdge: 0, news: "Favorite-side profile from research notes." },
  { team: "Ivory Coast", xgFor: 1.25, xgAgainst: 1.4, form: 5.9, homeEdge: 0, news: "Longer-price side; live state matters." },
  // July 1 2026 Round of 32 — added from July 1 2026 Match Slate.md live research pass.
  // NOTE: confirm these team-name strings against the live Odds API event payload once it
  // loads (providers vary on "DR Congo" vs "Congo DR", "Bosnia" vs "Bosnia and Herzegovina");
  // getRating() does a normalized exact-match lookup, so a mismatch silently falls back to
  // market-only pricing for that team instead of erroring.
  { team: "England", xgFor: 1.7, xgAgainst: 0.9, form: 7.0, homeEdge: 0, news: "Right-back crisis: James (hamstring) and Quansah (ankle) both out, Spence starts third-choice. Recent form labored despite unbeaten group." },
  { team: "DR Congo", xgFor: 0.9, xgAgainst: 1.1, form: 5.5, homeEdge: 0, news: "World Cup debutants; unbeaten but uninspiring group stage. Fully fit, no injuries reported." },
  { team: "Belgium", xgFor: 1.9, xgAgainst: 0.85, form: 8.0, homeEdge: 0, news: "Won Group G with a 5-1 rout of New Zealand. Debast (leg) trained Sunday, game-time call." },
  { team: "Senegal", xgFor: 1.3, xgAgainst: 1.3, form: 5.7, homeEdge: 0, news: "Starting GK Mendy (knee) doubtful, backup Diaw likely starts — real backline downgrade vs Belgium's attack." },
  { team: "USA", xgFor: 1.6, xgAgainst: 1.0, form: 7.0, homeEdge: 0.3, news: "Co-host venue edge. Pulisic fit and expected to start. Roldan/McKenzie/Trusty fitness checks still pending." },
  { team: "Bosnia and Herzegovina", xgFor: 1.05, xgAgainst: 1.3, form: 5.5, homeEdge: 0, news: "CB Muharemovic returns from suspension, stabilizing a backline that looked exposed in the group stage." }
];

// Prime the rating registry from the seeds so the model is live on first paint, before
// App's render-time syncAlgorithmInputs() call mirrors any user edits from Model Lab.
ratingRegistry = indexRatings(seedTeamRatings);

const seedModelPicks = [
  {
    id: "model-mexico-ecuador",
    match: "Mexico vs Ecuador",
    selection: "Mexico",
    openPrice: 140,
    closePrice: 125,
    probability: 0.424,
    result: "pending",
    source: "Odds API no-vig",
    note: "Seed example for CLV/Brier tracking."
  },
  {
    id: "model-france-sweden",
    match: "France vs Sweden",
    selection: "France",
    openPrice: -185,
    closePrice: -210,
    probability: 0.682,
    result: "pending",
    source: "Odds API no-vig",
    note: "Seed example; update result after final."
  }
];

function makeEvent(id, commenceTime, home, away, books) {
  return {
    id,
    commence_time: commenceTime,
    home_team: home,
    away_team: away,
    bookmakers: books.map(([title, key, homePrice, drawPrice, awayPrice]) => ({
      key,
      title,
      last_update: "2026-06-30T17:45:00.000Z",
      markets: [
          {
            key: "h2h",
            outcomes: [
              { name: home, price: homePrice },
              ...(drawPrice == null ? [] : [{ name: "Draw", price: drawPrice }]),
              { name: away, price: awayPrice }
            ]
          }
        ]
      }))
  };
}

function moneylineToProbability(price) {
  if (price == null || Number.isNaN(Number(price))) return null;
  const value = Number(price);
  if (value > 0) return 100 / (value + 100);
  return Math.abs(value) / (Math.abs(value) + 100);
}

function moneylineProfit(price, stake = BASE_STAKE) {
  if (price == null || Number.isNaN(Number(price))) return null;
  const value = Number(price);
  return value > 0 ? stake * (value / 100) : stake * (100 / Math.abs(value));
}

function probabilityToAmerican(probability) {
  if (!probability || probability <= 0 || probability >= 1) return "—";
  if (probability >= 0.5) return formatMoneyline(Math.round((-probability / (1 - probability)) * 100));
  return formatMoneyline(Math.round(((1 - probability) / probability) * 100));
}

function expectedValue(price, probability, stake = BASE_STAKE) {
  const profit = moneylineProfit(price, stake);
  if (profit == null || probability == null) return null;
  return probability * profit - (1 - probability) * stake;
}

function brierScore(probability, result) {
  // Brier grades the probability that the BACKED selection wins. "win" -> actual 1.
  // "loss" and "draw" both mean the selection did not win -> actual 0 (on a 3-way soccer
  // moneyline a draw loses the side you backed). Draw is graded so soccer pushes/draws
  // still feed calibration instead of sitting forever as "pending".
  if (result !== "win" && result !== "loss" && result !== "draw") return null;
  const actual = result === "win" ? 1 : 0;
  return (probability - actual) ** 2;
}

function clvPoints(openPrice, closePrice) {
  const open = moneylineToProbability(openPrice);
  const close = moneylineToProbability(closePrice);
  if (open == null || close == null) return null;
  return open - close;
}

function average(values) {
  const clean = values.filter((value) => value != null && !Number.isNaN(Number(value)));
  if (!clean.length) return null;
  return clean.reduce((sum, value) => sum + value, 0) / clean.length;
}

function gradeModelPicks(picks) {
  // A settled result is win, loss, or draw. Draws are counted in the denominator (a drawn
  // 3-way moneyline does not pay) and surfaced separately so soccer draws are visible.
  const SETTLED = new Set(["win", "loss", "draw"]);
  const graded = picks.filter((pick) => SETTLED.has(pick.result));
  const wins = graded.filter((pick) => pick.result === "win").length;
  const draws = graded.filter((pick) => pick.result === "draw").length;
  // Dollar tracking from the recorded buy-ins: a win pays the moneyline profit, a loss or a
  // drawn moneyline loses the stake. Lets the lab report real net P/L and ROI, not just
  // calibration — the whole point of the app is finding profit (App Build Plan.md).
  let totalStaked = 0;
  let netProfit = 0;
  graded.forEach((pick) => {
    const { stake, actual } = pickReturn(pick);
    totalStaked += stake;
    if (actual != null) netProfit += actual;
  });

  return {
    total: picks.length,
    graded: graded.length,
    wins,
    draws,
    winRate: graded.length ? wins / graded.length : null,
    avgBrier: average(graded.map((pick) => brierScore(Number(pick.probability), pick.result))),
    avgClv: average(picks.map((pick) => clvPoints(pick.openPrice, pick.closePrice))),
    totalStaked,
    netProfit: graded.length ? netProfit : null,
    roi: totalStaked ? netProfit / totalStaked : null
  };
}

// Accepts "72" or "0.72" so you can type the probability however you read it off the
// algorithm; anything above 1 is treated as a percentage and divided down to 0-1.
function parseProbabilityInput(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return null;
  const prob = n > 1 ? n / 100 : n;
  if (prob === 1) return 0.999; // guard divide-by-zero in fair-line / Kelly math
  return prob > 0 && prob < 1 ? prob : null;
}

// Economics of one pick from its odds + buy-in: profit if it wins, the full stake lost on a
// loss or a drawn moneyline, null while pending.
function pickReturn(pick) {
  const stake = num(pick.stake, 0);
  const potential = moneylineProfit(pick.openPrice, stake);
  let actual = null;
  if (pick.result === "win") actual = potential;
  else if (pick.result === "loss" || pick.result === "draw") actual = -stake;
  return { stake, potential, actual };
}

function teamStrengthScore(team) {
  // Kept verbatim — Model Lab.md documents this exact strength formula and the Model Lab
  // tab renders it. v1.0 now also FEEDS it into match probability (the vault's standing
  // request: "Use team-strength inputs directly in probability calculation").
  return Number(team.xgFor || 0) - Number(team.xgAgainst || 0) + Number(team.homeEdge || 0) + (Number(team.form || 0) - 5) / 10;
}

// --- Small numeric helpers -------------------------------------------------
function clamp(value, lo, hi) {
  return Math.max(lo, Math.min(hi, value));
}

function num(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i += 1) result *= i;
  return result;
}

function poisson(k, lambda) {
  if (lambda <= 0) return k === 0 ? 1 : 0;
  return (Math.exp(-lambda) * Math.pow(lambda, k)) / factorial(k);
}

// Dixon-Coles low-score dependence correction (tau). Standard formulation; rho < 0 lifts
// the probability mass on 0-0, 1-0, 0-1, 1-1 so draws are not understated — important for
// three-way soccer markets where "draw is live" (June 30 2026 Match Slate.md).
function dixonColesTau(i, j, lambdaHome, lambdaAway, rho) {
  if (i === 0 && j === 0) return 1 - lambdaHome * lambdaAway * rho;
  if (i === 0 && j === 1) return 1 + lambdaHome * rho;
  if (i === 1 && j === 0) return 1 + lambdaAway * rho;
  if (i === 1 && j === 1) return 1 - rho;
  return 1;
}

// --- Live-input registry ----------------------------------------------------
// The pure scoring functions need team ratings + intel, but they are React state. We
// mirror them into module scope so existing call sites (valueRowsForEvents(events, sport),
// etc.) keep working unchanged while still seeing live edits. App calls this each render.
function normalizeTeamName(name) {
  return String(name || "").trim().toLowerCase();
}

function indexRatings(list) {
  const map = {};
  (list || []).forEach((team) => {
    if (team && team.team) map[normalizeTeamName(team.team)] = team;
  });
  return map;
}

function getRating(ratings, name) {
  const key = normalizeTeamName(name);
  // Manual/seed ratings win; auto-derived MLB standings ratings fill the gap so the MLB
  // model runs without anyone hand-typing 30 teams.
  return ratings?.[key] || mlbTeamRatingRegistry[key] || null;
}

function syncAlgorithmInputs(teamRatings, intelNotes, minProbability = DEFAULT_MIN_PROBABILITY) {
  ratingRegistry = indexRatings(teamRatings);
  intelRegistry = intelNotes || [];
  minProbabilityFilter = Number.isFinite(minProbability) ? minProbability : DEFAULT_MIN_PROBABILITY;
}

function getElo(name) {
  const value = eloRegistry[normalizeTeamName(name)];
  return Number.isFinite(value) ? value : DEFAULT_ELO;
}

function setEloRegistry(ratings) {
  eloRegistry = ratings || {};
}

function setAdaptiveModelWeight(weight) {
  adaptiveModelWeight = Number.isFinite(weight) ? weight : null;
}

// Adaptive blend weight: let the model earn (or lose) its say based on measured calibration.
// The blend was a fixed 55/45; now the model's share flexes between 25% and 60% by Brier
// score (lower Brier = better-calibrated model = trust it more). Live graded picks are the
// signal, shrunk toward the historical backtest Brier by sample size so it's stable early and
// responsive once a real track record exists. This is the "learn from whether it's been
// right" loop the app was missing.
function computeAdaptiveModelWeight(modelPicks, backtest) {
  const MIN = 0.25;
  const MAX = 0.6;
  const DEFAULT = algorithmWeights.researchPrior;
  // Brier 0.18 (well-calibrated) -> MAX weight; 0.28 (near coin-flip/worse) -> MIN weight.
  const brierToWeight = (brier) => clamp(MAX - (brier - 0.18) * ((MAX - MIN) / (0.28 - 0.18)), MIN, MAX);

  const graded = (modelPicks || []).filter(
    (pick) => (pick.result === "win" || pick.result === "loss" || pick.result === "draw") && Number.isFinite(Number(pick.probability))
  );
  const liveBrier = graded.length
    ? graded.reduce((sum, pick) => {
        const actual = pick.result === "win" ? 1 : 0;
        return sum + (Number(pick.probability) - actual) ** 2;
      }, 0) / graded.length
    : null;
  const backtestBrier = backtest?.summary?.avgBrier ?? null;

  if (liveBrier == null && backtestBrier == null) return DEFAULT;
  if (liveBrier == null) return brierToWeight(backtestBrier);
  // Shrink the live Brier toward the backtest prior with a pseudo-count of 10 graded picks,
  // so a handful of results can't wildly swing the weight but a real sample eventually rules.
  const n = graded.length;
  const shrunkBrier = backtestBrier != null ? (liveBrier * n + backtestBrier * 10) / (n + 10) : liveBrier;
  return brierToWeight(shrunkBrier);
}

function eloExpected(ratingA, ratingB) {
  return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
}

// Apply completed, not-yet-seen soccer results to an Elo state { ratings, applied }. Returns
// the SAME object reference when nothing changed, so callers can cheaply skip a re-render.
// Uses /scores match ids to dedupe, so a result is never counted twice across refreshes.
function applyEloForMatches(eloState, scores) {
  const ratings = { ...(eloState?.ratings || {}) };
  const applied = new Set(eloState?.applied || []);
  let changed = false;
  (scores || []).forEach((score) => {
    if (!score?.completed || applied.has(score.id) || !Array.isArray(score.scores)) return;
    const byTeam = {};
    score.scores.forEach((entry) => {
      byTeam[entry.name] = Number(entry.score);
    });
    const homeScore = byTeam[score.home_team];
    const awayScore = byTeam[score.away_team];
    if (!Number.isFinite(homeScore) || !Number.isFinite(awayScore)) return;
    const homeKey = normalizeTeamName(score.home_team);
    const awayKey = normalizeTeamName(score.away_team);
    const homeElo = Number.isFinite(ratings[homeKey]) ? ratings[homeKey] : DEFAULT_ELO;
    const awayElo = Number.isFinite(ratings[awayKey]) ? ratings[awayKey] : DEFAULT_ELO;
    const expectedHome = eloExpected(homeElo, awayElo);
    const actualHome = homeScore > awayScore ? 1 : homeScore < awayScore ? 0 : 0.5;
    ratings[homeKey] = homeElo + ELO_K * (actualHome - expectedHome);
    ratings[awayKey] = awayElo + ELO_K * ((1 - actualHome) - (1 - expectedHome));
    applied.add(score.id);
    changed = true;
  });
  return changed ? { ratings, applied: [...applied] } : eloState;
}

// --- Independent projection models -----------------------------------------
// Soccer: bivariate-Poisson goals model (Dixon-Coles). Lambdas come from the team's
// attacking xG and the opponent's defensive xG, with a venue boost (homeEdge) and a mild
// form tilt — all fields already tracked in Model Lab.md. This produces a genuine,
// independent home/draw/away distribution instead of recycling the market price.
function soccerModel(event, ratingHome, ratingAway, names) {
  const attHome = Math.max(num(ratingHome.xgFor), MIN_XG);
  const defHome = Math.max(num(ratingHome.xgAgainst), MIN_XG);
  const attAway = Math.max(num(ratingAway.xgFor), MIN_XG);
  const defAway = Math.max(num(ratingAway.xgAgainst), MIN_XG);

  // lambda = leagueAvg * (attack/avg) * (oppDefense/avg) -> attack * oppDefense / leagueAvg.
  const venueBoost = 1 + clamp(num(ratingHome.homeEdge), 0, 0.6); // Model Lab.md venue/home edge
  const formHome = 1 + (num(ratingHome.form, 5) - 6) / 40;        // gentle recent-form tilt
  const formAway = 1 + (num(ratingAway.form, 5) - 6) / 40;
  let lambdaHome = ((attHome * defAway) / LEAGUE_AVG_GOALS) * venueBoost * formHome;
  let lambdaAway = (attAway * defHome) / LEAGUE_AVG_GOALS * formAway;

  // Results-based Elo tilt. Elo starts NEUTRAL (all 1500) and only diverges as the app
  // observes real results via /scores, so this is a pure residual learner — zero effect on
  // today's outputs (tilt = 0 until results accrue), no double-counting of the xG inputs, and
  // no manual upkeep: the model self-corrects toward whichever teams actually win. Capped so
  // it nudges rather than overrides the goals model.
  const eloTilt = clamp((getElo(event.home_team) - getElo(event.away_team)) / ELO_GOAL_TILT_SCALE, -MAX_ELO_TILT, MAX_ELO_TILT);
  lambdaHome *= 1 + eloTilt;
  lambdaAway *= 1 - eloTilt;

  let pHome = 0;
  let pDraw = 0;
  let pAway = 0;
  for (let i = 0; i <= MAX_GOALS; i += 1) {
    for (let j = 0; j <= MAX_GOALS; j += 1) {
      const cell = dixonColesTau(i, j, lambdaHome, lambdaAway, DIXON_COLES_RHO) * poisson(i, lambdaHome) * poisson(j, lambdaAway);
      if (i > j) pHome += cell;
      else if (i === j) pDraw += cell;
      else pAway += cell;
    }
  }
  const total = pHome + pDraw + pAway || 1;
  pHome /= total;
  pDraw /= total;
  pAway /= total;

  const home = event.home_team;
  const away = event.away_team;
  if (names.includes("Draw")) return { [home]: pHome, Draw: pDraw, [away]: pAway };
  // Two-way fallback (rare for soccer): drop the draw and renormalize.
  const twoWay = pHome + pAway || 1;
  return { [home]: pHome / twoWay, [away]: pAway / twoWay };
}

// --- MLB starter data (Baseball Savant + MLB Stats API) ---------------------
// MLB Research Important Info.md pointed at Baseball Savant's probable-pitchers and
// gamefeed pages, calling out "xStats" specifically. Neither Savant page ships a documented
// public JSON API for browser use, but two things it's actually built on ARE reachable
// without a key:
//   1. statsapi.mlb.com — MLB's own official schedule API. hydrate=probablePitcher returns
//      the CONFIRMED starter for every game, which is exactly the MLB pre-bet gate
//      "Probable pitcher confirmed and not scratched" (Injury and Lineup Intel.md).
//   2. baseballsavant.mlb.com's expected-statistics leaderboard, which supports a plain
//      &csv=true export — this is the "xStats" (xera/xwoba/etc.) the note asked for.
// Both are best-effort: if the browser can't reach them (network hiccup, or Savant not
// allowing cross-origin fetches — see README for the same caveat already noted for the Odds
// API key), the MLB model just skips the starter adjustment and falls back to today's
// team-strength-only read. Nothing breaks either way.

// Local (browser-timezone) calendar date, "YYYY-MM-DD" — matches how the schedule API keys
// games by date and how the rest of the app already reasons about "tonight" (tonightRows()
// uses the same local-time assumption via toDateString()).
function localDateKey(isoString) {
  return new Date(isoString).toLocaleDateString("en-CA");
}

// Strips accents so "José Soriano" (MLB Stats API) matches "Jose Soriano" (Savant CSV) —
// both sources spell some names differently and a normalized string is the cheapest fix.
function normalizePersonName(name) {
  return String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function starterKey(dateStr, teamName) {
  return `${dateStr}::${normalizeTeamName(teamName)}`;
}

function getStarterInfo(event, starters = mlbStarterRegistry) {
  const dateStr = localDateKey(event.commence_time);
  return {
    home: starters[starterKey(dateStr, event.home_team)] || null,
    away: starters[starterKey(dateStr, event.away_team)] || null
  };
}

// Surfaces confirmed starters (and xERA when Savant matched) in the Value/Algorithm tooltip —
// this alone automates the Intel checklist's "Probable pitcher confirmed" gate even when
// Savant's xStats fetch fails, since MLB Stats API confirmation is the more reliable source.
function mlbStarterNoteText(event) {
  const { home, away } = getStarterInfo(event);
  if (!home && !away) return "Two-way logistic from team-strength inputs. No live starter match for this game yet.";
  const describe = (starter) => (starter ? `${starter.pitcher}${starter.xera != null ? ` (xERA ${starter.xera.toFixed(2)})` : " (xERA unavailable)"}` : "unconfirmed");
  return `Two-way logistic from team-strength inputs + live starters: ${describe(home)} vs ${describe(away)}.`;
}

function setMlbStarterQuality(registry) {
  mlbStarterRegistry = registry || {};
}

// Minimal CSV line parser that respects quoted fields — needed because Savant's name column
// is `"Last, First"`, which itself contains the delimiter inside quotes.
function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') inQuotes = !inQuotes;
    else if (char === "," && !inQuotes) {
      cells.push(current);
      current = "";
    } else current += char;
  }
  cells.push(current);
  return cells;
}

function csvNameToFullName(cell) {
  const parts = cell.split(",").map((part) => part.trim());
  return parts.length === 2 ? `${parts[1]} ${parts[0]}` : cell.trim();
}

// Parses Baseball Savant's expected-statistics CSV export into { normalizedFullName: xera }.
function parsePitcherExpectedStatsCsv(text) {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return {};
  const headers = parseCsvLine(lines[0]).map((h) => h.replace(/"/g, "").trim());
  const nameIdx = headers.findIndex((h) => h.includes("last_name"));
  const xeraIdx = headers.indexOf("xera");
  if (nameIdx === -1 || xeraIdx === -1) return {};

  const byName = {};
  for (let i = 1; i < lines.length; i += 1) {
    if (!lines[i].trim()) continue;
    const cells = parseCsvLine(lines[i]).map((c) => c.replace(/"/g, "").trim());
    const fullName = csvNameToFullName(cells[nameIdx] || "");
    const xera = Number(cells[xeraIdx]);
    if (fullName && Number.isFinite(xera)) byName[normalizePersonName(fullName)] = xera;
  }
  return byName;
}

// Official MLB schedule API — no key required. Returns { normalizedTeamName: pitcherFullName }
// for every confirmed probable starter on the given calendar date.
async function fetchMlbProbableStarters(dateStr) {
  try {
    const params = new URLSearchParams({ sportId: "1", date: dateStr, hydrate: "probablePitcher,team" });
    const response = await fetch(`https://statsapi.mlb.com/api/v1/schedule?${params}`);
    if (!response.ok) return {};
    const data = await response.json();
    const games = (data.dates || []).flatMap((day) => day.games || []);
    const byTeam = {};
    games.forEach((game) => {
      ["home", "away"].forEach((side) => {
        const team = game.teams?.[side];
        if (team?.team?.name && team?.probablePitcher?.fullName) {
          byTeam[normalizeTeamName(team.team.name)] = team.probablePitcher.fullName;
        }
      });
    });
    return byTeam;
  } catch {
    return {};
  }
}

// Baseball Savant public Statcast CSV export — no key required, but also no documented CORS
// policy for browser fetches. Best-effort: on any failure this just returns {} and the MLB
// model silently skips the xERA term (see mlbModel below).
async function fetchPitcherExpectedStats(year) {
  try {
    const params = new URLSearchParams({ type: "pitcher", year: String(year), position: "", team: "", min: "1", csv: "true" });
    const response = await fetch(`https://baseballsavant.mlb.com/leaderboard/expected_statistics?${params}`);
    if (!response.ok) return {};
    return parsePitcherExpectedStatsCsv(await response.text());
  } catch {
    return {};
  }
}

// Orchestrator: pulls confirmed starters for every distinct game date in the current MLB
// board, then a single Statcast xERA leaderboard fetch, and merges them into the registry
// shape mlbModel()/getStarterInfo() expect. Returns { registry, live } so the caller can show
// whether live starter data actually loaded or the fetch silently failed (CORS/network).
async function fetchMlbStarterQuality(events) {
  if (!events.length) return { registry: {}, live: false };
  const dates = [...new Set(events.map((event) => localDateKey(event.commence_time)))];
  const year = new Date().getFullYear();

  const [probablesByDate, statsByName] = await Promise.all([
    Promise.all(dates.map(async (date) => [date, await fetchMlbProbableStarters(date)])),
    fetchPitcherExpectedStats(year)
  ]);

  const registry = {};
  let foundAny = false;
  probablesByDate.forEach(([date, byTeam]) => {
    Object.entries(byTeam).forEach(([teamKey, pitcherName]) => {
      foundAny = true;
      const xera = statsByName[normalizePersonName(pitcherName)];
      registry[`${date}::${teamKey}`] = { pitcher: pitcherName, xera: Number.isFinite(xera) ? xera : null };
    });
  });
  return { registry, live: foundAny };
}

// Auto-derive MLB team strength from the official standings — no manual entry, no key. Run
// differential per game is the classic team-quality proxy (Pythagorean expectation), and a
// small win% term steadies the tail. Mapped onto the same {xgFor,xgAgainst,form} fields the
// generic teamStrengthScore()/mlbModel() already consume, so the starter-xERA adjustment we
// built earlier now finally has a team baseline to sit on top of. Returns a registry keyed by
// normalized team name plus a `live` flag.
function setMlbTeamRatings(registry) {
  mlbTeamRatingRegistry = registry || {};
}

function setMlbLastResults(registry) {
  mlbLastResultRegistry = registry || {};
}

function afterLossWinPctFor(teamName) {
  const key = normalizeTeamName(teamName);
  if (AFTERLOSS_WINPCT[key] != null) return AFTERLOSS_WINPCT[key];
  const fuzzy = Object.entries(AFTERLOSS_WINPCT).find(([trendKey]) => key.includes(trendKey) || trendKey.includes(key));
  return fuzzy ? fuzzy[1] : null;
}

function afterLossLogitFor(teamName) {
  if (mlbLastResultRegistry[normalizeTeamName(teamName)] !== "loss") return 0;
  const winPct = afterLossWinPctFor(teamName);
  if (winPct == null) return 0;
  return clamp((winPct - AFTERLOSS_LEAGUE_AVG) * AFTERLOSS_LOGIT_SCALE, -0.08, 0.08);
}

function afterLossNoteText(event) {
  const notes = [
    [event.home_team, afterLossLogitFor(event.home_team)],
    [event.away_team, afterLossLogitFor(event.away_team)]
  ]
    .filter(([, delta]) => delta !== 0)
    .map(([team, delta]) => `${team} ${delta > 0 ? "+" : ""}${delta.toFixed(3)} logit`);
  return notes.length ? ` After-loss trend prior: ${notes.join(", ")}.` : "";
}

async function fetchMlbTeamRatings() {
  try {
    const season = new Date().getFullYear();
    const params = new URLSearchParams({ leagueId: "103,104", season: String(season), standingsTypes: "regularSeason" });
    const response = await fetch(`https://statsapi.mlb.com/api/v1/standings?${params}`);
    if (!response.ok) return { registry: {}, live: false };
    const data = await response.json();
    const teamRecords = (data.records || []).flatMap((division) => division.teamRecords || []);
    const registry = {};
    teamRecords.forEach((record) => {
      const name = record.team?.name;
      if (!name) return;
      const games = num(record.wins) + num(record.losses);
      if (games <= 0) return;
      const runsFor = num(record.runsScored) / games;      // runs per game -> "attack"
      const runsAgainst = num(record.runsAllowed) / games; // runs allowed per game -> "defense"
      const winPct = num(record.winningPercentage, 0.5);
      registry[normalizeTeamName(name)] = {
        team: name,
        xgFor: runsFor,
        xgAgainst: runsAgainst,
        form: clamp(winPct * 10, 1, 10), // 0.540 win% -> 5.4 form, feeds (form-5)/10 in strength
        homeEdge: 0,                     // MLB home edge is a constant added inside mlbModel()
        news: `Auto: ${record.wins}-${record.losses}, ${runsFor.toFixed(2)} RS/G, ${runsAgainst.toFixed(2)} RA/G (run diff ${num(record.runDifferential) >= 0 ? "+" : ""}${num(record.runDifferential)}).`,
        auto: true
      };
    });
    return { registry, live: Object.keys(registry).length > 0 };
  } catch {
    return { registry: {}, live: false };
  }
}

// MLB: two-way logistic from the strength differential. MLB has no draw and is far more
// pitcher-sensitive (MLB Research.md), so starter/bullpen/park/weather feed in through the
// editable team-strength rating and the intel haircut rather than a goals model. v1.1 adds a
// live starter-xERA adjustment on top of the manual team rating (see "MLB starter data"
// section above and MLB Research Important Info.md — Baseball Savant xStats).
function mlbModel(event, ratingHome, ratingAway, starters = mlbStarterRegistry) {
  // Everything is summed in LOGIT units, then squashed once. Calibrated to MLB's compressed
  // win-probability range: even an elite team hosting the worst team is only ~70-73% (a ~-260
  // moneyline), because run-differential edges wash out heavily over a single 9-inning game.
  // teamStrengthScore() here is run-diff-per-game-based (see fetchMlbTeamRatings), which spans
  // roughly ±2, so STRENGTH_K is deliberately small — a soccer-sized K would produce absurd
  // -1900 favorites.
  let logit = MLB_STRENGTH_K * (teamStrengthScore(ratingHome) - teamStrengthScore(ratingAway));
  logit += MLB_HOME_LOGIT + num(ratingHome.homeEdge); // ~54% home baseline + any manual edge

  const { home: homeStarter, away: awayStarter } = getStarterInfo(event, starters);
  if (homeStarter?.xera != null && awayStarter?.xera != null) {
    // Lower xERA = better pitcher. A home-starter xERA edge over the road starter raises home
    // win probability. Pitching is the single biggest game-level lever in baseball, so the
    // per-run coefficient is larger than the team term — but capped so one matchup can't alone
    // manufacture a silly price.
    logit += clamp((awayStarter.xera - homeStarter.xera) * XERA_LOGIT_PER_RUN, -MAX_XERA_LOGIT, MAX_XERA_LOGIT);
  }

  // TeamRankings after-loss trend prior: only active when /scores shows the team lost its
  // most recent completed game. It nudges the home-team logit by the home trend and subtracts
  // the away trend, capped tightly because the historical odds study showed MLB markets are
  // already well calibrated overall.
  logit += afterLossLogitFor(event.home_team) - afterLossLogitFor(event.away_team);

  const pHome = clamp(1 / (1 + Math.exp(-logit)), 0.05, 0.95);
  return { [event.home_team]: pHome, [event.away_team]: 1 - pHome };
}

function normalizeOutcomeMap(outcomes, names) {
  const clean = {};
  let total = 0;
  names.forEach((name) => {
    const value = Number(outcomes?.[name]);
    clean[name] = Number.isFinite(value) && value > 0 ? value : 0;
    total += clean[name];
  });
  if (total <= 0) return outcomes;
  const normalized = {};
  names.forEach((name) => {
    normalized[name] = clean[name] / total;
  });
  return normalized;
}

function redistributeDrawHaircut(outcomes, names, nextDraw) {
  const currentDraw = outcomes.Draw;
  const removed = currentDraw - nextDraw;
  if (removed <= 0) return outcomes;
  const sideNames = names.filter((name) => name !== "Draw");
  const sideTotal = sideNames.reduce((sum, name) => sum + (outcomes[name] || 0), 0) || 1;
  const next = { ...outcomes, Draw: nextDraw };
  sideNames.forEach((name) => {
    next[name] = (next[name] || 0) + removed * ((outcomes[name] || 0) / sideTotal);
  });
  return normalizeOutcomeMap(next, names);
}

function topOutcomeProbability(outcomes, names) {
  return names.reduce((best, name) => Math.max(best, outcomes?.[name] ?? 0), 0);
}

// Backtest calibration: the projection model still does the heavy lifting, but the lessons
// learned from the imported datasets now act as guardrails before the market blend.
function calibrateModelOutcomes({ sport, names, modelOutcomes, market }) {
  if (!modelOutcomes) return { outcomes: modelOutcomes, notes: [], weightMultiplier: 1, confidenceDelta: 0 };
  let next = normalizeOutcomeMap(modelOutcomes, names);
  const notes = [];
  let weightMultiplier = 1;
  let confidenceDelta = 0;

  if (sport === "Soccer" && names.includes("Draw")) {
    const beforeDraw = next.Draw ?? 0;
    const marketDraw = market?.Draw;
    if (marketDraw != null) {
      next = normalizeOutcomeMap({
        ...next,
        Draw: beforeDraw * (1 - SOCCER_DRAW_ANCHOR_WEIGHT) + marketDraw * SOCCER_DRAW_ANCHOR_WEIGHT
      }, names);
    }

    if ((next.Draw ?? 0) > SOCCER_DRAW_SOFT_CAP) {
      next = redistributeDrawHaircut(next, names, SOCCER_DRAW_SOFT_CAP + ((next.Draw ?? 0) - SOCCER_DRAW_SOFT_CAP) * 0.35);
      notes.push("World Cup backtest draw cap applied.");
    }

    const sideNames = names.filter((name) => name !== "Draw");
    const bestSide = sideNames.reduce((best, name) => Math.max(best, next[name] ?? 0), 0);
    if ((next.Draw ?? 0) > bestSide && (next.Draw ?? 0) - bestSide < 0.08) {
      next = redistributeDrawHaircut(next, names, Math.max(0.22, bestSide - 0.02));
      notes.push("Draw needs a cleaner edge after historical over-prediction.");
    }

    if (topOutcomeProbability(next, names) < 0.6) {
      weightMultiplier *= 0.82;
      confidenceDelta -= 0.04;
      notes.push("Lower-confidence soccer band discounted by backtest.");
    }
  }

  if (sport === "MLB") {
    const home = names[0];
    const away = names[1];
    const rawHome = next[home] ?? 0.5;
    const compressedHome = clamp(0.5 + (rawHome - 0.5) * MLB_BACKTEST_COMPRESSION, 1 - MLB_BACKTEST_CAP, MLB_BACKTEST_CAP);
    next = normalizeOutcomeMap({ [home]: compressedHome, [away]: 1 - compressedHome }, names);
    notes.push("MLB backtest compression applied.");

    const top = topOutcomeProbability(next, names);
    if (top > 0.68) {
      weightMultiplier *= 0.78;
      confidenceDelta -= 0.07;
      notes.push("High-confidence MLB pick discounted by postseason backtest.");
    }
    if ((next[away] ?? 0) > (next[home] ?? 0)) {
      weightMultiplier *= 0.9;
      confidenceDelta -= 0.03;
      notes.push("Away-favorite MLB read discounted.");
    }
  }

  return { outcomes: next, notes, weightMultiplier, confidenceDelta };
}

// --- Market consensus -------------------------------------------------------
// Probability and Value Math.md: no-vig probability = raw / sum(raw). v0.1 took the
// no-vig of best-of-book prices, which can manufacture phantom edges from one stale,
// generous book. v1.0 de-vigs EACH book, then averages — a sharper, more robust market
// estimate (External Source Research: "compare to a sharper source").
function consensusMarketProbabilities(event) {
  const names = eventOutcomeNames(event);
  const perBook = (event.bookmakers || [])
    .map((book) => {
      const outcomes = names.map((name) => getOutcome(book, name));
      if (outcomes.some((outcome) => !outcome)) return null;
      return normalizeNoVig(outcomes);
    })
    .filter(Boolean);

  const result = {};
  names.forEach((name, index) => {
    const values = perBook.map((probs) => probs[index]).filter((value) => value != null);
    result[name] = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
  });
  return result;
}

// --- Intel + staleness ------------------------------------------------------
// Injury and Lineup Intel.md + App Build Plan.md: "Promote Intel notes into the algorithm
// so high-impact injuries and lineup changes adjust projected probability." We match notes
// to a matchup and treat any pending High-impact note as a confidence/score haircut.
function intelForEvent(event, intel, sport) {
  const home = normalizeTeamName(event.home_team);
  const away = normalizeTeamName(event.away_team);
  const matchStr = `${event.home_team} vs ${event.away_team}`.toLowerCase();
  return (intel || []).filter((note) => {
    if (note.sport && sport && note.sport.toLowerCase() !== sport.toLowerCase()) return false;
    const hay = `${note.match || ""}`.toLowerCase();
    if (!hay) return false;
    return (
      (home && hay.includes(home)) ||
      (away && hay.includes(away)) ||
      matchStr.includes(hay) ||
      hay.includes("slate") ||
      hay.includes("board")
    );
  });
}

function noteTargetsTeam(note, teamName) {
  const hay = `${note.match || ""} ${note.note || ""}`.toLowerCase();
  return hay.includes(normalizeTeamName(teamName));
}

function intelDirection(note) {
  const text = `${note.category || ""} ${note.note || ""}`.toLowerCase();
  const positive = ["active", "available", "cleared", "fit", "probable", "returns", "starting", "starts", "upgraded"];
  const negative = ["bench", "doubtful", "downgrade", "fatigue", "hurt", "illness", "injury", "limited", "out", "scratch", "scratched", "sitting", "suspended", "wind"];
  if (positive.some((word) => text.includes(word)) && !negative.some((word) => text.includes(word))) return 1;
  return -1;
}

function intelMagnitude(note, sport) {
  const category = INTEL_CATEGORY_STRENGTH[sport]?.[note.category] ?? 0.1;
  const impact = INTEL_IMPACT_MULTIPLIER[note.impact] ?? 0.7;
  const status = INTEL_STATUS_MULTIPLIER[note.status] ?? 0.65;
  return category * impact * status;
}

function applyIntelToRating(team, delta, sport) {
  if (!team || !delta) return team;
  const next = { ...team };
  const signed = delta.direction * delta.magnitude;
  if (sport === "MLB") {
    next.form = clamp(num(next.form, 5) + signed * 2.2, 1, 10).toFixed(2);
    next.news = `${next.news || ""} Intel ${signed >= 0 ? "+" : ""}${signed.toFixed(2)} strength: ${delta.summary}`.trim();
    return next;
  }

  next.xgFor = Math.max(MIN_XG, num(next.xgFor, 1.2) + signed * 0.32).toFixed(2);
  next.xgAgainst = Math.max(MIN_XG, num(next.xgAgainst, 1.2) - signed * 0.22).toFixed(2);
  next.form = clamp(num(next.form, 5) + signed * 1.6, 1, 10).toFixed(2);
  next.news = `${next.news || ""} Intel ${signed >= 0 ? "+" : ""}${signed.toFixed(2)} strength: ${delta.summary}`.trim();
  return next;
}

function ratingIntelAdjustments(event, matchedIntel, sport) {
  const homeDeltas = [];
  const awayDeltas = [];
  for (const note of matchedIntel) {
    if (note.status === "Cleared") continue;
    const magnitude = intelMagnitude(note, sport);
    if (!magnitude) continue;
    const direction = intelDirection(note);
    const summary = `${note.category || "Intel"} ${note.impact || "Medium"} ${note.status || "Watch"}`;
    const delta = { direction, magnitude, summary };
    if (noteTargetsTeam(note, event.home_team)) homeDeltas.push(delta);
    if (noteTargetsTeam(note, event.away_team)) awayDeltas.push(delta);
  }

  const summarize = (list) => {
    const net = list.reduce((sum, delta) => sum + delta.direction * delta.magnitude, 0);
    return {
      net,
      details: list.map((delta) => `${delta.summary} (${delta.direction > 0 ? "+" : "-"}${delta.magnitude.toFixed(2)})`)
    };
  };

  return {
    home: summarize(homeDeltas),
    away: summarize(awayDeltas)
  };
}

// Bankroll and Risk Rules.md ("the match already started", "the line moved and the app
// has stale data") + App Build Plan.md ("Add stale-line warnings by timestamp").
function eventStaleness(event, freshestUpdateTs) {
  const now = Date.now();
  const start = new Date(event.commence_time).getTime();
  if (Number.isFinite(start) && start <= now) {
    return { stale: true, reason: "Match has started — re-check live state before betting." };
  }
  if (freshestUpdateTs && now - freshestUpdateTs > STALE_MINUTES * 60000) {
    return { stale: true, reason: `Best line is over ${STALE_MINUTES} min old — may be stale.` };
  }
  return { stale: false, reason: "" };
}

// --- The core engine: one model per event ----------------------------------
// Builds the full event picture once: market consensus, independent model, intel haircut,
// staleness, then the blended probability per outcome. Returns everything the row builders
// need so the heavy work (Poisson grid, de-vig) is done a single time per event.
function computeEventModel(event, sport, ratings = ratingRegistry, intel = intelRegistry) {
  const names = eventOutcomeNames(event);
  const market = consensusMarketProbabilities(event);
  let ratingHome = getRating(ratings, event.home_team);
  let ratingAway = getRating(ratings, event.away_team);

  const matchedIntel = intelForEvent(event, intel, sport);
  const intelFlag = matchedIntel.some((note) => note.impact === "High" && note.status !== "Cleared");
  const intelAdjustment = ratingIntelAdjustments(event, matchedIntel, sport);
  if (ratingHome && intelAdjustment.home.details.length) {
    ratingHome = applyIntelToRating(ratingHome, {
      direction: intelAdjustment.home.net >= 0 ? 1 : -1,
      magnitude: Math.abs(intelAdjustment.home.net),
      summary: intelAdjustment.home.details.join("; ")
    }, sport);
  }
  if (ratingAway && intelAdjustment.away.details.length) {
    ratingAway = applyIntelToRating(ratingAway, {
      direction: intelAdjustment.away.net >= 0 ? 1 : -1,
      magnitude: Math.abs(intelAdjustment.away.net),
      summary: intelAdjustment.away.details.join("; ")
    }, sport);
  }

  const freshest = (event.bookmakers || []).reduce((acc, book) => {
    const ts = book.last_update ? new Date(book.last_update).getTime() : null;
    return ts && (acc == null || ts > acc) ? ts : acc;
  }, null);
  const { stale, reason } = eventStaleness(event, freshest);

  // Precedence: a manually entered trusted prior (matchResearchModels — the v0.1 blend hook,
  // kept intact) beats the auto model; otherwise use the strength model when both teams are
  // rated; otherwise fall back to market-only (graceful, == old behavior for unmapped teams).
  const research = getMatchResearch(event);
  let modelOutcomes = null;
  let baseWeight = 0;
  let source;
  let notes;
  let calibration = { notes: [], weightMultiplier: 1, confidenceDelta: 0 };
  if (research?.outcomes) {
    modelOutcomes = research.outcomes;
    baseWeight = Math.min(research.confidence ?? 0.5, 0.7);
    source = research.source;
    notes = research.notes || "Manual trusted prior.";
  } else if (ratingHome && ratingAway) {
    modelOutcomes = sport === "MLB" ? mlbModel(event, ratingHome, ratingAway) : soccerModel(event, ratingHome, ratingAway, names);
    // Adaptive: the model's share of the blend flexes with its measured calibration, falling
    // back to the static default until a track record exists (computeAdaptiveModelWeight).
    baseWeight = adaptiveModelWeight ?? algorithmWeights.researchPrior;
    source = `${Math.round(baseWeight * 100)}% strength model + ${Math.round((1 - baseWeight) * 100)}% market no-vig`;
    notes = sport === "MLB" ? `${mlbStarterNoteText(event)}${afterLossNoteText(event)}` : "Bivariate-Poisson (Dixon-Coles) goals model from xG inputs.";
    if (intelAdjustment.home.details.length || intelAdjustment.away.details.length) {
      const homeNote = intelAdjustment.home.details.length ? `${event.home_team} ${intelAdjustment.home.net >= 0 ? "+" : ""}${intelAdjustment.home.net.toFixed(2)}` : null;
      const awayNote = intelAdjustment.away.details.length ? `${event.away_team} ${intelAdjustment.away.net >= 0 ? "+" : ""}${intelAdjustment.away.net.toFixed(2)}` : null;
      notes += ` Intel adjusted rating: ${[homeNote, awayNote].filter(Boolean).join(", ")}.`;
    }
  } else {
    source = "Odds API no-vig only";
    notes = "No team rating mapped for this matchup yet — market price used directly.";
  }

  if (modelOutcomes) {
    calibration = calibrateModelOutcomes({ sport, names, modelOutcomes, market });
    modelOutcomes = calibration.outcomes;
    baseWeight *= calibration.weightMultiplier;
    if (calibration.notes.length) notes += ` Backtest calibration: ${calibration.notes.join(" ")}`;
  }

  // Confidence + live weight. Intel/staleness pull the model toward the market and lower the
  // confidence the UI shows, so an uncertain spot cannot masquerade as a strong edge.
  let weight = baseWeight;
  let confidence = modelOutcomes ? 0.62 + calibration.confidenceDelta : 0.5;
  if (intelFlag) {
    weight *= 0.6;
    confidence -= 0.07;
    notes += " High-impact intel pending — model trust reduced.";
  }
  if (stale) {
    weight *= 0.5;
    confidence -= 0.1;
  }
  confidence = clamp(confidence, 0.3, 0.85);

  const outcomes = {};
  const modelOnly = {};
  names.forEach((name) => {
    const mkt = market[name] ?? null;
    const mod = modelOutcomes ? modelOutcomes[name] ?? null : null;
    if (mod != null && mkt != null) outcomes[name] = weight * mod + (1 - weight) * mkt;
    else outcomes[name] = mkt != null ? mkt : mod;
    modelOnly[name] = mod;
  });

  return {
    sport,
    outcomes,                 // blended probability per outcome (the "Algorithm" chance)
    modelOnly,                // independent model only (the "Research" column)
    marketProbabilities: market, // consensus no-vig (the "Market no-vig" column)
    weight,
    confidence,
    source,
    notes,
    stale,
    staleReason: reason,
    intelFlag,
    intelAdjustment
  };
}

// Fractional-Kelly stake, capped at the vault's 1% ceiling. Bankroll and Risk Rules.md
// gives only labels/caps (no formula), so Kelly is inferred best practice; quarter-Kelly
// keeps variance low and respects "Even positive expected value bets lose often."
function kellyStake(price, probability) {
  if (price == null || probability == null) return { fraction: 0, pct: 0 };
  const value = Number(price);
  const decimal = value > 0 ? 1 + value / 100 : 1 + 100 / Math.abs(value);
  const b = decimal - 1;
  if (b <= 0) return { fraction: 0, pct: 0 };
  const p = probability;
  const q = 1 - probability;
  const full = (b * p - q) / b; // classic Kelly fraction
  if (full <= 0) return { fraction: 0, pct: 0 };
  const fraction = Math.min(full * KELLY_FRACTION, MAX_STAKE_FRACTION);
  return { fraction, pct: fraction * 100 };
}

function normalizeNoVig(outcomes) {
  const probabilities = outcomes.map((outcome) => moneylineToProbability(outcome?.price));
  const total = probabilities.reduce((sum, value) => sum + (value || 0), 0);
  if (!total) return outcomes.map(() => null);
  return probabilities.map((value) => (value ? value / total : null));
}

function formatCurrency(value) {
  if (value == null || Number.isNaN(Number(value))) return "—";
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}$${Math.abs(value).toFixed(2)}`;
}

function formatProbability(value) {
  return value == null ? "—" : `${(value * 100).toFixed(1)}%`;
}

function formatMoneyline(price) {
  if (price == null || price === "") return "—";
  const value = Number(price);
  if (Number.isNaN(value)) return String(price);
  return value > 0 ? `+${value}` : `${value}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(value));
}

function formatIntelAdjustment(adjustment) {
  if (!adjustment) return "";
  const parts = [];
  if (adjustment.home?.details?.length) parts.push(`Home ${adjustment.home.net >= 0 ? "+" : ""}${adjustment.home.net.toFixed(2)}`);
  if (adjustment.away?.details?.length) parts.push(`Away ${adjustment.away.net >= 0 ? "+" : ""}${adjustment.away.net.toFixed(2)}`);
  return parts.join(" · ");
}

function readStorage(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

// Durable persistence: read the whole model-training bundle from the vault-backed endpoint.
// Returns null if unreachable (production static build, or endpoint error) so the caller can
// fall back to localStorage. A production build's SPA rewrite returns HTML, which fails the
// JSON parse and lands in the catch — treated the same as "no durable store available".
async function loadVaultState(endpoint = STATE_ENDPOINT) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) return null;
    const data = await response.json();
    return data && typeof data === "object" ? data : null;
  } catch {
    return null;
  }
}

async function saveVaultState(bundle, endpoint = STATE_ENDPOINT) {
  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bundle)
    });
  } catch {
    // Best-effort — localStorage already holds a copy; a failed vault write isn't fatal.
  }
}

function emptyStats() {
  return {
    version: STATE_VERSION,
    updatedAt: null,
    latest: { mlbTeamRatings: {}, mlbStarters: {}, mlbLastResults: {}, kalshi: null, fetchedAt: {} },
    history: []
  };
}

// Merge a refresh's freshly-fetched stats into persisted stats. Fields that came back empty (a
// failed/blocked fetch) are IGNORED so last-known values survive — this is what keeps the model
// running on cached stats instead of going dark. Starters accumulate by date::team; team
// ratings + Kalshi also append a dated snapshot to the capped history time series.
function mergeStats(prev, fresh, nowIso, dateKey) {
  const base = prev && prev.latest ? prev : emptyStats();
  const latest = {
    mlbTeamRatings: { ...base.latest.mlbTeamRatings },
    mlbStarters: { ...base.latest.mlbStarters },
    mlbLastResults: { ...(base.latest.mlbLastResults || {}) },
    kalshi: base.latest.kalshi,
    fetchedAt: { ...base.latest.fetchedAt }
  };

  if (fresh.mlbTeamRatings && Object.keys(fresh.mlbTeamRatings).length) {
    latest.mlbTeamRatings = fresh.mlbTeamRatings; // season snapshot -> replace wholesale
    latest.fetchedAt.mlbTeamRatings = nowIso;
  }
  if (fresh.mlbStarters && Object.keys(fresh.mlbStarters).length) {
    latest.mlbStarters = { ...latest.mlbStarters, ...fresh.mlbStarters }; // accumulate by date::team
    latest.fetchedAt.mlbStarters = nowIso;
  }
  if (fresh.kalshi && Object.keys(fresh.kalshi).length) {
    latest.kalshi = fresh.kalshi;
    latest.fetchedAt.kalshi = nowIso;
  }
  if (fresh.mlbLastResults && Object.keys(fresh.mlbLastResults).length) {
    latest.mlbLastResults = fresh.mlbLastResults; // short rolling result snapshot -> replace
    latest.fetchedAt.mlbLastResults = nowIso;
  }

  let history = base.history || [];
  if (dateKey) {
    const snapshot = { date: dateKey, mlbTeamRatings: latest.mlbTeamRatings, kalshi: latest.kalshi };
    history = [...history.filter((entry) => entry.date !== dateKey), snapshot].slice(-STATS_HISTORY_CAP);
  }
  return { version: STATE_VERSION, updatedAt: nowIso, latest, history };
}

function getMarket(bookmaker, marketKey = "h2h") {
  return bookmaker.markets?.find((market) => market.key === marketKey);
}

function getOutcome(bookmaker, name, marketKey = "h2h") {
  return getMarket(bookmaker, marketKey)?.outcomes?.find((outcome) => outcome.name === name);
}

function bestLine(event, outcomeName, activeBook) {
  return event.bookmakers
    .filter((book) => activeBook === "all" || book.key === activeBook)
    .map((book) => ({ book, outcome: getOutcome(book, outcomeName) }))
    .filter((entry) => entry.outcome)
    .sort((a, b) => b.outcome.price - a.outcome.price)[0];
}

function eventOutcomeNames(event) {
  const hasDraw = event.bookmakers?.some((book) => getOutcome(book, "Draw"));
  return hasDraw ? [event.home_team, "Draw", event.away_team] : [event.home_team, event.away_team];
}

function eventBestOutcomes(event, activeBook) {
  return eventOutcomeNames(event).map((name) => ({
    name,
    ...bestLine(event, name, activeBook)
  }));
}

function matchKeyForEvent(event) {
  return `${event.home_team} vs ${event.away_team}`;
}

function getMatchResearch(event) {
  const direct = matchKeyForEvent(event);
  const reverse = `${event.away_team} vs ${event.home_team}`;
  return matchResearchModels[direct] || matchResearchModels[reverse] || null;
}

// Compatibility shim. v0.1 blended per outcome; v1.0 blends per EVENT (computeEventModel)
// so the Poisson distribution is internally consistent. Kept so any external caller of
// blendedProbability still resolves; the row builders below use computeEventModel directly.
function blendedProbability(event, outcomeName, marketProbability) {
  const sport = eventOutcomeNames(event).includes("Draw") ? "Soccer" : "MLB";
  const model = computeEventModel(event, sport);
  const probability = model.outcomes[outcomeName] ?? marketProbability;
  return {
    probability,
    prior: model.modelOnly[outcomeName] ?? null,
    source: model.source,
    confidence: model.confidence,
    notes: model.notes
  };
}

function isPreferredBook(book = "") {
  return String(book).toLowerCase().includes(PREFERRED_BOOK);
}

function valueRowForOutcome({ event, sport, outcomeName, book, outcome, marketProbability, modelProbability = marketProbability, source = "Odds API no-vig only" }) {
  const price = outcome?.price ?? null;
  const breakEven = moneylineToProbability(price);
  const profit = moneylineProfit(price);
  const ev = expectedValue(price, modelProbability);
  const preferredBook = isPreferredBook(`${book?.title || ""} ${book?.key || ""}`);
  return {
    id: `${event.id}-${book?.key || "best"}-${outcomeName}`,
    sport,
    eventId: event.id,          // links a tracked pick back to live odds + /scores results
    selectionName: outcomeName, // exact outcome name to match against the final score
    match: `${event.home_team} vs ${event.away_team}`,
    selection: outcomeName,
    book: book?.title || "No book",
    bookKey: book?.key || "",
    price,
    breakEven,
    marketProbability,
    modelProbability,
    researchProbability: null,
    modelSource: source,
    modelConfidence: preferredBook ? 0.68 : 0.55,
    modelNotes: preferredBook ? "DraftKings-preferred line for free-bet workflow." : "No external prior mapped for this outcome yet.",
    edge: modelProbability != null && breakEven != null ? modelProbability - breakEven : null,
    profit,
    ev,
    fairLine: probabilityToAmerican(modelProbability),
    startTime: event.commence_time,
    preferredBook
  };
}

// User request: "Not interested in 10% chances ... looking for at least 33% plus." Applied
// to the algorithm's blended model probability (not the raw market price), so a longshot
// is dropped even if the market alone would have made it look interesting on price.
function passesMinProbability(row) {
  return row.modelProbability != null && row.modelProbability >= minProbabilityFilter;
}

function valueRowsForEvents(events, sport = "Soccer", ratings = ratingRegistry, intel = intelRegistry) {
  return events.flatMap((event) => {
    // One model per event: market consensus + independent model + intel + staleness.
    const model = computeEventModel(event, sport, ratings, intel);
    // Break-even still comes from the BEST posted price per outcome (line shopping preserved,
    // Bankroll and Risk Rules.md: "The fair line is shorter than the book's posted line").
    const bestOutcomes = eventBestOutcomes(event, "all");
    return bestOutcomes.map((entry) => {
      const name = entry.name;
      const marketProbability = model.marketProbabilities[name] ?? moneylineToProbability(entry.outcome?.price);
      const modelProbability = model.outcomes[name] ?? marketProbability;
      return {
        ...valueRowForOutcome({
          event,
          sport,
          outcomeName: name,
          book: entry.book,
          outcome: entry.outcome,
          marketProbability,
          modelProbability,
          source: model.source
        }),
        id: `${event.id}-best-${name}`,
        sport,
        researchProbability: model.modelOnly[name] ?? null,
        modelConfidence: model.confidence,
        modelNotes: model.notes,
        stale: model.stale,
        staleReason: model.staleReason,
        intelFlag: model.intelFlag,
        intelAdjustment: model.intelAdjustment
      };
    });
  }).filter(passesMinProbability).sort((a, b) => (b.ev ?? -Infinity) - (a.ev ?? -Infinity));
}

function valueRowsForPreferredBook(events, sport = "Soccer", ratings = ratingRegistry, intel = intelRegistry) {
  return events.flatMap((event) => {
    const model = computeEventModel(event, sport, ratings, intel);
    return (event.bookmakers || [])
      .filter((book) => isPreferredBook(`${book.title} ${book.key}`))
      .flatMap((book) => {
        const outcomes = getMarket(book)?.outcomes || [];
        return outcomes.map((outcome) => {
          const name = outcome.name;
          // For the DK-first workflow, break-even uses the DraftKings price, but model and
          // market chance still come from the shared event model so the edge is consistent.
          const marketProbability = model.marketProbabilities[name] ?? moneylineToProbability(outcome?.price);
          const modelProbability = model.outcomes[name] ?? marketProbability;
          return {
            ...valueRowForOutcome({
              event,
              sport,
              outcomeName: name,
              book,
              outcome,
              marketProbability,
              modelProbability,
              source: model.source
            }),
            researchProbability: model.modelOnly[name] ?? null,
            modelConfidence: model.confidence,
            modelNotes: model.notes,
            stale: model.stale,
            staleReason: model.staleReason,
            intelFlag: model.intelFlag,
            intelAdjustment: model.intelAdjustment
          };
        });
      });
  }).filter(passesMinProbability).sort((a, b) => (b.ev ?? -Infinity) - (a.ev ?? -Infinity));
}

function bankrollRowsForEvents(events, sport = "Soccer", preferredOnly = false) {
  const sourceRows = preferredOnly ? valueRowsForPreferredBook(events, sport) : valueRowsForEvents(events, sport);
  return sourceRows
    .filter((row) => row.price != null && row.modelProbability != null)
    .map((row) => {
      // Stake comes from quarter-Kelly on the model edge, capped at 1% (Bankroll and Risk
      // Rules.md). The label strings are unchanged so the Bankroll Watch UI still reads the
      // same, but the bands are now driven by a real edge + Kelly size, not a heuristic.
      const { pct } = kellyStake(row.price, row.modelProbability);
      const edge = row.edge || 0;
      const edgePts = edge * 100;
      const chancePts = (row.modelProbability || 0) * 100;
      const payoutPts = Math.min((row.profit || 0) / 10, 20);
      const dkBonus = row.preferredBook ? 8 : 0;                        // free $200 workflow
      const confBonus = ((row.modelConfidence || 0.5) - 0.5) * 20;      // reward modeled spots
      const stalePenalty = row.stale ? 40 : 0;                          // bury started/stale lines
      const intelPenalty = row.intelFlag ? 12 : 0;                      // pending high-impact news
      const score = Math.max(
        0,
        edgePts * 2.4 + chancePts * 0.35 + payoutPts + dkBonus + confBonus - stalePenalty - intelPenalty
      );
      let stake = "Watch only";
      if (!row.stale && edge > 0.005 && pct > 0) stake = "Tiny lean: 0.25%-0.5% bankroll";
      if (!row.stale && edge > 0.015 && pct >= 0.005) stake = "Small play: 0.5%-1% bankroll";
      return { ...row, score, stake, kellyPct: pct };
    })
    .sort((a, b) => b.score - a.score);
}

function futureValueRows(futures, kalshi = liveKalshiProbabilities || kalshiFuturesProbabilities) {
  // v0.1 compared the RAW book implied probability (still carrying the futures vig, which is
  // huge across a 32-team field) against the already-normalized Kalshi probability — an
  // apples-to-oranges gap. External Source Research - 2026-06-30.md (Neil Paine / Polymarket)
  // is explicit: "normalize odds within each subset so the totals match the real structure."
  // So we first de-vig the book field, then compare like-for-like against Kalshi.
  const sumRaw = futures.reduce((sum, future) => {
    const raw = moneylineToProbability(future.price);
    return sum + (raw || 0);
  }, 0) || 1;

  return futures
    .map((future) => {
      const implied = moneylineToProbability(future.price);                 // raw, vig included
      const bookFairProbability = implied != null ? implied / sumRaw : null; // normalized field
      const kalshiProbability = kalshiProbFor(kalshi, future.team);
      // Edge = prediction-market fair probability minus the book's fair probability. Positive
      // means the book is underpricing the team relative to the sharper Kalshi market.
      const edge = kalshiProbability != null && bookFairProbability != null ? kalshiProbability - bookFairProbability : null;
      const ev = expectedValue(future.price, kalshiProbability);
      return {
        ...future,
        implied,
        bookFairProbability,
        kalshiProbability,
        edge,
        ev,
        fairLine: probabilityToAmerican(kalshiProbability)
      };
    })
    .sort((a, b) => (b.edge ?? -Infinity) - (a.edge ?? -Infinity));
}

async function fetchWorldCupOdds() {
  if (!API_KEY) return { events: sampleEvents, source: "sample" };

  const params = new URLSearchParams({
    apiKey: API_KEY,
    regions: REGION,
    markets: "h2h",
    oddsFormat: "american",
    dateFormat: "iso"
  });

  const response = await fetch(`https://api.the-odds-api.com/v4/sports/${SPORT_KEY}/odds?${params}`);

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Odds request failed with ${response.status}`);
  }

  return {
    events: await response.json(),
    source: "live",
    remaining: response.headers.get("x-requests-remaining"),
    used: response.headers.get("x-requests-used")
  };
}

async function fetchMlbOdds() {
  if (!API_KEY) return { events: sampleMlbEvents, source: "sample" };

  const params = new URLSearchParams({
    apiKey: API_KEY,
    regions: REGION,
    markets: "h2h",
    oddsFormat: "american",
    dateFormat: "iso"
  });

  const response = await fetch(`https://api.the-odds-api.com/v4/sports/${MLB_SPORT_KEY}/odds?${params}`);

  if (!response.ok) {
    return { events: sampleMlbEvents, source: "sample" };
  }

  const events = await response.json();
  return {
    events: events.length ? events : sampleMlbEvents,
    source: events.length ? "live" : "sample",
    remaining: response.headers.get("x-requests-remaining"),
    used: response.headers.get("x-requests-used")
  };
}

async function fetchWorldCupFutures() {
  if (!API_KEY) return { futures: sampleFutures, source: "sample" };

  const params = new URLSearchParams({
    apiKey: API_KEY,
    regions: REGION,
    markets: "outrights",
    oddsFormat: "american",
    dateFormat: "iso"
  });

  const response = await fetch(`https://api.the-odds-api.com/v4/sports/${FUTURES_KEY}/odds?${params}`);
  if (!response.ok) return { futures: sampleFutures, source: "sample" };
  const events = await response.json();
  const futures = events
    .flatMap((event) => event.bookmakers || [])
    .flatMap((book) => (getMarket(book, "outrights")?.outcomes || []).map((outcome) => ({
      id: `${book.key}-${outcome.name}`,
      team: outcome.name,
      price: outcome.price,
      source: book.title,
      lastUpdate: book.last_update
    })))
    .sort((a, b) => Number(a.price) - Number(b.price));

  return { futures: futures.length ? futures : sampleFutures, source: futures.length ? "live" : "sample" };
}

// --- Live Kalshi futures (replaces the hardcoded snapshot) ------------------
// Source Map.md + External Source Research.md both flagged wiring Kalshi live instead of
// pasting a snapshot that goes stale the moment the bracket moves. Kalshi's public markets
// endpoint needs no key; prices come back as decimal dollars (0-1) = probability directly.
// Best-effort, same as the other cross-origin fetches: on any failure the app falls back to
// the kalshiFuturesProbabilities snapshot, so nothing breaks.

// Kalshi labels teams by common name; our futures board (from The Odds API) sometimes differs.
const KALSHI_TEAM_ALIASES = {
  "united states": "usa",
  "united states of america": "usa",
  "bosnia & herzegovina": "bosnia and herzegovina",
  "bosnia": "bosnia and herzegovina",
  "cote d'ivoire": "ivory coast",
  "côte d'ivoire": "ivory coast",
  "democratic republic of the congo": "dr congo",
  "dr congo": "dr congo",
  "congo dr": "dr congo",
  "south korea": "korea republic",
  "korea republic": "korea republic"
};

function canonicalTeamKey(name) {
  const norm = normalizeTeamName(name);
  return KALSHI_TEAM_ALIASES[norm] || norm;
}

// Alias- and case-tolerant lookup so both the exact-keyed hardcoded snapshot and the
// normalized-keyed live registry resolve for a given futures-board team name.
function kalshiProbFor(kalshi, team) {
  if (!kalshi) return null;
  if (kalshi[team] != null) return kalshi[team]; // fast path: exact key (hardcoded snapshot)
  const target = canonicalTeamKey(team);
  for (const [key, value] of Object.entries(kalshi)) {
    if (canonicalTeamKey(key) === target) return value;
  }
  return null;
}

function setLiveKalshiProbabilities(probs) {
  liveKalshiProbabilities = probs && Object.keys(probs).length ? probs : null;
}

async function fetchKalshiFutures() {
  try {
    const params = new URLSearchParams({ series_ticker: "KXMENWORLDCUP", status: "open", limit: "200" });
    // In dev, go through the Vite proxy (/kalshi) which strips the Origin header Kalshi's WAF
    // 403s on. In a static production build there's no proxy, so we hit Kalshi directly — it
    // will 403 and we fall back to the snapshot (see catch/response.ok handling below).
    const kalshiBase = import.meta.env.DEV ? "/kalshi" : "https://api.elections.kalshi.com";
    const response = await fetch(`${kalshiBase}/trade-api/v2/markets?${params}`);
    if (!response.ok) return { probs: {}, live: false };
    const data = await response.json();
    const probs = {};
    (data.markets || []).forEach((market) => {
      const team = market.yes_sub_title || market.subtitle;
      if (!team) return;
      // Prefer bid/ask midpoint (most current fair estimate); fall back to last trade. Handle
      // both the newer *_dollars string fields (0-1) and the older cent integer fields.
      const dollarsOrCents = (dollarField, centField) => {
        const d = market[dollarField];
        if (d != null && d !== "") return Number(d);
        const c = market[centField];
        return c != null ? Number(c) / 100 : null;
      };
      const bid = dollarsOrCents("yes_bid_dollars", "yes_bid");
      const ask = dollarsOrCents("yes_ask_dollars", "yes_ask");
      const last = dollarsOrCents("last_price_dollars", "last_price");
      let prob = bid != null && ask != null && bid > 0 && ask > 0 ? (bid + ask) / 2 : last;
      if (prob == null || !Number.isFinite(prob) || prob <= 0) return;
      probs[canonicalTeamKey(team)] = clamp(prob, 0, 1);
    });
    return { probs, live: Object.keys(probs).length > 0 };
  } catch {
    return { probs: {}, live: false };
  }
}

// The Odds API /scores endpoint is free and returns completed games with final scores.
// daysFrom=3 covers anything graded in the last three days. Used only when there is a
// pending tracked pick for the sport, so it costs no quota until you actually track picks.
async function fetchScores(sportKey) {
  if (!API_KEY) return [];
  const params = new URLSearchParams({ apiKey: API_KEY, daysFrom: "3", dateFormat: "iso" });
  try {
    const response = await fetch(`https://api.the-odds-api.com/v4/sports/${sportKey}/scores/?${params}`);
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

function mlbLastResultsFromScores(scores) {
  const byTeam = {};
  [...(scores || [])]
    .filter((score) => score?.completed && Array.isArray(score.scores))
    .sort((a, b) => new Date(a.commence_time || 0) - new Date(b.commence_time || 0))
    .forEach((score) => {
      const scoreByName = {};
      score.scores.forEach((entry) => {
        scoreByName[entry.name] = Number(entry.score);
      });
      const homeScore = scoreByName[score.home_team];
      const awayScore = scoreByName[score.away_team];
      if (!Number.isFinite(homeScore) || !Number.isFinite(awayScore) || homeScore === awayScore) return;
      byTeam[normalizeTeamName(score.home_team)] = homeScore > awayScore ? "win" : "loss";
      byTeam[normalizeTeamName(score.away_team)] = awayScore > homeScore ? "win" : "loss";
    });
  return byTeam;
}

// Turn a final score into a settled result for the backed selection. Draw-aware so a 3-way
// soccer moneyline grades correctly (a draw loses a backed team; "Draw" wins on a draw).
function gradeFromScore(score, selectionName) {
  if (!score || !Array.isArray(score.scores)) return null;
  const byTeam = {};
  score.scores.forEach((entry) => {
    byTeam[entry.name] = Number(entry.score);
  });
  const homeScore = byTeam[score.home_team];
  const awayScore = byTeam[score.away_team];
  if (!Number.isFinite(homeScore) || !Number.isFinite(awayScore)) return null;
  let winner;
  if (homeScore > awayScore) winner = score.home_team;
  else if (awayScore > homeScore) winner = score.away_team;
  else winner = "Draw";
  if (selectionName === "Draw") return winner === "Draw" ? "win" : "loss";
  return selectionName === winner ? "win" : "loss";
}

// Auto-tracking core: for every tracked pick still pending, stamp the latest price as the
// closing line (so CLV computes itself) and, once a final score exists, set Win/Loss/Draw.
// Manual picks (no eventId) and already-settled picks are left untouched.
function reconcileModelPicks(picks, soccerEvents, mlbEvents, scoresList) {
  const eventsById = new Map();
  [...(soccerEvents || []), ...(mlbEvents || [])].forEach((event) => eventsById.set(event.id, event));
  const scoresById = new Map();
  (scoresList || []).forEach((score) => scoresById.set(score.id, score));

  return picks.map((pick) => {
    if (!pick.eventId || pick.result !== "pending") return pick;
    let next = pick;

    // Closing-line capture: keep overwriting closePrice with the freshest best line until the
    // pick is graded, so the last value before settlement is effectively the closing price.
    const event = eventsById.get(pick.eventId);
    if (event) {
      const best = bestLine(event, pick.selectionName, "all");
      const price = best?.outcome?.price;
      if (price != null) next = { ...next, closePrice: Number(price), autoClosed: true };
    }

    // Result capture from the final score.
    const score = scoresById.get(pick.eventId);
    if (score && score.completed) {
      const result = gradeFromScore(score, pick.selectionName);
      if (result) next = { ...next, result, autoGraded: true };
    }
    return next;
  });
}

function createSnapshot(events, source) {
  return {
    id: `snapshot-${Date.now()}`,
    at: new Date().toISOString(),
    source,
    eventCount: events.length,
    lines: events.map((event) => ({
      match: `${event.home_team} vs ${event.away_team}`,
      commenceTime: event.commence_time,
      best: eventBestOutcomes(event, "all").map((entry) => ({
        name: entry.name,
        price: entry.outcome?.price ?? null,
        book: entry.book?.title || ""
      }))
    }))
  };
}

function App() {
  const [activeTab, setActiveTab] = useState("matches");
  const [events, setEvents] = useState(sampleEvents);
  const [mlbEvents, setMlbEvents] = useState(sampleMlbEvents);
  const [futures, setFutures] = useState(sampleFutures);
  const [source, setSource] = useState("sample");
  const [mlbSource, setMlbSource] = useState("sample");
  const [mlbStarterSource, setMlbStarterSource] = useState("unavailable"); // "live" | "unavailable"
  const [mlbRatingsSource, setMlbRatingsSource] = useState("unavailable"); // "live" | "unavailable"
  const [futuresSource, setFuturesSource] = useState("sample");
  const [kalshiSource, setKalshiSource] = useState("snapshot"); // "live" | "snapshot"
  const [query, setQuery] = useState("");
  const [activeBook, setActiveBook] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastRefresh, setLastRefresh] = useState(null);
  const [quota, setQuota] = useState({ remaining: null, used: null });
  const [autoRefresh, setAutoRefresh] = useState(() => readStorage(AUTO_REFRESH_KEY, false));
  const [cooldownLeftMs, setCooldownLeftMs] = useState(0);
  const [minProbability, setMinProbability] = useState(() => {
    const stored = readStorage(MIN_PROBABILITY_KEY, null);
    return typeof stored === "number" && stored >= 0 && stored < 1 ? stored : DEFAULT_MIN_PROBABILITY;
  });
  const [snapshots, setSnapshots] = useState(() => readStorage(SNAPSHOT_KEY, []));
  const [picks, setPicks] = useState(() => readStorage(PICKS_KEY, seedPicks));
  const [modelPicks, setModelPicks] = useState(() => readStorage(MODEL_PICKS_KEY, seedModelPicks));
  const [teamRatings, setTeamRatings] = useState(() => readStorage(TEAM_RATINGS_KEY, seedTeamRatings));
  const [intelNotes, setIntelNotes] = useState(() => readStorage(INTEL_NOTES_KEY, seedIntelNotes));
  const [eloState, setEloState] = useState(() => readStorage(ELO_KEY, { ratings: {}, applied: [] }));
  const [stateLoaded, setStateLoaded] = useState(false); // true once the vault bundle has hydrated (or we've confirmed there is none)
  const [stats, setStats] = useState(() => readStorage(STATS_KEY, emptyStats())); // persisted fetched stats (xERA, run diffs, Kalshi) + history
  const [pickDraft, setPickDraft] = useState({
    match: "",
    market: "90-minute moneyline",
    selection: "",
    source: "Bovada",
    price: "",
    confidence: "Lean",
    status: "Research",
    note: ""
  });

  // Rate limit: skip the network round-trip entirely (no API calls fired) if the last
  // successful refresh was inside the cooldown window. `force` bypasses it for the very
  // first load. This is the actual quota guard — the manual-button disabled state and the
  // 20-minute auto-refresh timer below are just UI on top of this same check.
  async function refreshOdds(force = false) {
    if (!force && lastRefresh && Date.now() - lastRefresh.getTime() < REFRESH_COOLDOWN_MS) {
      return;
    }
    setLoading(true);
    setError("");
    try {
      const [oddsResult, futuresResult, mlbResult, kalshiResult] = await Promise.all([
        fetchWorldCupOdds(),
        fetchWorldCupFutures(),
        fetchMlbOdds(),
        fetchKalshiFutures()
      ]);
      const nextEvents = oddsResult.events.length ? oddsResult.events : sampleEvents;
      const nextSource = oddsResult.events.length && oddsResult.source === "live" ? "live" : "sample";
      setEvents(nextEvents);
      setSource(nextSource);
      setFutures(futuresResult.futures);
      setFuturesSource(futuresResult.source);
      setMlbEvents(mlbResult.events);
      setMlbSource(mlbResult.source);
      setQuota({ remaining: oddsResult.remaining, used: oddsResult.used });
      setLastRefresh(new Date());

      // Fetched STATS (facts worth keeping) are merged into persisted `stats`, never discarded.
      // Kalshi came back in the Promise.all above; MLB ratings + starter xERA fetch here. A
      // failed/blocked fetch contributes nothing to the merge, so the last-known saved stats
      // stay live (the model keeps running on cache instead of going dark). The registries
      // themselves are driven from `stats` by the render-time mirror, not set directly here.
      const freshStats = { kalshi: kalshiResult.live ? kalshiResult.probs : null };
      const hadRatings = Object.keys(stats.latest.mlbTeamRatings || {}).length > 0;
      const hadStarters = Object.keys(stats.latest.mlbStarters || {}).length > 0;
      const hadKalshi = stats.latest.kalshi && Object.keys(stats.latest.kalshi).length > 0;
      setKalshiSource(kalshiResult.live ? "live" : hadKalshi ? "cached" : "snapshot");

      if (mlbResult.source === "live" && mlbResult.events.length) {
        const [starterResult, ratingsResult] = await Promise.all([
          fetchMlbStarterQuality(mlbResult.events),
          fetchMlbTeamRatings()
        ]);
        freshStats.mlbStarters = starterResult.live ? starterResult.registry : null;
        freshStats.mlbTeamRatings = ratingsResult.live ? ratingsResult.registry : null;
        setMlbStarterSource(starterResult.live ? "live" : hadStarters ? "cached" : "unavailable");
        setMlbRatingsSource(ratingsResult.live ? "live" : hadRatings ? "cached" : "unavailable");
      } else {
        // Sample/offline board: don't fetch, but keep whatever stats we've saved before.
        setMlbStarterSource(hadStarters ? "cached" : "unavailable");
        setMlbRatingsSource(hadRatings ? "cached" : "unavailable");
      }

      // Recent scores serve three jobs, so fetch once per live refresh and reuse: soccer drives
      // Elo learning, MLB drives the after-loss bounce-back prior (each team's last result), and
      // both drive auto-grading of tracked picks.
      const soccerScores = nextSource === "live" ? await fetchScores(SPORT_KEY) : [];
      const mlbScores = mlbResult.source === "live" ? await fetchScores(MLB_SPORT_KEY) : [];
      freshStats.mlbLastResults = mlbScores.length ? mlbLastResultsFromScores(mlbScores) : null;

      const nowIso = new Date().toISOString();
      const dateKey = new Date().toLocaleDateString("en-CA");
      const nextStats = mergeStats(stats, freshStats, nowIso, dateKey);
      setStats(nextStats);
      writeStorage(STATS_KEY, nextStats);
      saveVaultState(nextStats, STATS_ENDPOINT);

      const nextSnapshots = [createSnapshot(nextEvents, nextSource), ...snapshots].slice(0, 30);
      setSnapshots(nextSnapshots);
      writeStorage(SNAPSHOT_KEY, nextSnapshots);

      if (soccerScores.length) {
        const nextElo = applyEloForMatches(eloState, soccerScores);
        if (nextElo !== eloState) {
          setEloState(nextElo);
          writeStorage(ELO_KEY, nextElo);
        }
      }

      // Auto-tracking: close the line and grade any pending tracked pick, reusing the scores above.
      const pendingTracked = modelPicks.filter((pick) => pick.eventId && pick.result === "pending");
      if (pendingTracked.length) {
        const reconciled = reconcileModelPicks(modelPicks, nextEvents, mlbResult.events, [...soccerScores, ...mlbScores]);
        setModelPicks(reconciled);
      }
    } catch (err) {
      // Odds failed — fall back to sample ODDS only. Persisted stats (xERA, run diffs, Kalshi)
      // are intentionally left intact so the model keeps running on last-known facts; the
      // render-time mirror keeps the registries populated from saved stats.
      setError(err.message || "Could not load odds.");
      setSource("sample");
      setEvents(sampleEvents);
      setMlbEvents(sampleMlbEvents);
      setMlbSource("sample");
      const hasStats = Object.keys(stats.latest.mlbTeamRatings || {}).length > 0;
      setMlbRatingsSource(hasStats ? "cached" : "unavailable");
      setMlbStarterSource(Object.keys(stats.latest.mlbStarters || {}).length > 0 ? "cached" : "unavailable");
      setKalshiSource(stats.latest.kalshi ? "cached" : "snapshot");
      setFutures(sampleFutures);
      setFuturesSource("sample");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshOdds(true); // first load always fetches; nothing to rate-limit against yet
  }, []);

  // Hydrate from the durable vault file on boot. The vault is the source of truth — it wins
  // over the localStorage values the useState initializers already loaded (localStorage is
  // just a fast cache / production fallback). If there's no vault store (production static
  // build, or first ever run), we keep the localStorage/seed values and start saving them.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [saved, savedStats] = await Promise.all([loadVaultState(STATE_ENDPOINT), loadVaultState(STATS_ENDPOINT)]);
      if (!cancelled && saved) {
        if (Array.isArray(saved.modelPicks)) setModelPicks(saved.modelPicks);
        if (Array.isArray(saved.teamRatings)) setTeamRatings(saved.teamRatings);
        if (Array.isArray(saved.intelNotes)) setIntelNotes(saved.intelNotes);
        if (Array.isArray(saved.picks)) setPicks(saved.picks);
        if (Array.isArray(saved.snapshots)) setSnapshots(saved.snapshots);
        if (saved.elo && typeof saved.elo === "object") setEloState(saved.elo);
        if (saved.settings) {
          if (typeof saved.settings.minProbability === "number") setMinProbability(saved.settings.minProbability);
          if (typeof saved.settings.autoRefresh === "boolean") setAutoRefresh(saved.settings.autoRefresh);
        }
      }
      // Hydrate saved fetched-stats (xERA / run diffs / Kalshi) so the model runs on last-known
      // facts immediately, before (or even without) a successful live fetch this session.
      if (!cancelled && savedStats && savedStats.latest) setStats(savedStats);
      if (!cancelled) setStateLoaded(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Mirror every model-training entry to the durable vault file, debounced so rapid edits
  // (typing a note, refreshing odds) coalesce into one write. Gated on stateLoaded so the
  // initial pre-hydration render can't overwrite the vault with stale localStorage defaults.
  useEffect(() => {
    if (!stateLoaded) return undefined;
    const bundle = {
      version: STATE_VERSION,
      savedAt: new Date().toISOString(),
      modelPicks,
      teamRatings,
      intelNotes,
      picks,
      snapshots,
      elo: eloState,
      settings: { minProbability, autoRefresh }
    };
    const timer = setTimeout(() => saveVaultState(bundle), 800);
    return () => clearTimeout(timer);
  }, [stateLoaded, modelPicks, teamRatings, intelNotes, picks, snapshots, eloState, minProbability, autoRefresh]);

  // Optional auto-refresh: only runs on the same 20-minute cadence as the rate limit, and
  // only while the toggle is on. Off by default — manual button is the primary path.
  useEffect(() => {
    writeStorage(AUTO_REFRESH_KEY, autoRefresh);
    if (!autoRefresh) return undefined;
    const interval = setInterval(() => refreshOdds(), REFRESH_COOLDOWN_MS);
    return () => clearInterval(interval);
  }, [autoRefresh, lastRefresh]);

  // Drives the "next refresh available in Xm" countdown on the button without polling the API.
  useEffect(() => {
    if (!lastRefresh) return undefined;
    const tick = () => setCooldownLeftMs(Math.max(0, REFRESH_COOLDOWN_MS - (Date.now() - lastRefresh.getTime())));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [lastRefresh]);

  useEffect(() => {
    writeStorage(PICKS_KEY, picks);
  }, [picks]);

  useEffect(() => {
    writeStorage(MODEL_PICKS_KEY, modelPicks);
  }, [modelPicks]);

  useEffect(() => {
    writeStorage(TEAM_RATINGS_KEY, teamRatings);
  }, [teamRatings]);

  useEffect(() => {
    writeStorage(INTEL_NOTES_KEY, intelNotes);
  }, [intelNotes]);

  useEffect(() => {
    writeStorage(MIN_PROBABILITY_KEY, minProbability);
  }, [minProbability]);

  const books = useMemo(() => {
    const map = new Map();
    for (const event of events) {
      for (const book of event.bookmakers || []) map.set(book.key, book.title);
    }
    return [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  }, [events]);

  const filteredEvents = useMemo(() => {
    const term = query.trim().toLowerCase();
    return events
      .filter((event) => !term || `${event.home_team} ${event.away_team}`.toLowerCase().includes(term))
      .sort((a, b) => new Date(a.commence_time) - new Date(b.commence_time));
  }, [events, query]);

  const combinedEvents = [...filteredEvents, ...mlbEvents];
  const nextMatch = combinedEvents
    .filter((event) => new Date(event.commence_time) >= new Date())
    .sort((a, b) => new Date(a.commence_time) - new Date(b.commence_time))[0] || filteredEvents[0] || mlbEvents[0];

  function addPick(event) {
    event.preventDefault();
    if (!pickDraft.selection.trim()) return;
    setPicks([
      {
        ...pickDraft,
        id: `pick-${Date.now()}`,
        match: pickDraft.match || "General sports note"
      },
      ...picks
    ]);
    setPickDraft({ ...pickDraft, match: "", selection: "", price: "", note: "" });
  }

  // One-click tracking from a Value/Bankroll row: prefills the algorithm probability and the
  // current odds into a Model Lab pick. eventId + selectionName let later refreshes auto-close
  // the line and auto-grade the result. You only add the buy-in.
  const trackedKeys = useMemo(
    () => new Set(modelPicks.filter((pick) => pick.eventId).map((pick) => `${pick.eventId}::${pick.selectionName}`)),
    [modelPicks]
  );

  function trackPick(row) {
    if (!row || row.eventId == null) return;
    const key = `${row.eventId}::${row.selectionName}`;
    if (trackedKeys.has(key)) return; // already tracking this exact outcome
    setModelPicks([
      {
        id: `model-${Date.now()}`,
        match: row.match,
        selection: row.selection,
        selectionName: row.selectionName,
        eventId: row.eventId,
        sport: row.sport,
        commenceTime: row.startTime,
        openPrice: Number(row.price),
        closePrice: "",
        stake: 0,
        probability: row.modelProbability,
        result: "pending",
        source: row.modelSource || "Algorithm v1.0",
        autoTracked: true,
        note: ""
      },
      ...modelPicks
    ]);
  }

  // Mirror live Model Lab ratings + Intel notes into the algorithm registry every render so
  // computeEventModel() reads the user's current inputs (App Build Plan.md: "Use Model Lab
  // team-strength inputs directly" and "Promote Intel notes into the algorithm").
  syncAlgorithmInputs(teamRatings, intelNotes, minProbability);
  setEloRegistry(eloState.ratings); // mirror results-based Elo into the soccer model
  // Drive the fetched-stat registries from persisted stats, so the model runs on last-known
  // xERA / run diffs / Kalshi immediately on boot and stays up if a live fetch later fails.
  setMlbTeamRatings(stats.latest.mlbTeamRatings || {});
  setMlbStarterQuality(stats.latest.mlbStarters || {});
  setMlbLastResults(stats.latest.mlbLastResults || {});
  setLiveKalshiProbabilities(stats.latest.kalshi);
  const adaptiveWeight = computeAdaptiveModelWeight(modelPicks, worldCupBacktest);
  setAdaptiveModelWeight(adaptiveWeight); // model's blend share flexes with measured calibration

  return (
    <main className="app-shell">
      <section className="topbar">
        <div>
          <p className="label">Sports Edge Lab</p>
          <h1>Find profit across MLB and Soccer.</h1>
        </div>
        <div className="refresh-controls">
          <label className="auto-refresh-toggle min-probability-control">
            Min model chance
            <input
              type="number"
              min="0"
              max="99"
              step="1"
              value={Math.round(minProbability * 100)}
              onChange={(event) => {
                const pct = clamp(Number(event.target.value) || 0, 0, 99);
                setMinProbability(pct / 100);
              }}
            />
            %
          </label>
          <label className="auto-refresh-toggle">
            <input type="checkbox" checked={autoRefresh} onChange={(event) => setAutoRefresh(event.target.checked)} />
            Auto-refresh every 20 min
          </label>
          <button className="refresh-button" onClick={() => refreshOdds()} disabled={loading || cooldownLeftMs > 0}>
            {loading
              ? "Refreshing..."
              : cooldownLeftMs > 0
                ? `Next refresh in ${Math.ceil(cooldownLeftMs / 60000)}m`
                : "Refresh odds"}
          </button>
        </div>
      </section>

      <section className="summary-grid">
        <div className="summary-panel primary">
          <span>Next opportunity</span>
          <strong>{nextMatch ? `${nextMatch.home_team} vs ${nextMatch.away_team}` : "No matches found"}</strong>
          <small>{nextMatch ? formatDate(nextMatch.commence_time) : "Try another search."}</small>
        </div>
        <div className="summary-panel">
          <span>Odds sources</span>
          <strong>{source === "live" || mlbSource === "live" ? "Live API" : "Sample mode"}</strong>
          <small>{API_KEY ? `${SPORT_KEY} / ${MLB_SPORT_KEY} · ${REGION}` : "Add VITE_ODDS_API_KEY for live data."}</small>
        </div>
        <div className="summary-panel">
          <span>Snapshots</span>
          <strong>{snapshots.length} saved</strong>
          <small>{lastRefresh ? `Updated ${lastRefresh.toLocaleTimeString()}` : "Waiting for first refresh"}</small>
        </div>
      </section>

      <nav className="tabs" aria-label="Sports betting odds sections">
        {[
          ["matches", "Soccer"],
          ["mlb", "MLB"],
          ["futures", "Futures"],
          ["value", "Value"],
          ["algorithm", "Algorithm"],
          ["backtest", "Backtest"],
          ["intel", "Intel"],
          ["model", "Model Lab"],
          ["bankroll", "Bankroll Watch"],
          ["history", "History"],
          ["picks", "Picks"],
          ["research", "Research"]
        ].map(([key, label]) => (
          <button className={activeTab === key ? "active" : ""} onClick={() => setActiveTab(key)} key={key}>
            {label}
          </button>
        ))}
      </nav>

      {activeTab === "matches" ? (
        <MatchesTab
          activeBook={activeBook}
          books={books}
          error={error}
          events={filteredEvents}
          lastRefresh={lastRefresh}
          query={query}
          quota={quota}
          setActiveBook={setActiveBook}
          setQuery={setQuery}
        />
      ) : null}

      {activeTab === "futures" ? <FuturesTab futures={futures} futuresSource={futuresSource} kalshiSource={kalshiSource} /> : null}
      {activeTab === "mlb" ? <MlbTab events={mlbEvents} source={mlbSource} starterSource={mlbStarterSource} ratingsSource={mlbRatingsSource} /> : null}
      {activeTab === "value" ? <ValueTab events={events} mlbEvents={mlbEvents} onTrack={trackPick} trackedKeys={trackedKeys} minProbability={minProbability} /> : null}
      {activeTab === "algorithm" ? <AlgorithmTab events={events} mlbEvents={mlbEvents} futures={futures} minProbability={minProbability} modelWeight={adaptiveWeight} /> : null}
      {activeTab === "backtest" ? <BacktestTab data={worldCupBacktest} mlbData={mlbBacktest} /> : null}
      {activeTab === "intel" ? <IntelTab intelNotes={intelNotes} setIntelNotes={setIntelNotes} /> : null}
      {activeTab === "model" ? (
        <ModelLabTab
          events={events}
          mlbEvents={mlbEvents}
          modelPicks={modelPicks}
          setModelPicks={setModelPicks}
          teamRatings={teamRatings}
          setTeamRatings={setTeamRatings}
        />
      ) : null}
      {activeTab === "bankroll" ? <BankrollTab events={events} mlbEvents={mlbEvents} onTrack={trackPick} trackedKeys={trackedKeys} minProbability={minProbability} /> : null}
      {activeTab === "history" ? <HistoryTab snapshots={snapshots} setSnapshots={setSnapshots} /> : null}
      {activeTab === "picks" ? (
        <PicksTab
          addPick={addPick}
          pickDraft={pickDraft}
          picks={picks}
          setPickDraft={setPickDraft}
          setPicks={setPicks}
        />
      ) : null}
      {activeTab === "research" ? <ResearchBoard /> : null}
    </main>
  );
}

function MatchesTab({ activeBook, books, error, events, lastRefresh, query, quota, setActiveBook, setQuery }) {
  return (
    <>
      <section className="controls">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search teams" aria-label="Search teams" />
        <select value={activeBook} onChange={(event) => setActiveBook(event.target.value)} aria-label="Filter sportsbook">
          <option value="all">All sportsbooks</option>
          {books.map(([key, title]) => (
            <option key={key} value={key}>{title}</option>
          ))}
        </select>
        <p>{quota.used ? `${quota.used} API requests used` : lastRefresh ? `Updated ${lastRefresh.toLocaleTimeString()}` : "Waiting for first refresh"}</p>
      </section>

      {error ? <div className="error-panel">{error}</div> : null}

      <section className="matches">
        {events.map((event) => (
          <MatchCard key={event.id} event={event} activeBook={activeBook} />
        ))}
      </section>

      <section className="advance-grid">
        <div className="section-heading compact">
          <div>
            <p className="label">Knockout market</p>
            <h2>To-advance tracker</h2>
          </div>
          <p>These are sample/research lines until a live source is wired for qualify markets.</p>
        </div>
        {advanceMarkets.map((market) => (
          <article className="advance-card" key={market.match}>
            <span>{market.source}</span>
            <strong>{market.match}</strong>
            <div>
              {market.prices.map(([name, price]) => (
                <p key={name}><b>{name}</b> {formatMoneyline(price)}</p>
              ))}
            </div>
            <small>{market.note}</small>
          </article>
        ))}
      </section>
    </>
  );
}

function MatchCard({ event, activeBook }) {
  const bestOutcomes = eventBestOutcomes(event, activeBook);
  const noVig = normalizeNoVig(bestOutcomes.map((entry) => entry.outcome));
  const outcomeNames = eventOutcomeNames(event);

  return (
    <article className="match-card">
      <header>
        <div>
          <span>{formatDate(event.commence_time)}</span>
          <h2>{event.home_team} vs {event.away_team}</h2>
        </div>
        <p>{event.bookmakers?.length || 0} books</p>
      </header>

      <div className="best-lines">
        {bestOutcomes.map((entry, index) => {
          const probability = moneylineToProbability(entry.outcome?.price);
          return (
            <div className="line-tile" key={entry.name}>
              <span>{entry.name}</span>
              <strong>{formatMoneyline(entry.outcome?.price)}</strong>
              <small>{entry.book?.title || "No line"} · raw {formatProbability(probability)} · no-vig {formatProbability(noVig[index])}</small>
            </div>
          );
        })}
      </div>

      <div className="book-table">
        <div className={`table-row table-head cols-${outcomeNames.length + 1}`}>
          <span>Sportsbook</span>
          {outcomeNames.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        {(event.bookmakers || [])
          .filter((book) => activeBook === "all" || book.key === activeBook)
          .map((book) => (
            <div className={`table-row cols-${outcomeNames.length + 1}`} key={book.key}>
              <span>{book.title}</span>
              {outcomeNames.map((name) => (
                <span key={name}>{formatMoneyline(getOutcome(book, name)?.price)}</span>
              ))}
            </div>
          ))}
      </div>
    </article>
  );
}

function FuturesTab({ futures, futuresSource, kalshiSource = "snapshot" }) {
  const rows = futureValueRows(futures);
  const kalshiTag = kalshiSource === "live" ? " (live)" : kalshiSource === "cached" ? " (saved)" : "";
  const kalshiNote =
    kalshiSource === "live"
      ? "Kalshi probabilities are live from the prediction market."
      : kalshiSource === "cached"
        ? "Kalshi fetch failed this refresh — showing the last saved live values (persisted to the vault)."
        : "Kalshi column is the built-in snapshot (no live Kalshi data saved yet).";
  return (
    <section className="tab-stack">
      <div className="section-heading">
        <div>
          <p className="label">Tournament winner</p>
          <h2>Futures board</h2>
        </div>
        <p>
          {futuresSource === "live" ? "Live futures loaded from the configured odds API." : "Bovada research snapshot and sample futures until the API key is added."}
          {" "}
          {kalshiNote}
        </p>
      </div>
      <div className="futures-list">
        {rows.map((future) => {
          return (
            <article className="future-card" key={future.id}>
              <span>{future.source}</span>
              <strong>{future.team}</strong>
              <b>{formatMoneyline(future.price)}</b>
              <small>{formatProbability(future.bookFairProbability)} book fair · {future.kalshiProbability ? `${formatProbability(future.kalshiProbability)} Kalshi${kalshiTag}` : "no Kalshi prior"}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ValueTab({ events, mlbEvents, onTrack, trackedKeys, minProbability = DEFAULT_MIN_PROBABILITY }) {
  const rows = [
    ...valueRowsForEvents(events, "Soccer"),
    ...valueRowsForEvents(mlbEvents, "MLB")
  ].sort((a, b) => (b.ev ?? -Infinity) - (a.ev ?? -Infinity));
  const bestProfit = [...rows].sort((a, b) => (b.profit ?? 0) - (a.profit ?? 0))[0];
  const bestChance = [...rows].sort((a, b) => (b.modelProbability ?? 0) - (a.modelProbability ?? 0))[0];
  const bestValue = rows[0];

  return (
    <section className="tab-stack">
      <div className="section-heading">
        <div>
          <p className="label">Probability lab</p>
          <h2>Chance vs payout</h2>
        </div>
        <p>Break-even comes from the posted +/- price. Model chance blends an independent strength model with market no-vig. Only showing picks at {formatProbability(minProbability)}+ model chance — adjust in the topbar.</p>
      </div>

      <div className="value-summary">
        <ValueMetric title="Best EV proxy" row={bestValue} detail={bestValue ? `${formatCurrency(bestValue.ev)} per $100` : "—"} />
        <ValueMetric title="Highest payout" row={bestProfit} detail={bestProfit ? `${formatCurrency(bestProfit.profit)} profit on $100` : "—"} />
        <ValueMetric title="Highest chance" row={bestChance} detail={bestChance ? `${formatProbability(bestChance.modelProbability)} no-vig chance` : "—"} />
      </div>

      {rows.length === 0 ? (
        <div className="empty-state">No candidates clear the {formatProbability(minProbability)} model-chance floor right now. Lower it in the topbar or check back after the next refresh.</div>
      ) : null}

      <article className="formula-panel">
        <div>
          <span>+ odds</span>
          <strong>+150 means $100 wins $150</strong>
          <p>Break-even chance = 100 / (odds + 100). Example: +150 needs 40.0%.</p>
        </div>
        <div>
          <span>- odds</span>
          <strong>-150 means risk $150 to win $100</strong>
          <p>Break-even chance = abs(odds) / (abs(odds) + 100). Example: -150 needs 60.0%.</p>
        </div>
        <div>
          <span>EV</span>
          <strong>Probability x profit - loss chance x stake</strong>
          <p>Positive EV only means the math is favorable over many similar bets, not that the single pick will hit.</p>
        </div>
      </article>

      <div className="value-table">
        <div className="value-row value-head">
          <span>Selection</span>
          <span>Line</span>
          <span>Break-even</span>
          <span>Market no-vig</span>
          <span>Algo chance</span>
          <span>Edge</span>
          <span>$100 profit</span>
          <span>EV proxy</span>
          <span>Fair line</span>
        </div>
        {rows.map((row) => (
          <div className={`value-row ${row.ev > 0 ? "positive" : ""}`} key={row.id}>
            <span>
              <b>{row.selection}</b>
              {onTrack ? <TrackButton row={row} onTrack={onTrack} trackedKeys={trackedKeys} /> : null}
              <small>{row.sport} · {row.match} · {row.book} · {row.modelSource}</small>
            </span>
            <span>{formatMoneyline(row.price)}</span>
            <span>{formatProbability(row.breakEven)}</span>
            <span>{formatProbability(row.marketProbability)}</span>
            <span>{formatProbability(row.modelProbability)}</span>
            <span>{row.edge == null ? "—" : `${(row.edge * 100).toFixed(1)} pts`}</span>
            <span>{formatCurrency(row.profit)}</span>
            <span>{formatCurrency(row.ev)}</span>
            <span>{row.fairLine}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AlgorithmTab({ events, mlbEvents, futures, minProbability = DEFAULT_MIN_PROBABILITY, modelWeight = algorithmWeights.researchPrior }) {
  const matchRows = [
    ...valueRowsForEvents(events, "Soccer"),
    ...valueRowsForEvents(mlbEvents, "MLB")
  ].sort((a, b) => (b.ev ?? -Infinity) - (a.ev ?? -Infinity));
  const futureRows = futureValueRows(futures).filter((row) => row.kalshiProbability != null);
  const topMatch = matchRows[0];
  const topFuture = futureRows[0];

  return (
    <section className="tab-stack">
      <div className="section-heading">
        <div>
          <p className="label">Edge engine v1.2</p>
          <h2>My first odds algorithm</h2>
        </div>
        <p>It blends an independent strength model (xG-driven Poisson for Soccer, logistic for MLB) with market consensus no-vig, applies backtest calibration for draw risk and MLB overconfidence, adjusts for intel and stale lines, then sizes with capped quarter-Kelly. Match candidates below {formatProbability(minProbability)} model chance are filtered out (adjust in the topbar).</p>
      </div>

      <div className="algorithm-grid">
        <article className="algorithm-card">
          <span>Step 1</span>
          <strong>Live market baseline</strong>
          <p>Pull best available Soccer and MLB moneylines from The Odds API and convert them to no-vig probabilities.</p>
        </article>
        <article className="algorithm-card">
          <span>Step 2</span>
          <strong>Independent model + calibration</strong>
          <p>Soccer runs a Dixon-Coles Poisson on xG inputs, then discounts shaky draw reads from the World Cup backtest. MLB runs a strength logistic, then compresses overconfident reads from the Statcast backtest.</p>
        </article>
        <article className="algorithm-card">
          <span>Step 3</span>
          <strong>Edge, EV, and Kelly</strong>
          <p>Compare blended chance to the best posted break-even, rank by EV, edge, and confidence, then size with quarter-Kelly capped at 1% of bankroll.</p>
        </article>
      </div>

      <div className="algorithm-summary">
        <ValueMetric title="Top match edge" row={topMatch} detail={topMatch ? `${formatProbability(topMatch.modelProbability)} algo · ${formatCurrency(topMatch.ev)} EV` : "—"} />
        <ValueMetric title="Top futures gap" row={topFuture ? { selection: topFuture.team, match: topFuture.source } : null} detail={topFuture ? `${formatProbability(topFuture.kalshiProbability)} Kalshi · fair ${topFuture.fairLine}` : "—"} />
        <article className="value-metric">
          <span>Adaptive weights</span>
          <strong>{Math.round((1 - modelWeight) * 100)} / {Math.round(modelWeight * 100)}</strong>
          <p>Market no-vig / model — the model's share flexes {25}–{60}% by measured calibration (Brier).</p>
          <b>Version 1.2</b>
        </article>
      </div>

      <div className="algorithm-table">
        <div className="algorithm-row algorithm-head">
          <span>Match pick</span>
          <span>Date</span>
          <span>Line</span>
          <span>Market</span>
          <span>Research</span>
          <span>Algorithm</span>
          <span>Edge</span>
          <span>Source</span>
        </div>
        {matchRows.map((row) => (
          <div className="algorithm-row" key={row.id}>
            <span><b>{row.selection}</b><small>{row.match}</small></span>
            <span>{formatDate(row.startTime)}</span>
            <span>{formatMoneyline(row.price)}</span>
            <span>{formatProbability(row.marketProbability)}</span>
            <span>{formatProbability(row.researchProbability)}</span>
            <span>{formatProbability(row.modelProbability)}</span>
            <span>{row.edge == null ? "—" : `${(row.edge * 100).toFixed(1)} pts`}</span>
            <span>{row.modelSource}<small>{formatIntelAdjustment(row.intelAdjustment) || row.modelNotes}</small></span>
          </div>
        ))}
      </div>

      <div className="algorithm-table">
        <div className="algorithm-row algorithm-head">
          <span>Futures team</span>
          <span>Last update</span>
          <span>Book line</span>
          <span>Book fair</span>
          <span>Kalshi/Covers</span>
          <span>Fair line</span>
          <span>Gap</span>
          <span>Read</span>
        </div>
        {futureRows.map((row) => (
          <div className={`algorithm-row ${row.edge > 0 ? "positive" : ""}`} key={row.id}>
            <span><b>{row.team}</b><small>{row.source}</small></span>
            <span>{row.lastUpdate ? formatDate(row.lastUpdate) : "—"}</span>
            <span>{formatMoneyline(row.price)}</span>
            <span>{formatProbability(row.bookFairProbability)}</span>
            <span>{formatProbability(row.kalshiProbability)}</span>
            <span>{row.fairLine}</span>
            <span>{row.edge == null ? "—" : `${(row.edge * 100).toFixed(1)} pts`}</span>
            <span>{row.edge > 0 ? "Kalshi rates this higher than the book's de-vigged price." : "Book price is not clearly above Kalshi."}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function BacktestTab({ data, mlbData }) {
  const recentRows = [...data.predictions].reverse().slice(0, 30);
  const mlbRecentRows = mlbData ? [...mlbData.predictions].reverse().slice(0, 30) : [];
  const bestBucket = data.byBucket
    .filter((bucket) => bucket.matches)
    .sort((a, b) => (b.accuracy ?? 0) - (a.accuracy ?? 0))[0];
  const missAnalysis = data.missAnalysis;
  const topConfusion = missAnalysis?.confusion?.slice(0, 6) || [];
  const scorelineMisses = missAnalysis?.byScoreline || [];
  const eraMisses = missAnalysis?.byEra || [];
  const highConfidenceMisses = missAnalysis?.worstHighConfidenceMisses?.slice(0, 6) || [];
  const mlbMissAnalysis = mlbData?.missAnalysis;

  return (
    <section className="tab-stack">
      <div className="section-heading">
        <div>
          <p className="label">Historical backtest</p>
          <h2>World Cup results check</h2>
        </div>
        <p>{data.summary.note} Generated from {data.summary.firstMatch} through {data.summary.lastMatch}.</p>
      </div>

      <div className="model-metrics">
        <article className="value-metric">
          <span>Exact result accuracy</span>
          <strong>{formatProbability(data.summary.accuracy)}</strong>
          <p>{data.summary.correct}/{data.summary.evaluatedMatches} home/draw/away predictions matched the final score result.</p>
          <b>Historical baseline</b>
        </article>
        <article className="value-metric">
          <span>Brier score</span>
          <strong>{data.summary.avgBrier.toFixed(3)}</strong>
          <p>Lower is better. This measures probability calibration across home/draw/away.</p>
          <b>Calibration</b>
        </article>
        <article className="value-metric">
          <span>Best confidence bucket</span>
          <strong>{bestBucket ? bestBucket.bucket : "—"}</strong>
          <p>{bestBucket ? `${formatProbability(bestBucket.accuracy)} accuracy across ${bestBucket.matches} matches.` : "No bucket data."}</p>
          <b>Where it behaved best</b>
        </article>
      </div>

      <div className="backtest-grid">
        {data.byBucket.map((bucket) => (
          <article className="backtest-card" key={bucket.bucket}>
            <span>{bucket.bucket} confidence</span>
            <strong>{bucket.accuracy == null ? "—" : formatProbability(bucket.accuracy)}</strong>
            <p>{bucket.correct}/{bucket.matches} correct · Brier {bucket.avgBrier == null ? "—" : bucket.avgBrier.toFixed(3)}</p>
          </article>
        ))}
      </div>

      {missAnalysis ? (
        <>
          <article className="rules-panel">
            <h3>What the algorithm got wrong most</h3>
            <div>
              {missAnalysis.headline.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>

          <div className="backtest-grid">
            {missAnalysis.byPrediction.map((row) => (
              <article className="backtest-card" key={row.key}>
                <span>Predicted {row.label}</span>
                <strong>{formatProbability(row.accuracy)}</strong>
                <p>{row.correct}/{row.matches} correct · {row.misses} misses · avg confidence {formatProbability(row.avgConfidence)}</p>
              </article>
            ))}
          </div>

          <div className="algorithm-table">
            <div className="backtest-row backtest-head">
              <span>Miss pattern</span>
              <span>Matches</span>
              <span>Misses</span>
              <span>Miss rate</span>
              <span>Brier</span>
            </div>
            {topConfusion.map((row) => (
              <div className="backtest-row miss" key={row.key}>
                <span>{row.label}</span>
                <span>{row.matches}</span>
                <span>{row.misses}</span>
                <span>{formatProbability(row.missRate)}</span>
                <span>{row.avgBrier.toFixed(3)}</span>
              </div>
            ))}
          </div>

          <div className="research-columns">
            <article className="research-panel">
              <h3>Scoreline pain</h3>
              <div className="note-list">
                {scorelineMisses.map((row) => (
                  <div className="note-item" key={row.key}>
                    <span>{row.label}</span>
                    <strong>{formatProbability(row.accuracy)} accuracy</strong>
                    <p>{row.misses}/{row.matches} missed · Brier {row.avgBrier.toFixed(3)}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="research-panel">
              <h3>Era pain</h3>
              <div className="note-list">
                {eraMisses.map((row) => (
                  <div className="note-item" key={row.key}>
                    <span>{row.label}</span>
                    <strong>{formatProbability(row.accuracy)} accuracy</strong>
                    <p>{row.misses}/{row.matches} missed · avg confidence {formatProbability(row.avgConfidence)}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="algorithm-table">
            <div className="backtest-prediction-row backtest-head">
              <span>Worst confident miss</span>
              <span>Date</span>
              <span>Actual</span>
              <span>Predicted</span>
              <span>Confidence</span>
              <span>Home</span>
              <span>Draw</span>
              <span>Away</span>
              <span>Score</span>
            </div>
            {highConfidenceMisses.map((row) => (
              <div className="backtest-prediction-row miss" key={`${row.year}-${row.match}-${row.score}`}>
                <span><b>{row.match}</b><small>{row.stage} · {row.year}</small></span>
                <span>{row.date}</span>
                <span>{row.actual}</span>
                <span>{row.predicted}</span>
                <span>{formatProbability(row.confidence)}</span>
                <span>{formatProbability(row.homeProbability)}</span>
                <span>{formatProbability(row.drawProbability)}</span>
                <span>{formatProbability(row.awayProbability)}</span>
                <span>{row.score}</span>
              </div>
            ))}
          </div>
        </>
      ) : null}

      <div className="algorithm-table">
        <div className="backtest-row backtest-head">
          <span>Tournament</span>
          <span>Matches</span>
          <span>Correct</span>
          <span>Accuracy</span>
          <span>Brier</span>
        </div>
        {data.tournamentSummary.map((row) => (
          <div className="backtest-row" key={row.year}>
            <span>{row.year}</span>
            <span>{row.matches}</span>
            <span>{row.correct}</span>
            <span>{formatProbability(row.accuracy)}</span>
            <span>{row.avgBrier.toFixed(3)}</span>
          </div>
        ))}
      </div>

      <div className="algorithm-table">
        <div className="backtest-prediction-row backtest-head">
          <span>Match</span>
          <span>Date</span>
          <span>Actual</span>
          <span>Predicted</span>
          <span>Confidence</span>
          <span>Home</span>
          <span>Draw</span>
          <span>Away</span>
          <span>Result</span>
        </div>
        {recentRows.map((row, index) => (
          <div className={`backtest-prediction-row ${row.correct ? "correct" : "miss"}`} key={`${row.matchId}-${row.home}-${row.away}-${row.date}-${index}`}>
            <span><b>{row.home} vs {row.away}</b><small>{row.stage} · {row.homeGoals}-{row.awayGoals}</small></span>
            <span>{row.date}</span>
            <span>{row.actual}</span>
            <span>{row.predicted}</span>
            <span>{formatProbability(row.confidence)}</span>
            <span>{formatProbability(row.homeProbability)}</span>
            <span>{formatProbability(row.drawProbability)}</span>
            <span>{formatProbability(row.awayProbability)}</span>
            <span>{row.correct ? "Hit" : "Miss"}</span>
          </div>
        ))}
      </div>

      {mlbData ? (
        <>
          <div className="section-heading">
            <div>
              <p className="label">MLB Statcast backtest</p>
              <h2>2025 postseason pitch-by-pitch check</h2>
            </div>
            <p>{mlbData.summary.note} Generated from {mlbData.summary.firstGame} through {mlbData.summary.lastGame}.</p>
          </div>

          <div className="model-metrics">
            <article className="value-metric">
              <span>Winner accuracy</span>
              <strong>{formatProbability(mlbData.summary.accuracy)}</strong>
              <p>{mlbData.summary.correct}/{mlbData.summary.totalGames} moneyline-style winners matched the final score.</p>
              <b>Postseason sample</b>
            </article>
            <article className="value-metric">
              <span>Brier score</span>
              <strong>{mlbData.summary.avgBrier.toFixed(3)}</strong>
              <p>Two-way calibration from the derived home/away win probabilities.</p>
              <b>Calibration</b>
            </article>
            <article className="value-metric">
              <span>Feature source</span>
              <strong>Statcast</strong>
              <p>Uses prior postseason run differential, xwOBA, hard-hit, whiff, CSW, and home edge.</p>
              <b>Pitch by pitch</b>
            </article>
          </div>

          {mlbMissAnalysis ? (
            <>
              <article className="rules-panel">
                <h3>MLB miss read</h3>
                <div>
                  {mlbMissAnalysis.headline.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>

              <div className="backtest-grid">
                {mlbMissAnalysis.byPrediction.map((row) => (
                  <article className="backtest-card" key={row.key}>
                    <span>{row.key}</span>
                    <strong>{formatProbability(row.accuracy)}</strong>
                    <p>{row.correct}/{row.matches} correct · {row.misses} misses · avg confidence {formatProbability(row.avgConfidence)}</p>
                  </article>
                ))}
                {mlbMissAnalysis.byColdStart.map((row) => (
                  <article className="backtest-card" key={row.key}>
                    <span>{row.key}</span>
                    <strong>{formatProbability(row.accuracy)}</strong>
                    <p>{row.correct}/{row.matches} correct · Brier {row.avgBrier.toFixed(3)}</p>
                  </article>
                ))}
              </div>

              <div className="algorithm-table">
                <div className="backtest-row backtest-head">
                  <span>MLB pattern</span>
                  <span>Games</span>
                  <span>Misses</span>
                  <span>Miss rate</span>
                  <span>Brier</span>
                </div>
                {[...mlbMissAnalysis.byConfidence, ...mlbMissAnalysis.byMatchup.slice(0, 6)].map((row) => (
                  <div className={`backtest-row ${row.misses ? "miss" : ""}`} key={`${row.key}-${row.matches}`}>
                    <span>{row.key}</span>
                    <span>{row.matches}</span>
                    <span>{row.misses}</span>
                    <span>{formatProbability(row.missRate)}</span>
                    <span>{row.avgBrier.toFixed(3)}</span>
                  </div>
                ))}
              </div>

              <div className="algorithm-table">
                <div className="mlb-backtest-row backtest-head">
                  <span>Worst confident miss</span>
                  <span>Date</span>
                  <span>Actual</span>
                  <span>Predicted</span>
                  <span>Confidence</span>
                  <span>Home</span>
                  <span>Away</span>
                  <span>Score</span>
                </div>
                {mlbMissAnalysis.worstHighConfidenceMisses.slice(0, 8).map((row) => (
                  <div className="mlb-backtest-row miss" key={`${row.gamePk}-${row.home}-${row.away}`}>
                    <span><b>{row.home} vs {row.away}</b><small>Game {row.gamePk}</small></span>
                    <span>{row.date}</span>
                    <span>{row.actual}</span>
                    <span>{row.predicted}</span>
                    <span>{formatProbability(row.confidence)}</span>
                    <span>{formatProbability(row.homeProbability)}</span>
                    <span>{formatProbability(row.awayProbability)}</span>
                    <span>{row.homeScore}-{row.awayScore}</span>
                  </div>
                ))}
              </div>
            </>
          ) : null}

          <div className="algorithm-table">
            <div className="mlb-backtest-row backtest-head">
              <span>MLB game</span>
              <span>Date</span>
              <span>Actual</span>
              <span>Predicted</span>
              <span>Confidence</span>
              <span>Home</span>
              <span>Away</span>
              <span>Result</span>
            </div>
            {mlbRecentRows.map((row) => (
              <div className={`mlb-backtest-row ${row.correct ? "correct" : "miss"}`} key={row.gamePk}>
                <span><b>{row.home} vs {row.away}</b><small>{row.homeScore}-{row.awayScore} · {row.coldStart ? "cold start" : "prior data"}</small></span>
                <span>{row.date}</span>
                <span>{row.actual}</span>
                <span>{row.predicted}</span>
                <span>{formatProbability(row.confidence)}</span>
                <span>{formatProbability(row.homeProbability)}</span>
                <span>{formatProbability(row.awayProbability)}</span>
                <span>{row.correct ? "Hit" : "Miss"}</span>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}

function TrackButton({ row, onTrack, trackedKeys, label = "Track" }) {
  if (!row || row.eventId == null) return null;
  const tracked = trackedKeys?.has(`${row.eventId}::${row.selectionName}`);
  if (tracked) {
    return <button className="track-button tracked" type="button" disabled>Tracked ✓</button>;
  }
  return <button className="track-button" type="button" onClick={() => onTrack(row)}>{label}</button>;
}

function ValueMetric({ title, row, detail }) {
  return (
    <article className="value-metric">
      <span>{title}</span>
      <strong>{row ? row.selection : "—"}</strong>
      <p>{row ? row.match : "No markets loaded"}</p>
      <b>{detail}</b>
    </article>
  );
}

function MlbTab({ events, source, starterSource = "unavailable", ratingsSource = "unavailable" }) {
  // Bug fix: tonightRows() must search the FULL candidate list, not the top-8-by-EV slice —
  // otherwise a real tonight game gets buried under higher-EV picks from later dates in the
  // Odds API's returned window, and "Best tonight" falsely reports no games today.
  const allRows = valueRowsForEvents(events, "MLB");
  const rows = allRows.slice(0, 8);
  const tonight = tonightRows(allRows)[0];
  // Overall MLB model health: the team-ratings layer is what turns the model on (market-only
  // without it), so it gates the top-line status; xERA is an enhancement on top. "cached" means
  // this refresh's fetch failed but the model is still running on last-known saved stats.
  const ratingsOn = ratingsSource === "live" || ratingsSource === "cached";
  const startersOn = starterSource === "live" || starterSource === "cached";
  const modelLive = ratingsOn;
  const modelState = !ratingsOn
    ? "Market-only"
    : ratingsSource === "cached"
      ? "Cached stats"
      : startersOn
        ? "Live: ratings + xERA"
        : "Live: team ratings";

  return (
    <section className="tab-stack">
      <div className="section-heading">
        <div>
          <p className="label">MLB Moneylines</p>
          <h2>Tonight's baseball board</h2>
        </div>
        <p>{source === "live" ? "Live MLB moneylines loaded from The Odds API." : "Sample MLB board shown until live odds are available."}</p>
      </div>

      <div className="value-summary">
        <ValueMetric title="Best MLB edge" row={rows[0]} detail={rows[0] ? `${formatCurrency(rows[0].ev)} EV proxy` : "—"} />
        <ValueMetric title="Best tonight" row={tonight} detail={tonight ? `${formatProbability(tonight.modelProbability)} algo chance` : "No remaining games today"} />
        <article className={`value-metric ${modelLive ? "" : "starter-data-unavailable"}`}>
          <span>MLB model data</span>
          <strong>{modelState}</strong>
          <p>
            {!ratingsOn
              ? "No standings data yet (fetch failed and nothing saved). MLB model is falling back to market no-vig only — it reconnects automatically."
              : ratingsSource === "cached"
                ? "Live fetch failed this refresh, but the model is running on last-known saved stats (persisted to the vault). It refreshes automatically when the fetch reconnects."
                : `Team ratings from MLB standings (run differential)${startersOn ? ", plus confirmed starters + Baseball Savant xERA" : " — starter xERA unavailable this refresh"}. Stats are saved to the vault so they survive resets. See each pick's model note.`}
          </p>
          <b>{MLB_SPORT_KEY}</b>
        </article>
      </div>

      <section className="source-grid">
        {mlbResearchNotes.map((note) => (
          <article className="source-card" key={note.title}>
            <span>MLB research</span>
            <strong>{note.title}</strong>
            <p>{note.body}</p>
          </article>
        ))}
      </section>

      <section className="research-columns">
        <article className="research-panel">
          <h3>After-loss bounce-back leaders</h3>
          <div className="note-list">
            {mlbAfterLossTrends.top.map((row) => (
              <div className="note-item trend-item" key={row.team}>
                <span>{row.record}</span>
                <strong>{row.team} · {formatProbability(row.winPct)}</strong>
                <p>MOV {row.mov > 0 ? "+" : ""}{row.mov.toFixed(1)} · run line {row.runLine > 0 ? "+" : ""}{row.runLine.toFixed(1)}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="research-panel">
          <h3>After-loss fade/watch list</h3>
          <div className="note-list">
            {mlbAfterLossTrends.bottom.map((row) => (
              <div className="note-item trend-item" key={row.team}>
                <span>{row.record}</span>
                <strong>{row.team} · {formatProbability(row.winPct)}</strong>
                <p>MOV {row.mov > 0 ? "+" : ""}{row.mov.toFixed(1)} · run line {row.runLine > 0 ? "+" : ""}{row.runLine.toFixed(1)}</p>
              </div>
            ))}
          </div>
          <p className="source-note">
            Source: <a href={mlbAfterLossTrends.link} target="_blank" rel="noreferrer">{mlbAfterLossTrends.source} after-loss trends</a>. Use only when previous-game result is known.
          </p>
        </article>
      </section>

      <section className="matches">
        {events.map((event) => (
          <MatchCard key={event.id} event={event} activeBook="all" />
        ))}
      </section>
    </section>
  );
}

function tonightRows(rows) {
  const now = new Date();
  return rows
    .filter((row) => {
      const start = new Date(row.startTime);
      return start >= now && start.toDateString() === now.toDateString();
    })
    .sort((a, b) => (b.score ?? b.ev ?? -Infinity) - (a.score ?? a.ev ?? -Infinity));
}

function bestTonightDraftKingsFirst(events, mlbEvents) {
  const preferredRows = [
    ...bankrollRowsForEvents(events, "Soccer", true),
    ...bankrollRowsForEvents(mlbEvents, "MLB", true)
  ];
  return tonightRows(preferredRows)[0] || tonightRows([
    ...bankrollRowsForEvents(events, "Soccer"),
    ...bankrollRowsForEvents(mlbEvents, "MLB")
  ])[0];
}

function IntelTab({ intelNotes, setIntelNotes }) {
  const [draft, setDraft] = useState({
    sport: "MLB",
    match: "",
    category: "Injuries",
    impact: "Medium",
    status: "Watch",
    sourceUrl: "",
    note: ""
  });
  const highImpactNotes = intelNotes.filter((note) => note.impact === "High");

  function addIntelNote(event) {
    event.preventDefault();
    if (!draft.match.trim() || !draft.note.trim()) return;
    setIntelNotes([
      {
        ...draft,
        id: `intel-${Date.now()}`,
        match: draft.match.trim(),
        note: draft.note.trim()
      },
      ...intelNotes
    ]);
    setDraft({ ...draft, match: "", sourceUrl: "", note: "" });
  }

  return (
    <section className="tab-stack">
      <div className="section-heading">
        <div>
          <p className="label">Injury Intel</p>
          <h2>Research the news before trusting the number.</h2>
        </div>
        <p>Use this tab to check injuries, lineups, starters, weather, and late scratches before turning a value edge into a pick.</p>
      </div>

      <div className="intel-grid">
        {intelSources.map((source) => (
          <a className="intel-source-card" href={source.link} target="_blank" rel="noreferrer" key={`${source.sport}-${source.title}`}>
            <span>{source.sport} · {source.category}</span>
            <strong>{source.title}</strong>
            <p>{source.body}</p>
          </a>
        ))}
      </div>

      <div className="intel-layout">
        <form className="intel-form" onSubmit={addIntelNote}>
          <p className="label">Local notebook</p>
          <h3>Add intel note</h3>
          <div className="form-row">
            <select value={draft.sport} onChange={(event) => setDraft({ ...draft, sport: event.target.value })}>
              <option>MLB</option>
              <option>Soccer</option>
            </select>
            <select value={draft.category} onChange={(event) => setDraft({ ...draft, category: event.target.value })}>
              <option>Injuries</option>
              <option>Lineups</option>
              <option>Starters</option>
              <option>Weather</option>
              <option>Suspensions</option>
              <option>Travel/rest</option>
              <option>Market move</option>
            </select>
          </div>
          <input value={draft.match} onChange={(event) => setDraft({ ...draft, match: event.target.value })} placeholder="Game, team, or player" />
          <div className="form-row">
            <select value={draft.impact} onChange={(event) => setDraft({ ...draft, impact: event.target.value })}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <select value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value })}>
              <option>Watch</option>
              <option>Confirmed</option>
              <option>Cleared</option>
            </select>
          </div>
          <input value={draft.sourceUrl} onChange={(event) => setDraft({ ...draft, sourceUrl: event.target.value })} placeholder="Source URL" />
          <textarea value={draft.note} onChange={(event) => setDraft({ ...draft, note: event.target.value })} rows="4" placeholder="What changed and how it affects the line" />
          <button className="refresh-button" type="submit">Save intel</button>
        </form>

        <div className="intel-stack">
          <article className="intel-panel">
            <header>
              <div>
                <span>High impact</span>
                <strong>{highImpactNotes.length} active notes</strong>
              </div>
              <small>Review before Bankroll Watch</small>
            </header>
            <div className="note-list">
              {highImpactNotes.length ? highImpactNotes.map((note) => (
                <IntelNote note={note} setIntelNotes={setIntelNotes} intelNotes={intelNotes} key={note.id} />
              )) : (
                <div className="empty-state">No high-impact notes yet. Add pitcher scratches, star injuries, or confirmed lineup changes here.</div>
              )}
            </div>
          </article>

          <article className="intel-panel">
            <header>
              <div>
                <span>Research checklist</span>
                <strong>Pre-bet gates</strong>
              </div>
              <small>MLB + Soccer</small>
            </header>
            <div className="checklist-grid">
              {intelChecklist.map((group) => (
                <div className="checklist-card" key={group.title}>
                  <span>{group.sport}</span>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

      <section className="intel-notes-list">
        {intelNotes.map((note) => (
          <IntelNote note={note} setIntelNotes={setIntelNotes} intelNotes={intelNotes} key={note.id} />
        ))}
      </section>
    </section>
  );
}

function IntelNote({ note, setIntelNotes, intelNotes }) {
  return (
    <article className={`intel-note impact-${note.impact.toLowerCase()}`}>
      <header>
        <span>{note.sport} · {note.category} · {note.impact}</span>
        <button onClick={() => setIntelNotes(intelNotes.filter((item) => item.id !== note.id))}>Remove</button>
      </header>
      <strong>{note.match}</strong>
      <p>{note.note}</p>
      <footer>
        <small>{note.status}</small>
        {note.sourceUrl ? <a href={note.sourceUrl} target="_blank" rel="noreferrer">Open source</a> : null}
      </footer>
    </article>
  );
}

function ModelLabTab({ events, mlbEvents, modelPicks, setModelPicks, teamRatings, setTeamRatings }) {
  const grades = gradeModelPicks(modelPicks);
  const rows = [
    ...valueRowsForEvents(events, "Soccer"),
    ...valueRowsForEvents(mlbEvents, "MLB")
  ].sort((a, b) => (b.ev ?? -Infinity) - (a.ev ?? -Infinity)).slice(0, 6);
  const [draft, setDraft] = useState({
    match: "",
    selection: "",
    openPrice: "",
    closePrice: "",
    probability: "",
    stake: "",
    result: "pending",
    source: "Algorithm v1.0",
    note: ""
  });

  function addModelPick(event) {
    event.preventDefault();
    // Streamlined required inputs: a label, the algorithm probability, and the odds. Buy-in
    // is optional (0 = tracking only); match/close/notes stay optional secondary fields.
    const probability = parseProbabilityInput(draft.probability);
    if (!draft.selection.trim() || probability == null || draft.openPrice === "") return;
    setModelPicks([
      {
        ...draft,
        id: `model-${Date.now()}`,
        match: draft.match.trim() || draft.selection.trim(),
        selection: draft.selection.trim(),
        openPrice: Number(draft.openPrice),
        closePrice: draft.closePrice === "" ? "" : Number(draft.closePrice),
        stake: draft.stake === "" ? 0 : Number(draft.stake),
        probability,
        source: draft.source || "Algorithm v1.0"
      },
      ...modelPicks
    ]);
    setDraft({ ...draft, match: "", selection: "", openPrice: "", closePrice: "", probability: "", stake: "", note: "" });
  }

  function updateModelPick(id, patch) {
    setModelPicks(modelPicks.map((pick) => (pick.id === id ? { ...pick, ...patch } : pick)));
  }

  function updateTeam(index, patch) {
    setTeamRatings(teamRatings.map((team, teamIndex) => (teamIndex === index ? { ...team, ...patch } : team)));
  }

  return (
    <section className="tab-stack">
      <div className="section-heading">
        <div>
          <p className="label">Model Lab</p>
          <h2>Make the algorithm prove itself.</h2>
        </div>
        <p>Track closing-line value, Brier score, and simple xG/team-strength inputs. This is how the app gets smarter instead of louder.</p>
      </div>

      <div className="model-metrics">
        <article className="value-metric">
          <span>Graded picks</span>
          <strong>{grades.graded}/{grades.total}</strong>
          <p>Win, loss, and draw results all count toward accuracy.</p>
          <b>{grades.winRate == null ? "No record yet" : `${formatProbability(grades.winRate)} win rate${grades.draws ? ` · ${grades.draws} draw${grades.draws > 1 ? "s" : ""}` : ""}`}</b>
        </article>
        <article className="value-metric">
          <span>Brier score</span>
          <strong>{grades.avgBrier == null ? "—" : grades.avgBrier.toFixed(3)}</strong>
          <p>Lower is better. A calibrated probability model should improve here over time.</p>
          <b>Forecast accuracy</b>
        </article>
        <article className="value-metric">
          <span>Closing line value</span>
          <strong>{grades.avgClv == null ? "—" : `${(grades.avgClv * 100).toFixed(1)} pts`}</strong>
          <p>Positive means the pick beat the final market price on average.</p>
          <b>Price quality</b>
        </article>
        <article className="value-metric">
          <span>Net profit / loss</span>
          <strong>{grades.netProfit == null ? "—" : formatCurrency(grades.netProfit)}</strong>
          <p>Real dollars across graded picks, from your recorded buy-ins.</p>
          <b>{grades.roi == null ? "No staked picks yet" : `${(grades.roi * 100).toFixed(1)}% ROI · $${grades.totalStaked.toFixed(2)} staked`}</b>
        </article>
      </div>

      <section className="model-layout">
        <form className="model-form" onSubmit={addModelPick}>
          <p className="label">Grade a pick</p>
          <h3>Add model pick</h3>
          <input value={draft.selection} onChange={(event) => setDraft({ ...draft, selection: event.target.value })} placeholder="Pick (e.g. France ML)" />
          <div className="form-row">
            <input value={draft.probability} onChange={(event) => setDraft({ ...draft, probability: event.target.value })} placeholder="Algorithm % (e.g. 72)" inputMode="decimal" />
            <input value={draft.openPrice} onChange={(event) => setDraft({ ...draft, openPrice: event.target.value })} placeholder="Odds (e.g. -185)" inputMode="numeric" />
          </div>
          <div className="form-row">
            <input value={draft.stake} onChange={(event) => setDraft({ ...draft, stake: event.target.value })} placeholder="Buy-in $ (e.g. 25)" inputMode="decimal" />
            <select value={draft.result} onChange={(event) => setDraft({ ...draft, result: event.target.value })}>
              <option value="pending">Pending</option>
              <option value="win">Win</option>
              <option value="loss">Loss</option>
              <option value="draw">Draw</option>
            </select>
          </div>
          <input value={draft.match} onChange={(event) => setDraft({ ...draft, match: event.target.value })} placeholder="Match (optional)" />
          <input value={draft.closePrice} onChange={(event) => setDraft({ ...draft, closePrice: event.target.value })} placeholder="Closing odds (optional, for CLV)" inputMode="numeric" />
          <button className="refresh-button" type="submit">Save &amp; grade pick</button>
        </form>

        <div className="model-picks">
          {modelPicks.map((pick) => {
            const brier = brierScore(Number(pick.probability), pick.result);
            const clv = clvPoints(pick.openPrice, pick.closePrice);
            const econ = pickReturn(pick);
            const breakEven = moneylineToProbability(pick.openPrice);
            const edge = breakEven == null ? null : Number(pick.probability) - breakEven;
            return (
              <article className="model-pick-card" key={pick.id}>
                <header>
                  <span>{pick.source}{pick.autoGraded ? " · auto-graded" : pick.autoClosed ? " · auto-close" : pick.autoTracked ? " · tracked" : ""}</span>
                  <button onClick={() => setModelPicks(modelPicks.filter((item) => item.id !== pick.id))}>Remove</button>
                </header>
                <strong>{pick.selection}</strong>
                <p>{pick.match}</p>
                <div className="model-mini-grid">
                  <div><small>Odds</small><b>{formatMoneyline(pick.openPrice)}</b></div>
                  <div><small>Buy-in</small><b>{econ.stake ? `$${econ.stake.toFixed(2)}` : "—"}</b></div>
                  <div><small>Model %</small><b>{formatProbability(Number(pick.probability))}</b></div>
                  <div><small>Edge</small><b>{edge == null ? "—" : `${(edge * 100).toFixed(1)} pts`}</b></div>
                  <div><small>Return</small><b>{econ.actual == null ? "—" : formatCurrency(econ.actual)}</b></div>
                  <div><small>CLV</small><b>{clv == null ? "—" : `${(clv * 100).toFixed(1)} pts`}</b></div>
                  <div><small>Brier</small><b>{brier == null ? "—" : brier.toFixed(3)}</b></div>
                </div>
                <select value={pick.result} onChange={(event) => updateModelPick(pick.id, { result: event.target.value })}>
                  <option value="pending">Pending</option>
                  <option value="win">Win</option>
                  <option value="loss">Loss</option>
                  <option value="draw">Draw</option>
                </select>
                <p>{pick.note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="model-table">
        <div className="model-row model-head">
          <span>Team</span>
          <span>xG for</span>
          <span>xG against</span>
          <span>Form</span>
          <span>Venue edge</span>
          <span>Strength</span>
          <span>News</span>
        </div>
        {teamRatings.map((team, index) => (
          <div className="model-row" key={team.team}>
            <span><b>{team.team}</b></span>
            <input value={team.xgFor} onChange={(event) => updateTeam(index, { xgFor: event.target.value })} />
            <input value={team.xgAgainst} onChange={(event) => updateTeam(index, { xgAgainst: event.target.value })} />
            <input value={team.form} onChange={(event) => updateTeam(index, { form: event.target.value })} />
            <input value={team.homeEdge} onChange={(event) => updateTeam(index, { homeEdge: event.target.value })} />
            <span>{teamStrengthScore(team).toFixed(2)}</span>
            <input value={team.news} onChange={(event) => updateTeam(index, { news: event.target.value })} />
          </div>
        ))}
      </section>

      <article className="algorithm-table">
        <div className="algorithm-row algorithm-head">
          <span>Current candidate</span>
          <span>Line</span>
          <span>Algo chance</span>
          <span>Edge</span>
          <span>EV proxy</span>
          <span>Fair line</span>
          <span>Model note</span>
        </div>
        {rows.map((row) => (
          <div className="algorithm-row" key={row.id}>
            <span><b>{row.selection}</b><small>{row.sport} · {row.match}</small></span>
            <span>{formatMoneyline(row.price)}</span>
            <span>{formatProbability(row.modelProbability)}</span>
            <span>{row.edge == null ? "—" : `${(row.edge * 100).toFixed(1)} pts`}</span>
            <span>{formatCurrency(row.ev)}</span>
            <span>{row.fairLine}</span>
            <span>Track result and closing price before trusting this pattern.</span>
          </div>
        ))}
      </article>
    </section>
  );
}

function BankrollTab({ events, mlbEvents, onTrack, trackedKeys, minProbability = DEFAULT_MIN_PROBABILITY }) {
  const rows = [
    ...bankrollRowsForEvents(events, "Soccer"),
    ...bankrollRowsForEvents(mlbEvents, "MLB")
  ].sort((a, b) => b.score - a.score);
  const topRows = rows.slice(0, 5);
  const tonightBest = bestTonightDraftKingsFirst(events, mlbEvents) || rows[0];

  return (
    <section className="tab-stack">
      <div className="danger-hero">
        <div>
          <p className="label">Bankroll Watch</p>
          <h2>Do not put your net worth on anything.</h2>
          <p>This board ranks the best-looking market spots across Soccer and MLB, with DraftKings prioritized for the free $200 workflow. Long shots below {formatProbability(minProbability)} model chance are filtered out. It is a watchlist, not a command.</p>
        </div>
        <strong>Max sane unit: 0.25%-1%</strong>
      </div>

      {rows.length === 0 ? (
        <div className="empty-state">No candidates clear the {formatProbability(minProbability)} model-chance floor right now.</div>
      ) : null}

      {tonightBest ? (
        <article className={`tonight-pick ${tonightBest.preferredBook ? "preferred" : ""}`}>
          <span>Best pick for tonight · DraftKings first</span>
          <strong>{tonightBest.selection}</strong>
          <p>{tonightBest.sport} · {tonightBest.match} · {tonightBest.book}{tonightBest.preferredBook ? " · preferred book" : " · fallback book"}</p>
          <div className="bankroll-stats">
            <div><small>Line</small><b>{formatMoneyline(tonightBest.price)}</b></div>
            <div><small>Algo chance</small><b>{formatProbability(tonightBest.modelProbability)}</b></div>
            <div><small>Edge</small><b>{tonightBest.edge == null ? "—" : `${(tonightBest.edge * 100).toFixed(1)} pts`}</b></div>
            <div><small>EV proxy</small><b>{formatCurrency(tonightBest.ev)}</b></div>
          </div>
          <footer>
            <em>{tonightBest.stake}</em>
            {onTrack ? <TrackButton row={tonightBest} onTrack={onTrack} trackedKeys={trackedKeys} label="Track this pick" /> : null}
            <small>Score {tonightBest.score.toFixed(1)} · fair {tonightBest.fairLine}{formatIntelAdjustment(tonightBest.intelAdjustment) ? ` · intel ${formatIntelAdjustment(tonightBest.intelAdjustment)}` : ""} · use DraftKings if the line is available and still current.</small>
          </footer>
        </article>
      ) : null}

      <div className="bankroll-grid">
        {topRows.map((row, index) => (
          <article className="bankroll-card" key={row.id}>
            <span>Rank #{index + 1} · {row.sport} · {row.book}</span>
            <strong>{row.selection}</strong>
            <p>{row.match}</p>
            <div className="bankroll-stats">
              <div><small>Line</small><b>{formatMoneyline(row.price)}</b></div>
              <div><small>No-vig hit chance</small><b>{formatProbability(row.modelProbability)}</b></div>
              <div><small>$100 profit</small><b>{formatCurrency(row.profit)}</b></div>
              <div><small>EV proxy</small><b>{formatCurrency(row.ev)}</b></div>
            </div>
            <footer>
              <em>{row.stake}</em>
              {onTrack ? <TrackButton row={row} onTrack={onTrack} trackedKeys={trackedKeys} /> : null}
              <small>Score {row.score.toFixed(1)} · fair {row.fairLine}{formatIntelAdjustment(row.intelAdjustment) ? ` · intel ${formatIntelAdjustment(row.intelAdjustment)}` : ""}</small>
            </footer>
          </article>
        ))}
      </div>

      <article className="rules-panel">
        <h3>Bankroll rules baked into this tab</h3>
        <div>
          <p><b>Never 100%.</b> No pick is worth rent, savings, emergency cash, or your whole account.</p>
          <p><b>Market math is not prophecy.</b> No-vig odds estimate chance from prices. They do not know injuries, tactics, or chaos.</p>
          <p><b>Profit needs probability.</b> A huge plus line is only attractive if the real chance beats the break-even chance.</p>
        </div>
      </article>
    </section>
  );
}

function HistoryTab({ snapshots, setSnapshots }) {
  function clearSnapshots() {
    setSnapshots([]);
    writeStorage(SNAPSHOT_KEY, []);
  }

  return (
    <section className="tab-stack">
      <div className="section-heading">
        <div>
          <p className="label">Line movement</p>
          <h2>Saved snapshots</h2>
        </div>
        <button className="subtle-button" onClick={clearSnapshots} disabled={!snapshots.length}>Clear history</button>
      </div>
      <div className="history-list">
        {snapshots.length ? snapshots.map((snapshot) => (
          <article className="history-card" key={snapshot.id}>
            <header>
              <div>
                <span>{snapshot.source}</span>
                <strong>{formatDate(snapshot.at)}</strong>
              </div>
              <p>{snapshot.eventCount} matches</p>
            </header>
            {snapshot.lines.map((line) => (
              <div className="snapshot-line" key={line.match}>
                <b>{line.match}</b>
                <p>{line.best.map((entry) => `${entry.name} ${formatMoneyline(entry.price)} ${entry.book ? `(${entry.book})` : ""}`).join(" · ")}</p>
              </div>
            ))}
          </article>
        )) : (
          <div className="empty-state">Refresh odds once and this tab will start saving line snapshots locally.</div>
        )}
      </div>
    </section>
  );
}

function PicksTab({ addPick, pickDraft, picks, setPickDraft, setPicks }) {
  return (
    <section className="picks-layout">
      <form className="pick-form" onSubmit={addPick}>
        <p className="label">Pick notebook</p>
        <h2>Add a research pick</h2>
        <input value={pickDraft.match} onChange={(event) => setPickDraft({ ...pickDraft, match: event.target.value })} placeholder="Match" />
        <div className="form-row">
          <select value={pickDraft.market} onChange={(event) => setPickDraft({ ...pickDraft, market: event.target.value })}>
            <option>90-minute moneyline</option>
            <option>To advance</option>
            <option>Futures</option>
            <option>PrizePicks props</option>
          </select>
          <input value={pickDraft.price} onChange={(event) => setPickDraft({ ...pickDraft, price: event.target.value })} placeholder="Price / line" />
        </div>
        <input value={pickDraft.selection} onChange={(event) => setPickDraft({ ...pickDraft, selection: event.target.value })} placeholder="Selection" />
        <div className="form-row">
          <select value={pickDraft.source} onChange={(event) => setPickDraft({ ...pickDraft, source: event.target.value })}>
            <option>Bovada</option>
            <option>DraftKings</option>
            <option>PrizePicks</option>
            <option>The Odds API</option>
            <option>Manual research</option>
          </select>
          <select value={pickDraft.confidence} onChange={(event) => setPickDraft({ ...pickDraft, confidence: event.target.value })}>
            <option>Research</option>
            <option>Lean</option>
            <option>Medium</option>
            <option>Strong</option>
          </select>
        </div>
        <textarea value={pickDraft.note} onChange={(event) => setPickDraft({ ...pickDraft, note: event.target.value })} placeholder="Notes, why, what to re-check" rows="4" />
        <button className="refresh-button" type="submit">Save pick</button>
      </form>

      <section className="pick-list">
        {picks.map((pick) => (
          <article className="pick-card" key={pick.id}>
            <header>
              <span>{pick.source} · {pick.market}</span>
              <button onClick={() => setPicks(picks.filter((item) => item.id !== pick.id))}>Remove</button>
            </header>
            <strong>{pick.selection}</strong>
            <p>{pick.match}{pick.price ? ` · ${pick.price}` : ""}</p>
            <small>{pick.confidence} · {pick.status}</small>
            <p>{pick.note}</p>
          </article>
        ))}
      </section>
    </section>
  );
}

function ResearchBoard() {
  const strongestBaseline = [...futureMatchBaseline.matches]
    .sort((a, b) => (b.topOutcome?.probability ?? 0) - (a.topOutcome?.probability ?? 0))
    .slice(0, 8);
  const drawBaseline = [...futureMatchBaseline.matches]
    .sort((a, b) => (b.pDraw ?? 0) - (a.pDraw ?? 0))
    .slice(0, 6);

  return (
    <section className="research-board">
      <div className="section-heading">
        <div>
          <p className="label">Research board</p>
          <h2>What I found so far</h2>
        </div>
        <p>Snapshot researched June 30, 2026. Re-check live lines before making any decision.</p>
      </div>

      <div className="source-grid">
        {researchCards.map((card) => (
          <a className="source-card" href={card.link} target="_blank" rel="noreferrer" key={card.title}>
            <span>{card.status}</span>
            <strong>{card.title}</strong>
            <p>{card.body}</p>
          </a>
        ))}
      </div>

      <div className="research-columns">
        <article className="research-panel">
          <h3>Today and upcoming</h3>
          <div className="note-list">
            {todayNotes.map((item) => (
              <div className="note-item" key={item.match}>
                <span>{item.time}</span>
                <strong>{item.match}</strong>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="research-panel">
          <h3>Data plan</h3>
          <div className="note-list">
            <div className="note-item">
              <span>Current</span>
              <strong>Use h2h for moneylines</strong>
              <p>Best automated starter is The Odds API. DraftKings is prioritized for tonight's bankroll workflow; other books remain comparison sources.</p>
            </div>
            <div className="note-item">
              <span>Historical</span>
              <strong>Snapshots now, paid history later</strong>
              <p>The app saves each refresh locally today. Paid historical odds can be added when you choose a provider.</p>
            </div>
          </div>
        </article>
      </div>

      <div className="section-heading compact">
        <div>
          <p className="label">Future baseline priors</p>
          <h2>2026 group match probability file</h2>
        </div>
        <p>{futureMatchBaseline.totalMatches} imported match priors from Elo and injury flags. These feed the algorithm as research priors when a matchup matches.</p>
      </div>

      <div className="research-columns">
        <article className="research-panel">
          <h3>Strongest baseline favorites</h3>
          <div className="note-list">
            {strongestBaseline.map((match) => (
              <div className="note-item" key={match.id}>
                <span>Group {match.group} · Elo diff {match.eloDiff == null ? "unknown" : match.eloDiff}</span>
                <strong>{match.topOutcome.name} · {formatProbability(match.topOutcome.probability)}</strong>
                <p>{match.homeTeam} {formatProbability(match.pHome)} · Draw {formatProbability(match.pDraw)} · {match.awayTeam} {formatProbability(match.pAway)}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="research-panel">
          <h3>Highest draw baselines</h3>
          <div className="note-list">
            {drawBaseline.map((match) => (
              <div className="note-item" key={match.id}>
                <span>Group {match.group}</span>
                <strong>{match.homeTeam} vs {match.awayTeam}</strong>
                <p>Draw {formatProbability(match.pDraw)} · home {formatProbability(match.pHome)} · away {formatProbability(match.pAway)}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="algorithm-table">
        <div className="baseline-row baseline-head">
          <span>Group</span>
          <span>Matches</span>
          <span>Avg draw</span>
          <span>Most frequent favorite</span>
        </div>
        {futureMatchBaseline.groupSummary.map((group) => {
          const favorite = Object.entries(group.favoriteCount || {}).sort((a, b) => b[1] - a[1])[0];
          return (
            <div className="baseline-row" key={group.group}>
              <span>Group {group.group}</span>
              <span>{group.matches}</span>
              <span>{formatProbability(group.avgDraw)}</span>
              <span>{favorite ? `${favorite[0]} (${favorite[1]}x)` : "—"}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
