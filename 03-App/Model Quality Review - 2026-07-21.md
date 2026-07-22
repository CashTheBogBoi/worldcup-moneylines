# Model Quality Review - 2026-07-21

Generated: 2026-07-22T03:49:21.246Z

## Executive Read
- Reviewed picks: 2
- Settled: 2
- Win rate: 50.0% (n=2, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: 2.1 pts
- Average Brier (blend): 0.255
- Model-only vs market Brier: 0.245 vs 0.259 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-22T03:49:09.691Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 2 | 2 | 50.0% (n=2, noise) | 2.1 pts | 0.255 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 2 | 2 | 50.0% (n=2, noise) | 2.1 pts | 0.255 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 1 | 1.9 pts | 0.242 |

## Miss Detail
### Chicago White Sox - Texas Rangers vs Chicago White Sox
- Sport: MLB
- Result: loss
- Model: 49.2% at +110; close/latest +102
- CLV: 1.9 pts
- Pattern: MLB variance/context miss

## Model Input Actions
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

