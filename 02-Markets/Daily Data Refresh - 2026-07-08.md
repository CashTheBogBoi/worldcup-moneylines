# Daily Data Refresh - 2026-07-08

Generated: 2026-07-08T19:52:24.036Z

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

- **High MLB Market move** — Toronto Blue Jays at San Francisco Giants: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Starters** — Philadelphia Phillies at Cincinnati Reds: Official starter is still TBD (TBD vs Chase Burns). Block Bankroll Watch promotion until both starters are confirmed.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Toronto Blue Jays at San Francisco Giants | In Progress | Dylan Cease | Logan Webb | 0-0 |
| Chicago Cubs at Baltimore Orioles | Pre-Game | Colin Rea | Dean Kremer | 0-0 |
| Athletics at Detroit Tigers | Pre-Game | Jeffrey Springs | Troy Melton | 0-0 |
| Atlanta Braves at Pittsburgh Pirates | Pre-Game | Grant Holmes | Jared Jones | 0-0 |
| Seattle Mariners at Miami Marlins | Pre-Game | George Kirby | Tyler Phillips | 0-0 |
| New York Yankees at Tampa Bay Rays | Pre-Game | Gerrit Cole | Shane McClanahan | 0-0 |
| Houston Astros at Washington Nationals | Scheduled | Spencer Arrighetti | Foster Griffin |  |
| Kansas City Royals at New York Mets | Pre-Game | Steven Cruz | Christian Scott | 0-0 |
| Philadelphia Phillies at Cincinnati Reds | Pre-Game | TBD | Chase Burns | 0-0 |
| Cleveland Guardians at Minnesota Twins | Scheduled | Slade Cecconi | Connor Prielipp |  |
| Boston Red Sox at Chicago White Sox | Pre-Game | Jake Bennett | Davis Martin |  |
| Milwaukee Brewers at St. Louis Cardinals | Scheduled | Kyle Harrison | Michael McGreevy |  |
| Los Angeles Angels at Texas Rangers | Scheduled | Walbert Ureña | MacKenzie Gore |  |
| Colorado Rockies at Los Angeles Dodgers | Scheduled | Gabriel Hughes | Roki Sasaki |  |
| Arizona Diamondbacks at San Diego Padres | Scheduled | Jose Cabrera | Michael King |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Toronto Blue Jays at San Francisco Giants | 2026-07-08T19:46:00Z | San Francisco Giants +134, Toronto Blue Jays -175 |
| Chicago Cubs at Baltimore Orioles | 2026-07-08T22:36:00Z | Baltimore Orioles -126, Chicago Cubs +105 |
| Athletics at Detroit Tigers | 2026-07-08T22:41:00Z | Athletics +114, Detroit Tigers -137 |
| Atlanta Braves at Pittsburgh Pirates | 2026-07-08T22:41:00Z | Atlanta Braves -102, Pittsburgh Pirates -118 |
| Seattle Mariners at Miami Marlins | 2026-07-08T22:41:00Z | Miami Marlins +105, Seattle Mariners -126 |
| New York Yankees at Tampa Bay Rays | 2026-07-08T22:41:00Z | New York Yankees -101, Tampa Bay Rays -120 |
| Houston Astros at Washington Nationals | 2026-07-08T22:46:00Z | Houston Astros +113, Washington Nationals -136 |
| Philadelphia Phillies at Cincinnati Reds | 2026-07-08T23:11:00Z | Cincinnati Reds -144, Philadelphia Phillies +119 |
| Kansas City Royals at New York Mets | 2026-07-08T23:11:00Z | Kansas City Royals +149, New York Mets -181 |
| Boston Red Sox at Chicago White Sox | 2026-07-08T23:41:00Z | Boston Red Sox -108, Chicago White Sox -112 |
| Cleveland Guardians at Minnesota Twins | 2026-07-08T23:41:00Z | Cleveland Guardians -101, Minnesota Twins -120 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-08T23:46:00Z | Milwaukee Brewers -155, St. Louis Cardinals +128 |
| Los Angeles Angels at Texas Rangers | 2026-07-09T00:06:00Z | Los Angeles Angels +129, Texas Rangers -156 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-09T02:11:00Z | Arizona Diamondbacks +119, San Diego Padres -143 |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-09T02:11:00Z | Colorado Rockies +199, Los Angeles Dodgers -246 |
| Atlanta Braves at Pittsburgh Pirates | 2026-07-09T16:36:00Z | Atlanta Braves -115, Pittsburgh Pirates -105 |
| Kansas City Royals at New York Mets | 2026-07-09T17:11:00Z | Kansas City Royals +119, New York Mets -143 |
| Cleveland Guardians at Minnesota Twins | 2026-07-09T17:41:00Z | Cleveland Guardians -131, Minnesota Twins +109 |
| Boston Red Sox at Chicago White Sox | 2026-07-09T18:11:00Z | Boston Red Sox -102, Chicago White Sox -118 |
| Chicago Cubs at Baltimore Orioles | 2026-07-09T22:36:00Z | Baltimore Orioles -131, Chicago Cubs +109 |
| Athletics at Detroit Tigers | 2026-07-09T22:41:00Z | Athletics +119, Detroit Tigers -143 |
| Philadelphia Phillies at Cincinnati Reds | 2026-07-09T23:11:00Z | Cincinnati Reds +139, Philadelphia Phillies -168 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-09T23:46:00Z | Milwaukee Brewers -131, St. Louis Cardinals +109 |
| Los Angeles Angels at Texas Rangers | 2026-07-10T00:06:00Z | Los Angeles Angels +123, Texas Rangers -149 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-10T01:41:00Z | Arizona Diamondbacks +104, San Diego Padres -126 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Morocco at France | 2026-07-09T20:00:00Z | France -180, Morocco +550, Draw +290 |
| Belgium at Spain | 2026-07-10T19:00:00Z | Belgium +450, Spain -165, Draw +300 |
| England at Norway | 2026-07-11T21:00:00Z | England -115, Norway +310, Draw +270 |
| Switzerland at Argentina | 2026-07-12T01:00:00Z | Argentina -145, Switzerland +450, Draw +255 |

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

- `data/daily/2026-07-08/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-08.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
