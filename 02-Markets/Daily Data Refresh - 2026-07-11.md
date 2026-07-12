# Daily Data Refresh - 2026-07-11

Generated: 2026-07-12T01:35:01.389Z

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

- **High MLB Market move** — Houston Astros at Texas Rangers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Chicago Cubs at Cincinnati Reds: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Atlanta Braves at St. Louis Cardinals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Toronto Blue Jays at San Diego Padres: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Arizona Diamondbacks at Los Angeles Dodgers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium Soccer Market move** — Spain at France: Draw price is +225, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Milwaukee Brewers at Pittsburgh Pirates | Final | Brandon Sproat | Braxton Ashcraft | 6-7 |
| Milwaukee Brewers at Pittsburgh Pirates | Final | Shane Drohan | Bubba Chandler | 2-3 |
| Los Angeles Angels at Minnesota Twins | Final | Ryan Johnson | Joe Ryan | 3-5 |
| Athletics at Chicago White Sox | Final | Gage Jump | Bryan Hudson | 0-1 |
| Colorado Rockies at San Francisco Giants | Final | Kyle Freeland | Tyler Mahle | 2-4 |
| New York Yankees at Washington Nationals | Final | Cam Schlittler | PJ Poulin | 4-2 |
| Boston Red Sox at New York Mets | Final | Eduardo Rivera | Freddy Peralta | 4-0 |
| Seattle Mariners at Tampa Bay Rays | Final | Logan Gilbert | Griffin Jax | 1-6 |
| Cleveland Guardians at Miami Marlins | Final | Tanner Bibee | Eury Pérez | 4-1 |
| Philadelphia Phillies at Detroit Tigers | Final | Cristopher Sánchez | Casey Mize | 4-2 |
| Kansas City Royals at Baltimore Orioles | Final | Noah Cameron | Kyle Bradish | 1-6 |
| Houston Astros at Texas Rangers | In Progress | Peter Lambert | Kumar Rocker | 7-1 |
| Chicago Cubs at Cincinnati Reds | In Progress | Javier Assad | Nick Lodolo | 5-3 |
| Atlanta Braves at St. Louis Cardinals | In Progress | Reynaldo López | Matthew Liberatore | 1-4 |
| Toronto Blue Jays at San Diego Padres | In Progress | Trey Yesavage | Walker Buehler | 4-2 |
| Arizona Diamondbacks at Los Angeles Dodgers | In Progress | Brandon Pfaadt | Yoshinobu Yamamoto | 0-0 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Houston Astros at Texas Rangers | 2026-07-11T23:06:00Z | none |
| Chicago Cubs at Cincinnati Reds | 2026-07-11T23:11:00Z | Chicago Cubs -840, Cincinnati Reds +486 |
| Atlanta Braves at St. Louis Cardinals | 2026-07-11T23:16:48Z | none |
| Toronto Blue Jays at San Diego Padres | 2026-07-12T00:41:00Z | San Diego Padres +100, Toronto Blue Jays -130 |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-12T01:10:54Z | Arizona Diamondbacks +227, Los Angeles Dodgers -315 |
| Milwaukee Brewers at Pittsburgh Pirates | 2026-07-12T16:16:00Z | Milwaukee Brewers +102, Pittsburgh Pirates -122 |
| Kansas City Royals at Baltimore Orioles | 2026-07-12T17:36:00Z | Baltimore Orioles -155, Kansas City Royals +128 |
| New York Yankees at Washington Nationals | 2026-07-12T17:36:00Z | none |
| Boston Red Sox at New York Mets | 2026-07-12T17:41:00Z | Boston Red Sox -122, New York Mets +102 |
| Chicago Cubs at Cincinnati Reds | 2026-07-12T17:41:00Z | Chicago Cubs -131, Cincinnati Reds +108 |
| Cleveland Guardians at Miami Marlins | 2026-07-12T17:41:00Z | Cleveland Guardians -105, Miami Marlins -115 |
| Philadelphia Phillies at Detroit Tigers | 2026-07-12T17:41:00Z | Detroit Tigers -115, Philadelphia Phillies -105 |
| Seattle Mariners at Tampa Bay Rays | 2026-07-12T17:41:00Z | Seattle Mariners +108, Tampa Bay Rays -131 |
| Athletics at Chicago White Sox | 2026-07-12T18:11:00Z | Athletics -102, Chicago White Sox -118 |
| Los Angeles Angels at Minnesota Twins | 2026-07-12T18:11:00Z | Los Angeles Angels +113, Minnesota Twins -136 |
| Atlanta Braves at St. Louis Cardinals | 2026-07-12T18:16:00Z | Atlanta Braves +113, St. Louis Cardinals -136 |
| Colorado Rockies at San Francisco Giants | 2026-07-12T20:06:00Z | Colorado Rockies +128, San Francisco Giants -155 |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-12T20:11:00Z | Arizona Diamondbacks +168, Los Angeles Dodgers -206 |
| Toronto Blue Jays at San Diego Padres | 2026-07-12T20:11:00Z | San Diego Padres +104, Toronto Blue Jays -126 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Switzerland at Argentina | 2026-07-12T01:00:00Z | Argentina -340, Switzerland +1400, Draw +360 |
| Spain at France | 2026-07-14T19:00:00Z | France +135, Spain +220, Draw +225 |

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

- `data/daily/2026-07-11/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-11.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
