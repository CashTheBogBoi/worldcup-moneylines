# Research Cycle - Morning slate build - 2026-07-03

Generated: 2026-07-03T16:58:23.848Z
Local time: 12:58 PM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-03T16:57:24.000Z
- MLB odds events: 13
- Soccer odds events: 9
- High-impact intel blocks: 1
- Intel pending / confirmed / denied: 2 / 3 / 0
- Pending tracked picks: 11
- Tracked gate status passed / blocked / unknown: 1 / 0 / 25
- Nightly review ran: no

## High-Impact Blocks
- **MLB / Starters / pending:** San Francisco Giants at Colorado Rockies — Official starter is still TBD (TBD vs Ryan Feltner). Block Bankroll Watch promotion until both starters are confirmed.

## Missing MLB Starters
| Game | Start | Away starter | Home starter | Status |
| --- | --- | --- | --- | --- |
| San Francisco Giants at Colorado Rockies | Jul 3, 8:10 PM | TBD | Ryan Feltner | Scheduled |

## Next MLB Windows
| Game | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| St. Louis Cardinals at Chicago Cubs | Jul 3, 4:05 PM | 188 | Chicago Cubs -131, St. Louis Cardinals +108 | 11 |
| Pittsburgh Pirates at Washington Nationals | Jul 3, 6:45 PM | 348 | Pittsburgh Pirates +129, Washington Nationals -156 | 11 |
| Minnesota Twins at New York Yankees | Jul 3, 7:05 PM | 368 | Minnesota Twins +158, New York Yankees -193 | 11 |
| Baltimore Orioles at Cincinnati Reds | Jul 3, 7:10 PM | 373 | Baltimore Orioles -125, Cincinnati Reds +104 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 3, 7:10 PM | 373 | Chicago White Sox +109, Cleveland Guardians -132 | 11 |
| New York Mets at Atlanta Braves | Jul 3, 7:15 PM | 378 | Atlanta Braves -108, New York Mets -111 | 11 |
| San Francisco Giants at Colorado Rockies | Jul 3, 8:10 PM | 433 | Colorado Rockies +124, San Francisco Giants -149 | 11 |
| Tampa Bay Rays at Houston Astros | Jul 3, 8:15 PM | 438 | Houston Astros -108, Tampa Bay Rays -111 | 11 |
| Boston Red Sox at Los Angeles Angels | Jul 3, 9:38 PM | 521 | Boston Red Sox -108, Los Angeles Angels -112 | 11 |
| Miami Marlins at Athletics | Jul 3, 9:40 PM | 523 | Athletics -137, Miami Marlins +114 | 11 |
| Milwaukee Brewers at Arizona Diamondbacks | Jul 3, 9:45 PM | 528 | Arizona Diamondbacks +123, Milwaukee Brewers -149 | 11 |
| San Diego Padres at Los Angeles Dodgers | Jul 3, 10:10 PM | 553 | Los Angeles Dodgers -251, San Diego Padres +203 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Egypt at Australia | Jul 3, 2:00 PM | 63 | Australia +260, Egypt +140, Draw +190 | 9 |
| Cape Verde at Argentina | Jul 3, 6:00 PM | 303 | Argentina -650, Cape Verde +1800, Draw +700 | 9 |
| Ghana at Colombia | Jul 3, 9:30 PM | 513 | Colombia -230, Ghana +750, Draw +340 | 9 |
| Morocco at Canada | Jul 4, 1:00 PM | 1443 | Canada +400, Morocco -125, Draw +250 | 9 |
| France at Paraguay | Jul 4, 5:00 PM | 1683 | France -525, Paraguay +1800, Draw +600 | 9 |
| Norway at Brazil | Jul 5, 4:00 PM | 3063 | Brazil -120, Norway +320, Draw +280 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 3303 | England +140, Mexico +220, Draw +215 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 4443 | Portugal +300, Spain -105, Draw +260 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 4743 | Belgium +180, USA +155, Draw +240 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Soccer | Brazil vs Norway | Norway | +330 | +360 | 23.3% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Egypt | +155 | +141 | 38.3% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Draw | +195 | +190 | 33.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Draw | +700 | +765 | 12.5% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Canada | +440 | +435 | 19.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Cape Verde | +1900 | +2463 | 5.2% | Odds API no-vig only |
| Soccer | Colombia vs Ghana | Ghana | +705 | +825 | 13.1% | Odds API no-vig only |
| Soccer | Paraguay vs France | Paraguay | +1800 | +2855 | 5.7% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +220 | 30.8% | 51% strength model + 49% market no-vig |
| Soccer | Mexico vs England | England | +143 | +148 | 39.3% | 48% strength model + 52% market no-vig |
| Soccer | Canada vs Morocco | Morocco | -120 | -125 | 52.8% | Odds API no-vig only |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

