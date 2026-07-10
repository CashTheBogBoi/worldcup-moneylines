# Model Quality Review - 2026-07-09

Generated: 2026-07-10T03:57:16.472Z

## Executive Read
- Reviewed picks: 5
- Settled: 2
- Win rate: 50.0% (n=2, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -0.1 pts
- Average Brier (blend): 0.224
- Model-only vs market Brier: 0.224 vs 0.225 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-10T03:56:50.899Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 2 | 2 | 50.0% (n=2, noise) | 0.4 pts | 0.224 |
| Soccer | 3 | 0 | - | -0.5 pts | - |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 5 | 2 | 50.0% (n=2, noise) | -0.1 pts | 0.224 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 1 | 0.0 pts | 0.177 |

## Miss Detail
### Cincinnati Reds - Cincinnati Reds vs Philadelphia Phillies
- Sport: MLB
- Result: loss
- Model: 42.0% at +147; close/latest +147
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

