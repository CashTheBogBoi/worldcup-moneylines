# Model Quality Review - 2026-07-11

Generated: 2026-07-12T03:53:24.768Z

## Executive Read
- Reviewed picks: 9
- Settled: 6
- Win rate: 16.7% (n=6, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -0.6 pts
- Average Brier (blend): 0.163
- Model-only vs market Brier: 0.200 vs 0.153 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-12T03:53:20.680Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 6 | 4 | 25.0% (n=4, noise) | -0.0 pts | 0.216 |
| Soccer | 3 | 2 | 0.0% (n=2, noise) | -1.7 pts | 0.058 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 9 | 6 | 16.7% (n=6, noise) | -0.6 pts | 0.163 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 3 | -0.1 pts | 0.214 |
| Negative CLV miss | 2 | -2.3 pts | 0.058 |

## Miss Detail
### Milwaukee Brewers - Pittsburgh Pirates vs Milwaukee Brewers
- Sport: MLB
- Result: loss
- Model: 51.2% at +107; close/latest -
- CLV: -
- Pattern: MLB variance/context miss

### Detroit Tigers - Detroit Tigers vs Philadelphia Phillies
- Sport: MLB
- Result: loss
- Model: 47.4% at +124; close/latest +123
- CLV: 0.2 pts
- Pattern: MLB variance/context miss

### Washington Nationals - Washington Nationals vs New York Yankees
- Sport: MLB
- Result: loss
- Model: 39.4% at +167; close/latest +170
- CLV: -0.4 pts
- Pattern: MLB variance/context miss

### Switzerland - Argentina vs Switzerland
- Sport: Soccer
- Result: loss
- Model: 20.8% at +460; close/latest +550
- CLV: -2.5 pts
- Pattern: Negative CLV miss

### Norway - Norway vs England
- Sport: Soccer
- Result: loss
- Model: 27.1% at +313; close/latest +354
- CLV: -2.2 pts
- Pattern: Negative CLV miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

