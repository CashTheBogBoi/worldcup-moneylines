# Daily Data Refresh - 2026-07-04

Generated: 2026-07-04T16:30:05.909Z

This note was created by `npm run update:data`. It is the local snapshot used to keep the app
and Obsidian vault aligned without Firebase or cloud storage.

## Refresh status

| Source | Status |
|---|---|
| The Odds API Soccer | Loaded |
| The Odds API MLB | Loaded |
| MLB Stats API probable pitchers | Loaded |
| FIFA men's ranking | Loaded (211 teams, id14870) |

## Errors / warnings

- fifaMensRankings: FIFA page shows latest official update 2026-06-11, but the public ranking endpoint returned rows for 2025-09-18 (id14870). Treat as a fallback ranking prior until FIFA exposes current rows.

## Top intel

- **High MLB Market move** — Pittsburgh Pirates at Washington Nationals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium Soccer Market move** — Morocco at Canada: Draw price is +230, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — France at Paraguay: France is priced at -575. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — England at Mexico: Draw price is +220, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Colombia at Switzerland: Draw price is +220, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Pittsburgh Pirates at Washington Nationals | In Progress | Braxton Ashcraft | Carson Palmquist | 5-1 |
| Minnesota Twins at New York Yankees | Pre-Game | Zebby Matthews | Brendan Beck | 0-0 |
| Detroit Tigers at Texas Rangers | Pre-Game | Jack Flaherty | Cal Quantrill |  |
| Toronto Blue Jays at Seattle Mariners | Scheduled | Shane Bieber | Logan Gilbert |  |
| Baltimore Orioles at Cincinnati Reds | Scheduled | Brandon Young | Hunter Greene |  |
| Tampa Bay Rays at Houston Astros | Scheduled | Drew Rasmussen | Hunter Brown |  |
| Chicago White Sox at Cleveland Guardians | Scheduled | Sean Burke | Parker Messick |  |
| St. Louis Cardinals at Chicago Cubs | Scheduled | Kyle Leahy | Shota Imanaga |  |
| New York Mets at Atlanta Braves | Scheduled | Sean Manaea | Chris Sale |  |
| San Francisco Giants at Colorado Rockies | Scheduled | Robbie Ray | Sean Sullivan |  |
| Philadelphia Phillies at Kansas City Royals | Scheduled | Jesús Luzardo | Michael Wacha |  |
| Boston Red Sox at Los Angeles Angels | Scheduled | Sonny Gray | Sam Aldegheri |  |
| Miami Marlins at Athletics | Scheduled | Sandy Alcantara | Aaron Civale |  |
| Milwaukee Brewers at Arizona Diamondbacks | Scheduled | Brandon Woodruff | Merrill Kelly |  |
| San Diego Padres at Los Angeles Dodgers | Scheduled | Wandy Peralta | Yoshinobu Yamamoto |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Pittsburgh Pirates at Washington Nationals | 2026-07-04T15:06:00Z | Pittsburgh Pirates -1200, Washington Nationals +610 |
| Minnesota Twins at New York Yankees | 2026-07-04T17:36:00Z | Minnesota Twins +124, New York Yankees -150 |
| Detroit Tigers at Texas Rangers | 2026-07-04T20:06:00Z | Detroit Tigers -118, Texas Rangers -102 |
| Toronto Blue Jays at Seattle Mariners | 2026-07-04T20:11:00Z | Seattle Mariners -173, Toronto Blue Jays +143 |
| Baltimore Orioles at Cincinnati Reds | 2026-07-04T23:11:00Z | Baltimore Orioles +109, Cincinnati Reds -131 |
| Chicago White Sox at Cleveland Guardians | 2026-07-04T23:11:00Z | Chicago White Sox +119, Cleveland Guardians -144 |
| Tampa Bay Rays at Houston Astros | 2026-07-04T23:11:00Z | Houston Astros -108, Tampa Bay Rays -112 |
| New York Mets at Atlanta Braves | 2026-07-05T00:09:00Z | Atlanta Braves -171, New York Mets +141 |
| St. Louis Cardinals at Chicago Cubs | 2026-07-05T00:09:00Z | Chicago Cubs -162, St. Louis Cardinals +134 |
| San Francisco Giants at Colorado Rockies | 2026-07-05T00:11:00Z | Colorado Rockies +126, San Francisco Giants -153 |
| Philadelphia Phillies at Kansas City Royals | 2026-07-05T00:11:00Z | Kansas City Royals +129, Philadelphia Phillies -156 |
| Boston Red Sox at Los Angeles Angels | 2026-07-05T01:39:00Z | Boston Red Sox -171, Los Angeles Angels +141 |
| Milwaukee Brewers at Arizona Diamondbacks | 2026-07-05T01:41:00Z | Arizona Diamondbacks +129, Milwaukee Brewers -156 |
| Miami Marlins at Athletics | 2026-07-05T01:41:00Z | Athletics +109, Miami Marlins -132 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-05T02:11:00Z | Los Angeles Dodgers -259, San Diego Padres +209 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Morocco at Canada | 2026-07-04T17:00:00Z | Canada +400, Morocco -125, Draw +230 |
| France at Paraguay | 2026-07-04T21:00:00Z | France -575, Paraguay +1800, Draw +550 |
| Norway at Brazil | 2026-07-05T20:00:00Z | Brazil -125, Norway +320, Draw +285 |
| England at Mexico | 2026-07-06T00:00:00Z | England +140, Mexico +205, Draw +220 |
| Spain at Portugal | 2026-07-06T19:00:00Z | Portugal +295, Spain -110, Draw +265 |
| Belgium at USA | 2026-07-07T00:00:00Z | Belgium +170, USA +155, Draw +240 |
| Egypt at Argentina | 2026-07-07T16:00:00Z | Argentina -285, Egypt +850, Draw +380 |
| Colombia at Switzerland | 2026-07-07T20:00:00Z | Colombia +120, Switzerland +245, Draw +220 |

