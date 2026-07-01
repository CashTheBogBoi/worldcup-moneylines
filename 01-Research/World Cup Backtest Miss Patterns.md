# World Cup Backtest Miss Patterns

Source: [[World Cup Historical Backtest]]

## Core finding

The pre-v1.2 Soccer model was too attracted to draws. The v1.2 draw guardrail fixed much of that, but draw picks are still the weakest outcome.

The rerun improved total accuracy from 36.2% to 51.2% and Brier from 0.235 to 0.205.

## Prediction accuracy by predicted outcome

| Predicted outcome | Correct | Total | Accuracy |
|---|---:|---:|---:|
| Home | 316 | 465 | 68.0% |
| Draw | 54 | 191 | 28.3% |
| Away | 66 | 196 | 33.7% |

## Algorithm fixes to test

- Add Elo/FIFA ranking priors.
- Add tournament-stage priors.
- Separate 90-minute draw risk from to-advance probability.
- Add historical odds so market blend, edge, and ROI can be tested.

## Pick workflow implication

Do not treat a Soccer draw edge as actionable unless:

- market price is very strong,
- both teams are genuinely close,
- team news supports low scoring,
- draw/to-advance markets agree,
- model confidence is calibrated against recent results.
