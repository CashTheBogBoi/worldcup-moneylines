# Research Cycle - Morning slate build - 2026-07-04

Generated: 2026-07-04T08:31:35.428Z
Local time: 4:31 AM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-04T08:31:25.616Z
- MLB odds events: 15
- Soccer odds events: 8
- High-impact intel blocks: 0
- Intel pending / confirmed / denied: 2 / 1 / 0
- Pending tracked picks: 8
- Tracked gate status passed / blocked / unknown: 7 / 0 / 25
- Nightly review ran: no

## High-Impact Blocks
_No active high-impact blocks in this snapshot._

## Missing MLB Starters
_No rows._

## Next MLB Windows
| Game | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Pittsburgh Pirates at Washington Nationals | Jul 4, 11:06 AM | 395 | Pittsburgh Pirates -167, Washington Nationals +138 | 11 |
| Minnesota Twins at New York Yankees | Jul 4, 1:36 PM | 545 | Minnesota Twins +136, New York Yankees -164 | 10 |
| Detroit Tigers at Texas Rangers | Jul 4, 4:06 PM | 695 | Detroit Tigers -118, Texas Rangers -102 | 11 |
| Toronto Blue Jays at Seattle Mariners | Jul 4, 4:11 PM | 700 | Seattle Mariners -163, Toronto Blue Jays +135 | 11 |
| Baltimore Orioles at Cincinnati Reds | Jul 4, 7:11 PM | 880 | Baltimore Orioles +101, Cincinnati Reds -122 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 4, 7:11 PM | 880 | Chicago White Sox +123, Cleveland Guardians -149 | 11 |
| Tampa Bay Rays at Houston Astros | Jul 4, 7:11 PM | 880 | Houston Astros -111, Tampa Bay Rays -108 | 11 |
| New York Mets at Atlanta Braves | Jul 4, 8:09 PM | 938 | Atlanta Braves -175, New York Mets +144 | 11 |
| St. Louis Cardinals at Chicago Cubs | Jul 4, 8:09 PM | 938 | Chicago Cubs -163, St. Louis Cardinals +135 | 11 |
| San Francisco Giants at Colorado Rockies | Jul 4, 8:11 PM | 940 | Colorado Rockies +109, San Francisco Giants -131 | 11 |
| Philadelphia Phillies at Kansas City Royals | Jul 4, 8:11 PM | 940 | Kansas City Royals +130, Philadelphia Phillies -157 | 11 |
| Boston Red Sox at Los Angeles Angels | Jul 4, 9:39 PM | 1028 | Boston Red Sox -167, Los Angeles Angels +138 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Morocco at Canada | Jul 4, 1:00 PM | 509 | Canada +400, Morocco -130, Draw +245 | 9 |
| France at Paraguay | Jul 4, 5:00 PM | 749 | France -550, Paraguay +1700, Draw +550 | 9 |
| Norway at Brazil | Jul 5, 4:00 PM | 2129 | Brazil -125, Norway +320, Draw +285 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 2369 | England +140, Mexico +205, Draw +220 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 3509 | Portugal +295, Spain -110, Draw +265 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 3809 | Belgium +165, USA +160, Draw +240 | 9 |
| Egypt at Argentina | Jul 7, 12:00 PM | 4769 | Argentina -285, Egypt +850, Draw +380 | 9 |
| Colombia at Switzerland | Jul 7, 4:00 PM | 5009 | Colombia +125, Switzerland +235, Draw +225 | 8 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Soccer | Portugal vs Spain | Portugal | +322 | +322 | 28.0% | 45% strength model + 55% market no-vig |
| Soccer | Paraguay vs France | Draw | +720 | +736 | 15.8% | 45% strength model + 55% market no-vig |
| Soccer | Brazil vs Norway | Norway | +330 | +367 | 23.3% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Canada | +440 | +390 | 19.2% | Odds API no-vig only |
| Soccer | Paraguay vs France | Paraguay | +1800 | +2602 | 5.7% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +210 | 30.8% | 51% strength model + 49% market no-vig |
| Soccer | Mexico vs England | England | +143 | +149 | 39.3% | 48% strength model + 52% market no-vig |
| Soccer | Canada vs Morocco | Morocco | -120 | -110 | 52.8% | Odds API no-vig only |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

