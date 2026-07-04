# Daily Review - 2026-07-04

Generated: 2026-07-04T20:28:38.799Z

## Executive Read
- Tracked picks reviewed: 15
- Settled picks: 3
- Win rate: 0.0%
- Average CLV: -0.1 pts
- Beat-close rate: 20.0%
- Average Brier: 0.105
- Staked: $0.00
- Net P/L: $0.00

## Best Pick Signal
- Pick: **Morocco**
- Match: Canada vs Morocco
- Sport: Soccer
- Open: -120
- Latest/close: -120 at BetMGM
- Model probability: 52.8%
- CLV: 0.0 pts
- Result: pending

## All Tracked Picks
| Sport | Match | Pick | Result | Open | Latest/Close | CLV | Model % | Brier | Stake | P/L | Notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| MLB | Los Angeles Angels vs Boston Red Sox | Los Angeles Angels | pending | +141 | +147 | -1.0 pts | 44.1% | - | - | - | open DraftKings; latest LowVig.ag; auto-close |
| Soccer | Switzerland vs Colombia | Switzerland | pending | +260 | +260 | 0.0 pts | 30.1% | - | - | - | open BetRivers; latest BetRivers; auto-close |
| Soccer | Argentina vs Egypt | Egypt | pending | +940 | +940 | 0.0 pts | 15.2% | - | - | - | open BetOnline.ag; latest BetOnline.ag; auto-close |
| MLB | Colorado Rockies vs San Francisco Giants | Colorado Rockies | pending | +118 | +118 | 0.0 pts | 48.1% | - | - | - | open DraftKings; latest DraftKings; auto-close |
| MLB | Seattle Mariners vs Toronto Blue Jays | Seattle Mariners | loss | +113 | +116 | -0.7 pts | 49.4% | 0.244 | - | $0.00 | open BetUS; latest FanDuel; auto-graded; auto-close |
| Soccer | Colombia vs Ghana | Draw | loss | +369 | +350 | 0.9 pts | 22.8% | 0.052 | - | $0.00 | open MyBookie.ag; latest BetMGM; auto-graded; auto-close |
| Soccer | Portugal vs Spain | Portugal | pending | +322 | +322 | 0.0 pts | 28.0% | - | - | - | open BetOnline.ag; latest BetOnline.ag; auto-close |
| Soccer | Paraguay vs France | Draw | pending | +720 | +600 | 2.1 pts | 15.8% | - | - | - | open MyBookie.ag; latest Fanatics; auto-close |
| Soccer | Brazil vs Norway | Norway | pending | +330 | +370 | -2.0 pts | 23.3% | - | - | - | open BetRivers; latest BetOnline.ag; auto-close |
| Soccer | Canada vs Morocco | Canada | pending | +440 | +440 | 0.0 pts | 19.2% | - | - | - | latest MyBookie.ag; auto-close |
| Soccer | Colombia vs Ghana | Ghana | loss | +705 | +835 | -1.7 pts | 13.1% | 0.017 | - | $0.00 | latest BetOnline.ag; auto-graded; auto-close |
| Soccer | Paraguay vs France | Paraguay | pending | +1800 | +1800 | 0.0 pts | 5.7% | - | - | - | latest DraftKings; auto-close |
| Soccer | Mexico vs England | Mexico | pending | +242 | +215 | 2.5 pts | 30.8% | - | - | - | latest BetRivers; auto-close |
| Soccer | Mexico vs England | England | pending | +143 | +150 | -1.2 pts | 39.3% | - | - | - | latest BetOnline.ag; auto-close |
| Soccer | Canada vs Morocco | Morocco | pending | -120 | -120 | 0.0 pts | 52.8% | - | - | - | latest BetMGM; auto-close |

## Sport Splits
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| Soccer | 12 | 2 | 0.0% | 0.1 pts | 25.0% | 0.035 | - |
| MLB | 3 | 1 | 0.0% | -0.6 pts | 0.0% | 0.244 | - |

## Confidence Buckets
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| Under 55% | 15 | 3 | 0.0% | -0.1 pts | 20.0% | 0.105 | - |

## Ready To Bet Gate Review
### Gate Performance
| Group | Picks | Settled | Win % | Avg CLV | Beat Close | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|---:|
| Passed gate | 8 | 2 | 0.0% | 0.2 pts | 25.0% | 0.148 | - |
| Unknown gate | 7 | 1 | 0.0% | -0.3 pts | 14.3% | 0.017 | - |

### Saved Gate Blockers
_No saved gate blockers on reviewed picks yet._

## What Went Wrong
### Seattle Mariners — Seattle Mariners vs Toronto Blue Jays
- Result: loss
- Model: 49.4% at +113; CLV -0.7 pts
- MLB miss; check starter confirmation, bullpen fatigue, lineup quality, and line movement before changing base weights.

### Draw — Colombia vs Ghana
- Result: loss
- Model: 22.8% at +369; CLV 0.9 pts
- Lost but beat the close; process may still be healthy.

### Ghana — Colombia vs Ghana
- Result: loss
- Model: 13.1% at +705; CLV -1.7 pts
- No specific pattern detected yet; add manual context if news/injuries mattered.

## Daily Intel That Mattered
- **MLB / High / Market move / confirmed:** Minnesota Twins at New York Yankees — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / High / Market move / confirmed:** Detroit Tigers at Texas Rangers — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / High / Market move / confirmed:** Toronto Blue Jays at Seattle Mariners — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Soccer / Medium / Market move / confirmed:** France at Paraguay — France is priced at -550. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Soccer / Medium / Market move / confirmed:** England at Mexico — Draw price is +220, which is short enough to demand draw-risk review before backing either side.
- **Soccer / Medium / Market move / confirmed:** Colombia at Switzerland — Draw price is +220, which is short enough to demand draw-risk review before backing either side.

## Algorithm Adjustments To Consider
- Do not increase stake sizing yet: fewer than half of tracked prices beat the close.
- Before MLB picks go live, re-run `npm run update:data` and confirm probable pitchers are not TBD.
- Low-probability soccer side picks need a separate draw-risk note before they become bankroll picks.
- High-impact daily intel exists; resolve those warnings before promoting anything to Bankroll Watch.

## Next Actions
- Run `npm run update:data` before making new picks.
- Track the pick before the game starts so CLV is meaningful.
- After finals, refresh once more so auto-grading can settle pending picks.

