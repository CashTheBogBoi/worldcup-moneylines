import fs from "node:fs";
import path from "node:path";

const SOURCE = process.argv[2] || "/Users/cashmcdearis/Downloads/WorldCupMatches.csv";
const OUT = path.resolve("src/worldCupBacktestData.js");

const LEAGUE_AVG_GOALS = 1.35;
const MAX_GOALS = 8;
const DIXON_COLES_RHO = -0.05;
const MIN_XG = 0.2;
const FORM_DECAY = 0.82;
const SOCCER_DRAW_SOFT_CAP = 0.34;

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

function parseDate(year, datetime) {
  const match = String(datetime || "").match(/(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})/);
  if (!match) return `${year}-01-01`;
  const months = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
  return `${match[3]}-${months[match[2]] || "01"}-${String(match[1]).padStart(2, "0")}`;
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

function clamp(value, lo, hi) {
  return Math.max(lo, Math.min(hi, value));
}

function normalizeOutcomeMap(outcomes) {
  const total = outcomes.Home + outcomes.Draw + outcomes.Away || 1;
  return {
    Home: outcomes.Home / total,
    Draw: outcomes.Draw / total,
    Away: outcomes.Away / total
  };
}

function redistributeDrawHaircut(outcomes, nextDraw) {
  const removed = outcomes.Draw - nextDraw;
  if (removed <= 0) return outcomes;
  const sideTotal = outcomes.Home + outcomes.Away || 1;
  return normalizeOutcomeMap({
    Home: outcomes.Home + removed * (outcomes.Home / sideTotal),
    Draw: nextDraw,
    Away: outcomes.Away + removed * (outcomes.Away / sideTotal)
  });
}

function calibrateSoccerOutcomes(outcomes) {
  let next = normalizeOutcomeMap(outcomes);
  const notes = [];
  if (next.Draw > SOCCER_DRAW_SOFT_CAP) {
    next = redistributeDrawHaircut(next, SOCCER_DRAW_SOFT_CAP + (next.Draw - SOCCER_DRAW_SOFT_CAP) * 0.35);
    notes.push("World Cup backtest draw cap applied");
  }
  const bestSide = Math.max(next.Home, next.Away);
  if (next.Draw > bestSide && next.Draw - bestSide < 0.08) {
    next = redistributeDrawHaircut(next, Math.max(0.22, bestSide - 0.02));
    notes.push("Draw barely led best side; discounted");
  }
  return { outcomes: next, notes };
}

function defaultTeam() {
  return {
    matches: 0,
    goalsFor: LEAGUE_AVG_GOALS,
    goalsAgainst: LEAGUE_AVG_GOALS,
    form: 5,
    weightedPoints: 0,
    weightedMatches: 0
  };
}

function getTeam(map, name) {
  if (!map.has(name)) map.set(name, defaultTeam());
  return map.get(name);
}

function teamRating(team) {
  const sample = Math.max(1, Math.min(team.matches, 12));
  const xgFor = team.goalsFor / sample;
  const xgAgainst = team.goalsAgainst / sample;
  const form = team.weightedMatches ? 5 + (team.weightedPoints / team.weightedMatches - 1) * 2.2 : 5;
  return {
    xgFor: clamp(xgFor, 0.35, 3),
    xgAgainst: clamp(xgAgainst, 0.35, 3),
    form: clamp(form, 1, 10)
  };
}

function modelMatch(homeRaw, awayRaw) {
  const home = teamRating(homeRaw);
  const away = teamRating(awayRaw);
  const formHome = 1 + (home.form - 6) / 40;
  const formAway = 1 + (away.form - 6) / 40;
  const lambdaHome = ((home.xgFor * away.xgAgainst) / LEAGUE_AVG_GOALS) * 1.08 * formHome;
  const lambdaAway = ((away.xgFor * home.xgAgainst) / LEAGUE_AVG_GOALS) * formAway;
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
  const calibrated = calibrateSoccerOutcomes({ Home: pHome, Draw: pDraw, Away: pAway });
  pHome = calibrated.outcomes.Home;
  pDraw = calibrated.outcomes.Draw;
  pAway = calibrated.outcomes.Away;
  const entries = Object.entries(calibrated.outcomes).sort((a, b) => b[1] - a[1]);
  return {
    homeProbability: pHome,
    drawProbability: pDraw,
    awayProbability: pAway,
    predicted: entries[0][0],
    confidence: entries[0][1],
    calibrationNotes: calibrated.notes
  };
}

