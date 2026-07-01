import fs from "node:fs";
import path from "node:path";

// Fits the hand-set constants in soccerModel()/mlbModel() (src/main.jsx) to the same
// historical datasets scripts/backtest-worldcup.mjs and scripts/backtest-mlb-statcast.mjs
// already use — via regularized gradient descent with a chronological holdout, instead of
// guessing them. Pure statistical structure (Dixon-Coles Poisson for Soccer, a two-way
// logistic for MLB) is UNCHANGED; only the coefficients feeding those formulas are learned.
//
// Only fits constants that are actually usable live: the walk-forward team-state builders
// below mirror exactly what the live app can compute from a real-time feed (season-to-date
// xG/form for Soccer seeds, run-differential-based team strength for MLB — see
// fetchMlbTeamRatings() in main.jsx). Constants with no live-comparable signal (starter xERA
// coefficient, the live market-draw anchor weight) are left as documented hand-set defaults.

const WORLD_CUP_SOURCE = process.argv[2] || "/Users/cashmcdearis/Downloads/WorldCupMatches.csv";
const MLB_SOURCE = process.argv[3] || "/Users/cashmcdearis/Downloads/Data_MLB_2025_StatcastPostseason_PitchByPitch_20251102a.csv";
const OUT = path.resolve("src/mlCalibration.js");

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

function clamp(value, lo, hi) {
  return Math.max(lo, Math.min(hi, value));
}

function num(value, fallback = null) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function logistic(value) {
  return 1 / (1 + Math.exp(-value));
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

function dixonColesTau(i, j, lambdaHome, lambdaAway, rho) {
  if (i === 0 && j === 0) return 1 - lambdaHome * lambdaAway * rho;
  if (i === 0 && j === 1) return 1 + lambdaHome * rho;
  if (i === 1 && j === 0) return 1 + lambdaAway * rho;
  if (i === 1 && j === 1) return 1 - rho;
  return 1;
}

// Cross-entropy against the true one-hot outcome, floored so a confident wrong call doesn't
// produce -Infinity and derail gradient descent.
const LOSS_FLOOR = 1e-6;
function crossEntropy(p, actual) {
  return -Math.log(clamp(p, LOSS_FLOOR, 1 - LOSS_FLOOR)) * (actual ? 1 : 1); // actual gates which p is passed in
}

// Generic finite-difference gradient descent with momentum, operating in per-parameter
// normalized units so heterogeneous scales (rho ~ 0.05, formTiltScale ~ 40) share one learning
// rate. L2-regularized toward `priors` (the current hand-set constants) so a thin sample (MLB:
// ~47 games) shrinks back toward the existing defaults instead of overfitting noise — same
// shrink-toward-prior idiom the live app already uses for the adaptive blend weight.
function fitParams(priors, scales, lossFn, { iterations = 260, lr = 0.18, l2 = 0.02, momentum = 0.82, bounds = {} } = {}) {
  const keys = Object.keys(priors);
  const denorm = (norm) => {
    const params = {};
    for (const k of keys) {
      const value = norm[k] * scales[k];
      const [lo, hi] = bounds[k] || [-Infinity, Infinity];
      params[k] = clamp(value, lo, hi);
    }
    return params;
  };
  const lossWithReg = (params) => {
    let loss = lossFn(params);
    for (const k of keys) loss += l2 * ((params[k] - priors[k]) / scales[k]) ** 2;
    return loss;
  };

  let norm = Object.fromEntries(keys.map((k) => [k, priors[k] / scales[k]]));
  let velocity = Object.fromEntries(keys.map((k) => [k, 0]));
  const step = 0.02;

  for (let iter = 0; iter < iterations; iter += 1) {
    const base = lossWithReg(denorm(norm));
    const grad = {};
    for (const k of keys) {
      const bumped = { ...norm, [k]: norm[k] + step };
      grad[k] = (lossWithReg(denorm(bumped)) - base) / step;
    }
    for (const k of keys) {
      velocity[k] = momentum * velocity[k] - lr * grad[k];
      norm[k] += velocity[k];
    }
  }
  return denorm(norm);
}

function chronoSplit(rows, trainFraction = 0.8) {
  const cut = Math.floor(rows.length * trainFraction);
  return { train: rows.slice(0, cut), holdout: rows.slice(cut) };
}

// ============================================================================
// Soccer: World Cup historical matches
// ============================================================================

function parseDate(year, datetime) {
  const match = String(datetime || "").match(/(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})/);
  if (!match) return `${year}-01-01`;
  const months = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
  return `${match[3]}-${months[match[2]] || "01"}-${String(match[1]).padStart(2, "0")}`;
}

