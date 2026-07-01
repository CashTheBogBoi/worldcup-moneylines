# Sports Edge Lab Home

Last researched: [[July 1 2026 Match Slate|July 1, 2026]] (live web research pass covering
the rest of June 30 and all of July 1)

This vault supports the local Sports Edge Lab app in this folder. The current focus is finding better profit candidates across Soccer and MLB.

Current bankroll workflow: prioritize DraftKings for the free `$200`, then fall back to best available line if DraftKings is not present.

## Start here

- [[Research Library]]
- [[Source Map]]
- [[Source Reliability Tiers]]
- [[Algorithm v1 Current Spec]]
- [[Algorithm Lessons From Backtests]]
- [[Backtest Data Inventory]]
- [[External Source Research - 2026-06-30]]
- [[Future Match Probability Baseline]]
- [[MLB Research]]
- [[MLB After Loss Trend Prior]]
- [[MLB Statcast Feature Dictionary]]
- [[MLB Backtest Miss Patterns]]
- [[MLB Slate - June 30 to July 1 2026]]
- [[Injury and Lineup Intel]]
- [[World Cup Historical Backtest]]
- [[World Cup Backtest Miss Patterns]]
- [[MLB Statcast Postseason Backtest]]
- [[How To Use Research Before A Pick]]
- [[Probability and Value Math]]
- [[June 30 2026 Match Slate]]
- [[July 1 2026 Match Slate]]
- [[Bovada Futures Snapshot]]
- [[App Build Plan]]
- [[Edge Algorithm v0.1]]
- [[Model Lab]]
- [[Pick Notebook]]
- [[Bankroll and Risk Rules]]

## Open items from the latest research pass

- Ivory Coast vs Norway is **settled** (Norway 2-1) — grade it in Model Lab / [[Pick Notebook]].
- France vs Sweden and Mexico vs Ecuador were still pending at research time — re-check before grading.
- None of England, DR Congo, Belgium, Senegal, USA, or Bosnia-Herzegovina are rated in Model Lab yet — July 1's algorithm output is market-only until ratings are added (see [[July 1 2026 Match Slate]]).

## App folder

The React app lives in the same folder as this vault:

- `src/main.jsx`
- `src/styles.css`
- `.env`
- `README.md`

Open the app locally at:

```text
http://127.0.0.1:5177/
```

## Current app tabs

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

## New source research

- [[External Source Research - 2026-06-30]]
- [[MLB After Loss Trend Prior]]
- [[MLB Statcast Feature Dictionary]]
- [[Source Reliability Tiers]]

## Automation status (v1.1, 2026-06-30)

The algorithm now feeds itself — see [[Data Pipeline and Persistence]] and [[Algorithm v1 Current Spec]]:

- MLB team ratings auto-derived from standings (this turned the MLB model ON), plus live starter xERA from Baseball Savant.
- Kalshi futures probabilities are live (via a dev proxy that works around Kalshi's CORS block).
- Soccer Elo self-corrects from results; the model/market blend weight adapts to measured Brier.
- All model-training state and fetched stats persist to git-backed vault JSON files, so nothing is lost on a server/port reset.

## Important

This project tracks odds, implied probability, source notes, model grades, and research leans. It does not place bets, guarantee outcomes, or recommend risking money you cannot afford to lose.
