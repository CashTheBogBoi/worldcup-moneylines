# Daily Data Refresh - 2026-08-04

Generated: 2026-08-04T18:17:02.097Z

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

- fifaMensRankings: FIFA page shows latest official update 2026-07-20, but the public ranking endpoint returned rows for 2025-09-18 (id14870). Treat as a fallback ranking prior until FIFA exposes current rows.

## Top intel

- **High MLB Starters** — Los Angeles Angels at Baltimore Orioles: Official starter is still TBD (Grayson Rodriguez vs TBD). Block Bankroll Watch promotion until both starters are confirmed.
- **Medium MLB Market move** — Toronto Blue Jays at Houston Astros: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Los Angeles Angels at Baltimore Orioles | Scheduled | Grayson Rodriguez | TBD |  |
| New York Mets at Cleveland Guardians | Scheduled | Sean Manaea | Joey Cantillo |  |
| Athletics at Cincinnati Reds | Scheduled | J.T. Ginn | Brady Singer |  |
| Washington Nationals at Philadelphia Phillies | Scheduled | Carson Palmquist | Jesús Luzardo |  |
| St. Louis Cardinals at New York Yankees | Scheduled | Hunter Dobbins | Ryan Weathers |  |
| Chicago White Sox at Boston Red Sox | Scheduled | Davis Martin | Patrick Sandoval |  |
| Miami Marlins at Atlanta Braves | Scheduled | Ryan Gusto | Grant Holmes |  |
| Minnesota Twins at Kansas City Royals | Scheduled | Joe Ryan | Randy Dobnak |  |
| Pittsburgh Pirates at Milwaukee Brewers | Scheduled | Jared Jones | Logan Henderson |  |
| Los Angeles Dodgers at Chicago Cubs | Scheduled | Tarik Skubal | Javier Assad |  |
| San Francisco Giants at Texas Rangers | Scheduled | Blade Tidwell | MacKenzie Gore |  |
| Toronto Blue Jays at Houston Astros | Scheduled | Trey Yesavage | Hayden Wesneski |  |
| Tampa Bay Rays at Colorado Rockies | Scheduled | Freddy Peralta | Gabriel Hughes |  |
| San Diego Padres at Arizona Diamondbacks | Scheduled | Randy Vásquez | Eduardo Rodriguez |  |
| Detroit Tigers at Seattle Mariners | Scheduled | Troy Melton | Emerson Hancock |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Los Angeles Angels at Baltimore Orioles | 2026-08-04T22:36:00Z | Baltimore Orioles -156, Los Angeles Angels +129 |
| Athletics at Cincinnati Reds | 2026-08-04T22:40:00Z | Athletics +113, Cincinnati Reds -136 |
| New York Mets at Cleveland Guardians | 2026-08-04T22:40:00Z | Cleveland Guardians -156, New York Mets +129 |
| Washington Nationals at Philadelphia Phillies | 2026-08-04T22:40:00Z | Philadelphia Phillies -298, Washington Nationals +237 |
| St. Louis Cardinals at New York Yankees | 2026-08-04T23:06:00Z | New York Yankees -205, St. Louis Cardinals +168 |
| Chicago White Sox at Boston Red Sox | 2026-08-04T23:11:00Z | Boston Red Sox -136, Chicago White Sox +113 |
| Miami Marlins at Atlanta Braves | 2026-08-04T23:16:00Z | Atlanta Braves -149, Miami Marlins +124 |
| Pittsburgh Pirates at Milwaukee Brewers | 2026-08-04T23:40:00Z | Milwaukee Brewers -149, Pittsburgh Pirates +123 |
| Minnesota Twins at Kansas City Royals | 2026-08-04T23:41:00Z | Kansas City Royals +123, Minnesota Twins -149 |
| Los Angeles Dodgers at Chicago Cubs | 2026-08-05T00:06:00Z | Chicago Cubs +163, Los Angeles Dodgers -198 |
| San Francisco Giants at Texas Rangers | 2026-08-05T00:06:00Z | San Francisco Giants +159, Texas Rangers -194 |
| Toronto Blue Jays at Houston Astros | 2026-08-05T00:10:00Z | Houston Astros -131, Toronto Blue Jays +109 |
| Tampa Bay Rays at Colorado Rockies | 2026-08-05T00:41:00Z | Colorado Rockies +151, Tampa Bay Rays -161 |
| San Diego Padres at Arizona Diamondbacks | 2026-08-05T01:41:00Z | Arizona Diamondbacks -115, San Diego Padres +108 |
| Detroit Tigers at Seattle Mariners | 2026-08-05T01:41:00Z | Detroit Tigers +112, Seattle Mariners -119 |
| Toronto Blue Jays at Houston Astros | 2026-08-05T18:11:00Z | none |

## DraftKings Soccer odds snapshot

_No rows returned._

## FIFA men's ranking model input

Source: https://inside.fifa.com/fifa-world-ranking/men

- Last official update shown by FIFA: 2026-07-20T08:37:28.979Z
- Next official update shown by FIFA: 2026-10-07T12:00:00.000Z
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

- `data/daily/2026-08-04/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-08-04.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