const LEAGUE_AVG_GOALS = 1.35;
const MAX_GOALS = 8;
const FORM_DECAY = 0.82;

function loadWorldCupMatches(source) {
  const raw = fs.readFileSync(source, "utf8");
  const rows = parseCsv(raw);
  const header = rows.shift();
  const index = Object.fromEntries(header.map((name, i) => [name, i]));
  return rows
    .map((row) => ({
      year: Number(row[index.Year]),
      date: parseDate(row[index.Year], row[index.Datetime]),
      home: row[index["Home Team Name"]],
      away: row[index["Away Team Name"]],
      homeGoals: Number(row[index["Home Team Goals"]]),
      awayGoals: Number(row[index["Away Team Goals"]]),
      matchId: row[index.MatchID]
    }))
    .filter((m) => m.year && m.home && m.away && Number.isFinite(m.homeGoals) && Number.isFinite(m.awayGoals))
    .sort((a, b) => a.date.localeCompare(b.date) || Number(a.matchId) - Number(b.matchId));
}

function defaultSoccerTeam() {
  return { matches: 0, goalsFor: LEAGUE_AVG_GOALS, goalsAgainst: LEAGUE_AVG_GOALS, weightedPoints: 0, weightedMatches: 0 };
}

function soccerTeamRating(team) {
  const sample = Math.max(1, Math.min(team.matches, 12));
  const form = team.weightedMatches ? 5 + (team.weightedPoints / team.weightedMatches - 1) * 2.2 : 5;
  return {
    xgFor: clamp(team.goalsFor / sample, 0.35, 3),
    xgAgainst: clamp(team.goalsAgainst / sample, 0.35, 3),
    form: clamp(form, 1, 10)
  };
}

function updateSoccerTeam(team, goalsFor, goalsAgainst) {
  const points = goalsFor > goalsAgainst ? 3 : goalsFor === goalsAgainst ? 1 : 0;
  team.matches += 1;
  team.goalsFor = team.goalsFor * FORM_DECAY + goalsFor;
  team.goalsAgainst = team.goalsAgainst * FORM_DECAY + goalsAgainst;
  team.weightedPoints = team.weightedPoints * FORM_DECAY + points;
  team.weightedMatches = team.weightedMatches * FORM_DECAY + 1;
}

// Walk every match once, building each pre-match feature snapshot (no lookahead — team state
// only reflects matches strictly before this one) so the same feature set can be scored under
// both the old hand-set params and any candidate fitted params without re-walking the data.
function buildSoccerSnapshots(matches) {
  const teams = new Map();
  const snapshots = [];
  for (const match of matches) {
    if (!teams.has(match.home)) teams.set(match.home, defaultSoccerTeam());
    if (!teams.has(match.away)) teams.set(match.away, defaultSoccerTeam());
    const homeTeam = teams.get(match.home);
    const awayTeam = teams.get(match.away);
    snapshots.push({
      home: soccerTeamRating(homeTeam),
      away: soccerTeamRating(awayTeam),
      actual: match.homeGoals > match.awayGoals ? "Home" : match.homeGoals < match.awayGoals ? "Away" : "Draw"
    });
    updateSoccerTeam(homeTeam, match.homeGoals, match.awayGoals);
    updateSoccerTeam(awayTeam, match.awayGoals, match.homeGoals);
  }
  return snapshots;
}

// Mirrors soccerModel() + the draw-cap half of calibrateModelOutcomes() in src/main.jsx. The
// live market-draw anchor step is intentionally NOT reproduced here — there is no market data
// in a 1930-2014 results file, so that constant (SOCCER_DRAW_ANCHOR_WEIGHT) stays hand-set.
function soccerPredict(home, away, params) {
  const formHome = 1 + (home.form - 6) / params.formTiltScale;
  const formAway = 1 + (away.form - 6) / params.formTiltScale;
  const venueBoost = 1 + params.baseHomeBoost;
  const lambdaHome = ((home.xgFor * away.xgAgainst) / LEAGUE_AVG_GOALS) * venueBoost * formHome;
  const lambdaAway = ((away.xgFor * home.xgAgainst) / LEAGUE_AVG_GOALS) * formAway;

  let pHome = 0;
  let pDraw = 0;
  let pAway = 0;
  for (let i = 0; i <= MAX_GOALS; i += 1) {
    for (let j = 0; j <= MAX_GOALS; j += 1) {
      const cell = dixonColesTau(i, j, lambdaHome, lambdaAway, params.rho) * poisson(i, lambdaHome) * poisson(j, lambdaAway);
      if (i > j) pHome += cell;
      else if (i === j) pDraw += cell;
      else pAway += cell;
    }
  }
  const total = pHome + pDraw + pAway || 1;
  pHome /= total;
  pDraw /= total;
  pAway /= total;

  if (pDraw > params.drawSoftCap) {
    const removed = pDraw - (params.drawSoftCap + (pDraw - params.drawSoftCap) * 0.35);
    const nextDraw = pDraw - removed;
    const sideTotal = pHome + pAway || 1;
    pHome += removed * (pHome / sideTotal);
    pAway += removed * (pAway / sideTotal);
    pDraw = nextDraw;
  }
  return { pHome, pDraw, pAway };
}

