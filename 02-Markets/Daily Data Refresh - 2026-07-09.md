# Daily Data Refresh - 2026-07-09

Generated: 2026-07-10T01:50:53.462Z

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

- **High MLB Market move** — Milwaukee Brewers at St. Louis Cardinals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Los Angeles Angels at Texas Rangers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Arizona Diamondbacks at San Diego Padres: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Colorado Rockies at San Francisco Giants: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Atlanta Braves at Pittsburgh Pirates | Final | Bryce Elder | Mitch Keller | 10-5 |
| Kansas City Royals at New York Mets | Final | Michael Wacha | Sean Manaea | 3-7 |
| New York Yankees at Tampa Bay Rays | Final | Paul Blackburn | Drew Rasmussen | 12-4 |
| Chicago Cubs at Baltimore Orioles | Final | David Peterson | Trevor Rogers | 2-3 |
| Cleveland Guardians at Minnesota Twins | Final | Gavin Williams | Bailey Ober | 5-2 |
| Boston Red Sox at Chicago White Sox | Final | Patrick Sandoval | Anthony Kay | 2-1 |
| Athletics at Detroit Tigers | Final | José Suarez | Framber Valdez | 1-4 |
| Seattle Mariners at Miami Marlins | Final | Bryce Miller | Janson Junk | 4-8 |
| Philadelphia Phillies at Cincinnati Reds | Final | Jesús Luzardo | Brady Singer | 1-0 |
| Milwaukee Brewers at St. Louis Cardinals | In Progress | Logan Henderson | Andre Pallante | 7-4 |
| Los Angeles Angels at Texas Rangers | In Progress | Reid Detmers | Nathan Eovaldi | 1-5 |
| Arizona Diamondbacks at San Diego Padres | In Progress | Merrill Kelly | Griffin Canning | 0-0 |
| Colorado Rockies at San Francisco Giants | In Progress | Ryan Feltner | Carson Whisenhunt | 0-0 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-09T23:46:00Z | Milwaukee Brewers -1180, St. Louis Cardinals +600 |
| Los Angeles Angels at Texas Rangers | 2026-07-10T00:06:00Z | none |
| Arizona Diamondbacks at San Diego Padres | 2026-07-10T01:41:00Z | Arizona Diamondbacks +127, San Diego Padres -167 |
| Colorado Rockies at San Francisco Giants | 2026-07-10T01:46:00Z | Colorado Rockies +137, San Francisco Giants -180 |
| Philadelphia Phillies at Detroit Tigers | 2026-07-10T22:41:00Z | Detroit Tigers -126, Philadelphia Phillies +104 |
| Milwaukee Brewers at Pittsburgh Pirates | 2026-07-10T22:41:00Z | Milwaukee Brewers +114, Pittsburgh Pirates -137 |
| New York Yankees at Washington Nationals | 2026-07-10T22:46:00Z | New York Yankees -163, Washington Nationals +135 |
| Kansas City Royals at Baltimore Orioles | 2026-07-10T23:06:00Z | Baltimore Orioles -156, Kansas City Royals +129 |
| Chicago Cubs at Cincinnati Reds | 2026-07-10T23:11:00Z | Chicago Cubs -112, Cincinnati Reds -107 |
| Cleveland Guardians at Miami Marlins | 2026-07-10T23:11:00Z | Cleveland Guardians -105, Miami Marlins -114 |
| Seattle Mariners at Tampa Bay Rays | 2026-07-10T23:11:00Z | Seattle Mariners -107, Tampa Bay Rays -112 |
| Boston Red Sox at New York Mets | 2026-07-10T23:16:00Z | Boston Red Sox +113, New York Mets -136 |
| Athletics at Chicago White Sox | 2026-07-10T23:41:00Z | Athletics +123, Chicago White Sox -149 |
| Houston Astros at Texas Rangers | 2026-07-11T00:06:00Z | none |
| Los Angeles Angels at Minnesota Twins | 2026-07-11T00:11:00Z | Los Angeles Angels +104, Minnesota Twins -126 |
| Atlanta Braves at St. Louis Cardinals | 2026-07-11T00:16:00Z | Atlanta Braves -168, St. Louis Cardinals +139 |
| Toronto Blue Jays at San Diego Padres | 2026-07-11T01:41:00Z | none |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-11T02:11:00Z | Arizona Diamondbacks +209, Los Angeles Dodgers -259 |
| Colorado Rockies at San Francisco Giants | 2026-07-11T02:16:00Z | Colorado Rockies +144, San Francisco Giants -175 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
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
