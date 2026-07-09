# Model Quality Review - 2026-07-08

Generated: 2026-07-09T03:51:25.975Z

## Executive Read
- Reviewed picks: 5
- Settled: 1
- Win rate: 0.0% (n=1, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -0.4 pts
- Average Brier (blend): 0.165
- Model-only vs market Brier: 0.222 vs 0.147 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-09T03:51:22.371Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 2 | 1 | 0.0% (n=1, noise) | 0.0 pts | 0.165 |
| Soccer | 3 | 0 | - | -0.6 pts | - |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 5 | 1 | 0.0% (n=1, noise) | -0.4 pts | 0.165 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 1 | 0.0 pts | 0.165 |

## Miss Detail
### Kansas City Royals - New York Mets vs Kansas City Royals
- Sport: MLB
- Result: loss
- Model: 40.6% at +158; close/latest +158
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

