# Model Quality Review - 2026-07-06

Generated: 2026-07-07T03:46:24.753Z

## Executive Read
- Reviewed picks: 11
- Settled: 4
- Win rate: 50.0% (n=4, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -0.1 pts
- Average Brier (blend): 0.301
- Model-only vs market Brier: 0.292 vs 0.304 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-07T03:46:19.577Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 4 | 2 | 50.0% (n=2, noise) | -0.1 pts | 0.353 |
| Soccer | 7 | 2 | 50.0% (n=2, noise) | -0.2 pts | 0.249 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 10 | 3 | 66.7% (n=3, noise) | -0.1 pts | 0.297 |
| 55-60% | 1 | 1 | 0.0% (n=1, noise) | 0.0 pts | 0.313 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 1 | 0.0 pts | 0.313 |
| Unclassified miss | 1 | 0.0 pts | 0.078 |

## Miss Detail
### Atlanta Braves - Atlanta Braves vs New York Mets
- Sport: MLB
- Result: loss
- Model: 56.0% at -118; close/latest -118
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

### Portugal - Portugal vs Spain
- Sport: Soccer
- Result: loss
- Model: 28.0% at +322; close/latest +322
- CLV: 0.0 pts
- Pattern: Unclassified miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