## FIFA men's ranking model input

Source: https://inside.fifa.com/fifa-world-ranking/men

- Last official update shown by FIFA: 2026-06-11T10:00:59.636Z
- Next official update shown by FIFA: 2026-07-20T12:00:00.000Z
- Ranking table date id used: id14870
- Teams loaded: 211

| Rank | Team | Code | Points | +/- pts |
| --- | --- | --- | --- | --- |
| 1 | Spain | ESP | 1875.37 | 8.28 |
| 2 | France | FRA | 1870.92 | 8.89 |
| 3 | Argentina | ARG | 1870.32 | -15.04 |
| 4 | England | ENG | 1820.44 | 7.12 |
| 5 | Portugal | POR | 1779.55 | 9.02 |
| 6 | Brazil | BRA | 1761.6 | -16.09 |
| 7 | Netherlands | NED | 1754.17 | -4.01 |
| 8 | Belgium | BEL | 1739.54 | 3.16 |
| 9 | Croatia | CRO | 1714.2 | 6.69 |
| 10 | Italy | ITA | 1710.06 | 7.48 |
| 11 | Morocco | MAR | 1706.27 | 7.55 |
| 12 | Germany | GER | 1704.27 | -12.71 |
| 13 | Colombia | COL | 1692.1 | 12.64 |
| 14 | Mexico | MEX | 1688.38 | -1.35 |
| 15 | Uruguay | URU | 1673.65 | 2.89 |
| 16 | USA | USA | 1670.04 | -1 |
| 17 | Switzerland | SUI | 1648.3 | 13.22 |
| 18 | Senegal | SEN | 1645.23 | 10.13 |
| 19 | Japan | JPN | 1640.47 | -0.76 |
| 20 | Denmark | DEN | 1627.64 | 6.4 |

## Files written

- `data/daily/2026-07-04/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-04.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
