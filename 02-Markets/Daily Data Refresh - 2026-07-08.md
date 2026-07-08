# Daily Data Refresh - 2026-07-08

Generated: 2026-07-08T08:31:09.806Z

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

- **High MLB Starters** — Philadelphia Phillies at Cincinnati Reds: Official starter is still TBD (TBD vs Chase Burns). Block Bankroll Watch promotion until both starters are confirmed.
- **Medium MLB Market move** — Kansas City Royals at New York Mets: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.
- **Medium MLB Market move** — Philadelphia Phillies at Cincinnati Reds: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Toronto Blue Jays at San Francisco Giants | Scheduled | Dylan Cease | Logan Webb |  |
| Chicago Cubs at Baltimore Orioles | Scheduled | Colin Rea | Dean Kremer |  |
| Athletics at Detroit Tigers | Scheduled | Jeffrey Springs | Troy Melton |  |
| Atlanta Braves at Pittsburgh Pirates | Scheduled | Grant Holmes | Jared Jones |  |
| Seattle Mariners at Miami Marlins | Scheduled | George Kirby | Tyler Phillips |  |
| New York Yankees at Tampa Bay Rays | Scheduled | Gerrit Cole | Shane McClanahan |  |
| Houston Astros at Washington Nationals | Scheduled | Spencer Arrighetti | Foster Griffin |  |
| Kansas City Royals at New York Mets | Scheduled | Steven Cruz | Christian Scott |  |
| Philadelphia Phillies at Cincinnati Reds | Scheduled | TBD | Chase Burns |  |
| Cleveland Guardians at Minnesota Twins | Scheduled | Slade Cecconi | Connor Prielipp |  |
| Boston Red Sox at Chicago White Sox | Scheduled | Jake Bennett | Davis Martin |  |
| Milwaukee Brewers at St. Louis Cardinals | Scheduled | Kyle Harrison | Michael McGreevy |  |
| Los Angeles Angels at Texas Rangers | Scheduled | Walbert Ureña | MacKenzie Gore |  |
| Colorado Rockies at Los Angeles Dodgers | Scheduled | Gabriel Hughes | Roki Sasaki |  |
| Arizona Diamondbacks at San Diego Padres | Scheduled | Jose Cabrera | Michael King |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Toronto Blue Jays at San Francisco Giants | 2026-07-08T19:46:00Z | San Francisco Giants -102, Toronto Blue Jays -119 |
| Chicago Cubs at Baltimore Orioles | 2026-07-08T22:36:00Z | Baltimore Orioles -131, Chicago Cubs +108 |
| Athletics at Detroit Tigers | 2026-07-08T22:41:00Z | Athletics +135, Detroit Tigers -163 |
| Atlanta Braves at Pittsburgh Pirates | 2026-07-08T22:41:00Z | Atlanta Braves -101, Pittsburgh Pirates -120 |
| Seattle Mariners at Miami Marlins | 2026-07-08T22:41:00Z | Miami Marlins +109, Seattle Mariners -131 |
| New York Yankees at Tampa Bay Rays | 2026-07-08T22:41:00Z | New York Yankees +108, Tampa Bay Rays -131 |
| Houston Astros at Washington Nationals | 2026-07-08T22:46:00Z | Houston Astros +113, Washington Nationals -136 |
| Philadelphia Phillies at Cincinnati Reds | 2026-07-08T23:11:00Z | none |
| Kansas City Royals at New York Mets | 2026-07-08T23:11:00Z | none |
| Boston Red Sox at Chicago White Sox | 2026-07-08T23:41:00Z | Boston Red Sox +101, Chicago White Sox -122 |
| Cleveland Guardians at Minnesota Twins | 2026-07-08T23:41:00Z | Cleveland Guardians +112, Minnesota Twins -135 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-08T23:46:00Z | Milwaukee Brewers -143, St. Louis Cardinals +119 |
| Los Angeles Angels at Texas Rangers | 2026-07-09T00:06:00Z | Los Angeles Angels +135, Texas Rangers -163 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-09T02:11:00Z | Arizona Diamondbacks +119, San Diego Padres -144 |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-09T02:11:00Z | Colorado Rockies +194, Los Angeles Dodgers -239 |

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

- `data/daily/2026-07-08/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-08.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
