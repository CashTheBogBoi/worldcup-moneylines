# Results Log

Settled-pick ledger for the Sports Edge Lab algorithm, one-to-one with the app's Model Lab
grading flow (see [[Model Lab]]). Send a screenshot of your picks and outcomes and I append
a row per pick. The three inputs you enter are **Algorithm %**, **Odds**, and **Buy-in** —
everything else is derived exactly as the app derives it.

## How to use

1. Screenshot your bet slip / results.
2. Drop it in chat. I append one row per pick below and refresh the tally.
3. Result is **Win**, **Loss**, **Draw**, or **Pending** (a drawn 3-way moneyline loses the backed side).
4. Add **Close** odds when known so CLV is meaningful (optional).

## Columns (match the app)

- **Algorithm %** — the probability the model gave the pick (enter as you read it: `72` or `0.72`).
- **Odds** — American price you took.
- **Buy-in** — dollars staked (0 = tracking only).
- **Edge** = Algorithm % − break-even % of the odds.
- **Return** — Win pays moneyline profit on the buy-in; Loss/Draw = −buy-in; Pending = —.
- **CLV** = implied % at your odds − implied % at close.
- **Brier** = (Algorithm % − actual)², actual = 1 for Win, 0 for Loss/Draw. Lower is better.

## Ledger

| Date | Pick | Match | Algorithm % | Odds | Close | Buy-in | Result | Edge | Return | CLV | Brier |
|---|---|---|---:|---:|---:|---:|---|---:|---:|---:|---:|
| _example_ | France ML | France vs Sweden | 72.0% | -185 | -210 | $25.00 | Win | +7.1 pts | +$13.51 | +3.3 pts | 0.078 |
| Jun 30 | Atlanta Braves ML | Atlanta Braves vs St. Louis Cardinals | 37.3% | +272 | +1000 | $0.00 | Loss | +10.4 pts | $0.00 | -16.3 pts | 0.139 |
| Jun 30 | Chicago White Sox ML | Baltimore Orioles vs Chicago White Sox | 94.8% | -5000 | -2000 | $0.00 | Win | +92.8 pts | $0.00 | -2.7 pts | 0.003 |
| Jun 30 | Cleveland Guardians ML | Cleveland Guardians vs Texas Rangers | 47.4% | +130 | +1100 | $0.00 | Loss | +3.9 pts | $0.00 | -34.4 pts | 0.225 |
| Jun 30 | Toronto Blue Jays ML | Toronto Blue Jays vs New York Mets | 47.7% | +135 | +2200 | $0.00 | Loss | +5.1 pts | $0.00 | -38.1 pts | 0.227 |
| Jun 30 | Chicago Cubs ML | Chicago Cubs vs San Diego Padres | 57.1% | -132 | -350 | $0.00 | Win | +0.2 pts | $0.00 | +18.7 pts | 0.184 |
| Jun 30 | Colorado Rockies ML | Colorado Rockies vs Miami Marlins | 44.9% | +117 | +550 | $0.00 | Loss | -1.2 pts | $0.00 | -31.1 pts | 0.202 |
| Jun 30 | Washington Nationals ML | Boston Red Sox vs Washington Nationals | 45.0% | +117 | -1800 | $0.00 | Win | -1.0 pts | $0.00 | +90.3 pts | 0.302 |
| Jun 30 | Mexico ML | Mexico vs Ecuador | 45.1% | +131 | +136 | $0.00 | Win | +1.8 pts | $0.00 | +0.9 pts | 0.301 |
| Jun 30 | Mexico/Ecuador Draw | Mexico vs Ecuador | 34.1% | +190 | — | $70.00 | Loss | -0.4 pts | -$70.00 | — | 0.116 |
| Jun 30 | Pittsburgh Pirates ML | Philadelphia Phillies vs Pittsburgh Pirates | 34.0% | +196 | +4000 | $0.00 | Loss | +0.2 pts | $0.00 | -31.5 pts | 0.115 |

Pulled straight from the app's Model Lab (`03-App/model-training-state.json` → `modelPicks`), which
is the durable source of graded picks. June 30 MLB close prices are contaminated by live/post-start
updates and should not be treated as true CLV. See [[June 30 2026 MLB Prediction Postmortem]].

## Running tally

- Settled: 10 (excluding the example row)
- Win / Loss / Draw: 4 / 6 / 0
- Win rate: 40.0%
- Net P/L: -$70.00
- ROI: -100.0%
- Total staked: $70.00
- Avg Brier: 0.182
- MLB June 30 tracked picks: 3-5
- Soccer June 30 tracked picks: Mexico ML won, Mexico/Ecuador Draw lost

I recompute this block each time results are added, mirroring the Model Lab metric cards
(Graded picks · Brier · CLV · Net profit/loss).

## June 30 postmortem summary

The June 30 MLB record should be interpreted carefully:

- Most MLB picks were `Odds API no-vig only`.
- Several were tracked after first pitch.
- Close prices were overwritten by live odds.
- The full MLB model was not active for most tracked rows.

Action items are documented in:

- [[June 30 2026 MLB Prediction Postmortem]]
- [[June 30 2026 Tracking Fix List]]

The June 30 World Cup side/advancement reads were cleaner:

- Mexico ML won 2-0 over Ecuador.
- Norway advancement/manual lean won 2-1 over Ivory Coast.
- France ML seed/example won 3-0 over Sweden, but should be excluded from learning if it was only a seed row.

World Cup postmortem notes:

- [[June 30 2026 World Cup Prediction Postmortem]]
- [[June 30 2026 Soccer Tracking Fix List]]

Related:

- [[Model Lab]]
- [[Pick Notebook]]
- [[Bankroll and Risk Rules]]
- [[Edge Algorithm v0.1]]
