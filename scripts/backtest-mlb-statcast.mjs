import fs from "node:fs";
import path from "node:path";

const SOURCE = process.argv[2] || "/Users/cashmcdearis/Downloads/Data_MLB_2025_StatcastPostseason_PitchByPitch_20251102a.csv";
const OUT = path.resolve("src/mlbBacktestData.js");
const MLB_BACKTEST_COMPRESSION = 0.78;
const MLB_BACKTEST_CAP = 0.82;
const AFTERLOSS_LOGIT_SCALE = 0.6;
const AFTERLOSS_LEAGUE_AVG = 0.5;
const AFTERLOSS_WINPCT = {
  LAD: 0.637,
  HOU: 0.587,
  ATL: 0.568,
  MIL: 0.565,
  PHI: 0.555,
  SD: 0.554,
  COL: 0.361,
  CWS: 0.378,
  OAK: 0.403,
  KC: 0.43,
  WSH: 0.432,
  LAA: 0.436
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted && char === '"' && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (!quoted && char === ",") {
      row.push(cell);
      cell = "";
    } else if (!quoted && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    if (row.some((value) => value.trim() !== "")) rows.push(row);
  }
  return rows;
}

function num(value, fallback = null) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function clamp(value, lo, hi) {
  return Math.max(lo, Math.min(hi, value));
}

function logistic(value) {
  return 1 / (1 + Math.exp(-value));
}

function emptyTeam() {
  return {
    games: 0,
    wins: 0,
    runsFor: 0,
    runsAgainst: 0,
    xwobaForSum: 0,
    xwobaForCount: 0,
    xwobaAgainstSum: 0,
    xwobaAgainstCount: 0,
    hardHitFor: 0,
    bbeFor: 0,
    hardHitAgainst: 0,
    bbeAgainst: 0,
    whiffsFor: 0,
    swingsFor: 0,
    whiffsAgainst: 0,
    swingsAgainst: 0,
    cswPitching: 0,
    pitchesPitching: 0,
    lastResult: null
  };
}

function getTeam(map, team) {
  if (!map.has(team)) map.set(team, emptyTeam());
  return map.get(team);
}

function rate(sum, count, fallback = 0) {
  return count ? sum / count : fallback;
}

function teamStrength(team) {
  if (!team.games) return 0;
  const runDiff = (team.runsFor - team.runsAgainst) / team.games;
  const batting = rate(team.xwobaForSum, team.xwobaForCount, 0.315);
  const pitching = rate(team.xwobaAgainstSum, team.xwobaAgainstCount, 0.315);
  const hardHitEdge = rate(team.hardHitFor, team.bbeFor, 0.36) - rate(team.hardHitAgainst, team.bbeAgainst, 0.36);
  const whiffEdge = rate(team.whiffsAgainst, team.swingsAgainst, 0.24) - rate(team.whiffsFor, team.swingsFor, 0.24);
  const csw = rate(team.cswPitching, team.pitchesPitching, 0.28);
  const winRate = team.wins / team.games;
  return (
    runDiff * 0.18 +
    (batting - 0.315) * 5.5 -
    (pitching - 0.315) * 5.5 +
    hardHitEdge * 1.2 +
    whiffEdge * 0.9 +
    (csw - 0.28) * 1.4 +
    (winRate - 0.5) * 0.45
  );
}

function afterLossLogit(team, teamState) {
  if (teamState.lastResult !== "loss") return 0;
  const winPct = AFTERLOSS_WINPCT[team];
  if (winPct == null) return 0;
  return clamp((winPct - AFTERLOSS_LEAGUE_AVG) * AFTERLOSS_LOGIT_SCALE, -0.08, 0.08);
}

function prediction(home, away, homeTeam, awayTeam) {
  const homeStrength = teamStrength(homeTeam);
  const awayStrength = teamStrength(awayTeam);
  const coldStart = Math.min(homeTeam.games, awayTeam.games) === 0;
  const afterLossHome = afterLossLogit(home, homeTeam);
  const afterLossAway = afterLossLogit(away, awayTeam);
  const logit = 0.12 + homeStrength - awayStrength + afterLossHome - afterLossAway;
  const rawHomeProbability = coldStart ? 0.54 : clamp(logistic(logit), 1 - MLB_BACKTEST_CAP, MLB_BACKTEST_CAP);
  const homeProbability = clamp(0.5 + (rawHomeProbability - 0.5) * MLB_BACKTEST_COMPRESSION, 1 - MLB_BACKTEST_CAP, MLB_BACKTEST_CAP);
  const awayProbability = 1 - homeProbability;
  const predicted = homeProbability >= awayProbability ? home : away;
  return {
    homeProbability,
    awayProbability,
    predicted,
    confidence: Math.max(homeProbability, awayProbability),
    homeStrength,
    awayStrength,
    coldStart,
    rawHomeProbability,
    afterLossHome,
    afterLossAway
  };
}

