# Daily Data Refresh - 2026-07-09

Generated: 2026-07-09T19:30:20.467Z

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

- **High MLB Market move** — Atlanta Braves at Pittsburgh Pirates: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Kansas City Royals at New York Mets: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — New York Yankees at Tampa Bay Rays: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Chicago Cubs at Baltimore Orioles: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Cleveland Guardians at Minnesota Twins: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Boston Red Sox at Chicago White Sox: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Atlanta Braves at Pittsburgh Pirates | In Progress | Bryce Elder | Mitch Keller | 6-5 |
| Kansas City Royals at New York Mets | In Progress | Michael Wacha | Sean Manaea | 3-7 |
| New York Yankees at Tampa Bay Rays | In Progress | Paul Blackburn | Drew Rasmussen | 11-4 |
| Chicago Cubs at Baltimore Orioles | In Progress | David Peterson | Trevor Rogers | 1-1 |
| Cleveland Guardians at Minnesota Twins | In Progress | Gavin Williams | Bailey Ober | 2-1 |
| Boston Red Sox at Chicago White Sox | In Progress | Patrick Sandoval | Anthony Kay | 2-0 |
| Athletics at Detroit Tigers | Scheduled | Jack Perkins | Framber Valdez |  |
| Seattle Mariners at Miami Marlins | Pre-Game | Bryce Miller | Janson Junk | 0-0 |
| Philadelphia Phillies at Cincinnati Reds | Pre-Game | Jesús Luzardo | Brady Singer |  |
| Milwaukee Brewers at St. Louis Cardinals | Pre-Game | Logan Henderson | Andre Pallante |  |
| Los Angeles Angels at Texas Rangers | Scheduled | Reid Detmers | Nathan Eovaldi |  |
| Arizona Diamondbacks at San Diego Padres | Scheduled | Merrill Kelly | Griffin Canning |  |
| Colorado Rockies at San Francisco Giants | Scheduled | Ryan Feltner | Carson Whisenhunt |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Atlanta Braves at Pittsburgh Pirates | 2026-07-09T16:37:41Z | Atlanta Braves -274, Pittsburgh Pirates +201 |
| New York Yankees at Tampa Bay Rays | 2026-07-09T17:10:21Z | none |
| Kansas City Royals at New York Mets | 2026-07-09T17:11:00Z | none |
| Chicago Cubs at Baltimore Orioles | 2026-07-09T17:36:00Z | Baltimore Orioles -120, Chicago Cubs -108 |
| Cleveland Guardians at Minnesota Twins | 2026-07-09T17:41:00Z | Cleveland Guardians -279, Minnesota Twins +204 |
| Boston Red Sox at Chicago White Sox | 2026-07-09T18:11:00Z | Boston Red Sox -343, Chicago White Sox +245 |
| Athletics at Detroit Tigers | 2026-07-09T22:41:00Z | Athletics +108, Detroit Tigers -131 |
| Seattle Mariners at Miami Marlins | 2026-07-09T22:41:00Z | Miami Marlins +105, Seattle Mariners -126 |
| Philadelphia Phillies at Cincinnati Reds | 2026-07-09T23:11:00Z | Cincinnati Reds +135, Philadelphia Phillies -163 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-09T23:46:00Z | Milwaukee Brewers -136, St. Louis Cardinals +113 |
| Los Angeles Angels at Texas Rangers | 2026-07-10T00:06:00Z | Los Angeles Angels +113, Texas Rangers -136 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-10T01:41:00Z | Arizona Diamondbacks +110, San Diego Padres -132 |
| Colorado Rockies at San Francisco Giants | 2026-07-10T01:46:00Z | Colorado Rockies +109, San Francisco Giants -131 |
| New York Yankees at Washington Nationals | 2026-07-10T22:46:00Z | none |
| Kansas City Royals at Baltimore Orioles | 2026-07-10T23:06:00Z | none |
| Chicago Cubs at Cincinnati Reds | 2026-07-10T23:11:00Z | none |
| Seattle Mariners at Tampa Bay Rays | 2026-07-10T23:11:00Z | none |
| Boston Red Sox at New York Mets | 2026-07-10T23:16:00Z | none |
| Atlanta Braves at St. Louis Cardinals | 2026-07-11T00:16:00Z | none |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Morocco at France | 2026-07-09T20:00:00Z | France -170, Morocco +500, Draw +280 |
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

- `data/daily/2026-07-09/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-09.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
