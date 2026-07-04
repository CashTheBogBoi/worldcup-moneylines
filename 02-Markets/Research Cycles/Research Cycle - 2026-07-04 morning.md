# Research Cycle - Morning slate build - 2026-07-04

Generated: 2026-07-04T16:23:59.327Z
Local time: 12:23 PM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-04T16:23:53.122Z
- MLB odds events: 15
- Soccer odds events: 8
- High-impact intel blocks: 1
- Intel pending / confirmed / denied: 4 / 1 / 0
- Pending tracked picks: 8
- Tracked gate status passed / blocked / unknown: 7 / 0 / 25
- Nightly review ran: no

## High-Impact Blocks
- **MLB / Market move / pending:** Pittsburgh Pirates at Washington Nationals — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## Missing MLB Starters
_No rows._

## Next MLB Windows
| Game | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Minnesota Twins at New York Yankees | Jul 4, 1:36 PM | 72 | Minnesota Twins +124, New York Yankees -149 | 11 |
| Detroit Tigers at Texas Rangers | Jul 4, 4:06 PM | 222 | Detroit Tigers -118, Texas Rangers -102 | 11 |
| Toronto Blue Jays at Seattle Mariners | Jul 4, 4:11 PM | 227 | Seattle Mariners -173, Toronto Blue Jays +143 | 11 |
| Baltimore Orioles at Cincinnati Reds | Jul 4, 7:11 PM | 407 | Baltimore Orioles +109, Cincinnati Reds -131 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 4, 7:11 PM | 407 | Chicago White Sox +119, Cleveland Guardians -144 | 11 |
| Tampa Bay Rays at Houston Astros | Jul 4, 7:11 PM | 407 | Houston Astros -108, Tampa Bay Rays -112 | 11 |
| New York Mets at Atlanta Braves | Jul 4, 8:09 PM | 465 | Atlanta Braves -171, New York Mets +141 | 11 |
| St. Louis Cardinals at Chicago Cubs | Jul 4, 8:09 PM | 465 | Chicago Cubs -162, St. Louis Cardinals +134 | 11 |
| San Francisco Giants at Colorado Rockies | Jul 4, 8:11 PM | 467 | Colorado Rockies +126, San Francisco Giants -153 | 11 |
| Philadelphia Phillies at Kansas City Royals | Jul 4, 8:11 PM | 467 | Kansas City Royals +129, Philadelphia Phillies -156 | 11 |
| Boston Red Sox at Los Angeles Angels | Jul 4, 9:39 PM | 555 | Boston Red Sox -171, Los Angeles Angels +141 | 11 |
| Milwaukee Brewers at Arizona Diamondbacks | Jul 4, 9:41 PM | 557 | Arizona Diamondbacks +129, Milwaukee Brewers -156 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Morocco at Canada | Jul 4, 1:00 PM | 36 | Canada +400, Morocco -125, Draw +230 | 9 |
| France at Paraguay | Jul 4, 5:00 PM | 276 | France -575, Paraguay +1800, Draw +550 | 9 |
| Norway at Brazil | Jul 5, 4:00 PM | 1656 | Brazil -125, Norway +320, Draw +285 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 1896 | England +140, Mexico +205, Draw +220 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 3036 | Portugal +295, Spain -110, Draw +265 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 3336 | Belgium +170, USA +155, Draw +240 | 9 |
| Egypt at Argentina | Jul 7, 12:00 PM | 4296 | Argentina -285, Egypt +850, Draw +380 | 9 |
| Colombia at Switzerland | Jul 7, 4:00 PM | 4536 | Colombia +120, Switzerland +245, Draw +220 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Soccer | Portugal vs Spain | Portugal | +322 | +330 | 28.0% | 45% strength model + 55% market no-vig |
| Soccer | Paraguay vs France | Draw | +720 | +645 | 15.8% | 45% strength model + 55% market no-vig |
| Soccer | Brazil vs Norway | Norway | +330 | +370 | 23.3% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Canada | +440 | +525 | 19.2% | Odds API no-vig only |
| Soccer | Paraguay vs France | Paraguay | +1800 | +1950 | 5.7% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +215 | 30.8% | 51% strength model + 49% market no-vig |
| Soccer | Mexico vs England | England | +143 | +149 | 39.3% | 48% strength model + 52% market no-vig |
| Soccer | Canada vs Morocco | Morocco | -120 | -135 | 52.8% | Odds API no-vig only |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

