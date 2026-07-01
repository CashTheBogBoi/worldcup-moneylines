# MLB Backtest Miss Patterns

Source: [[MLB Statcast Postseason Backtest]]

## Core finding

The MLB Statcast model is not strong enough from postseason-only data.

It found some useful structure, but the sample is too small and the model lacks pregame starting-pitcher, lineup, bullpen, and regular-season context.

## Overall result

- Games evaluated: 47
- Correct: 22
- Accuracy: 46.8%
- Average Brier: 0.291

## Prediction side

| Prediction type | Correct | Total | Accuracy |
|---|---:|---:|---:|
| Predicted home | 16 | 31 | 51.6% |
| Predicted away | 6 | 16 | 37.5% |

## Actual side

| Actual result | Correct | Total | Accuracy |
|---|---:|---:|---:|
| Actual home winner | 16 | 26 | 61.5% |
| Actual away winner | 6 | 21 | 28.6% |

## Confidence pain

| Confidence bucket | Correct | Total | Accuracy |
|---|---:|---:|---:|
| 70%+ | 8 | 17 | 47.1% |
| 60-70% | 4 | 7 | 57.1% |
| 55-60% | 1 | 5 | 20.0% |
| Under 55% | 9 | 18 | 50.0% |

This is a warning: the model's confidence is not well calibrated yet.

## Cold-start split

| Split | Correct | Total | Accuracy |
|---|---:|---:|---:|
| Cold start | 4 | 8 | 50.0% |
| Prior postseason Statcast data | 18 | 39 | 46.2% |

This means postseason-only prior data did not solve the problem.

## Matchup pain

The worst matchup group in the file:

- TOR vs LAD: 0/4 correct
- CLE vs DET: 0/3 correct
- CHC vs MIL: 0/2 correct

Small samples, but these are warning signs that team matchup dynamics matter.

## Why the misses happened

Likely causes:

- postseason-only sample is too small,
- starting pitcher not explicitly modeled,
- bullpen fatigue not explicitly modeled,
- lineup quality not explicitly modeled,
- market odds are missing,
- model overreacts to recent Statcast form,
- no regular-season baseline.

## Algorithm fixes to test

- Add regular-season rolling xwOBA and pitching metrics.
- Add explicit starting pitcher adjustment.
- Add bullpen workload over the previous 1-3 games.
- Add lineup confirmation.
- Add previous-game result and [[MLB After Loss Trend Prior]].
- Blend Statcast strength with market no-vig instead of using Statcast alone.

