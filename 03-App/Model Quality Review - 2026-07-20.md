# Model Quality Review - 2026-07-20

Generated: 2026-07-21T03:58:00.079Z

## Executive Read
- Reviewed picks: 2
- Settled: 2
- Win rate: 50.0% (n=2, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -
- Average Brier (blend): 0.269
- Model-only vs market Brier: 0.264 vs 0.274 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-21T03:57:49.821Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 2 | 2 | 50.0% (n=2, noise) | - | 0.269 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 2 | 2 | 50.0% (n=2, noise) | - | 0.269 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 1 | - | 0.214 |

## Miss Detail
### Los Angeles Dodgers - Philadelphia Phillies vs Los Angeles Dodgers
- Sport: MLB
- Result: loss
- Model: 46.3% at +126; close/latest -
- CLV: -
- Pattern: MLB variance/context miss

## Model Input Actions
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

