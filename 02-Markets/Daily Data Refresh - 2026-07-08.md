# Daily Data Refresh - 2026-07-08

Generated: 2026-07-09T03:51:22.371Z

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

- **High MLB Market move** — Colorado Rockies at Los Angeles Dodgers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Arizona Diamondbacks at San Diego Padres: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Toronto Blue Jays at San Francisco Giants | Final | Dylan Cease | Logan Webb | 10-0 |
| Chicago Cubs at Baltimore Orioles | Final | Colin Rea | Dean Kremer | 9-7 |
| Athletics at Detroit Tigers | Final | Jeffrey Springs | Troy Melton | 1-6 |
| Atlanta Braves at Pittsburgh Pirates | Final | Grant Holmes | Jared Jones | 3-0 |
| Seattle Mariners at Miami Marlins | Final | George Kirby | Tyler Phillips | 0-2 |
| New York Yankees at Tampa Bay Rays | Final | Gerrit Cole | Shane McClanahan | 0-3 |
| Houston Astros at Washington Nationals | Final | Spencer Arrighetti | Foster Griffin | 2-8 |
| Kansas City Royals at New York Mets | Final | Steven Cruz | Christian Scott | 2-6 |
| Philadelphia Phillies at Cincinnati Reds | Final | Alan Rangel | Chase Burns | 5-11 |
| Cleveland Guardians at Minnesota Twins | Final | Slade Cecconi | Connor Prielipp | 5-6 |
| Boston Red Sox at Chicago White Sox | Final | Jake Bennett | Davis Martin | 5-0 |
| Milwaukee Brewers at St. Louis Cardinals | Final | Kyle Harrison | Michael McGreevy | 1-5 |
| Los Angeles Angels at Texas Rangers | Final | Walbert Ureña | MacKenzie Gore | 13-1 |
| Colorado Rockies at Los Angeles Dodgers | In Progress | Gabriel Hughes | Roki Sasaki | 3-3 |
| Arizona Diamondbacks at San Diego Padres | In Progress | Jose Cabrera | Michael King | 1-4 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Arizona Diamondbacks at San Diego Padres | 2026-07-09T02:11:00Z | Arizona Diamondbacks +595, San Diego Padres -1160 |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-09T02:11:00Z | Colorado Rockies +196, Los Angeles Dodgers -266 |
| Atlanta Braves at Pittsburgh Pirates | 2026-07-09T16:36:00Z | Atlanta Braves -118, Pittsburgh Pirates -102 |
| New York Yankees at Tampa Bay Rays | 2026-07-09T17:10:00Z | New York Yankees +129, Tampa Bay Rays -156 |
| Kansas City Royals at New York Mets | 2026-07-09T17:11:00Z | Kansas City Royals +123, New York Mets -149 |
| Chicago Cubs at Baltimore Orioles | 2026-07-09T17:36:00Z | Baltimore Orioles -131, Chicago Cubs +108 |
| Cleveland Guardians at Minnesota Twins | 2026-07-09T17:41:00Z | Cleveland Guardians -131, Minnesota Twins +108 |
| Boston Red Sox at Chicago White Sox | 2026-07-09T18:11:00Z | Boston Red Sox -103, Chicago White Sox -117 |
| Athletics at Detroit Tigers | 2026-07-09T22:41:00Z | Athletics +119, Detroit Tigers -144 |
| Seattle Mariners at Miami Marlins | 2026-07-09T22:41:00Z | Miami Marlins +123, Seattle Mariners -149 |
| Philadelphia Phillies at Cincinnati Reds | 2026-07-09T23:11:00Z | Cincinnati Reds +139, Philadelphia Phillies -168 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-09T23:46:00Z | Milwaukee Brewers -131, St. Louis Cardinals +109 |
| Los Angeles Angels at Texas Rangers | 2026-07-10T00:06:00Z | Los Angeles Angels +123, Texas Rangers -148 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-10T01:41:00Z | Arizona Diamondbacks +104, San Diego Padres -126 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Morocco at France | 2026-07-09T20:00:00Z | France -180, Morocco +550, Draw +290 |
| Belgium at Spain | 2026-07-10T19:00:00Z | Belgium +425, Spain -155, Draw +290 |
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
