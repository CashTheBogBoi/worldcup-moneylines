# Model Quality Review - 2026-07-06

Generated: 2026-07-07T02:38:03.934Z

## Executive Read
- Reviewed picks: 8
- Settled: 3
- Win rate: 66.7% (n=3, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -0.2 pts
- Average Brier (blend): 0.297
- Model-only vs market Brier: 0.257 vs 0.310 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-07T02:37:56.612Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Soccer | 5 | 2 | 50.0% (n=2, noise) | -0.3 pts | 0.249 |
| MLB | 3 | 1 | 100.0% (n=1, noise) | 0.1 pts | 0.392 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 7 | 3 | 66.7% (n=3, noise) | -0.2 pts | 0.297 |
| 55-60% | 1 | 0 | - | 0.0 pts | - |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| Unclassified miss | 1 | 0.0 pts | 0.078 |

## Miss Detail
### Portugal - Portugal vs Spain
- Sport: Soccer
- Result: loss
- Model: 28.0% at +322; close/latest +322
- CLV: 0.0 pts
- Pattern: Unclassified miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.

