# Research Cycle - Morning slate build - 2026-07-03

Generated: 2026-07-03T12:55:12.307Z
Local time: 8:55 AM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-03T12:41:33.927Z
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
| St. Louis Cardinals at Chicago Cubs | Jul 3, 4:05 PM | 443 | Chicago Cubs -131, St. Louis Cardinals +108 | 11 |
| Pittsburgh Pirates at Washington Nationals | Jul 3, 6:45 PM | 603 | Pittsburgh Pirates +119, Washington Nationals -144 | 11 |
| Minnesota Twins at New York Yankees | Jul 3, 7:05 PM | 623 | Minnesota Twins +158, New York Yankees -193 | 11 |
| Baltimore Orioles at Cincinnati Reds | Jul 3, 7:10 PM | 628 | Baltimore Orioles -122, Cincinnati Reds +101 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 3, 7:10 PM | 628 | Chicago White Sox +114, Cleveland Guardians -137 | 11 |
| New York Mets at Atlanta Braves | Jul 3, 7:15 PM | 633 | Atlanta Braves -115, New York Mets -105 | 11 |
| San Francisco Giants at Colorado Rockies | Jul 3, 8:10 PM | 688 | Colorado Rockies +124, San Francisco Giants -149 | 11 |
| Tampa Bay Rays at Houston Astros | Jul 3, 8:15 PM | 693 | Houston Astros -107, Tampa Bay Rays -112 | 11 |
| Boston Red Sox at Los Angeles Angels | Jul 3, 9:38 PM | 776 | Boston Red Sox -108, Los Angeles Angels -112 | 11 |
| Miami Marlins at Athletics | Jul 3, 9:40 PM | 778 | Athletics -125, Miami Marlins +104 | 11 |
| Milwaukee Brewers at Arizona Diamondbacks | Jul 3, 9:45 PM | 783 | Arizona Diamondbacks +134, Milwaukee Brewers -162 | 11 |
| San Diego Padres at Los Angeles Dodgers | Jul 3, 10:10 PM | 808 | Los Angeles Dodgers -251, San Diego Padres +203 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Egypt at Australia | Jul 3, 2:00 PM | 318 | Australia +265, Egypt +135, Draw +195 | 9 |
| Cape Verde at Argentina | Jul 3, 6:00 PM | 558 | Argentina -700, Cape Verde +1900, Draw +750 | 9 |
| Ghana at Colombia | Jul 3, 9:30 PM | 768 | Colombia -230, Ghana +750, Draw +340 | 9 |
| Morocco at Canada | Jul 4, 1:00 PM | 1698 | Canada +400, Morocco -125, Draw +250 | 9 |
| France at Paraguay | Jul 4, 5:00 PM | 1938 | France -550, Paraguay +1700, Draw +600 | 9 |
| Norway at Brazil | Jul 5, 4:00 PM | 3318 | Brazil -115, Norway +310, Draw +280 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 3558 | England +140, Mexico +220, Draw +215 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 4698 | Portugal +300, Spain -105, Draw +260 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 4998 | Belgium +180, USA +155, Draw +240 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Soccer | Brazil vs Norway | Norway | +330 | +340 | 23.3% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Egypt | +155 | +141 | 38.3% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Draw | +195 | +195 | 33.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Draw | +700 | +893 | 12.5% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Canada | +440 | +425 | 19.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Cape Verde | +1900 | +6805 | 5.2% | Odds API no-vig only |
| Soccer | Colombia vs Ghana | Ghana | +705 | +961 | 13.1% | Odds API no-vig only |
| Soccer | Paraguay vs France | Paraguay | +1800 | +2428 | 5.7% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +220 | 30.8% | 51% strength model + 49% market no-vig |
| Soccer | Mexico vs England | England | +143 | +140 | 39.3% | 48% strength model + 52% market no-vig |
| Soccer | Canada vs Morocco | Morocco | -120 | -125 | 52.8% | Odds API no-vig only |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

