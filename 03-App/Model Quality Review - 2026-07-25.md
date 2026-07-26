# Model Quality Review - 2026-07-25

Generated: 2026-07-26T03:45:23.770Z

## Executive Read
- Reviewed picks: 30
- Settled: 30
- Win rate: 30.0%
- Excluded from calibration (market-only / post-start / contaminated): 0
- Average CLV: -0.1 pts
- Average Brier (blend): 0.224
- Model-only vs market Brier: 0.252 vs 0.218 (model must be LOWER to earn blend weight)
- High-confidence misses: 0
- Latest data snapshot: 2026-07-26T03:45:07.935Z

## Sport Quality
| Sport | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| MLB | 24 | 24 | 33.3% | 0.3 pts | 0.245 |
| Soccer | 6 | 6 | 16.7% (n=6, noise) | -1.4 pts | 0.142 |

## Confidence Buckets
| Bucket | Picks | Settled | Win % | Avg CLV | Brier |
| --- | --- | --- | --- | --- | --- |
| Under 55% | 29 | 29 | 31.0% | -0.1 pts | 0.221 |
| 55-60% | 1 | 1 | 0.0% (n=1, noise) | 0.0 pts | 0.313 |

## Miss Patterns
| Pattern | Count | Avg CLV | Avg Brier |
| --- | --- | --- | --- |
| MLB variance/context miss | 16 | 0.2 pts | 0.209 |
| Negative CLV miss | 3 | -2.9 pts | 0.104 |
| Unclassified miss | 2 | -0.2 pts | 0.060 |

## Miss Detail
### Chicago White Sox - Texas Rangers vs Chicago White Sox
- Sport: MLB
- Result: loss
- Model: 49.2% at +110; close/latest +102
- CLV: 1.9 pts
- Pattern: MLB variance/context miss

### Los Angeles Dodgers - Philadelphia Phillies vs Los Angeles Dodgers
- Sport: MLB
- Result: loss
- Model: 46.3% at +126; close/latest -
- CLV: -
- Pattern: MLB variance/context miss

### Colorado Rockies - Colorado Rockies vs Cincinnati Reds
- Sport: MLB
- Result: loss
- Model: 43.0% at +147; close/latest -
- CLV: -
- Pattern: MLB variance/context miss

### San Francisco Giants - Seattle Mariners vs San Francisco Giants
- Sport: MLB
- Result: loss
- Model: 38.1% at +176; close/latest -
- CLV: -
- Pattern: MLB variance/context miss

### Milwaukee Brewers - Pittsburgh Pirates vs Milwaukee Brewers
- Sport: MLB
- Result: loss
- Model: 48.9% at +112; close/latest +116
- CLV: -0.9 pts
- Pattern: MLB variance/context miss

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

### France - France vs Spain
- Sport: Soccer
- Result: loss
- Model: 44.3% at +135; close/latest +160
- CLV: -4.1 pts
- Pattern: Negative CLV miss

### Cincinnati Reds - Cincinnati Reds vs Philadelphia Phillies
- Sport: MLB
- Result: loss
- Model: 42.0% at +147; close/latest +147
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

### Kansas City Royals - New York Mets vs Kansas City Royals
- Sport: MLB
- Result: loss
- Model: 40.6% at +158; close/latest +158
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

### Switzerland - Argentina vs Switzerland
- Sport: Soccer
- Result: loss
- Model: 20.8% at +460; close/latest +550
- CLV: -2.5 pts
- Pattern: Negative CLV miss

### Cincinnati Reds - Cincinnati Reds vs Philadelphia Phillies
- Sport: MLB
- Result: loss
- Model: 41.8% at +153; close/latest +147
- CLV: 1.0 pts
- Pattern: MLB variance/context miss

### St. Louis Cardinals - St. Louis Cardinals vs Milwaukee Brewers
- Sport: MLB
- Result: loss
- Model: 38.3% at +178; close/latest +187
- CLV: -1.1 pts
- Pattern: MLB variance/context miss

### Atlanta Braves - Pittsburgh Pirates vs Atlanta Braves
- Sport: MLB
- Result: loss
- Model: 41.5% at +155; close/latest +128
- CLV: 4.6 pts
- Pattern: MLB variance/context miss

### Belgium - Spain vs Belgium
- Sport: Soccer
- Result: loss
- Model: 27.3% at +498; close/latest +527
- CLV: -0.8 pts
- Pattern: Unclassified miss

### Draw - Argentina vs Egypt
- Sport: Soccer
- Result: loss
- Model: 21.2% at +410; close/latest +400
- CLV: 0.4 pts
- Pattern: Unclassified miss

### Atlanta Braves - Atlanta Braves vs New York Mets
- Sport: MLB
- Result: loss
- Model: 56.0% at -118; close/latest -118
- CLV: 0.0 pts
- Pattern: MLB variance/context miss

### Chicago White Sox - Chicago White Sox vs Boston Red Sox
- Sport: MLB
- Result: loss
- Model: 48.2% at +114; close/latest +110
- CLV: 0.9 pts
- Pattern: MLB variance/context miss

### Norway - Norway vs England
- Sport: Soccer
- Result: loss
- Model: 27.1% at +313; close/latest +354
- CLV: -2.2 pts
- Pattern: Negative CLV miss

### Atlanta Braves - Atlanta Braves vs New York Mets
- Sport: MLB
- Result: loss
- Model: 54.7% at -112; close/latest +104
- CLV: -3.8 pts
- Pattern: MLB variance/context miss

## Model Input Actions
- Line selection is hurting the model: average CLV is negative. Prioritize freshness, DraftKings comparison, and stale-line blocks before changing probability math.
- MLB misses need starter, bullpen, lineup, and line-movement context before changing base team-strength weights.

