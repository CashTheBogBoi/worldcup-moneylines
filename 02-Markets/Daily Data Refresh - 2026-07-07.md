# Daily Data Refresh - 2026-07-07

Generated: 2026-07-08T03:16:03.025Z

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

- **High MLB Market move** — Arizona Diamondbacks at San Diego Padres: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Toronto Blue Jays at San Francisco Giants: Game status is Player challenge. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Colorado Rockies at Los Angeles Dodgers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Milwaukee Brewers at St. Louis Cardinals | Final | Jacob Misiorowski | Matt Svanson | 4-3 |
| Milwaukee Brewers at St. Louis Cardinals | Final | Robert Gasser | Hunter Dobbins | 10-2 |
| Chicago Cubs at Baltimore Orioles | Final | Matthew Boyd | Shane Baz | 5-2 |
| Athletics at Detroit Tigers | Final | J.T. Ginn | Tarik Skubal | 2-6 |
| Atlanta Braves at Pittsburgh Pirates | Final | Hurston Waldrep | Paul Skenes | 4-12 |
| Seattle Mariners at Miami Marlins | Final | Bryan Woo | Max Meyer | 5-6 |
| New York Yankees at Tampa Bay Rays | Final | Will Warren | Ian Seymour | 4-6 |
| Houston Astros at Washington Nationals | Final | Tatsuya Imai | Andrew Alvarez | 6-3 |
| Kansas City Royals at New York Mets | Final | Seth Lugo | Cionel Pérez | 16-12 |
| Philadelphia Phillies at Cincinnati Reds | Final | Zack Wheeler | Andrew Abbott | 4-1 |
| Cleveland Guardians at Minnesota Twins | Final | Joey Cantillo | Taj Bradley | 1-3 |
| Boston Red Sox at Chicago White Sox | Final | Payton Tolle | Noah Schultz | 8-1 |
| Los Angeles Angels at Texas Rangers | Final | José Soriano | Jacob deGrom | 3-8 |
| Arizona Diamondbacks at San Diego Padres | In Progress | Zac Gallen | Germán Márquez | 1-4 |
| Toronto Blue Jays at San Francisco Giants | Player challenge | Spencer Miles | Trevor McDonald | 8-3 |
| Colorado Rockies at Los Angeles Dodgers | In Progress | Michael Lorenzen | Justin Wrobleski | 0-1 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Arizona Diamondbacks at San Diego Padres | 2026-07-08T01:41:00Z | Arizona Diamondbacks +593, San Diego Padres -1140 |
| Toronto Blue Jays at San Francisco Giants | 2026-07-08T01:46:00Z | San Francisco Giants +1400, Toronto Blue Jays -10000 |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-08T02:11:00Z | Colorado Rockies +483, Los Angeles Dodgers -830 |
| Toronto Blue Jays at San Francisco Giants | 2026-07-08T19:46:00Z | San Francisco Giants -108, Toronto Blue Jays -111 |
| Chicago Cubs at Baltimore Orioles | 2026-07-08T22:36:00Z | Baltimore Orioles -131, Chicago Cubs +108 |
| Athletics at Detroit Tigers | 2026-07-08T22:41:00Z | Athletics +135, Detroit Tigers -163 |
| Atlanta Braves at Pittsburgh Pirates | 2026-07-08T22:41:00Z | Atlanta Braves +101, Pittsburgh Pirates -122 |
| Seattle Mariners at Miami Marlins | 2026-07-08T22:41:00Z | none |
| New York Yankees at Tampa Bay Rays | 2026-07-08T22:41:00Z | New York Yankees +104, Tampa Bay Rays -125 |
| Houston Astros at Washington Nationals | 2026-07-08T22:46:00Z | Houston Astros +113, Washington Nationals -136 |
| Boston Red Sox at Chicago White Sox | 2026-07-08T23:41:00Z | Boston Red Sox +104, Chicago White Sox -125 |
| Cleveland Guardians at Minnesota Twins | 2026-07-08T23:41:00Z | Cleveland Guardians +113, Minnesota Twins -136 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-08T23:46:00Z | Milwaukee Brewers -136, St. Louis Cardinals +113 |
| Los Angeles Angels at Texas Rangers | 2026-07-09T00:06:00Z | Los Angeles Angels +135, Texas Rangers -163 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-09T02:11:00Z | Arizona Diamondbacks +124, San Diego Padres -149 |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-09T02:11:00Z | Colorado Rockies +188, Los Angeles Dodgers -232 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Morocco at France | 2026-07-09T20:00:00Z | France -170, Morocco +500, Draw +285 |
| Belgium at Spain | 2026-07-10T19:00:00Z | Belgium +450, Spain -165, Draw +295 |
| England at Norway | 2026-07-11T21:00:00Z | England -115, Norway +310, Draw +270 |
| Switzerland at Argentina | 2026-07-12T01:00:00Z | Argentina -140, Switzerland +425, Draw +250 |

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

- `data/daily/2026-07-07/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-07.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