function soccerLoss(snapshots, params) {
  let loss = 0;
  for (const snap of snapshots) {
    const { pHome, pDraw, pAway } = soccerPredict(snap.home, snap.away, params);
    const p = snap.actual === "Home" ? pHome : snap.actual === "Draw" ? pDraw : pAway;
    loss += -Math.log(clamp(p, LOSS_FLOOR, 1 - LOSS_FLOOR));
  }
  return loss / snapshots.length;
}

function soccerEvaluate(snapshots, params) {
  let correct = 0;
  let brierSum = 0;
  for (const snap of snapshots) {
    const { pHome, pDraw, pAway } = soccerPredict(snap.home, snap.away, params);
    const predicted = pHome >= pDraw && pHome >= pAway ? "Home" : pDraw >= pAway ? "Draw" : "Away";
    if (predicted === snap.actual) correct += 1;
    brierSum +=
      (pHome - (snap.actual === "Home" ? 1 : 0)) ** 2 +
      (pDraw - (snap.actual === "Draw" ? 1 : 0)) ** 2 +
      (pAway - (snap.actual === "Away" ? 1 : 0)) ** 2;
  }
  return { accuracy: correct / snapshots.length, avgBrier: brierSum / snapshots.length / 3, matches: snapshots.length };
}

function trainSoccer() {
  const matches = loadWorldCupMatches(WORLD_CUP_SOURCE);
  const snapshots = buildSoccerSnapshots(matches);
  const { train, holdout } = chronoSplit(snapshots, 0.8);

  const priors = { formTiltScale: 40, rho: -0.05, baseHomeBoost: 0, drawSoftCap: 0.34 };
  const scales = { formTiltScale: 10, rho: 0.05, baseHomeBoost: 0.05, drawSoftCap: 0.08 };
  const bounds = { formTiltScale: [15, 100], rho: [-0.25, 0.15], baseHomeBoost: [-0.1, 0.25], drawSoftCap: [0.18, 0.45] };

  const fitted = fitParams(priors, scales, (params) => soccerLoss(train, params), {
    l2: 0.015,
    bounds
  });

  return {
    priors,
    fitted,
    trainSize: train.length,
    holdoutSize: holdout.length,
    before: { train: soccerEvaluate(train, priors), holdout: soccerEvaluate(holdout, priors) },
    after: { train: soccerEvaluate(train, fitted), holdout: soccerEvaluate(holdout, fitted) }
  };
}

// ============================================================================
// MLB: 2025 postseason Statcast pitch-by-pitch, aggregated to run-diff team state
// ============================================================================

// Same short-code table as scripts/backtest-mlb-statcast.mjs (Statcast's home_team/away_team
// columns are 2-3 letter codes, not full names) — duplicated rather than imported because this
// is a standalone Node script and main.jsx is JSX (see that script for the same choice).
const AFTERLOSS_WINPCT = {
  LAD: 0.637, HOU: 0.587, ATL: 0.568, MIL: 0.565, PHI: 0.555, SD: 0.554,
  COL: 0.361, CWS: 0.378, OAK: 0.403, KC: 0.43, WSH: 0.432, LAA: 0.436
};
const AFTERLOSS_LEAGUE_AVG = 0.5;

function loadMlbGames(source) {
  const raw = fs.readFileSync(source, "utf8");
  const rows = parseCsv(raw);
  const header = rows.shift();
  const index = Object.fromEntries(header.map((name, i) => [name, i]));
  const byGame = new Map();
  for (const row of rows) {
    const gamePk = row[index.game_pk];
    if (!gamePk) continue;
    const game = byGame.get(gamePk) || {
      gamePk, date: row[index.game_date], home: row[index.home_team], away: row[index.away_team],
      homeScore: 0, awayScore: 0
    };
    game.homeScore = Math.max(game.homeScore, num(row[index.post_home_score], 0) ?? 0);
    game.awayScore = Math.max(game.awayScore, num(row[index.post_away_score], 0) ?? 0);
    byGame.set(gamePk, game);
  }
  return [...byGame.values()].sort((a, b) => a.date.localeCompare(b.date) || Number(a.gamePk) - Number(b.gamePk));
}

