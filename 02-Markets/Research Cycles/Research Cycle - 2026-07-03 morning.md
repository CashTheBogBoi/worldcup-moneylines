# Research Cycle - Morning slate build - 2026-07-03

Generated: 2026-07-03T13:26:48.816Z
Local time: 9:26 AM

## Goal
Build the day from scratch: odds, probable pitchers, early soccer prices, and high-impact intel.

## Checklist
- [ ] Refresh the local snapshot.
- [ ] Find missing MLB starters and any DraftKings gaps.
- [ ] Mark high-risk soccer favorites and short draw prices.
- [ ] Only track candidates that are pregame and model-ready.

## System Read
- Snapshot generated: 2026-07-03T13:26:45.457Z
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
| St. Louis Cardinals at Chicago Cubs | Jul 3, 4:05 PM | 398 | Chicago Cubs -131, St. Louis Cardinals +108 | 11 |
| Pittsburgh Pirates at Washington Nationals | Jul 3, 6:45 PM | 558 | Pittsburgh Pirates +123, Washington Nationals -149 | 11 |
| Minnesota Twins at New York Yankees | Jul 3, 7:05 PM | 578 | Minnesota Twins +158, New York Yankees -193 | 11 |
| Baltimore Orioles at Cincinnati Reds | Jul 3, 7:10 PM | 583 | Baltimore Orioles -123, Cincinnati Reds +102 | 11 |
| Chicago White Sox at Cleveland Guardians | Jul 3, 7:10 PM | 583 | Chicago White Sox +113, Cleveland Guardians -136 | 11 |
| New York Mets at Atlanta Braves | Jul 3, 7:15 PM | 588 | Atlanta Braves -114, New York Mets -105 | 11 |
| San Francisco Giants at Colorado Rockies | Jul 3, 8:10 PM | 643 | Colorado Rockies +129, San Francisco Giants -156 | 11 |
| Tampa Bay Rays at Houston Astros | Jul 3, 8:15 PM | 648 | Houston Astros -108, Tampa Bay Rays -112 | 11 |
| Boston Red Sox at Los Angeles Angels | Jul 3, 9:38 PM | 731 | Boston Red Sox -105, Los Angeles Angels -114 | 11 |
| Miami Marlins at Athletics | Jul 3, 9:40 PM | 733 | Athletics -125, Miami Marlins +104 | 11 |
| Milwaukee Brewers at Arizona Diamondbacks | Jul 3, 9:45 PM | 738 | Arizona Diamondbacks +130, Milwaukee Brewers -157 | 11 |
| San Diego Padres at Los Angeles Dodgers | Jul 3, 10:10 PM | 763 | Los Angeles Dodgers -258, San Diego Padres +208 | 11 |

## Next Soccer Windows
| Match | Start | Minutes | DraftKings | Books |
| --- | --- | --- | --- | --- |
| Egypt at Australia | Jul 3, 2:00 PM | 273 | Australia +265, Egypt +135, Draw +195 | 9 |
| Cape Verde at Argentina | Jul 3, 6:00 PM | 513 | Argentina -650, Cape Verde +1900, Draw +700 | 9 |
| Ghana at Colombia | Jul 3, 9:30 PM | 723 | Colombia -230, Ghana +750, Draw +340 | 9 |
| Morocco at Canada | Jul 4, 1:00 PM | 1653 | Canada +400, Morocco -125, Draw +250 | 9 |
| France at Paraguay | Jul 4, 5:00 PM | 1893 | France -550, Paraguay +1700, Draw +600 | 9 |
| Norway at Brazil | Jul 5, 4:00 PM | 3273 | Brazil -115, Norway +310, Draw +280 | 9 |
| England at Mexico | Jul 5, 8:00 PM | 3513 | England +140, Mexico +220, Draw +215 | 9 |
| Spain at Portugal | Jul 6, 3:00 PM | 4653 | Portugal +300, Spain -105, Draw +260 | 9 |
| Belgium at USA | Jul 6, 8:00 PM | 4953 | Belgium +180, USA +155, Draw +240 | 9 |

## Pending Tracked Picks
| Sport | Match | Pick | Open | Latest | Model | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Soccer | Brazil vs Norway | Norway | +330 | +340 | 23.3% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Egypt | +155 | +141 | 38.3% | Odds API no-vig only |
| Soccer | Australia vs Egypt | Draw | +195 | +195 | 33.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Draw | +700 | +911 | 12.5% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Canada | +440 | +433 | 19.2% | Odds API no-vig only |
| Soccer | Argentina vs Cape Verde | Cape Verde | +1900 | +6805 | 5.2% | Odds API no-vig only |
| Soccer | Colombia vs Ghana | Ghana | +705 | +981 | 13.1% | Odds API no-vig only |
| Soccer | Paraguay vs France | Paraguay | +1800 | +2684 | 5.7% | Odds API no-vig only |
| Soccer | Mexico vs England | Mexico | +242 | +220 | 30.8% | 51% strength model + 49% market no-vig |
| Soccer | Mexico vs England | England | +143 | +148 | 39.3% | 48% strength model + 52% market no-vig |
| Soccer | Canada vs Morocco | Morocco | -120 | -125 | 52.8% | Odds API no-vig only |

## Model Input Guidance
- Track picks only from the app before start time so CLV and result grading stay automatic.
- Use Manual correction only for feed misses, provider mismatches, or old backfills.
- If this note has high-impact blocks, resolve those before promoting anything to Bankroll Watch.
- After games finish, run the nightly phase so Obsidian gets the daily review note.

