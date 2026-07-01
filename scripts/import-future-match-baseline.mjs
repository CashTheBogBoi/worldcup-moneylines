import fs from "node:fs";
import path from "node:path";

const SOURCE = process.argv[2] || "/Users/cashmcdearis/Downloads/future_match_probabilities_baseline.csv";
const OUT = path.resolve("src/futureMatchBaselineData.js");

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

function num(value) {
  if (value == null || String(value).trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function probability(value) {
  const n = num(value);
  return n == null ? null : n;
}

const raw = fs.readFileSync(SOURCE, "utf8");
const rows = parseCsv(raw);
const header = rows.shift();
const index = Object.fromEntries(header.map((name, i) => [name, i]));

const matches = rows
  .map((row, rowIndex) => {
    const home = row[index.home_team];
    const away = row[index.away_team];
    const pHome = probability(row[index.p_home_win]);
    const pDraw = probability(row[index.p_draw]);
    const pAway = probability(row[index.p_away_win]);
    return {
      id: `baseline-${row[index.group]}-${rowIndex + 1}`,
      group: row[index.group],
      homeTeam: home,
      awayTeam: away,
      date: row[index.date] || "",
      tournament: row[index.tournament],
      homeElo: num(row[index.home_elo]),
      awayElo: num(row[index.away_elo]),
      eloDiff: num(row[index.elo_diff]),
      homeInjuryFlag: num(row[index.home_injury_flag]) || 0,
      awayInjuryFlag: num(row[index.away_injury_flag]) || 0,
      probabilities: {
        [home]: pHome,
        Draw: pDraw,
        [away]: pAway
      },
      pHome,
      pDraw,
      pAway,
      topOutcome: [
        { name: home, probability: pHome },
        { name: "Draw", probability: pDraw },
        { name: away, probability: pAway }
      ].sort((a, b) => (b.probability ?? 0) - (a.probability ?? 0))[0]
    };
  })
  .filter((match) => match.homeTeam && match.awayTeam && match.pHome != null && match.pDraw != null && match.pAway != null);

const groupSummary = Object.values(matches.reduce((acc, match) => {
  acc[match.group] ||= { group: match.group, matches: 0, avgDraw: 0, favorites: [] };
  acc[match.group].matches += 1;
  acc[match.group].avgDraw += match.pDraw;
  acc[match.group].favorites.push(match.topOutcome);
  return acc;
}, {})).map((group) => ({
  ...group,
  avgDraw: group.matches ? group.avgDraw / group.matches : null,
  favoriteCount: group.favorites.reduce((acc, fav) => {
    acc[fav.name] = (acc[fav.name] || 0) + 1;
    return acc;
  }, {})
}));

const output = {
  source: SOURCE,
  generatedAt: new Date().toISOString(),
  totalMatches: matches.length,
  note: "Baseline future World Cup group-match probabilities from Elo/injury flags. These are priors, not sportsbook lines.",
  matches,
  groupSummary
};

fs.writeFileSync(OUT, `export const futureMatchBaseline = ${JSON.stringify(output, null, 2)};\n`);
console.log(`Wrote ${OUT}`);
console.log(`${matches.length} future match priors imported`);