function defaultMlbTeam() {
  return { games: 0, runsFor: 0, runsAgainst: 0, wins: 0, lastResult: null };
}

// Mirrors fetchMlbTeamRatings() in main.jsx: runs-per-game diff + win%-derived form, mapped
// onto the same teamStrengthScore() shape the live app uses (xgFor - xgAgainst + (form-5)/10),
// so the fitted strengthK/homeLogit transfer directly to the live auto-derived MLB ratings —
// NOT the richer Statcast xwOBA/hard-hit/whiff/CSW features, which have no live-feed equivalent.
function mlbTeamStrength(team) {
  if (!team.games) return 0;
  const runsFor = team.runsFor / team.games;
  const runsAgainst = team.runsAgainst / team.games;
  const winPct = team.wins / team.games;
  const form = clamp(winPct * 10, 1, 10);
  return runsFor - runsAgainst + (form - 5) / 10;
}

function afterLossLogit(teamCode, teamState, scale) {
  if (teamState.lastResult !== "loss") return 0;
  const winPct = AFTERLOSS_WINPCT[teamCode];
  if (winPct == null) return 0;
  return clamp((winPct - AFTERLOSS_LEAGUE_AVG) * scale, -0.08, 0.08);
}

function buildMlbSnapshots(games) {
  const teams = new Map();
  const snapshots = [];
  for (const game of games) {
    if (!teams.has(game.home)) teams.set(game.home, defaultMlbTeam());
    if (!teams.has(game.away)) teams.set(game.away, defaultMlbTeam());
    const homeTeam = teams.get(game.home);
    const awayTeam = teams.get(game.away);
    const actualHome = game.homeScore > game.awayScore;
    snapshots.push({
      homeCode: game.home,
      awayCode: game.away,
      homeStrength: mlbTeamStrength(homeTeam),
      awayStrength: mlbTeamStrength(awayTeam),
      homeLastResult: homeTeam.lastResult,
      awayLastResult: awayTeam.lastResult,
      actualHome
    });
    homeTeam.games += 1;
    homeTeam.runsFor += game.homeScore;
    homeTeam.runsAgainst += game.awayScore;
    homeTeam.wins += actualHome ? 1 : 0;
    homeTeam.lastResult = actualHome ? "win" : "loss";
    awayTeam.games += 1;
    awayTeam.runsFor += game.awayScore;
    awayTeam.runsAgainst += game.homeScore;
    awayTeam.wins += actualHome ? 0 : 1;
    awayTeam.lastResult = actualHome ? "loss" : "win";
  }
  return snapshots;
}

// Mirrors mlbModel() + the MLB half of calibrateModelOutcomes() in src/main.jsx.
function mlbPredict(snap, params) {
  const afterLossHome = afterLossLogit(snap.homeCode, { lastResult: snap.homeLastResult }, params.afterLossScale);
  const afterLossAway = afterLossLogit(snap.awayCode, { lastResult: snap.awayLastResult }, params.afterLossScale);
  const logit = params.homeLogit + params.strengthK * (snap.homeStrength - snap.awayStrength) + afterLossHome - afterLossAway;
  const raw = clamp(logistic(logit), 0.05, 0.95);
  const compressed = clamp(0.5 + (raw - 0.5) * params.backtestCompression, 1 - params.backtestCap, params.backtestCap);
  return compressed;
}

function mlbLoss(snapshots, params) {
  let loss = 0;
  for (const snap of snapshots) {
    const pHome = mlbPredict(snap, params);
    const p = snap.actualHome ? pHome : 1 - pHome;
    loss += -Math.log(clamp(p, LOSS_FLOOR, 1 - LOSS_FLOOR));
  }
  return loss / snapshots.length;
}

function mlbEvaluate(snapshots, params) {
  let correct = 0;
  let brierSum = 0;
  for (const snap of snapshots) {
    const pHome = mlbPredict(snap, params);
    const predicted = pHome >= 0.5;
    if (predicted === snap.actualHome) correct += 1;
    brierSum += (pHome - (snap.actualHome ? 1 : 0)) ** 2;
  }
  return { accuracy: correct / snapshots.length, avgBrier: brierSum / snapshots.length, matches: snapshots.length };
}

