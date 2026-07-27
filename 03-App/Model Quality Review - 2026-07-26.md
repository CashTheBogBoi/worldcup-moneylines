# Model Quality Review - 2026-07-26

Generated: 2026-07-27T03:50:29.830Z

## Executive Read
- Reviewed picks: 3
- Settled: 3
- Win rate: 0.0% (n=3, noise)
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -1.5 pts
- Average Brier (blend): 0.159
- Model-only vs market Brier: 0.227 vs 0.140 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-27T03:50:18.713Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 3 | 3 | 0.0% (n=3, noise) | -1.5 pts | 0.159 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 3 | 3 | 0.0% (n=3, noise) | -1.5 pts | 0.159 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 3 | -1.5 pts | 0.159 |

## Miss Detail
### San Francisco Giants - San Francisco Giants vs Los Angeles Angels
- Sport: MLB
- Result: loss
- Model: 48.7% at +113; close/latest -
- CLV: -
- Pattern: MLB variance/context miss

### New York Yankees - Philadelphia Phillies vs New York Yankees
- Sport: MLB
- Result: loss
- Model: 40.6% at +167; close/latest +190
- CLV: -3.0 pts
- Pattern: MLB variance/context miss

### Colorado Rockies - Milwaukee Brewers vs Colorado Rockies
- Sport: MLB
- Result: loss
- Model: 27.4% at +300; close/latest +300
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

