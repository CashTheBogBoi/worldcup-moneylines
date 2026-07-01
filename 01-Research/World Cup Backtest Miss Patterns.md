# World Cup Backtest Miss Patterns

Source: [[World Cup Historical Backtest]]

## Core finding

The Soccer model is too attracted to draws.

It correctly identifies many actual draws, but it predicts draw so often that it misses a lot of normal home/away wins.

## Prediction accuracy by predicted outcome

| Predicted outcome | Correct | Total | Accuracy |
|---|---:|---:|---:|
| Home | 154 | 212 | 72.6% |
| Draw | 135 | 563 | 24.0% |
| Away | 19 | 77 | 24.7% |

## Actual outcome capture

| Actual outcome | Correct | Total | Accuracy |
|---|---:|---:|---:|
| Home | 154 | 488 | 31.6% |
| Draw | 135 | 190 | 71.1% |
| Away | 19 | 174 | 10.9% |

## Biggest confusion patterns

| Pattern | Misses |
|---|---:|
| Draw predicted / Home actual | 291 |
| Draw predicted / Away actual | 137 |
| Away predicted / Home actual | 43 |
| Home predicted / Draw actual | 40 |
| Home predicted / Away actual | 18 |
| Away predicted / Draw actual | 15 |

## Scoreline pain

| Scoreline type | Correct | Total | Accuracy |
|---|---:|---:|---:|
| One-goal games | 65 | 334 | 19.5% |
| Two-goal games | 45 | 172 | 26.2% |
| Blowouts | 63 | 156 | 40.4% |
| Draws | 135 | 190 | 71.1% |

## Era pain

| Era | Correct | Total | Accuracy |
|---|---:|---:|---:|
| 1930s-1940s | 38 | 53 | 71.7% |
| 1950s-1960s | 55 | 147 | 37.4% |
| 1970s-1980s | 72 | 212 | 34.0% |
| 1990s-2000s | 105 | 296 | 35.5% |
| 2010s | 38 | 144 | 26.4% |

## Worst confident misses

- 2006 Czech Republic vs Ghana, predicted Home at 98.8%, actual Away, 0-2.
- 1950 USA vs England, predicted Away at 96.6%, actual Home, 1-0.
- 1998 South Africa vs Denmark, predicted Away at 85.0%, actual Draw, 1-1.
- 2010 New Zealand vs Slovakia, predicted Away at 82.1%, actual Draw, 1-1.
- 1958 Mexico vs Wales, predicted Away at 81.3%, actual Draw, 1-1.
- 1986 England vs Poland, predicted Draw at 79.4%, actual Home, 3-0.

## Algorithm fixes to test

- Lower Dixon-Coles draw correction.
- Make draw correction conditional on teams being close in strength.
- Add Elo/FIFA ranking priors.
- Add tournament-stage priors.
- Separate 90-minute draw risk from to-advance probability.
- Penalize draw picks when one side has a clear xG/form edge.

## Pick workflow implication

Do not treat a Soccer draw edge as actionable unless:

- market price is very strong,
- both teams are genuinely close,
- team news supports low scoring,
- draw/to-advance markets agree,
- model confidence is calibrated against recent results.

