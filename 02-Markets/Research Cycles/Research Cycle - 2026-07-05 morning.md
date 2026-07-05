# Research Cycle - Morning slate build - 2026-07-05

Generated: 2026-07-05T12:48:33.101Z
Local time: 8:48 AM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-05T12:30:34.054Z
- MLB odds events: 15
- Soccer odds events: 7
- High-impact intel blocks: 1
- Intel pending / confirmed / denied: 2 / 2 / 0
- Pending tracked picks: 6
- Tracked gate status passed / blocked / unknown: 12 / 0 / 25
- Nightly review ran: no

## High-Impact Blocks
- **MLB / Starters / pending:** Tampa Bay Rays at Houston Astros — Official starter is still TBD (TBD vs Peter Lambert). Block Bankroll Watch promotion until both starters are confirmed.

## Missing MLB Starters
| Game | Start | Away starter | Home starter | Status |
| --- | --- | --- | --- | --- |
| Tampa Bay Rays at Houston Astros | Jul 5, 3:30 PM | TBD | Peter Lambert | Scheduled |

## Next MLB Windows
| Game | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| New York Mets at Atlanta Braves | Jul 5, 12:30 PM | 239 | Atlanta Braves -120, New York Mets -101 | 11 |
| Pittsburgh Pirates at Washington Nationals | Jul 5, 1:01 PM | 270 | Pittsburgh Pirates +113, Washington Nationals -136 | 11 |
| Baltimore Orioles at Cincinnati Reds | Jul 5, 1:05 PM | 274 | Baltimore Orioles -110, Cincinnati Reds -110 | 11 |
| Minnesota Twins at New York Yankees | Jul 5, 1:35 PM | 304 | Minnesota Twins +112, New York Yankees -135 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 5, 2:00 PM | 329 | Chicago White Sox +123, Cleveland Guardians -149 | 11 |
| St. Louis Cardinals at Chicago Cubs | Jul 5, 2:30 PM | 359 | Chicago Cubs -157, St. Louis Cardinals +130 | 11 |
| Philadelphia Phillies at Kansas City Royals | Jul 5, 3:01 PM | 390 | Kansas City Royals +119, Philadelphia Phillies -143 | 11 |
| Detroit Tigers at Texas Rangers | Jul 5, 3:31 PM | 420 | Detroit Tigers -120, Texas Rangers -101 | 11 |
| Tampa Bay Rays at Houston Astros | Jul 5, 3:31 PM | 420 | Houston Astros +102, Tampa Bay Rays -122 | 7 |
| Milwaukee Brewers at Arizona Diamondbacks | Jul 5, 4:00 PM | 449 | Arizona Diamondbacks +101, Milwaukee Brewers -122 | 11 |
| San Francisco Giants at Colorado Rockies | Jul 5, 4:00 PM | 449 | Colorado Rockies +102, San Francisco Giants -123 | 11 |
| Miami Marlins at Athletics | Jul 5, 4:31 PM | 480 | Athletics -122, Miami Marlins +101 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Norway at Brazil | Jul 5, 4:00 PM | 449 | Brazil -125, Norway +340, Draw +275 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 689 | England +145, Mexico +210, Draw +210 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 1829 | Portugal +295, Spain -110, Draw +265 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 2129 | Belgium +170, USA +160, Draw +230 | 9 |
| Egypt at Argentina | Jul 7, 12:00 PM | 3089 | Argentina -260, Egypt +750, Draw +360 | 9 |
| Colombia at Switzerland | Jul 7, 4:00 PM | 3329 | Colombia +130, Switzerland +240, Draw +210 | 9 |
| Morocco at France | Jul 9, 4:00 PM | 6209 | France -175, Morocco +500, Draw +285 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Soccer | Argentina vs Egypt | Egypt | +940 | +900 | 15.2% | 37% strength model + 63% market no-vig |
| Soccer | Switzerland vs Colombia | Switzerland | +260 | +260 | 30.1% | 37% strength model + 63% market no-vig |
| Soccer | Portugal vs Spain | Portugal | +322 | +322 | 28.0% | 45% strength model + 55% market no-vig |
| Soccer | Brazil vs Norway | Norway | +330 | +375 | 23.3% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +220 | 30.8% | 51% strength model + 49% market no-vig |
| Soccer | Mexico vs England | England | +143 | +149 | 39.3% | 48% strength model + 52% market no-vig |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