function updateTeam(team, goalsFor, goalsAgainst) {
  const points = goalsFor > goalsAgainst ? 3 : goalsFor === goalsAgainst ? 1 : 0;
  team.matches += 1;
  team.goalsFor = team.goalsFor * FORM_DECAY + goalsFor;
  team.goalsAgainst = team.goalsAgainst * FORM_DECAY + goalsAgainst;
  team.weightedPoints = team.weightedPoints * FORM_DECAY + points;
  team.weightedMatches = team.weightedMatches * FORM_DECAY + 1;
}

function brier(row) {
  return (
    (row.homeProbability - (row.actual === "Home" ? 1 : 0)) ** 2 +
    (row.drawProbability - (row.actual === "Draw" ? 1 : 0)) ** 2 +
    (row.awayProbability - (row.actual === "Away" ? 1 : 0)) ** 2
  ) / 3;
}

function pct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function bucketFor(confidence) {
  if (confidence >= 0.7) return "70%+";
  if (confidence >= 0.6) return "60-70%";
  if (confidence >= 0.5) return "50-60%";
  if (confidence >= 0.4) return "40-50%";
  return "<40%";
}

function eraFor(year) {
  if (year < 1950) return "1930s-1940s";
  if (year < 1970) return "1950s-1960s";
  if (year < 1990) return "1970s-1980s";
  if (year < 2010) return "1990s-2000s";
  return "2010s";
}

function scorelineFor(row) {
  if (row.homeGoals === row.awayGoals) return "Draws";
  const margin = Math.abs(row.homeGoals - row.awayGoals);
  if (margin === 1) return "One-goal games";
  if (margin === 2) return "Two-goal games";
  return "Blowouts";
}

function predictedTeam(row) {
  if (row.predicted === "Home") return row.home;
  if (row.predicted === "Away") return row.away;
  return "Draw";
}

function actualTeam(row) {
  if (row.actual === "Home") return row.home;
  if (row.actual === "Away") return row.away;
  return "Draw";
}

function groupStats(rows, keyFn, labelFn = (key) => key) {
  const grouped = rows.reduce((acc, row) => {
    const key = keyFn(row);
    acc[key] ||= { key, label: labelFn(key), matches: 0, correct: 0, misses: 0, avgBrier: 0, avgConfidence: 0 };
    acc[key].matches += 1;
    acc[key].correct += row.correct ? 1 : 0;
    acc[key].misses += row.correct ? 0 : 1;
    acc[key].avgBrier += row.brier;
    acc[key].avgConfidence += row.confidence;
    return acc;
  }, {});
  return Object.values(grouped).map((item) => ({
    ...item,
    accuracy: item.matches ? item.correct / item.matches : null,
    missRate: item.matches ? item.misses / item.matches : null,
    avgBrier: item.matches ? item.avgBrier / item.matches : null,
    avgConfidence: item.matches ? item.avgConfidence / item.matches : null
  })).sort((a, b) => b.misses - a.misses || b.missRate - a.missRate);
}

const raw = fs.readFileSync(SOURCE, "utf8");
const rows = parseCsv(raw);
const header = rows.shift();
const index = Object.fromEntries(header.map((name, i) => [name, i]));
const matches = rows
  .map((row) => ({
    year: Number(row[index.Year]),
    date: parseDate(row[index.Year], row[index.Datetime]),
    stage: row[index.Stage],
    home: row[index["Home Team Name"]],
    away: row[index["Away Team Name"]],
    homeGoals: Number(row[index["Home Team Goals"]]),
    awayGoals: Number(row[index["Away Team Goals"]]),
    matchId: row[index.MatchID]
  }))
  .filter((match) => match.year && match.home && match.away && Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals))
  .sort((a, b) => a.date.localeCompare(b.date) || Number(a.matchId) - Number(b.matchId));

const teams = new Map();
const predictions = [];

