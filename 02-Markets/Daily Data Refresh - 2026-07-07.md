# Daily Data Refresh - 2026-07-07

Generated: 2026-07-07T16:47:18.398Z

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

- **High MLB Starters** — Seattle Mariners at Miami Marlins: Official starter is still TBD (TBD vs Max Meyer). Block Bankroll Watch promotion until both starters are confirmed.
- **High MLB Starters** — Kansas City Royals at New York Mets: Official starter is still TBD (Seth Lugo vs TBD). Block Bankroll Watch promotion until both starters are confirmed.
- **Medium Soccer Market move** — Colombia at Switzerland: Draw price is +210, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Milwaukee Brewers at St. Louis Cardinals | Pre-Game | Jacob Misiorowski | Matt Svanson | 0-0 |
| Milwaukee Brewers at St. Louis Cardinals | Scheduled | Robert Gasser | Hunter Dobbins |  |
| Chicago Cubs at Baltimore Orioles | Scheduled | Matthew Boyd | Shane Baz |  |
| Athletics at Detroit Tigers | Scheduled | J.T. Ginn | Tarik Skubal |  |
| Atlanta Braves at Pittsburgh Pirates | Scheduled | Hurston Waldrep | Paul Skenes |  |
| Seattle Mariners at Miami Marlins | Scheduled | TBD | Max Meyer |  |
| New York Yankees at Tampa Bay Rays | Scheduled | Will Warren | Ian Seymour |  |
| Houston Astros at Washington Nationals | Scheduled | Tatsuya Imai | Andrew Alvarez |  |
| Kansas City Royals at New York Mets | Scheduled | Seth Lugo | TBD |  |
| Philadelphia Phillies at Cincinnati Reds | Scheduled | Zack Wheeler | Andrew Abbott |  |
| Cleveland Guardians at Minnesota Twins | Scheduled | Joey Cantillo | Taj Bradley |  |
| Boston Red Sox at Chicago White Sox | Scheduled | Payton Tolle | Noah Schultz |  |
| Los Angeles Angels at Texas Rangers | Scheduled | José Soriano | Jacob deGrom |  |
| Arizona Diamondbacks at San Diego Padres | Scheduled | Zac Gallen | Germán Márquez |  |
| Toronto Blue Jays at San Francisco Giants | Scheduled | Spencer Miles | Trevor McDonald |  |
| Colorado Rockies at Los Angeles Dodgers | Scheduled | Michael Lorenzen | Justin Wrobleski |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-07T18:16:00Z | Milwaukee Brewers -205, St. Louis Cardinals +168 |
| Chicago Cubs at Baltimore Orioles | 2026-07-07T22:36:00Z | Baltimore Orioles -105, Chicago Cubs -115 |
| Athletics at Detroit Tigers | 2026-07-07T22:41:00Z | Athletics +178, Detroit Tigers -219 |
| Atlanta Braves at Pittsburgh Pirates | 2026-07-07T22:41:00Z | Atlanta Braves +124, Pittsburgh Pirates -149 |
| Seattle Mariners at Miami Marlins | 2026-07-07T22:41:00Z | Miami Marlins -125, Seattle Mariners +104 |
| New York Yankees at Tampa Bay Rays | 2026-07-07T22:41:00Z | New York Yankees +101, Tampa Bay Rays -122 |
| Houston Astros at Washington Nationals | 2026-07-07T22:46:00Z | Houston Astros +101, Washington Nationals -122 |
| Philadelphia Phillies at Cincinnati Reds | 2026-07-07T23:10:00Z | Cincinnati Reds +144, Philadelphia Phillies -175 |
| Kansas City Royals at New York Mets | 2026-07-07T23:11:00Z | Kansas City Royals +128, New York Mets -155 |
| Boston Red Sox at Chicago White Sox | 2026-07-07T23:41:00Z | Boston Red Sox -126, Chicago White Sox +104 |
| Cleveland Guardians at Minnesota Twins | 2026-07-07T23:41:00Z | Cleveland Guardians -105, Minnesota Twins -114 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-07T23:46:00Z | Milwaukee Brewers -125, St. Louis Cardinals +104 |
| Los Angeles Angels at Texas Rangers | 2026-07-08T00:06:00Z | Los Angeles Angels +135, Texas Rangers -163 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-08T01:41:00Z | Arizona Diamondbacks +101, San Diego Padres -122 |
| Toronto Blue Jays at San Francisco Giants | 2026-07-08T01:46:00Z | San Francisco Giants -105, Toronto Blue Jays -115 |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-08T02:11:00Z | Colorado Rockies +233, Los Angeles Dodgers -292 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Egypt at Argentina | 2026-07-07T16:01:00Z | Argentina +115, Egypt +275, Draw +200 |
| Colombia at Switzerland | 2026-07-07T20:00:00Z | Colombia +125, Switzerland +245, Draw +210 |
| Morocco at France | 2026-07-09T20:00:00Z | France -180, Morocco +550, Draw +295 |
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

- `data/daily/2026-07-07/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-07.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
