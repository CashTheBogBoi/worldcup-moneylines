# Daily Data Refresh - 2026-07-28

Generated: 2026-07-29T03:56:03.112Z

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

- **High MLB Market move** — Houston Astros at Los Angeles Angels: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Boston Red Sox at Athletics: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Colorado Rockies at San Diego Padres: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Milwaukee Brewers at San Francisco Giants: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Seattle Mariners at Los Angeles Dodgers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Atlanta Braves at New York Mets: Game status is Postponed. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Cleveland Guardians at Cincinnati Reds | Final | Slade Cecconi | Chase Burns | 6-5 |
| Cleveland Guardians at Cincinnati Reds | Final | Gavin Williams | Caleb Ferguson | 0-2 |
| Baltimore Orioles at Detroit Tigers | Final | Dean Kremer | Troy Melton | 0-14 |
| Arizona Diamondbacks at Pittsburgh Pirates | Final | Brandon Pfaadt | Bubba Chandler | 8-7 |
| Texas Rangers at Tampa Bay Rays | Final | Cal Quantrill | Griffin Jax | 4-1 |
| Philadelphia Phillies at Miami Marlins | Final | Aaron Nola | Sandy Alcantara | 0-1 |
| Toronto Blue Jays at Washington Nationals | Final | Shane Bieber | Cade Cavalli | 6-8 |
| Kansas City Royals at Minnesota Twins | Final | Seth Lugo | Taj Bradley | 2-3 |
| New York Yankees at Chicago White Sox | Final | Gerrit Cole | Anthony Kay | 3-2 |
| Chicago Cubs at St. Louis Cardinals | Final | Colin Rea | Michael McGreevy | 10-2 |
| Houston Astros at Los Angeles Angels | In Progress | Peter Lambert | Reid Detmers | 2-2 |
| Boston Red Sox at Athletics | In Progress | Jake Bennett | Gage Jump | 1-3 |
| Colorado Rockies at San Diego Padres | In Progress | Michael Lorenzen | Michael King | 6-4 |
| Milwaukee Brewers at San Francisco Giants | In Progress | Logan Henderson | Landen Roupp | 5-0 |
| Seattle Mariners at Los Angeles Dodgers | In Progress | Luis Castillo | Justin Wrobleski | 5-5 |
| Atlanta Braves at New York Mets | Postponed | Chris Sale | Christian Scott |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Houston Astros at Los Angeles Angels | 2026-07-29T01:39:00Z | Houston Astros +113, Los Angeles Angels -147 |
| Boston Red Sox at Athletics | 2026-07-29T01:41:00Z | Athletics -1820, Boston Red Sox +760 |
| Colorado Rockies at San Diego Padres | 2026-07-29T01:41:00Z | Colorado Rockies -301, San Diego Padres +219 |
| Milwaukee Brewers at San Francisco Giants | 2026-07-29T01:46:00Z | none |
| Seattle Mariners at Los Angeles Dodgers | 2026-07-29T02:11:00Z | Los Angeles Dodgers -155, Seattle Mariners +119 |
| Philadelphia Phillies at Miami Marlins | 2026-07-29T16:11:00Z | Miami Marlins +130, Philadelphia Phillies -157 |
| Arizona Diamondbacks at Pittsburgh Pirates | 2026-07-29T16:36:00Z | Arizona Diamondbacks +113, Pittsburgh Pirates -136 |
| Toronto Blue Jays at Washington Nationals | 2026-07-29T17:06:00Z | Toronto Blue Jays -122, Washington Nationals +101 |
| Atlanta Braves at New York Mets | 2026-07-29T17:11:00Z | Atlanta Braves -132, New York Mets +109 |
| Baltimore Orioles at Detroit Tigers | 2026-07-29T17:11:00Z | Baltimore Orioles +142, Detroit Tigers -172 |
| Milwaukee Brewers at San Francisco Giants | 2026-07-29T19:46:00Z | Milwaukee Brewers -126, San Francisco Giants +104 |
| Colorado Rockies at San Diego Padres | 2026-07-29T20:11:00Z | Colorado Rockies +119, San Diego Padres -143 |
| Texas Rangers at Tampa Bay Rays | 2026-07-29T22:41:00Z | Tampa Bay Rays -143, Texas Rangers +119 |
| Atlanta Braves at New York Mets | 2026-07-29T23:11:00Z | Atlanta Braves -157, New York Mets +130 |
| Cleveland Guardians at Cincinnati Reds | 2026-07-29T23:11:00Z | Cincinnati Reds +112, Cleveland Guardians -135 |
| New York Yankees at Chicago White Sox | 2026-07-29T23:41:00Z | Chicago White Sox +119, New York Yankees -144 |
| Kansas City Royals at Minnesota Twins | 2026-07-29T23:41:00Z | Kansas City Royals +144, Minnesota Twins -175 |
| Chicago Cubs at St. Louis Cardinals | 2026-07-29T23:46:00Z | Chicago Cubs -120, St. Louis Cardinals +100 |
| Houston Astros at Los Angeles Angels | 2026-07-30T01:39:00Z | Houston Astros -131, Los Angeles Angels +109 |
| Boston Red Sox at Athletics | 2026-07-30T01:41:00Z | Athletics +129, Boston Red Sox -156 |
| Seattle Mariners at Los Angeles Dodgers | 2026-07-30T02:11:00Z | Los Angeles Dodgers -156, Seattle Mariners +129 |

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

- `data/daily/2026-07-28/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-28.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
