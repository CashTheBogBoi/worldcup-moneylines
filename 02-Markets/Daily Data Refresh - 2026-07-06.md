# Daily Data Refresh - 2026-07-06

Generated: 2026-07-07T02:41:23.560Z

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

- **High MLB Market move** — New York Mets at Atlanta Braves: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Milwaukee Brewers at St. Louis Cardinals: Game status is Game Over. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Arizona Diamondbacks at San Diego Padres: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Toronto Blue Jays at San Francisco Giants: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Colorado Rockies at Los Angeles Dodgers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium Soccer Market move** — Colombia at Switzerland: Draw price is +210, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Philadelphia Phillies at Kansas City Royals | Final | Cristopher Sánchez | Noah Cameron | 1-15 |
| New York Yankees at Tampa Bay Rays | Final | Cam Schlittler | Griffin Jax | 5-1 |
| Houston Astros at Washington Nationals | Final | Mike Burrows | Miles Mikolas | 11-12 |
| New York Mets at Atlanta Braves | In Progress | Freddy Peralta | Reynaldo López | 5-5 |
| Milwaukee Brewers at St. Louis Cardinals | Game Over | Shane Drohan | Dustin May | 4-3 |
| Arizona Diamondbacks at San Diego Padres | In Progress | Brandon Pfaadt | Walker Buehler | 6-0 |
| Toronto Blue Jays at San Francisco Giants | In Progress | Kevin Gausman | Landen Roupp | 0-1 |
| Colorado Rockies at Los Angeles Dodgers | In Progress | Kyle Freeland | Eric Lauer | 1-0 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| New York Mets at Atlanta Braves | 2026-07-06T23:16:00Z | Atlanta Braves +304, New York Mets -446 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-06T23:45:11Z | Milwaukee Brewers -5200, St. Louis Cardinals +1100 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-07T01:41:00Z | Arizona Diamondbacks -6000, San Diego Padres +1140 |
| Toronto Blue Jays at San Francisco Giants | 2026-07-07T01:46:00Z | San Francisco Giants -780, Toronto Blue Jays +461 |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-07T02:11:00Z | Colorado Rockies +160, Los Angeles Dodgers -212 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-07T18:16:00Z | none |
| Chicago Cubs at Baltimore Orioles | 2026-07-07T22:36:00Z | Baltimore Orioles +100, Chicago Cubs -120 |
| Athletics at Detroit Tigers | 2026-07-07T22:41:00Z | Athletics +159, Detroit Tigers -194 |
| Atlanta Braves at Pittsburgh Pirates | 2026-07-07T22:41:00Z | Atlanta Braves +149, Pittsburgh Pirates -181 |
| Seattle Mariners at Miami Marlins | 2026-07-07T22:41:00Z | none |
| New York Yankees at Tampa Bay Rays | 2026-07-07T22:41:00Z | New York Yankees -101, Tampa Bay Rays -120 |
| Houston Astros at Washington Nationals | 2026-07-07T22:46:00Z | Houston Astros +101, Washington Nationals -122 |
| Kansas City Royals at New York Mets | 2026-07-07T23:11:00Z | none |
| Boston Red Sox at Chicago White Sox | 2026-07-07T23:41:00Z | Boston Red Sox -131, Chicago White Sox +108 |
| Cleveland Guardians at Minnesota Twins | 2026-07-07T23:41:00Z | Cleveland Guardians +104, Minnesota Twins -125 |
| Los Angeles Angels at Texas Rangers | 2026-07-08T00:06:00Z | Los Angeles Angels +138, Texas Rangers -167 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-08T01:41:00Z | none |
| Toronto Blue Jays at San Francisco Giants | 2026-07-08T01:46:00Z | none |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-08T02:11:00Z | Colorado Rockies +218, Los Angeles Dodgers -272 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Egypt at Argentina | 2026-07-07T16:00:00Z | Argentina -280, Egypt +850, Draw +370 |
| Colombia at Switzerland | 2026-07-07T20:00:00Z | Colombia +125, Switzerland +245, Draw +210 |
| Morocco at France | 2026-07-09T20:00:00Z | France -170, Morocco +500, Draw +285 |
| Belgium at Spain | 2026-07-10T19:00:00Z | Belgium +450, Spain -160, Draw +290 |
| England at Norway | 2026-07-11T21:00:00Z | England -115, Norway +295, Draw +270 |

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

- `data/daily/2026-07-06/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-06.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
