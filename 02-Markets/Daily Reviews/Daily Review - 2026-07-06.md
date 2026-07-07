# Daily Review - 2026-07-06

Generated: 2026-07-07T03:46:24.561Z

## Executive Read
- Tracked picks reviewed: 11
- Settled picks: 4
- Win rate: 50.0%
- Average CLV: -0.1 pts
- Beat-close rate: 20.0%
- Average Brier: 0.301
- Staked: $0.00
- Net P/L: $0.00

## Best Pick Signal
- Pick: **Atlanta Braves**
- Match: Atlanta Braves vs New York Mets
- Sport: MLB
- Open: -118 at LowVig.ag
- Latest/close: -118 at LowVig.ag
- Model probability: 56.0%
- CLV: 0.0 pts
- Result: loss

## All Tracked Picks
| Sport | Match | Pick | Result | Open | Latest/Close | CLV | Model % | Brier | Stake | P/L | Notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| MLB | Pittsburgh Pirates vs Atlanta Braves | Atlanta Braves | pending | +155 | - | - | 41.5% | - | - | - | open BetRivers; latest BetRivers |
| Soccer | Spain vs Belgium | Belgium | pending | +498 | +498 | 0.0 pts | 27.3% | - | - | - | open BetOnline.ag; latest BetOnline.ag; auto-close |
| Soccer | Argentina vs Egypt | Draw | pending | +410 | +400 | 0.4 pts | 21.2% | - | - | - | open BetRivers; latest BetRivers; auto-close |
| Soccer | USA vs Belgium | Belgium | win | +202 | +198 | 0.4 pts | 35.2% | 0.421 | - | $0.00 | open BetUS; latest BetOnline.ag; auto-graded; auto-close |
| MLB | Atlanta Braves vs New York Mets | Atlanta Braves | loss | -118 | -118 | 0.0 pts | 56.0% | 0.313 | - | $0.00 | open LowVig.ag; latest LowVig.ag; auto-graded; auto-close |
| MLB | Chicago White Sox vs Boston Red Sox | Chicago White Sox | pending | +114 | +115 | -0.2 pts | 48.2% | - | - | - | open BetUS; latest BetOnline.ag; auto-close |
| Soccer | Norway vs England | Norway | pending | +313 | +320 | -0.4 pts | 27.1% | - | - | - | open BetOnline.ag; latest BetRivers; auto-close |
| MLB | Kansas City Royals vs Philadelphia Phillies | Kansas City Royals | win | +190 | +190 | 0.0 pts | 37.4% | 0.392 | - | $0.00 | open Bovada; latest Bovada; auto-close |
| Soccer | Argentina vs Egypt | Egypt | pending | +940 | +950 | -0.1 pts | 15.2% | - | - | - | open BetOnline.ag; latest BetRivers; auto-close |
| Soccer | Switzerland vs Colombia | Switzerland | pending | +260 | +280 | -1.5 pts | 30.1% | - | - | - | open BetRivers; latest BetRivers; auto-close |
| Soccer | Portugal vs Spain | Portugal | loss | +322 | +322 | 0.0 pts | 28.0% | 0.078 | - | $0.00 | open BetOnline.ag; latest BetUS; auto-close |

## Sport Splits
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| Soccer | 7 | 2 | 50.0% | -0.2 pts | 28.6% | 0.249 | - |
| MLB | 4 | 2 | 50.0% | -0.1 pts | 0.0% | 0.353 | - |

## Confidence Buckets
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| Under 55% | 10 | 3 | 66.7% | -0.1 pts | 22.2% | 0.297 | - |
| 55-60% | 1 | 1 | 0.0% | 0.0 pts | 0.0% | 0.313 | - |

## Ready To Bet Gate Review
### Gate Performance
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| Passed gate | 11 | 4 | 50.0% | -0.1 pts | 20.0% | 0.301 | - |

### Saved Gate Blockers
_No saved gate blockers on reviewed picks yet._

## What Went Wrong
### Atlanta Braves — Atlanta Braves vs New York Mets
- Result: loss
- Model: 56.0% at -118; CLV 0.0 pts
- MLB miss; check starter confirmation, bullpen fatigue, lineup quality, and line movement before changing base weights.

### Portugal — Portugal vs Spain
- Result: loss
- Model: 28.0% at +322; CLV 0.0 pts
- No specific pattern detected yet; add manual context if news/injuries mattered.

## Daily Intel That Mattered
- **MLB / High / Market move / pending:** Arizona Diamondbacks at San Diego Padres — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / High / Market move / pending:** Toronto Blue Jays at San Francisco Giants — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / High / Market move / pending:** Colorado Rockies at Los Angeles Dodgers — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Soccer / Medium / Market move / confirmed:** Colombia at Switzerland — Draw price is +210, which is short enough to demand draw-risk review before backing either side.

## Algorithm Adjustments To Consider
- Do not increase stake sizing yet: fewer than half of tracked prices beat the close.
- Before MLB picks go live, re-run `npm run update:data` and confirm probable pitchers are not TBD.
- Low-probability soccer side picks need a separate draw-risk note before they become bankroll picks.
- High-impact daily intel exists; resolve those warnings before promoting anything to Bankroll Watch.

## Next Actions
- Run `npm run update:data` before making new picks.
- Track the pick before the game starts so CLV is meaningful.
- After finals, refresh once more so auto-grading can settle pending picks.

