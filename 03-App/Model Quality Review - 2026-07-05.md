# Model Quality Review - 2026-07-05

Generated: 2026-07-06T03:45:10.863Z

## Executive Read
- Reviewed picks: 14
- Settled: 11
- Win rate: 27.3% (n=11, noise)
- Excluded from calibration (market-only / post-start / contaminated): 4
- Average CLV: -0.2 pts
- Average Brier (blend): 0.201
- Model-only vs market Brier: 0.243 vs 0.164 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-06T03:45:06.058Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 4 | 4 | 0.0% (n=4, noise) | -1.1 pts | 0.230 |
| Soccer | 10 | 7 | 42.9% (n=7, noise) | 0.4 pts | 0.163 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 14 | 11 | 27.3% (n=11, noise) | -0.2 pts | 0.201 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 4 | -1.1 pts | 0.230 |
| Process-good outcome miss | 2 | 2.6 pts | 0.060 |
| Unclassified miss | 2 | 0.0 pts | 0.020 |

## Miss Detail
### Atlanta Braves - Atlanta Braves vs New York Mets
- Sport: MLB
- Result: loss
- Model: 54.7% at -112; close/latest +104
- CLV: -3.8 pts
- Pattern: MLB variance/context miss

### Colorado Rockies - Colorado Rockies vs San Francisco Giants
- Sport: MLB
- Result: loss
- Model: 48.1% at +118; close/latest +118
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

### Los Angeles Angels - Los Angeles Angels vs Boston Red Sox
- Sport: MLB
- Result: loss
- Model: 44.1% at +147; close/latest +147
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

### Kansas City Royals - Kansas City Royals vs Philadelphia Phillies
- Sport: MLB
- Result: loss
- Model: 44.1% at +136; close/latest +139
- CLV: -0.5 pts
- Pattern: MLB variance/context miss

### Draw - Paraguay vs France
- Sport: Soccer
- Result: loss
- Model: 15.8% at +720; close/latest +600
- CLV: 2.1 pts
- Pattern: Process-good outcome miss

### Canada - Canada vs Morocco
- Sport: Soccer
- Result: loss
- Model: 19.2% at +440; close/latest +440
- CLV: 0.0 pts
- Pattern: Unclassified miss

### Paraguay - Paraguay vs France
- Sport: Soccer
- Result: loss
- Model: 5.7% at +1800; close/latest +1800
- CLV: 0.0 pts
- Pattern: Unclassified miss

### Mexico - Mexico vs England
- Sport: Soccer
- Result: loss
- Model: 30.8% at +242; close/latest +210
- CLV: 3.0 pts
- Pattern: Process-good outcome miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

