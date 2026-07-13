# Daily Data Refresh - 2026-07-12

Generated: 2026-07-13T00:11:00.489Z

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

- **Medium Soccer Market move** — Spain at France: Draw price is +215, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Argentina at England: Draw price is +195, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Milwaukee Brewers at Pittsburgh Pirates | Final | Robert Gasser | Paul Skenes | 5-14 |
| Kansas City Royals at Baltimore Orioles | Final | Seth Lugo | Shane Baz | 2-8 |
| New York Yankees at Washington Nationals | Final | Will Warren | Cade Cavalli | 5-3 |
| Chicago Cubs at Cincinnati Reds | Final | Matthew Boyd | Andrew Abbott | 8-4 |
| Boston Red Sox at New York Mets | Final | Payton Tolle | Zach Thornton | 3-2 |
| Seattle Mariners at Tampa Bay Rays | Final | Emerson Hancock | Ian Seymour | 8-2 |
| Philadelphia Phillies at Detroit Tigers | Final | Zack Wheeler | Tarik Skubal | 5-0 |
| Cleveland Guardians at Miami Marlins | Final | Joey Cantillo | Tyler Phillips | 5-2 |
| Los Angeles Angels at Minnesota Twins | Final | José Soriano | Taj Bradley | 2-4 |
| Athletics at Chicago White Sox | Final | J.T. Ginn | Noah Schultz | 1-9 |
| Atlanta Braves at St. Louis Cardinals | Final | Danny Young | Dustin May | 4-3 |
| Houston Astros at Texas Rangers | Final | Cristian Javier | MacKenzie Gore | 5-6 |
| Colorado Rockies at San Francisco Giants | Final | Michael Lorenzen | Trevor McDonald | 1-3 |
| Arizona Diamondbacks at Los Angeles Dodgers | Final | Mitch Bratt | Emmet Sheehan | 5-3 |
| Toronto Blue Jays at San Diego Padres | Final | Kevin Gausman | Germán Márquez | 4-5 |

## DraftKings MLB odds snapshot

_No rows returned._

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Spain at France | 2026-07-14T19:00:00Z | France +135, Spain +225, Draw +215 |
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
