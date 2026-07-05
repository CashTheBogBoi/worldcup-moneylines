# Research Cycle - Morning slate build - 2026-07-05

Generated: 2026-07-05T18:57:09.785Z
Local time: 2:57 PM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-05T18:57:05.201Z
- MLB odds events: 20
- Soccer odds events: 7
- High-impact intel blocks: 6
- Intel pending / confirmed / denied: 6 / 2 / 0
- Pending tracked picks: 7
- Tracked gate status passed / blocked / unknown: 13 / 0 / 25
- Nightly review ran: no

## High-Impact Blocks
- **MLB / Market move / pending:** New York Mets at Atlanta Braves — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** Pittsburgh Pirates at Washington Nationals — Game status is Player challenge. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** Baltimore Orioles at Cincinnati Reds — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** Minnesota Twins at New York Yankees — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** Chicago White Sox at Cleveland Guardians — Game status is Delayed Start. Do not track this as a pregame pick; any current line is live-market contaminated.
- **MLB / Market move / pending:** St. Louis Cardinals at Chicago Cubs — Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## Missing MLB Starters
_No rows._

## Next MLB Windows
| Game | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Philadelphia Phillies at Kansas City Royals | Jul 5, 3:01 PM | 4 | Kansas City Royals +113, Philadelphia Phillies -136 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 5, 3:10 PM | 13 | Chicago White Sox +122, Cleveland Guardians -147 | 7 |
| Detroit Tigers at Texas Rangers | Jul 5, 3:31 PM | 34 | Detroit Tigers -125, Texas Rangers +104 | 11 |
| Tampa Bay Rays at Houston Astros | Jul 5, 3:31 PM | 34 | Houston Astros -118, Tampa Bay Rays -102 | 11 |
| Milwaukee Brewers at Arizona Diamondbacks | Jul 5, 4:00 PM | 63 | Arizona Diamondbacks +101, Milwaukee Brewers -122 | 11 |
| San Francisco Giants at Colorado Rockies | Jul 5, 4:00 PM | 63 | Colorado Rockies +107, San Francisco Giants -129 | 11 |
| Miami Marlins at Athletics | Jul 5, 4:31 PM | 94 | Athletics -118, Miami Marlins -102 | 11 |
| Toronto Blue Jays at Seattle Mariners | Jul 5, 5:00 PM | 123 | Seattle Mariners -121, Toronto Blue Jays +100 | 11 |
| San Diego Padres at Los Angeles Dodgers | Jul 5, 7:21 PM | 264 | Los Angeles Dodgers -219, San Diego Padres +178 | 11 |
| Boston Red Sox at Los Angeles Angels | Jul 5, 9:31 PM | 394 | Boston Red Sox -163, Los Angeles Angels +135 | 11 |
| Philadelphia Phillies at Kansas City Royals | Jul 6, 2:11 PM | 1394 | Kansas City Royals +144, Philadelphia Phillies -175 | 8 |
| Houston Astros at Washington Nationals | Jul 6, 6:46 PM | 1669 | Houston Astros +113, Washington Nationals -136 | 7 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Norway at Brazil | Jul 5, 4:00 PM | 63 | Brazil -130, Norway +350, Draw +275 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 303 | England +150, Mexico +205, Draw +210 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 1443 | Portugal +280, Spain -105, Draw +265 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 1743 | Belgium +175, USA +155, Draw +235 | 9 |
| Egypt at Argentina | Jul 7, 12:00 PM | 2703 | Argentina -260, Egypt +750, Draw +370 | 9 |
| Colombia at Switzerland | Jul 7, 4:00 PM | 2943 | Colombia +130, Switzerland +240, Draw +210 | 9 |
| Morocco at France | Jul 9, 4:00 PM | 5823 | France -170, Morocco +500, Draw +285 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| MLB | Atlanta Braves vs New York Mets | Atlanta Braves | -112 | +104 | 54.7% | 25% strength model + 75% market no-vig |
| Soccer | Argentina vs Egypt | Egypt | +940 | +900 | 15.2% | 37% strength model + 63% market no-vig |
| Soccer | Switzerland vs Colombia | Switzerland | +260 | +260 | 30.1% | 37% strength model + 63% market no-vig |
| Soccer | Portugal vs Spain | Portugal | +322 | +322 | 28.0% | 45% strength model + 55% market no-vig |
| Soccer | Brazil vs Norway | Norway | +330 | +390 | 23.3% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +213 | 30.8% | 51% strength model + 49% market no-vig |
| Soccer | Mexico vs England | England | +143 | +152 | 39.3% | 48% strength model + 52% market no-vig |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

