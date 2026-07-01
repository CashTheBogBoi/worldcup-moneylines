# App Build Plan

## Current app

The app is a React/Vite project in this vault folder. It is now a general sports odds lab focused on Soccer and MLB profit candidates.

Current tabs:

- Soccer
- MLB
- Futures
- Value
- Algorithm
- Backtest
- Intel
- Model Lab
- Bankroll Watch
- History
- Picks
- Research

## Implemented

- The Odds API key loaded through `.env`.
- `h2h` moneyline support.
- Futures support with `soccer_fifa_world_cup_winner`.
- Sample data fallback.
- Bovada and PrizePicks source notes.
- Raw implied probability.
- No-vig probability.
- Fair line conversion.
- EV proxy.
- Edge Algorithm v0.1 tab.
- Match probability model currently uses 100% Odds API no-vig until a trusted external match source is added.
- Futures comparison against Covers/Kalshi probabilities.
- Model Lab tab with CLV, Brier score, model-pick grading, and editable team-strength inputs.
- MLB tab using The Odds API `baseball_mlb`.
- Bankroll Watch highlights a single best remaining pick for tonight across Soccer and MLB.
- Bankroll Watch prioritizes DraftKings when available for the free $200 workflow, then falls back to best available line.
- Intel tab with injury, lineup, starter, weather, and late-scratch research links plus local notes in `localStorage`.
- Team-specific Intel notes now adjust the independent model before odds are blended with market consensus.
- Backtest tab generated from `/Users/cashmcdearis/Downloads/WorldCupMatches.csv` to compare historical World Cup predictions against actual results.
- MLB Statcast backtest generated from `/Users/cashmcdearis/Downloads/Data_MLB_2025_StatcastPostseason_PitchByPitch_20251102a.csv`.
- Local refresh snapshots in `localStorage`.
- Pick notebook in `localStorage`.
- Bankroll Watch with capped stake labels.

## Auto data pipeline (2026-06-30) — replaces manual data entry

Goal was to stop hand-collecting data. Four sources now feed the algorithm automatically, all
free / no API key, all best-effort with graceful fallback if a cross-origin fetch is blocked:

- **MLB team ratings** — auto-derived from MLB Stats API standings (run differential per game +
  win%), keyed by team, used as a fallback in `getRating`. This is what finally turns the MLB
  model ON — before this, no MLB team had a rating so every MLB game fell through to
  market-only, and the starter-xERA work never even executed. The MLB logistic was recalibrated
  to baseball's compressed win-prob range (elite-vs-worst tops out ~73%, not 95%).
- **Live Kalshi futures** — Kalshi public markets API replaces the hardcoded, stale
  `kalshiFuturesProbabilities` snapshot. Bid/ask midpoint (fallback last price), alias-matched to
  the futures board (USA/United States, Bosnia, etc.). Falls back to the snapshot on failure.
- **Soccer Elo (results-based)** — per-team Elo persisted in `localStorage`, seeded neutral
  (1500), auto-updated from `/scores` completed matches (deduped by match id), fed as a bounded
  ±20% tilt into the soccer Poisson. Zero effect until real results accrue (no double-counting of
  xG), so soccer strength self-corrects from outcomes without re-tuning xG/form by hand.
- **Adaptive blend weight** — the model's share of the model/market blend flexes 25–60% by
  measured Brier (Model Lab graded picks, shrunk toward the historical backtest prior by sample
  size) instead of a fixed 45%. The algorithm now learns from whether it has been right.

Still genuinely manual (hard to automate reliably): soccer xG/form seed inputs (Elo only
corrects from here), and Intel notes (need a human/LLM read).

**Persistence (2026-06-30):** all model-training state (graded picks, ratings, intel, Elo,
snapshots) and all fetched STATS (MLB run diffs, starter xERA, Kalshi probabilities + a dated
history series) now persist to git-backed JSON files inside the vault — `model-training-state.json`
and `stats-history.json` — served by a Vite dev endpoint. This survives dev-server restarts,
port changes, and browser clears; stats are kept-on-failure so the model runs on cache instead
of going dark. Full detail: [[Data Pipeline and Persistence]].

## Next app work

- Add best-line and worst-line by outcome.
- Add stale-line warnings by timestamp.
- Add independent projection fields, so EV can use personal/model probability instead of no-vig market probability.
- Add match status/live-state warnings.
- Add paid historical odds support if the provider plan supports it.
- Add export/import for picks and snapshots.
- Add a server proxy so the API key is not exposed in browser dev tools.
- Add Kalshi prediction-market integration as its own source type.
- Add trusted manual snapshot entry for props and to-qualify markets.
- Add an advancement-probability model inspired by Neil Paine's normalized stage probabilities.
- Add "compare to sharp source" checks before Bankroll Watch promotes a line.
- Use Model Lab team-strength inputs directly in algorithm probability.
- Add richer structured Intel fields for affected team/player, so users do not need to type the team name into free-form notes.
- Add MLB starter, bullpen, lineup, xwOBA, park, and weather inputs.
- Add explicit DraftKings line availability and promo/free-bet tracking.

Related:

- [[Probability and Value Math]]
- [[Edge Algorithm v0.1]]
- [[Algorithm v1 Current Spec]]
- [[Algorithm Lessons From Backtests]]
- [[Model Lab]]
- [[MLB Research]]
- [[MLB After Loss Trend Prior]]
- [[MLB Statcast Feature Dictionary]]
- [[MLB Backtest Miss Patterns]]
- [[Injury and Lineup Intel]]
- [[World Cup Historical Backtest]]
- [[World Cup Backtest Miss Patterns]]
- [[MLB Statcast Postseason Backtest]]
- [[Backtest Data Inventory]]
- [[Backtest Implementation Notes]]
- [[How To Use Research Before A Pick]]
- [[Source Reliability Tiers]]
- [[Source Map]]
- [[Bankroll and Risk Rules]]
- [[External Source Research - 2026-06-30]]
