# Daily Data Refresh - 2026-07-25

Generated: 2026-07-26T03:45:07.935Z

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
| Kansas City Royals at Detroit Tigers | Final | Michael Wacha | Casey Mize | 3-2 |
| Arizona Diamondbacks at Washington Nationals | Final | Mitch Bratt | Foster Griffin | 3-5 |
| Los Angeles Angels at San Francisco Giants | Final | Ryan Johnson | Robbie Ray | 2-9 |
| Toronto Blue Jays at Boston Red Sox | Final | Dylan Cease | Sonny Gray | 6-0 |
| San Diego Padres at Miami Marlins | Final | Randy Vásquez | Eury Pérez | 7-2 |
| New York Yankees at Philadelphia Phillies | Final | Ryan Weathers | Tim Mayza | 3-1 |
| Cleveland Guardians at Tampa Bay Rays | Final | Tanner Bibee | Nick Martinez | 0-3 |
| Chicago Cubs at Pittsburgh Pirates | Final | Shota Imanaga | Paul Skenes | 11-0 |
| Atlanta Braves at Baltimore Orioles | Final | Bryce Elder | Brandon Young | 2-3 |
| Athletics at Minnesota Twins | Final | Brady Basso | Kendry Rojas | 0-2 |
| Houston Astros at Chicago White Sox | Final | Hunter Brown | Sean Burke | 4-1 |
| Colorado Rockies at Milwaukee Brewers | Final | Ryan Feltner | Robert Gasser | 5-8 |
| Los Angeles Dodgers at New York Mets | Final | Yoshinobu Yamamoto | Nolan McLean | 4-3 |
| Cincinnati Reds at St. Louis Cardinals | Final | Hunter Greene | Andre Pallante | 0-7 |
| Seattle Mariners at Texas Rangers | Final | Bryan Woo | Nathan Eovaldi | 1-7 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Cleveland Guardians at Tampa Bay Rays | 2026-07-26T16:16:00Z | Cleveland Guardians +113, Tampa Bay Rays -136 |
| Arizona Diamondbacks at Washington Nationals | 2026-07-26T17:36:00Z | Arizona Diamondbacks -120, Washington Nationals -101 |
| Atlanta Braves at Baltimore Orioles | 2026-07-26T17:36:00Z | Atlanta Braves -106, Baltimore Orioles -114 |
| Toronto Blue Jays at Boston Red Sox | 2026-07-26T17:36:00Z | Boston Red Sox -137, Toronto Blue Jays +114 |
| Chicago Cubs at Pittsburgh Pirates | 2026-07-26T17:36:00Z | Chicago Cubs +104, Pittsburgh Pirates -126 |
| Kansas City Royals at Detroit Tigers | 2026-07-26T17:41:00Z | Detroit Tigers -192, Kansas City Royals +157 |
| Los Angeles Dodgers at New York Mets | 2026-07-26T17:41:00Z | Los Angeles Dodgers -163, New York Mets +135 |
| San Diego Padres at Miami Marlins | 2026-07-26T17:41:00Z | Miami Marlins -130, San Diego Padres +108 |
| Athletics at Minnesota Twins | 2026-07-26T18:11:00Z | Athletics +119, Minnesota Twins -143 |
| Houston Astros at Chicago White Sox | 2026-07-26T18:11:00Z | Chicago White Sox -111, Houston Astros -108 |
| Colorado Rockies at Milwaukee Brewers | 2026-07-26T18:11:00Z | Colorado Rockies +256, Milwaukee Brewers -325 |
| Cincinnati Reds at St. Louis Cardinals | 2026-07-26T18:16:00Z | Cincinnati Reds +113, St. Louis Cardinals -136 |
| Seattle Mariners at Texas Rangers | 2026-07-26T18:36:00Z | Seattle Mariners -107, Texas Rangers -113 |
| Los Angeles Angels at San Francisco Giants | 2026-07-26T20:06:00Z | Los Angeles Angels -102, San Francisco Giants -118 |
| New York Yankees at Philadelphia Phillies | 2026-07-26T23:21:00Z | New York Yankees +141, Philadelphia Phillies -171 |

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

- `data/daily/2026-07-25/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-25.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