function isSwing(description) {
  return ["swinging_strike", "swinging_strike_blocked", "foul", "foul_tip", "hit_into_play", "foul_bunt", "missed_bunt"].includes(description);
}

function isWhiff(description) {
  return ["swinging_strike", "swinging_strike_blocked", "missed_bunt"].includes(description);
}

function isCalledOrWhiff(description) {
  return description === "called_strike" || isWhiff(description);
}

function brier(probability, won) {
  return (probability - (won ? 1 : 0)) ** 2;
}

function bucketFor(confidence) {
  if (confidence >= 0.7) return "70%+";
  if (confidence >= 0.6) return "60-70%";
  if (confidence >= 0.55) return "55-60%";
  return "<55%";
}

function groupStats(rows, keyFn) {
  const grouped = rows.reduce((acc, row) => {
    const key = keyFn(row);
    acc[key] ||= { key, matches: 0, correct: 0, misses: 0, avgBrier: 0, avgConfidence: 0 };
    acc[key].matches += 1;
    acc[key].correct += row.correct ? 1 : 0;
    acc[key].misses += row.correct ? 0 : 1;
    acc[key].avgBrier += row.brier;
    acc[key].avgConfidence += row.confidence;
    return acc;
  }, {});
  return Object.values(grouped).map((row) => ({
    ...row,
    accuracy: row.matches ? row.correct / row.matches : null,
    missRate: row.matches ? row.misses / row.matches : null,
    avgBrier: row.matches ? row.avgBrier / row.matches : null,
    avgConfidence: row.matches ? row.avgConfidence / row.matches : null
  })).sort((a, b) => b.misses - a.misses || b.missRate - a.missRate);
}

const raw = fs.readFileSync(SOURCE, "utf8");
const rows = parseCsv(raw);
const header = rows.shift();
const index = Object.fromEntries(header.map((name, i) => [name, i]));

const byGame = new Map();
for (const row of rows) {
  const gamePk = row[index.game_pk];
  if (!gamePk) continue;
  const game = byGame.get(gamePk) || {
    gamePk,
    date: row[index.game_date],
    year: Number(row[index.game_year]),
    home: row[index.home_team],
    away: row[index.away_team],
    pitches: [],
    homeScore: 0,
    awayScore: 0
  };
  const postHome = num(row[index.post_home_score], game.homeScore);
  const postAway = num(row[index.post_away_score], game.awayScore);
  game.homeScore = Math.max(game.homeScore, postHome ?? 0);
  game.awayScore = Math.max(game.awayScore, postAway ?? 0);
  game.pitches.push(row);
  byGame.set(gamePk, game);
}

const games = [...byGame.values()].sort((a, b) => a.date.localeCompare(b.date) || Number(a.gamePk) - Number(b.gamePk));
const teams = new Map();
const predictions = [];