for (const match of matches) {
  const homeTeam = getTeam(teams, match.home);
  const awayTeam = getTeam(teams, match.away);
  const model = modelMatch(homeTeam, awayTeam);
  const actual = match.homeGoals > match.awayGoals ? "Home" : match.homeGoals < match.awayGoals ? "Away" : "Draw";
  const correct = model.predicted === actual;
  const row = {
    ...match,
    actual,
    correct,
    ...model
  };
  row.brier = brier(row);
  predictions.push(row);
  updateTeam(homeTeam, match.homeGoals, match.awayGoals);
  updateTeam(awayTeam, match.awayGoals, match.homeGoals);
}

const settled = predictions.filter((row) => row.confidence >= 0.33);
const correct = settled.filter((row) => row.correct).length;
const byBucket = ["70%+", "60-70%", "50-60%", "40-50%", "<40%"].map((bucket) => {
  const bucketRows = settled.filter((row) => bucketFor(row.confidence) === bucket);
  const wins = bucketRows.filter((row) => row.correct).length;
  return {
    bucket,
    matches: bucketRows.length,
    correct: wins,
    accuracy: bucketRows.length ? wins / bucketRows.length : null,
    avgBrier: bucketRows.length ? bucketRows.reduce((sum, row) => sum + row.brier, 0) / bucketRows.length : null
  };
});

const summary = {
  source: SOURCE,
  generatedAt: new Date().toISOString(),
  totalMatches: predictions.length,
  evaluatedMatches: settled.length,
  correct,
  accuracy: settled.length ? correct / settled.length : null,
  avgBrier: settled.reduce((sum, row) => sum + row.brier, 0) / settled.length,
  firstMatch: predictions[0]?.date,
  lastMatch: predictions[predictions.length - 1]?.date,
  note: "Historical World Cup CSV has scores but no betting odds, so this v1.2-style backtest applies draw calibration but cannot test market blend, EV, or ROI."
};

const tournamentSummary = Object.values(predictions.reduce((acc, row) => {
  acc[row.year] ||= { year: row.year, matches: 0, correct: 0, avgBrier: 0 };
  acc[row.year].matches += 1;
  acc[row.year].correct += row.correct ? 1 : 0;
  acc[row.year].avgBrier += row.brier;
  return acc;
}, {})).map((year) => ({
  ...year,
  accuracy: year.matches ? year.correct / year.matches : null,
  avgBrier: year.matches ? year.avgBrier / year.matches : null
}));

const misses = settled.filter((row) => !row.correct);
const missAnalysis = {
  headline: [
    "The model's biggest miss pattern is draws: it predicts Draw far too often.",
    "It struggles most when it has no market odds, no player news, and only prior World Cup score history to estimate team strength.",
    "High confidence is useful, but the lower confidence bands are not reliable enough to treat as picks."
  ],
  byPrediction: groupStats(settled, (row) => row.predicted),
  byActual: groupStats(settled, (row) => row.actual),
  confusion: groupStats(settled, (row) => `${row.predicted} predicted / ${row.actual} actual`),
  byConfidence: groupStats(settled, (row) => bucketFor(row.confidence)),
  byStage: groupStats(settled, (row) => row.stage).slice(0, 12),
  byEra: groupStats(settled, (row) => eraFor(row.year)),
  byScoreline: groupStats(settled, scorelineFor),
  wrongPredictedTeams: groupStats(misses.filter((row) => row.predicted !== "Draw"), predictedTeam).slice(0, 12),
  missedActualTeams: groupStats(misses.filter((row) => row.actual !== "Draw"), actualTeam).slice(0, 12),
  worstHighConfidenceMisses: misses
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 12)
    .map((row) => ({
      year: row.year,
      date: row.date,
      stage: row.stage,
      match: `${row.home} vs ${row.away}`,
      score: `${row.homeGoals}-${row.awayGoals}`,
      predicted: row.predicted,
      actual: row.actual,
      confidence: row.confidence,
      homeProbability: row.homeProbability,
      drawProbability: row.drawProbability,
      awayProbability: row.awayProbability
    }))
};

const output = {
  summary,
  byBucket,
  tournamentSummary,
  missAnalysis,
  predictions: predictions.slice(-250)
};

fs.writeFileSync(OUT, `export const worldCupBacktest = ${JSON.stringify(output, null, 2)};\n`);
console.log(`Wrote ${OUT}`);
console.log(`${summary.correct}/${summary.evaluatedMatches} correct (${pct(summary.accuracy)}) · Brier ${summary.avgBrier.toFixed(3)}`);
