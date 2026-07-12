# Daily Data Refresh - 2026-07-12

Generated: 2026-07-12T19:19:46.741Z

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
- **High MLB Market move** — Kansas City Royals at Baltimore Orioles: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — New York Yankees at Washington Nationals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Chicago Cubs at Cincinnati Reds: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Boston Red Sox at New York Mets: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Seattle Mariners at Tampa Bay Rays: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Philadelphia Phillies at Detroit Tigers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Cleveland Guardians at Miami Marlins: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Los Angeles Angels at Minnesota Twins: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Athletics at Chicago White Sox: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Atlanta Braves at St. Louis Cardinals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Houston Astros at Texas Rangers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Milwaukee Brewers at Pittsburgh Pirates | In Progress | Robert Gasser | Paul Skenes | 5-14 |
| Kansas City Royals at Baltimore Orioles | In Progress | Seth Lugo | Shane Baz | 2-2 |
| New York Yankees at Washington Nationals | In Progress | Will Warren | Cade Cavalli | 2-2 |
| Chicago Cubs at Cincinnati Reds | In Progress | Matthew Boyd | Andrew Abbott | 4-4 |
| Boston Red Sox at New York Mets | In Progress | Payton Tolle | Zach Thornton | 0-2 |
| Seattle Mariners at Tampa Bay Rays | In Progress | Emerson Hancock | Ian Seymour | 7-0 |
| Philadelphia Phillies at Detroit Tigers | In Progress | Zack Wheeler | Tarik Skubal | 5-0 |
| Cleveland Guardians at Miami Marlins | In Progress | Joey Cantillo | Tyler Phillips | 3-1 |
| Los Angeles Angels at Minnesota Twins | In Progress | José Soriano | Taj Bradley | 1-3 |
| Athletics at Chicago White Sox | In Progress | J.T. Ginn | Noah Schultz | 1-6 |
| Atlanta Braves at St. Louis Cardinals | In Progress | Danny Young | Dustin May | 1-1 |
| Houston Astros at Texas Rangers | In Progress | Cristian Javier | MacKenzie Gore | 0-1 |
| Colorado Rockies at San Francisco Giants | Pre-Game | Michael Lorenzen | Trevor McDonald | 0-0 |
| Arizona Diamondbacks at Los Angeles Dodgers | Pre-Game | Mitch Bratt | Emmet Sheehan | 0-0 |
| Toronto Blue Jays at San Diego Padres | Pre-Game | Kevin Gausman | Germán Márquez | 0-0 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Milwaukee Brewers at Pittsburgh Pirates | 2026-07-12T16:16:00Z | none |
| Kansas City Royals at Baltimore Orioles | 2026-07-12T17:36:00Z | Baltimore Orioles -135, Kansas City Royals +104 |
| New York Yankees at Washington Nationals | 2026-07-12T17:36:00Z | New York Yankees -110, Washington Nationals -118 |
| Boston Red Sox at New York Mets | 2026-07-12T17:41:00Z | Boston Red Sox +630, New York Mets -1260 |
| Cleveland Guardians at Miami Marlins | 2026-07-12T17:41:00Z | Cleveland Guardians -307, Miami Marlins +223 |
| Philadelphia Phillies at Detroit Tigers | 2026-07-12T17:41:00Z | Detroit Tigers +1340, Philadelphia Phillies -10000 |
| Chicago Cubs at Cincinnati Reds | 2026-07-12T17:42:00Z | Chicago Cubs -134, Cincinnati Reds +103 |
| Seattle Mariners at Tampa Bay Rays | 2026-07-12T17:43:00Z | none |
| Athletics at Chicago White Sox | 2026-07-12T18:11:00Z | Athletics +1340, Chicago White Sox -10000 |
| Los Angeles Angels at Minnesota Twins | 2026-07-12T18:11:00Z | Los Angeles Angels +356, Minnesota Twins -544 |
| Atlanta Braves at St. Louis Cardinals | 2026-07-12T18:16:00Z | Atlanta Braves +112, St. Louis Cardinals -149 |
| Houston Astros at Texas Rangers | 2026-07-12T18:36:00Z | Houston Astros +209, Texas Rangers -286 |
| Colorado Rockies at San Francisco Giants | 2026-07-12T20:06:00Z | Colorado Rockies +124, San Francisco Giants -149 |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-12T20:11:00Z | Arizona Diamondbacks +187, Los Angeles Dodgers -231 |
| Toronto Blue Jays at San Diego Padres | 2026-07-12T20:11:00Z | San Diego Padres +105, Toronto Blue Jays -126 |

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