for (const game of games) {
  const homeTeam = getTeam(teams, game.home);
  const awayTeam = getTeam(teams, game.away);
  const pred = prediction(game.home, game.away, homeTeam, awayTeam);
  const actual = game.homeScore > game.awayScore ? game.home : game.away;
  const correct = pred.predicted === actual;
  const predictedProbability = pred.predicted === game.home ? pred.homeProbability : pred.awayProbability;
  const row = {
    gamePk: game.gamePk,
    date: game.date,
    home: game.home,
    away: game.away,
    homeScore: game.homeScore,
    awayScore: game.awayScore,
    actual,
    correct,
    ...pred,
    brier: brier(predictedProbability, correct)
  };
  predictions.push(row);

  const gameTeamStats = new Map([[game.home, emptyTeam()], [game.away, emptyTeam()]]);
  for (const pitch of game.pitches) {
    const batting = pitch[index.inning_topbot] === "Top" ? game.away : game.home;
    const fielding = batting === game.home ? game.away : game.home;
    const batStats = getTeam(gameTeamStats, batting);
    const pitchStats = getTeam(gameTeamStats, fielding);
    const xwoba = num(pitch[index.estimated_woba_using_speedangle], num(pitch[index.woba_value], null));
    if (xwoba != null) {
      batStats.xwobaForSum += xwoba;
      batStats.xwobaForCount += 1;
      pitchStats.xwobaAgainstSum += xwoba;
      pitchStats.xwobaAgainstCount += 1;
    }
    const launchSpeed = num(pitch[index.launch_speed], null);
    if (launchSpeed != null) {
      batStats.bbeFor += 1;
      pitchStats.bbeAgainst += 1;
      if (launchSpeed >= 95) {
        batStats.hardHitFor += 1;
        pitchStats.hardHitAgainst += 1;
      }
    }
    const desc = pitch[index.description];
    if (isSwing(desc)) {
      batStats.swingsFor += 1;
      pitchStats.swingsAgainst += 1;
      if (isWhiff(desc)) {
        batStats.whiffsFor += 1;
        pitchStats.whiffsAgainst += 1;
      }
    }
    pitchStats.pitchesPitching += 1;
    if (isCalledOrWhiff(desc)) pitchStats.cswPitching += 1;
  }

  for (const teamName of [game.home, game.away]) {
    const seasonStats = getTeam(teams, teamName);
    const gameStats = getTeam(gameTeamStats, teamName);
    const isHome = teamName === game.home;
    const runsFor = isHome ? game.homeScore : game.awayScore;
    const runsAgainst = isHome ? game.awayScore : game.homeScore;
    seasonStats.games += 1;
    seasonStats.wins += actual === teamName ? 1 : 0;
    seasonStats.lastResult = actual === teamName ? "win" : "loss";
    seasonStats.runsFor += runsFor;
    seasonStats.runsAgainst += runsAgainst;
    for (const key of [
      "xwobaForSum", "xwobaForCount", "xwobaAgainstSum", "xwobaAgainstCount",
      "hardHitFor", "bbeFor", "hardHitAgainst", "bbeAgainst",
      "whiffsFor", "swingsFor", "whiffsAgainst", "swingsAgainst",
      "cswPitching", "pitchesPitching"
    ]) {
      seasonStats[key] += gameStats[key];
    }
  }
}

const correct = predictions.filter((row) => row.correct).length;
const summary = {
  source: SOURCE,
  generatedAt: new Date().toISOString(),
  totalGames: predictions.length,
  correct,
  accuracy: predictions.length ? correct / predictions.length : null,
  avgBrier: predictions.reduce((sum, row) => sum + row.brier, 0) / predictions.length,
  firstGame: predictions[0]?.date,
  lastGame: predictions[predictions.length - 1]?.date,
  note: "2025 postseason Statcast file has pitch-by-pitch data and final scores but no betting odds, so this v1.3-style backtest applies MLB probability compression and rolling after-loss priors but cannot test market blend, EV, or ROI."
};

const missAnalysis = {
  headline: [
    "The sample is small because this is postseason-only data.",
    "Cold-start games are noisy until each team has postseason Statcast history.",
    "This is useful for feature discovery: xwOBA, hard-hit, whiff, CSW, and run differential can feed the live MLB model."
  ],
  byPrediction: groupStats(predictions, (row) => row.predicted === row.home ? "Predicted home" : "Predicted away"),
  byActual: groupStats(predictions, (row) => row.actual === row.home ? "Actual home" : "Actual away"),
  byConfidence: groupStats(predictions, (row) => bucketFor(row.confidence)),
  byColdStart: groupStats(predictions, (row) => row.coldStart ? "Cold start" : "Prior Statcast data"),
  byMatchup: groupStats(predictions, (row) => `${row.home} vs ${row.away}`).slice(0, 12),
  worstHighConfidenceMisses: predictions
    .filter((row) => !row.correct)
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 10)
};

const output = {
  summary,
  missAnalysis,
  predictions
};

fs.writeFileSync(OUT, `export const mlbBacktest = ${JSON.stringify(output, null, 2)};\n`);
console.log(`Wrote ${OUT}`);
console.log(`${summary.correct}/${summary.totalGames} correct (${(summary.accuracy * 100).toFixed(1)}%) · Brier ${summary.avgBrier.toFixed(3)}`);
