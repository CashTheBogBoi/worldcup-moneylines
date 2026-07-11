# Model Quality Review - 2026-07-10

Generated: 2026-07-11T03:58:03.026Z

## Executive Read
- Reviewed picks: 9
- Settled: 3
- Win rate: 66.7% (n=3, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -0.1 pts
- Average Brier (blend): 0.220
- Model-only vs market Brier: 0.227 vs 0.223 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-11T03:57:57.062Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 5 | 2 | 100.0% (n=2, noise) | 0.4 pts | 0.292 |
| Soccer | 4 | 1 | 0.0% (n=1, noise) | -0.6 pts | 0.075 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 9 | 3 | 66.7% (n=3, noise) | -0.1 pts | 0.220 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| Unclassified miss | 1 | -0.8 pts | 0.075 |

## Miss Detail
### Belgium - Spain vs Belgium
- Sport: Soccer
- Result: loss
- Model: 27.3% at +498; close/latest +527
- CLV: -0.8 pts
- Pattern: Unclassified miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.

