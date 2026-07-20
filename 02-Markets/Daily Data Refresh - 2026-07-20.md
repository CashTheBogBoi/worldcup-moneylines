# Daily Data Refresh - 2026-07-20

Generated: 2026-07-20T17:36:19.193Z

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

_No automated high-priority intel flags from the current snapshot._

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Minnesota Twins at Cleveland Guardians | Scheduled | Joe Ryan | Tanner Bibee |  |
| Pittsburgh Pirates at New York Yankees | Scheduled | Braxton Ashcraft | Ryan Weathers |  |
| Tampa Bay Rays at Toronto Blue Jays | Scheduled | Nick Martinez | Dylan Cease |  |
| Baltimore Orioles at Boston Red Sox | Scheduled | Shane Baz | Payton Tolle |  |
| Los Angeles Dodgers at Philadelphia Phillies | Scheduled | Emmet Sheehan | Cristopher Sánchez |  |
| San Diego Padres at Atlanta Braves | Scheduled | JP Sears | Bryce Elder |  |
| San Francisco Giants at Kansas City Royals | Scheduled | Trevor McDonald | Michael Wacha |  |
| New York Mets at Milwaukee Brewers | Scheduled | Freddy Peralta | Jacob Misiorowski |  |
| Detroit Tigers at Chicago Cubs | Scheduled | Jack Flaherty | Jameson Taillon |  |
| Chicago White Sox at Texas Rangers | Scheduled | Erick Fedde | Jacob deGrom |  |
| Miami Marlins at Houston Astros | Scheduled | Janson Junk | Ronel Blanco |  |
| Washington Nationals at Colorado Rockies | Scheduled | Andrew Alvarez | Kyle Freeland |  |
| Athletics at Arizona Diamondbacks | Scheduled | Jeffrey Springs | Mitch Bratt |  |
| Cincinnati Reds at Seattle Mariners | Scheduled | Andrew Abbott | George Kirby |  |
| St. Louis Cardinals at Los Angeles Angels | Scheduled | Kyle Leahy | José Soriano |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Minnesota Twins at Cleveland Guardians | 2026-07-20T22:41:00Z | Cleveland Guardians +109, Minnesota Twins -131 |
| Pittsburgh Pirates at New York Yankees | 2026-07-20T23:06:00Z | New York Yankees -117, Pittsburgh Pirates -103 |
| Tampa Bay Rays at Toronto Blue Jays | 2026-07-20T23:08:00Z | Tampa Bay Rays +139, Toronto Blue Jays -168 |
| Baltimore Orioles at Boston Red Sox | 2026-07-20T23:11:00Z | Baltimore Orioles +134, Boston Red Sox -162 |
| Los Angeles Dodgers at Philadelphia Phillies | 2026-07-20T23:11:00Z | Los Angeles Dodgers +123, Philadelphia Phillies -149 |
| San Diego Padres at Atlanta Braves | 2026-07-20T23:16:00Z | Atlanta Braves -131, San Diego Padres +109 |
| San Francisco Giants at Kansas City Royals | 2026-07-20T23:41:00Z | Kansas City Royals -114, San Francisco Giants -105 |
| New York Mets at Milwaukee Brewers | 2026-07-20T23:41:00Z | Milwaukee Brewers -218, New York Mets +178 |
| Detroit Tigers at Chicago Cubs | 2026-07-21T00:06:00Z | Chicago Cubs -114, Detroit Tigers -105 |
| Chicago White Sox at Texas Rangers | 2026-07-21T00:06:00Z | Chicago White Sox +138, Texas Rangers -167 |
| Miami Marlins at Houston Astros | 2026-07-21T00:11:00Z | Houston Astros -123, Miami Marlins +102 |
| Washington Nationals at Colorado Rockies | 2026-07-21T00:41:00Z | Colorado Rockies +104, Washington Nationals -125 |
| Athletics at Arizona Diamondbacks | 2026-07-21T01:41:00Z | Arizona Diamondbacks -149, Athletics +123 |
| Cincinnati Reds at Seattle Mariners | 2026-07-21T01:41:00Z | Cincinnati Reds +119, Seattle Mariners -144 |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-21T02:11:00Z | Los Angeles Angels -114, St. Louis Cardinals -105 |

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

- `data/daily/2026-07-20/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-20.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
