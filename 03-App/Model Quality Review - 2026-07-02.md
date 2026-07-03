# Model Quality Review - 2026-07-02

Generated: 2026-07-03T03:54:09.846Z

## Executive Read
- Reviewed picks: 21
- Settled: 9
- Win rate: 44.4% (n=9, noise)
- Excluded from calibration (market-only / post-start / contaminated): 17
- Average CLV: -0.1 pts
- Average Brier (blend): 0.326
- Model-only vs market Brier: - vs - (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-03T03:54:03.277Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 7 | 6 | 50.0% (n=6, noise) | -0.8 pts | 0.326 |
| Soccer | 14 | 3 | 33.3% (n=3, noise) | 0.6 pts | - |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 18 | 6 | 33.3% (n=6, noise) | -0.3 pts | - |
| 55-60% | 1 | 1 | 0.0% (n=1, noise) | 0.6 pts | 0.326 |
| 70%+ | 1 | 1 | 100.0% (n=1, noise) | - | - |
| 60-65% | 1 | 1 | 100.0% (n=1, noise) | - | - |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 3 | -5.5 pts | 0.225 |
| Negative CLV miss | 2 | -1.7 pts | 0.024 |

## Miss Detail
### Croatia - Portugal vs Croatia
- Sport: Soccer
- Result: loss
- Model: 19.4% at +415; close/latest +480
- CLV: -2.2 pts
- Pattern: Negative CLV miss

### Austria - Spain vs Austria
- Sport: Soccer
- Result: loss
- Model: 9.7% at +1000; close/latest +1160
- CLV: -1.2 pts
- Pattern: Negative CLV miss

### Philadelphia Phillies - Philadelphia Phillies vs Pittsburgh Pirates
- Sport: MLB
- Result: loss
- Model: 57.1% at -122; close/latest -125
- CLV: 0.6 pts
- Pattern: MLB variance/context miss

### Cincinnati Reds - Milwaukee Brewers vs Cincinnati Reds
- Sport: MLB
- Result: loss
- Model: 35.4% at +200; close/latest +180
- CLV: 2.4 pts
- Pattern: MLB variance/context miss

### Houston Astros - Houston Astros vs Minnesota Twins
- Sport: MLB
- Result: loss
- Model: 47.3% at +135; close/latest +335
- CLV: -19.6 pts
- Pattern: MLB variance/context miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

