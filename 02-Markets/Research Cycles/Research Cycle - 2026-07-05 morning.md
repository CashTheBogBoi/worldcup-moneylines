# Research Cycle - Morning slate build - 2026-07-05

Generated: 2026-07-05T16:07:13.315Z
Local time: 12:07 PM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-05T16:07:08.217Z
- MLB odds events: 15
- Soccer odds events: 7
- High-impact intel blocks: 1
- Intel pending / confirmed / denied: 2 / 2 / 0
- Pending tracked picks: 7
- Tracked gate status passed / blocked / unknown: 13 / 0 / 25
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
| New York Mets at Atlanta Braves | Jul 5, 12:30 PM | 23 | Atlanta Braves -105, New York Mets -114 | 11 |
| Pittsburgh Pirates at Washington Nationals | Jul 5, 1:01 PM | 54 | Pittsburgh Pirates +119, Washington Nationals -144 | 11 |
| Baltimore Orioles at Cincinnati Reds | Jul 5, 1:05 PM | 58 | Baltimore Orioles -118, Cincinnati Reds -102 | 11 |
| Minnesota Twins at New York Yankees | Jul 5, 1:35 PM | 88 | Minnesota Twins +109, New York Yankees -131 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 5, 2:00 PM | 113 | Chicago White Sox +114, Cleveland Guardians -137 | 11 |
| St. Louis Cardinals at Chicago Cubs | Jul 5, 2:30 PM | 143 | Chicago Cubs -144, St. Louis Cardinals +119 | 11 |
| Philadelphia Phillies at Kansas City Royals | Jul 5, 3:01 PM | 174 | Kansas City Royals +119, Philadelphia Phillies -143 | 11 |
| Detroit Tigers at Texas Rangers | Jul 5, 3:31 PM | 204 | Detroit Tigers -125, Texas Rangers +104 | 11 |
| Tampa Bay Rays at Houston Astros | Jul 5, 3:31 PM | 204 | Houston Astros -118, Tampa Bay Rays -102 | 11 |
| Milwaukee Brewers at Arizona Diamondbacks | Jul 5, 4:00 PM | 233 | Arizona Diamondbacks +101, Milwaukee Brewers -122 | 11 |
| San Francisco Giants at Colorado Rockies | Jul 5, 4:00 PM | 233 | Colorado Rockies -101, San Francisco Giants -120 | 11 |
| Miami Marlins at Athletics | Jul 5, 4:31 PM | 264 | Athletics -120, Miami Marlins +100 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Norway at Brazil | Jul 5, 4:00 PM | 233 | Brazil -130, Norway +350, Draw +275 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 473 | England +145, Mexico +210, Draw +215 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 1613 | Portugal +280, Spain -105, Draw +265 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 1913 | Belgium +170, USA +160, Draw +230 | 9 |
| Egypt at Argentina | Jul 7, 12:00 PM | 2873 | Argentina -260, Egypt +750, Draw +360 | 9 |
| Colombia at Switzerland | Jul 7, 4:00 PM | 3113 | Colombia +130, Switzerland +240, Draw +210 | 9 |
| Morocco at France | Jul 9, 4:00 PM | 5993 | France -175, Morocco +500, Draw +285 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| MLB | Atlanta Braves vs New York Mets | Atlanta Braves | -112 | -102 | 54.7% | 25% strength model + 75% market no-vig |
| Soccer | Argentina vs Egypt | Egypt | +940 | +900 | 15.2% | 37% strength model + 63% market no-vig |
| Soccer | Switzerland vs Colombia | Switzerland | +260 | +260 | 30.1% | 37% strength model + 63% market no-vig |
| Soccer | Portugal vs Spain | Portugal | +322 | +322 | 28.0% | 45% strength model + 55% market no-vig |
| Soccer | Brazil vs Norway | Norway | +330 | +395 | 23.3% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +217 | 30.8% | 51% strength model + 49% market no-vig |
| Soccer | Mexico vs England | England | +143 | +149 | 39.3% | 48% strength model + 52% market no-vig |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

