# Daily Data Refresh - 2026-08-02

Generated: 2026-08-02T23:46:50.615Z

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

- fifaMensRankings: FIFA page shows latest official update 2026-07-20, but the public ranking endpoint returned rows for 2025-09-18 (id14870). Treat as a fallback ranking prior until FIFA exposes current rows.

## Top intel

- **High MLB Market move** — Philadelphia Phillies at Baltimore Orioles: Game status is Completed Early. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Boston Red Sox at Los Angeles Dodgers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Philadelphia Phillies at Baltimore Orioles | Completed Early | Zack Wheeler | Kyle Bradish | 8-0 |
| Washington Nationals at Atlanta Braves | Final | Cade Cavalli | JR Ritchie | 2-4 |
| St. Louis Cardinals at Toronto Blue Jays | Final | Matthew Liberatore | Max Scherzer | 5-1 |
| Arizona Diamondbacks at Cleveland Guardians | Final | Merrill Kelly | Gavin Williams | 0-5 |
| Pittsburgh Pirates at Cincinnati Reds | Final | Mitch Keller | Chase Burns | 2-10 |
| Chicago White Sox at Tampa Bay Rays | Final | Anthony Kay | Griffin Jax | 9-1 |
| Miami Marlins at New York Mets | Final | Sandy Alcantara | Robert Stock | 2-0 |
| Texas Rangers at Houston Astros | Final | Kumar Rocker | Peter Lambert | 3-7 |
| New York Yankees at Chicago Cubs | Final | Gerrit Cole | Colin Rea | 2-1 |
| Kansas City Royals at Colorado Rockies | Final | Seth Lugo | Kyle Freeland | 1-8 |
| Milwaukee Brewers at Los Angeles Angels | Final | Jacob Misiorowski | Walbert Ureña | 0-3 |
| Detroit Tigers at Athletics | Final | Keider Montero | Gage Jump | 11-0 |
| San Francisco Giants at San Diego Padres | Final | Landen Roupp | Kyle Hart | 4-5 |
| Minnesota Twins at Seattle Mariners | Final | Taj Bradley | George Kirby | 6-7 |
| Boston Red Sox at Los Angeles Dodgers | In Progress | Jake Bennett | Emmet Sheehan | 2-0 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Boston Red Sox at Los Angeles Dodgers | 2026-08-02T23:21:00Z | Boston Red Sox -172, Los Angeles Dodgers +131 |
| Washington Nationals at Philadelphia Phillies | 2026-08-03T22:41:00Z | Philadelphia Phillies -149, Washington Nationals +123 |
| St. Louis Cardinals at New York Yankees | 2026-08-03T23:06:00Z | New York Yankees -192, St. Louis Cardinals +157 |
| Pittsburgh Pirates at Milwaukee Brewers | 2026-08-03T23:41:00Z | Milwaukee Brewers -144, Pittsburgh Pirates +119 |
| Los Angeles Dodgers at Chicago Cubs | 2026-08-04T00:06:00Z | Chicago Cubs +109, Los Angeles Dodgers -131 |
| San Francisco Giants at Texas Rangers | 2026-08-04T00:06:00Z | San Francisco Giants -112, Texas Rangers -108 |
| Toronto Blue Jays at Houston Astros | 2026-08-04T00:10:00Z | Houston Astros -132, Toronto Blue Jays +110 |
| Tampa Bay Rays at Colorado Rockies | 2026-08-04T00:41:00Z | Colorado Rockies +135, Tampa Bay Rays -163 |
| San Diego Padres at Arizona Diamondbacks | 2026-08-04T01:41:00Z | Arizona Diamondbacks -107, San Diego Padres -112 |

## DraftKings Soccer odds snapshot

_No rows returned._

## FIFA men's ranking model input

Source: https://inside.fifa.com/fifa-world-ranking/men

- Last official update shown by FIFA: 2026-07-20T08:37:28.979Z
- Next official update shown by FIFA: 2026-10-07T12:00:00.000Z
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

- `data/daily/2026-08-02/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-08-02.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
