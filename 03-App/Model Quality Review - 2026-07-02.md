# Model Quality Review - 2026-07-02

Generated: 2026-07-02T04:24:43.566Z

## Executive Read
- Reviewed picks: 20
- Settled: 5
- Win rate: 60.0% (n=5, noise)
- Excluded from calibration (market-only / post-start / contaminated): 17
- Average CLV: 0.1 pts
- Average Brier (blend): -
- Model-only vs market Brier: - vs - (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-02T04:22:11.926Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Soccer | 14 | 0 | - | 0.1 pts | - |
| MLB | 6 | 5 | 60.0% (n=5, noise) | 0.0 pts | - |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 17 | 3 | 33.3% (n=3, noise) | 0.1 pts | - |
| 55-60% | 1 | 0 | - | 0.0 pts | - |
| 70%+ | 1 | 1 | 100.0% (n=1, noise) | - | - |
| 60-65% | 1 | 1 | 100.0% (n=1, noise) | - | - |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 2 | -8.6 pts | 0.174 |

## Miss Detail
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
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

