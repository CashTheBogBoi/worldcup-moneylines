# Daily Review - 2026-07-11

Generated: 2026-07-12T03:53:24.595Z

## Executive Read
- Tracked picks reviewed: 9
- Settled picks: 6
- Win rate: 16.7%
- Average CLV: -0.6 pts
- Beat-close rate: 37.5%
- Average Brier: 0.163
- Staked: $0.00
- Net P/L: $0.00

## Best Pick Signal
- Pick: **Chicago White Sox**
- Match: Chicago White Sox vs Athletics
- Sport: MLB
- Open: -106 at LowVig.ag
- Latest/close: -114 at BetRivers
- Model probability: 53.1%
- CLV: 1.8 pts
- Result: win

## All Tracked Picks
| Sport | Match | Pick | Result | Open | Latest/Close | CLV | Model % | Brier | Stake | P/L | Notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| MLB | Pittsburgh Pirates vs Milwaukee Brewers | Milwaukee Brewers | pending | +112 | +110 | 0.4 pts | 48.9% | - | - | - | open FanDuel; latest FanDuel; auto-close |
| MLB | Chicago White Sox vs Athletics | Chicago White Sox | win | -106 | -114 | 1.8 pts | 53.1% | 0.220 | - | $0.00 | open LowVig.ag; latest BetRivers; auto-graded; auto-close |
| MLB | Los Angeles Dodgers vs Arizona Diamondbacks | Arizona Diamondbacks | pending | +239 | +265 | -2.1 pts | 31.1% | - | - | - | open MyBookie.ag; latest LowVig.ag; auto-close |
| MLB | Pittsburgh Pirates vs Milwaukee Brewers | Milwaukee Brewers | loss | +107 | - | - | 51.2% | 0.262 | - | $0.00 | open DraftKings; latest DraftKings; auto-graded |
| MLB | Detroit Tigers vs Philadelphia Phillies | Detroit Tigers | loss | +124 | +123 | 0.2 pts | 47.4% | 0.225 | - | $0.00 | open FanDuel; latest DraftKings; auto-graded; auto-close |
| MLB | Washington Nationals vs New York Yankees | Washington Nationals | loss | +167 | +170 | -0.4 pts | 39.4% | 0.156 | - | $0.00 | open BetOnline.ag; latest Caesars; auto-graded; auto-close |
| Soccer | France vs Spain | France | pending | +135 | +137 | -0.4 pts | 44.3% | - | - | - | open BetUS; latest LowVig.ag; auto-close |
| Soccer | Argentina vs Switzerland | Switzerland | loss | +460 | +550 | -2.5 pts | 20.8% | 0.043 | - | $0.00 | open BetRivers; latest BetOnline.ag; auto-graded; auto-close |
| Soccer | Norway vs England | Norway | loss | +313 | +354 | -2.2 pts | 27.1% | 0.073 | - | $0.00 | open BetOnline.ag; latest BetOnline.ag; auto-graded; auto-close |

## Sport Splits
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| MLB | 6 | 4 | 25.0% | -0.0 pts | 60.0% | 0.216 | - |
| Soccer | 3 | 2 | 0.0% | -1.7 pts | 0.0% | 0.058 | - |

## Confidence Buckets
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| Under 55% | 9 | 6 | 16.7% | -0.6 pts | 37.5% | 0.163 | - |

## Ready To Bet Gate Review
### Gate Performance
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| Passed gate | 9 | 6 | 16.7% | -0.6 pts | 37.5% | 0.163 | - |

### Saved Gate Blockers
_No saved gate blockers on reviewed picks yet._

## What Went Wrong
### Milwaukee Brewers — Pittsburgh Pirates vs Milwaukee Brewers
- Result: loss
- Model: 51.2% at +107; CLV -
- MLB miss; check starter confirmation, bullpen fatigue, lineup quality, and line movement before changing base weights.

### Detroit Tigers — Detroit Tigers vs Philadelphia Phillies
- Result: loss
- Model: 47.4% at +124; CLV 0.2 pts
- Lost but beat the close; process may still be healthy.
- MLB miss; check starter confirmation, bullpen fatigue, lineup quality, and line movement before changing base weights.

### Washington Nationals — Washington Nationals vs New York Yankees
- Result: loss
- Model: 39.4% at +167; CLV -0.4 pts
- MLB miss; check starter confirmation, bullpen fatigue, lineup quality, and line movement before changing base weights.

### Switzerland — Argentina vs Switzerland
- Result: loss
- Model: 20.8% at +460; CLV -2.5 pts
- No specific pattern detected yet; add manual context if news/injuries mattered.

### Norway — Norway vs England
- Result: loss
- Model: 27.1% at +313; CLV -2.2 pts
- No specific pattern detected yet; add manual context if news/injuries mattered.

## Daily Intel That Mattered
- **MLB / High / Market move / pending:** Toronto Blue Jays at San Diego Padres — Game status is Game Over. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / High / Market move / pending:** Arizona Diamondbacks at Los Angeles Dodgers — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Soccer / Medium / Market move / pending:** Spain at France — Draw price is +225, which is short enough to demand draw-risk review before backing either side.
- **Soccer / Medium / Market move / pending:** Argentina at England — Draw price is +205, which is short enough to demand draw-risk review before backing either side.

## Algorithm Adjustments To Consider
- Do not increase stake sizing yet: fewer than half of tracked prices beat the close.
- Before MLB picks go live, re-run `npm run update:data` and confirm probable pitchers are not TBD.
- Low-probability soccer side picks need a separate draw-risk note before they become bankroll picks.
- High-impact daily intel exists; resolve those warnings before promoting anything to Bankroll Watch.

## Next Actions
- Run `npm run update:data` before making new picks.
- Track the pick before the game starts so CLV is meaningful.
- After finals, refresh once more so auto-grading can settle pending picks.

