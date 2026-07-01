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
| Jun 30 | Mexico ML | Mexico vs Ecuador | 44.4% | +125 | +136 | $0.00 | Win | -0.1 pts | +$0.00 | +2.1 pts | 0.309 |
| Jun 30 | Pittsburgh Pirates ML | Pittsburgh Pirates vs Philadelphia Phillies | 44.3% | +203 | — | $19.95 | Loss | +11.3 pts | -$19.95 | — | 0.196 |

Pulled straight from the app's Model Lab (`03-App/model-training-state.json` → `modelPicks`), which
is the only durable source of graded picks. Two other `modelPicks` entries (`France vs Sweden` /
`Mexico vs Ecuador` "seed example") are pre-loaded demo data from first app boot, not real tracked
picks — excluded here the same way the ledger's own `_example_` row is excluded. Worth deleting
those two from Model Lab so they stop padding the app's live Brier/CLV cards with fake history.

## Running tally

- Settled: 2 (excluding the example row)
- Win / Loss / Draw: 1 / 1 / 0
- Win rate: 50.0%
- Net P/L: -$19.95
- ROI: -100.0%
- Total staked: $19.95
- Avg CLV: +2.1 pts (1 graded pick has a close price)
- Avg Brier: 0.253

I recompute this block each time results are added, mirroring the Model Lab metric cards
(Graded picks · Brier · CLV · Net profit/loss).

Related:

- [[Model Lab]]
- [[Pick Notebook]]
- [[Bankroll and Risk Rules]]
- [[Edge Algorithm v0.1]]
