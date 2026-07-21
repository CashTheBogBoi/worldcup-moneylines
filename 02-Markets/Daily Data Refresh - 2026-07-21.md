# Daily Data Refresh - 2026-07-21

Generated: 2026-07-21T15:00:13.601Z

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
| Minnesota Twins at Cleveland Guardians | Scheduled | Kendry Rojas | Parker Messick |  |
| Los Angeles Dodgers at Philadelphia Phillies | Scheduled | Justin Wrobleski | Zack Wheeler |  |
| Pittsburgh Pirates at New York Yankees | Scheduled | Bubba Chandler | Will Warren |  |
| Tampa Bay Rays at Toronto Blue Jays | Scheduled | Drew Rasmussen | Kevin Gausman |  |
| Baltimore Orioles at Boston Red Sox | Scheduled | Kyle Bradish | Ranger Suarez |  |
| San Diego Padres at Atlanta Braves | Scheduled | Walker Buehler | Reynaldo López |  |
| San Francisco Giants at Kansas City Royals | Scheduled | Tyler Mahle | Luinder Avila |  |
| New York Mets at Milwaukee Brewers | Scheduled | Zac Thornton | Brandon Sproat |  |
| Detroit Tigers at Chicago Cubs | Scheduled | Framber Valdez | David Peterson |  |
| Chicago White Sox at Texas Rangers | Scheduled | Noah Schultz | Kumar Rocker |  |
| Miami Marlins at Houston Astros | Scheduled | Tyler Phillips | Tatsuya Imai |  |
| Washington Nationals at Colorado Rockies | Scheduled | Miles Mikolas | Michael Lorenzen |  |
| St. Louis Cardinals at Los Angeles Angels | Scheduled | Matthew Liberatore | Walbert Ureña |  |
| Athletics at Arizona Diamondbacks | Scheduled | Jack Perkins | Kohl Drake |  |
| Cincinnati Reds at Seattle Mariners | Scheduled | Chase Burns | Luis Castillo |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Minnesota Twins at Cleveland Guardians | 2026-07-21T22:41:00Z | Cleveland Guardians -150, Minnesota Twins +124 |
| Los Angeles Dodgers at Philadelphia Phillies | 2026-07-21T22:41:00Z | Los Angeles Dodgers +109, Philadelphia Phillies -131 |
| Pittsburgh Pirates at New York Yankees | 2026-07-21T23:06:00Z | New York Yankees -157, Pittsburgh Pirates +130 |
| Tampa Bay Rays at Toronto Blue Jays | 2026-07-21T23:08:00Z | Tampa Bay Rays -112, Toronto Blue Jays -107 |
| Baltimore Orioles at Boston Red Sox | 2026-07-21T23:11:00Z | Baltimore Orioles +118, Boston Red Sox -142 |
| San Diego Padres at Atlanta Braves | 2026-07-21T23:16:00Z | Atlanta Braves -147, San Diego Padres +122 |
| San Francisco Giants at Kansas City Royals | 2026-07-21T23:41:00Z | Kansas City Royals -105, San Francisco Giants -114 |
| New York Mets at Milwaukee Brewers | 2026-07-21T23:41:00Z | Milwaukee Brewers -142, New York Mets +118 |
| Detroit Tigers at Chicago Cubs | 2026-07-22T00:06:00Z | Chicago Cubs -122, Detroit Tigers +101 |
| Chicago White Sox at Texas Rangers | 2026-07-22T00:06:00Z | Chicago White Sox +109, Texas Rangers -131 |
| Miami Marlins at Houston Astros | 2026-07-22T00:11:00Z | Houston Astros -126, Miami Marlins +104 |
| Washington Nationals at Colorado Rockies | 2026-07-22T00:41:00Z | Colorado Rockies -107, Washington Nationals -112 |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-22T01:39:00Z | Los Angeles Angels -115, St. Louis Cardinals -104 |
| Athletics at Arizona Diamondbacks | 2026-07-22T01:41:00Z | Arizona Diamondbacks -137, Athletics +114 |
| Cincinnati Reds at Seattle Mariners | 2026-07-22T01:41:00Z | Cincinnati Reds +102, Seattle Mariners -123 |

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

- `data/daily/2026-07-21/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-21.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
