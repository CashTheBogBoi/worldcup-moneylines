# Daily Data Refresh - 2026-07-12

Generated: 2026-07-12T16:30:05.331Z

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

- **High MLB Market move** — Milwaukee Brewers at Pittsburgh Pirates: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium Soccer Market move** — Spain at France: Draw price is +220, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Argentina at England: Draw price is +195, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Milwaukee Brewers at Pittsburgh Pirates | In Progress | Robert Gasser | Paul Skenes | 0-0 |
| Kansas City Royals at Baltimore Orioles | Pre-Game | Seth Lugo | Shane Baz | 0-0 |
| New York Yankees at Washington Nationals | Pre-Game | Will Warren | Cade Cavalli | 0-0 |
| Chicago Cubs at Cincinnati Reds | Pre-Game | Matthew Boyd | Andrew Abbott | 0-0 |
| Boston Red Sox at New York Mets | Pre-Game | Payton Tolle | Zach Thornton | 0-0 |
| Seattle Mariners at Tampa Bay Rays | Pre-Game | Emerson Hancock | Ian Seymour | 0-0 |
| Philadelphia Phillies at Detroit Tigers | Pre-Game | Zack Wheeler | Tarik Skubal | 0-0 |
| Cleveland Guardians at Miami Marlins | Pre-Game | Joey Cantillo | Tyler Phillips | 0-0 |
| Los Angeles Angels at Minnesota Twins | Pre-Game | José Soriano | Taj Bradley | 0-0 |
| Athletics at Chicago White Sox | Pre-Game | J.T. Ginn | Noah Schultz | 0-0 |
| Atlanta Braves at St. Louis Cardinals | Pre-Game | Danny Young | Dustin May | 0-0 |
| Houston Astros at Texas Rangers | Pre-Game | Cristian Javier | MacKenzie Gore | 0-0 |
| Colorado Rockies at San Francisco Giants | Pre-Game | Michael Lorenzen | Trevor McDonald |  |
| Arizona Diamondbacks at Los Angeles Dodgers | Scheduled | Mitch Bratt | Emmet Sheehan |  |
| Toronto Blue Jays at San Diego Padres | Scheduled | Kevin Gausman | Germán Márquez |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Milwaukee Brewers at Pittsburgh Pirates | 2026-07-12T16:16:00Z | Milwaukee Brewers +108, Pittsburgh Pirates -141 |
| Kansas City Royals at Baltimore Orioles | 2026-07-12T17:36:00Z | Baltimore Orioles -156, Kansas City Royals +129 |
| New York Yankees at Washington Nationals | 2026-07-12T17:36:00Z | New York Yankees -107, Washington Nationals -113 |
| Boston Red Sox at New York Mets | 2026-07-12T17:41:00Z | Boston Red Sox -112, New York Mets -107 |
| Chicago Cubs at Cincinnati Reds | 2026-07-12T17:41:00Z | Chicago Cubs -130, Cincinnati Reds +108 |
| Cleveland Guardians at Miami Marlins | 2026-07-12T17:41:00Z | Cleveland Guardians -107, Miami Marlins -112 |
| Philadelphia Phillies at Detroit Tigers | 2026-07-12T17:41:00Z | Detroit Tigers -136, Philadelphia Phillies +113 |
| Seattle Mariners at Tampa Bay Rays | 2026-07-12T17:41:00Z | Seattle Mariners +123, Tampa Bay Rays -148 |
| Athletics at Chicago White Sox | 2026-07-12T18:11:00Z | Athletics +124, Chicago White Sox -149 |
| Los Angeles Angels at Minnesota Twins | 2026-07-12T18:11:00Z | Los Angeles Angels +113, Minnesota Twins -136 |
| Atlanta Braves at St. Louis Cardinals | 2026-07-12T18:16:00Z | Atlanta Braves +113, St. Louis Cardinals -136 |
| Houston Astros at Texas Rangers | 2026-07-12T18:36:00Z | Houston Astros +119, Texas Rangers -143 |
| Colorado Rockies at San Francisco Giants | 2026-07-12T20:06:00Z | Colorado Rockies +119, San Francisco Giants -144 |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-12T20:11:00Z | Arizona Diamondbacks +184, Los Angeles Dodgers -226 |
| Toronto Blue Jays at San Diego Padres | 2026-07-12T20:11:00Z | San Diego Padres +109, Toronto Blue Jays -131 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Spain at France | 2026-07-14T19:00:00Z | France +135, Spain +220, Draw +220 |
| Argentina at England | 2026-07-15T19:00:00Z | Argentina +205, England +160, Draw +195 |

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

- `data/daily/2026-07-12/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-12.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
