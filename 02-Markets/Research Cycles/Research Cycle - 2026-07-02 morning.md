# Research Cycle - Morning slate build - 2026-07-02

Generated: 2026-07-02T09:45:43.509Z
Local time: 5:45 AM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-02T09:45:39.508Z
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
| Pittsburgh Pirates at Philadelphia Phillies | Jul 2, 12:36 PM | 410 | Philadelphia Phillies -131, Pittsburgh Pirates +108 | 11 |
| Cincinnati Reds at Milwaukee Brewers | Jul 2, 2:11 PM | 505 | Cincinnati Reds +167, Milwaukee Brewers -204 | 11 |
| Miami Marlins at Colorado Rockies | Jul 2, 3:11 PM | 565 | Colorado Rockies +104, Miami Marlins -126 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 2, 6:41 PM | 775 | Chicago White Sox -120, Cleveland Guardians -101 | 11 |
| St. Louis Cardinals at Atlanta Braves | Jul 2, 7:16 PM | 810 | Atlanta Braves -115, St. Louis Cardinals -105 | 11 |
| Tampa Bay Rays at Kansas City Royals | Jul 2, 7:41 PM | 835 | Kansas City Royals +102, Tampa Bay Rays -122 | 11 |
| Detroit Tigers at Texas Rangers | Jul 2, 8:06 PM | 860 | Detroit Tigers +108, Texas Rangers -131 | 11 |
| Los Angeles Angels at Seattle Mariners | Jul 2, 9:41 PM | 955 | Los Angeles Angels +178, Seattle Mariners -219 | 11 |
| San Diego Padres at Los Angeles Dodgers | Jul 2, 10:11 PM | 985 | Los Angeles Dodgers -198, San Diego Padres +162 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Austria at Spain | Jul 2, 3:00 PM | 554 | Austria +950, Spain -310, Draw +425 | 9 |
| Croatia at Portugal | Jul 2, 7:00 PM | 794 | Croatia +400, Portugal -140, Draw +280 | 9 |
| Algeria at Switzerland | Jul 2, 11:00 PM | 1034 | Algeria +320, Switzerland +100, Draw +225 | 9 |
| Egypt at Australia | Jul 3, 2:00 PM | 1934 | Australia +230, Egypt +150, Draw +190 | 9 |
| Cape Verde at Argentina | Jul 3, 6:00 PM | 2174 | Argentina -600, Cape Verde +1800, Draw +700 | 9 |
| Ghana at Colombia | Jul 3, 9:30 PM | 2384 | Colombia -190, Ghana +600, Draw +310 | 9 |
| Morocco at Canada | Jul 4, 1:00 PM | 3314 | Canada +400, Morocco -125, Draw +250 | 9 |
| France at Paraguay | Jul 4, 5:00 PM | 3554 | France -575, Paraguay +1800, Draw +600 | 9 |
| Norway at Brazil | Jul 5, 4:00 PM | 4934 | Brazil -110, Norway +300, Draw +270 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 5174 | England +155, Mexico +205, Draw +215 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 6614 | Belgium +180, USA +150, Draw +250 | 8 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Soccer | Brazil vs Norway | Norway | +330 | +335 | 23.3% | Odds API no-vig only |
| Soccer | Portugal vs Croatia | Croatia | +415 | +435 | 19.4% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Egypt | +155 | +155 | 38.3% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Draw | +195 | +195 | 33.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Draw | +700 | +700 | 12.5% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Canada | +440 | +450 | 19.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Cape Verde | +1900 | +1900 | 5.2% | Odds API no-vig only |
| Soccer | Colombia vs Ghana | Ghana | +705 | +705 | 13.1% | Odds API no-vig only |
| Soccer | Spain vs Austria | Austria | +1000 | +1050 | 9.7% | Odds API no-vig only |
| Soccer | Paraguay vs France | Paraguay | +1800 | +1800 | 5.7% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +210 | 30.8% | 51% strength model + 49% market no-vig |
| MLB | Philadelphia Phillies vs Pittsburgh Pirates | Philadelphia Phillies | -122 | -122 | 57.1% | 51% strength model + 49% market no-vig |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

