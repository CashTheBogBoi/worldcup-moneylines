# MLB Training Table - 2026-07-02

Generated: 2026-07-02T04:43:03.693Z

This file documents the first true ML-ready MLB training table for the project. The output table is:

- `03-App/mlb-training-table.json`
- `03-App/mlb-training-table-summary.json`

## Purpose

Build one row per historical MLB game with only information that would have been available before first pitch. This becomes the base dataset for a real pregame classifier/value model instead of tuning the live algorithm directly from memory.

## Sources

- Game outcomes and box score features: `/Users/cashmcdearis/Downloads/MLB2020-2024GameInfo.csv`
- Historical odds archive: `/Users/cashmcdearis/Downloads/oddsData.csv.zip`

## Rows

| Season | Games |
|---|---:|
| 2020 | 898 |
| 2021 | 2429 |
| 2022 | 2430 |
| 2023 | 2430 |
| 2024 | 2429 |

Total rows: 10616

Training split: 8187

Validation split: 2429

## Odds Coverage

Matched market rows: 2328/10616 (21.9%)

The odds archive mostly overlaps the 2020-2021 part of the game-info file. Rows without matched odds keep `homeMoneyline`, `awayMoneyline`, implied probability, no-vig probability, total, and run-line fields as `null`.

## Target

- `homeWin`: 1 if the home team won, 0 if the away team won.
- `winner`: actual winning team code.

## Pregame Feature Families

- Team season-to-date form before the game: wins, runs, run differential, hits, walks, homers, strikeouts, errors, and pitchers used.
- Starter history before the game: prior starts, runs allowed per start, team earned runs per start, and starter win percentage.
- Differential features: home minus away win rate, offense, defense, run differential, strikeout edge, fielding edge, bullpen load, and starter run-allowed gap.
- Market features when available: moneyline, implied probability, no-vig probability, overround, total, run line, and run-line odds.

## Leakage Guard

Rows are emitted before the current game updates rolling team or pitcher state. That means a model trained on this table cannot accidentally learn from the game it is trying to predict.

## Next ML Step

Train a walk-forward baseline classifier on this table, then compare it against:

- market no-vig probability where available
- the current live v2 fitted logistic model
- a blended market-plus-model value score
