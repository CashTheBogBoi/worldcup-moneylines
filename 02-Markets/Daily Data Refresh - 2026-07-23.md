# Daily Data Refresh - 2026-07-23

Generated: 2026-07-24T03:59:24.300Z

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
| San Diego Padres at Atlanta Braves | Final | Kyle Hart | Chris Sale | 5-6 |
| Minnesota Twins at Cleveland Guardians | Final | Taj Bradley | Gavin Williams | 3-1 |
| Tampa Bay Rays at Toronto Blue Jays | Final | Casey Legumina | Shane Bieber | 1-3 |
| Arizona Diamondbacks at St. Louis Cardinals | Final | Brandon Pfaadt | Michael McGreevy | 10-6 |
| Kansas City Royals at Detroit Tigers | Final | Randy Dobnak | Troy Melton | 3-4 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Colorado Rockies at Milwaukee Brewers | 2026-07-24T20:11:00Z | Colorado Rockies +208, Milwaukee Brewers -258 |
| Chicago Cubs at Pittsburgh Pirates | 2026-07-24T22:41:00Z | Chicago Cubs +104, Pittsburgh Pirates -126 |
| Kansas City Royals at Detroit Tigers | 2026-07-24T22:41:00Z | Detroit Tigers -303, Kansas City Royals +241 |
| Arizona Diamondbacks at Washington Nationals | 2026-07-24T22:46:00Z | Arizona Diamondbacks -122, Washington Nationals +101 |
| New York Yankees at Philadelphia Phillies | 2026-07-24T22:46:00Z | New York Yankees +112, Philadelphia Phillies -135 |
| Atlanta Braves at Baltimore Orioles | 2026-07-24T23:06:00Z | Atlanta Braves -101, Baltimore Orioles -120 |
| Cleveland Guardians at Tampa Bay Rays | 2026-07-24T23:11:00Z | Cleveland Guardians +118, Tampa Bay Rays -142 |
| Los Angeles Dodgers at New York Mets | 2026-07-24T23:11:00Z | Los Angeles Dodgers -156, New York Mets +129 |
| San Diego Padres at Miami Marlins | 2026-07-24T23:11:00Z | Miami Marlins -143, San Diego Padres +119 |
| Toronto Blue Jays at Boston Red Sox | 2026-07-24T23:16:00Z | Boston Red Sox -126, Toronto Blue Jays +104 |
| Houston Astros at Chicago White Sox | 2026-07-24T23:41:00Z | Chicago White Sox -136, Houston Astros +113 |
| Seattle Mariners at Texas Rangers | 2026-07-25T00:06:00Z | Seattle Mariners -122, Texas Rangers +101 |
| Athletics at Minnesota Twins | 2026-07-25T00:11:00Z | Athletics +119, Minnesota Twins -144 |
| Cincinnati Reds at St. Louis Cardinals | 2026-07-25T00:16:00Z | Cincinnati Reds +139, St. Louis Cardinals -168 |
| Los Angeles Angels at San Francisco Giants | 2026-07-25T02:16:00Z | Los Angeles Angels +142, San Francisco Giants -172 |

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

- `data/daily/2026-07-23/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-23.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
