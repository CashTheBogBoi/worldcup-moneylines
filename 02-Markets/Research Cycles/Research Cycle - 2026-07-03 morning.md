# Research Cycle - Morning slate build - 2026-07-03

Generated: 2026-07-04T00:29:10.405Z
Local time: 8:29 PM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-04T00:29:02.539Z
- MLB odds events: 27
- Soccer odds events: 8
- High-impact intel blocks: 7
- Intel pending / confirmed / denied: 8 / 1 / 0
- Pending tracked picks: 12
- Tracked gate status passed / blocked / unknown: 7 / 0 / 25
- Nightly review ran: no

## High-Impact Blocks
- **MLB / Market move / pending:** Pittsburgh Pirates at Washington Nationals — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** Minnesota Twins at New York Yankees — Game status is Delayed. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** Baltimore Orioles at Cincinnati Reds — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** Chicago White Sox at Cleveland Guardians — Game status is Delayed. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** New York Mets at Atlanta Braves — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** San Francisco Giants at Colorado Rockies — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** Tampa Bay Rays at Houston Astros — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## Missing MLB Starters
_No rows._

## Next MLB Windows
| Game | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Boston Red Sox at Los Angeles Angels | Jul 3, 9:38 PM | 69 | Boston Red Sox -105, Los Angeles Angels -114 | 11 |
| Miami Marlins at Athletics | Jul 3, 9:40 PM | 71 | Athletics -143, Miami Marlins +119 | 11 |
| Milwaukee Brewers at Arizona Diamondbacks | Jul 3, 9:45 PM | 76 | Arizona Diamondbacks +119, Milwaukee Brewers -144 | 11 |
| San Diego Padres at Los Angeles Dodgers | Jul 3, 10:10 PM | 101 | Los Angeles Dodgers -260, San Diego Padres +210 | 11 |
| Toronto Blue Jays at Seattle Mariners | Jul 3, 10:10 PM | 101 | Seattle Mariners +109, Toronto Blue Jays -132 | 11 |
| Pittsburgh Pirates at Washington Nationals | Jul 4, 11:06 AM | 877 | Pittsburgh Pirates -156, Washington Nationals +129 | 9 |
| Minnesota Twins at New York Yankees | Jul 4, 1:36 PM | 1027 | DK missing | 4 |
| Detroit Tigers at Texas Rangers | Jul 4, 4:06 PM | 1177 | Detroit Tigers -115, Texas Rangers -104 | 9 |
| Toronto Blue Jays at Seattle Mariners | Jul 4, 4:11 PM | 1182 | Seattle Mariners -163, Toronto Blue Jays +135 | 8 |
| Baltimore Orioles at Cincinnati Reds | Jul 4, 7:11 PM | 1362 | Baltimore Orioles +104, Cincinnati Reds -125 | 9 |
| Chicago White Sox at Cleveland Guardians | Jul 4, 7:11 PM | 1362 | Chicago White Sox +119, Cleveland Guardians -143 | 9 |
| Tampa Bay Rays at Houston Astros | Jul 4, 7:11 PM | 1362 | Houston Astros -110, Tampa Bay Rays -110 | 8 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Ghana at Colombia | Jul 3, 9:30 PM | 61 | Colombia -235, Ghana +750, Draw +330 | 9 |
| Morocco at Canada | Jul 4, 1:00 PM | 991 | Canada +360, Morocco -115, Draw +235 | 9 |
| France at Paraguay | Jul 4, 5:00 PM | 1231 | France -525, Paraguay +1600, Draw +550 | 9 |
| Norway at Brazil | Jul 5, 4:00 PM | 2611 | Brazil -120, Norway +310, Draw +275 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 2851 | England +145, Mexico +205, Draw +215 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 3991 | Portugal +295, Spain -110, Draw +265 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 4291 | Belgium +155, USA +170, Draw +240 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| MLB | Seattle Mariners vs Toronto Blue Jays | Seattle Mariners | +113 | +116 | 49.4% | 35% strength model + 65% market no-vig |
| Soccer | Colombia vs Ghana | Draw | +369 | +350 | 22.8% | 45% strength model + 55% market no-vig |
| MLB | Atlanta Braves vs New York Mets | Atlanta Braves | -102 | -107 | 54.3% | 35% strength model + 65% market no-vig |
| Soccer | Portugal vs Spain | Portugal | +322 | +322 | 28.0% | 45% strength model + 55% market no-vig |
| Soccer | Paraguay vs France | Draw | +720 | +702 | 15.8% | 45% strength model + 55% market no-vig |
| Soccer | Brazil vs Norway | Norway | +330 | +367 | 23.3% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Draw | +700 | +765 | 12.5% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Canada | +440 | +390 | 19.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Cape Verde | +1900 | +2200 | 5.2% | Odds API no-vig only |
| Soccer | Colombia vs Ghana | Ghana | +705 | +825 | 13.1% | Odds API no-vig only |
| Soccer | Paraguay vs France | Paraguay | +1800 | +2412 | 5.7% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +210 | 30.8% | 51% strength model + 49% market no-vig |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

