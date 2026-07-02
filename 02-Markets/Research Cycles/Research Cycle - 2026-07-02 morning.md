# Research Cycle - Morning slate build - 2026-07-02

Generated: 2026-07-02T15:39:53.447Z
Local time: 11:39 AM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-02T15:39:51.466Z
- MLB odds events: 9
- Soccer odds events: 11
- High-impact intel blocks: 0
- Intel pending / confirmed / denied: 1 / 5 / 0
- Pending tracked picks: 12
- Tracked gate status passed / blocked / unknown: 0 / 0 / 25
- Nightly review ran: no

## High-Impact Blocks
_No active high-impact blocks in this snapshot._

## Missing MLB Starters
_No rows._

## Next MLB Windows
| Game | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Pittsburgh Pirates at Philadelphia Phillies | Jul 2, 12:36 PM | 56 | Philadelphia Phillies -131, Pittsburgh Pirates +109 | 11 |
| Cincinnati Reds at Milwaukee Brewers | Jul 2, 2:11 PM | 151 | Cincinnati Reds +163, Milwaukee Brewers -199 | 11 |
| Miami Marlins at Colorado Rockies | Jul 2, 3:11 PM | 211 | Colorado Rockies +109, Miami Marlins -131 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 2, 6:41 PM | 421 | Chicago White Sox -107, Cleveland Guardians -112 | 11 |
| St. Louis Cardinals at Atlanta Braves | Jul 2, 7:16 PM | 456 | Atlanta Braves -115, St. Louis Cardinals -105 | 11 |
| Tampa Bay Rays at Kansas City Royals | Jul 2, 7:41 PM | 481 | Kansas City Royals +104, Tampa Bay Rays -126 | 11 |
| Detroit Tigers at Texas Rangers | Jul 2, 8:06 PM | 506 | Detroit Tigers -105, Texas Rangers -115 | 11 |
| Los Angeles Angels at Seattle Mariners | Jul 2, 9:41 PM | 601 | Los Angeles Angels +178, Seattle Mariners -219 | 11 |
| San Diego Padres at Los Angeles Dodgers | Jul 2, 10:11 PM | 631 | Los Angeles Dodgers -198, San Diego Padres +162 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Austria at Spain | Jul 2, 3:00 PM | 200 | Austria +1100, Spain -340, Draw +450 | 9 |
| Croatia at Portugal | Jul 2, 7:00 PM | 440 | Croatia +450, Portugal -150, Draw +280 | 9 |
| Algeria at Switzerland | Jul 2, 11:00 PM | 680 | Algeria +350, Switzerland -110, Draw +230 | 9 |
| Egypt at Australia | Jul 3, 2:00 PM | 1580 | Australia +230, Egypt +150, Draw +190 | 9 |
| Cape Verde at Argentina | Jul 3, 6:00 PM | 1820 | Argentina -600, Cape Verde +1800, Draw +700 | 9 |
| Ghana at Colombia | Jul 3, 9:30 PM | 2030 | Colombia -190, Ghana +600, Draw +310 | 9 |
| Morocco at Canada | Jul 4, 1:00 PM | 2960 | Canada +400, Morocco -125, Draw +250 | 9 |
| France at Paraguay | Jul 4, 5:00 PM | 3200 | France -575, Paraguay +1800, Draw +600 | 9 |
| Norway at Brazil | Jul 5, 4:00 PM | 4580 | Brazil -115, Norway +310, Draw +280 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 4820 | England +140, Mexico +220, Draw +215 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 6260 | Belgium +180, USA +150, Draw +250 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Soccer | Brazil vs Norway | Norway | +330 | +329 | 23.3% | Odds API no-vig only |
| Soccer | Portugal vs Croatia | Croatia | +415 | +440 | 19.4% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Egypt | +155 | +155 | 38.3% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Draw | +195 | +190 | 33.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Draw | +700 | +700 | 12.5% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Canada | +440 | +420 | 19.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Cape Verde | +1900 | +1900 | 5.2% | Odds API no-vig only |
| Soccer | Colombia vs Ghana | Ghana | +705 | +705 | 13.1% | Odds API no-vig only |
| Soccer | Spain vs Austria | Austria | +1000 | +1130 | 9.7% | Odds API no-vig only |
| Soccer | Paraguay vs France | Paraguay | +1800 | +1800 | 5.7% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +220 | 30.8% | 51% strength model + 49% market no-vig |
| MLB | Philadelphia Phillies vs Pittsburgh Pirates | Philadelphia Phillies | -122 | -125 | 57.1% | 51% strength model + 49% market no-vig |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