function trainMlb() {
  const games = loadMlbGames(MLB_SOURCE);
  const snapshots = buildMlbSnapshots(games);
  const { train, holdout } = chronoSplit(snapshots, 0.8);

  const priors = { homeLogit: 0.16, strengthK: 0.27, afterLossScale: 0.6, backtestCompression: 0.78, backtestCap: 0.82 };
  const scales = { homeLogit: 0.06, strengthK: 0.1, afterLossScale: 0.2, backtestCompression: 0.08, backtestCap: 0.08 };
  const bounds = {
    homeLogit: [0, 0.35],
    strengthK: [0.05, 0.55],
    afterLossScale: [0, 1.2],
    backtestCompression: [0.55, 1],
    backtestCap: [0.6, 0.92]
  };

  // Small sample (~47 postseason games) -> heavier L2 pull toward the existing hand-set
  // defaults than Soccer's 852-match fit, so this doesn't overfit a month of playoff noise.
  const fitted = fitParams(priors, scales, (params) => mlbLoss(train, params), {
    l2: 0.06,
    bounds
  });

  return {
    priors,
    fitted,
    trainSize: train.length,
    holdoutSize: holdout.length,
    before: { train: mlbEvaluate(train, priors), holdout: mlbEvaluate(holdout, priors) },
    after: { train: mlbEvaluate(train, fitted), holdout: mlbEvaluate(holdout, fitted) }
  };
}

// ============================================================================
// Run + report
// ============================================================================

function pct(v) {
  return v == null ? "—" : `${(v * 100).toFixed(1)}%`;
}
function num3(v) {
  return v == null ? "—" : v.toFixed(3);
}

const soccer = trainSoccer();
const mlb = trainMlb();

console.log("\n=== Soccer calibration (World Cup, chronological holdout) ===");
console.log(`Train: ${soccer.trainSize} matches · Holdout: ${soccer.holdoutSize} matches`);
console.log("Param          before -> after");
for (const key of Object.keys(soccer.priors)) {
  console.log(`  ${key.padEnd(13)} ${soccer.priors[key].toFixed(4)} -> ${soccer.fitted[key].toFixed(4)}`);
}
console.log(`Holdout accuracy: ${pct(soccer.before.holdout.accuracy)} -> ${pct(soccer.after.holdout.accuracy)}`);
console.log(`Holdout Brier:    ${num3(soccer.before.holdout.avgBrier)} -> ${num3(soccer.after.holdout.avgBrier)}`);

console.log("\n=== MLB calibration (2025 postseason Statcast, chronological holdout) ===");
console.log(`Train: ${mlb.trainSize} games · Holdout: ${mlb.holdoutSize} games`);
console.log("Param              before -> after");
for (const key of Object.keys(mlb.priors)) {
  console.log(`  ${key.padEnd(17)} ${mlb.priors[key].toFixed(4)} -> ${mlb.fitted[key].toFixed(4)}`);
}
console.log(`Holdout accuracy: ${pct(mlb.before.holdout.accuracy)} -> ${pct(mlb.after.holdout.accuracy)}`);
console.log(`Holdout Brier:    ${num3(mlb.before.holdout.avgBrier)} -> ${num3(mlb.after.holdout.avgBrier)}`);

const output = {
  version: 1,
  generatedAt: new Date().toISOString(),
  method: "Regularized gradient descent (finite-difference, L2 toward prior hand-set constants), chronological train/holdout split. Pure Dixon-Coles Poisson (Soccer) / logistic (MLB) structure unchanged — only coefficients are fitted.",
  soccer: {
    source: WORLD_CUP_SOURCE,
    trainSize: soccer.trainSize,
    holdoutSize: soccer.holdoutSize,
    priors: soccer.priors,
    fitted: soccer.fitted,
    before: soccer.before,
    after: soccer.after,
    notFitted: {
      drawAnchorWeight: "Anchors soccer draw probability toward the live market draw price — no market data exists in the 1930-2014 results file, so this stays hand-set (0.25)."
    }
  },
  mlb: {
    source: MLB_SOURCE,
    trainSize: mlb.trainSize,
    holdoutSize: mlb.holdoutSize,
    priors: mlb.priors,
    fitted: mlb.fitted,
    before: mlb.before,
    after: mlb.after,
    notFitted: {
      xeraLogitPerRun: "Starter xERA coefficient — the Statcast feed has no live-comparable per-starter season xERA aggregate to fit against, so this stays hand-set (0.35)."
    }
  }
};

fs.writeFileSync(OUT, `// Generated by scripts/train-ml-calibration.mjs — do not hand-edit.\nexport const mlCalibration = ${JSON.stringify(output, null, 2)};\n`);
console.log(`\nWrote ${OUT}`);
