# Daily Data Refresh - 2026-07-28

Generated: 2026-07-28T17:31:25.352Z

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

- **High MLB Starters** — Cleveland Guardians at Cincinnati Reds: Official starter is still TBD (Gavin Williams vs TBD). Block Bankroll Watch promotion until both starters are confirmed.
- **High MLB Starters** — Texas Rangers at Tampa Bay Rays: Official starter is still TBD (TBD vs Griffin Jax). Block Bankroll Watch promotion until both starters are confirmed.
- **High MLB Starters** — Chicago Cubs at St. Louis Cardinals: Official starter is still TBD (Colin Rea vs TBD). Block Bankroll Watch promotion until both starters are confirmed.
- **High MLB Starters** — Seattle Mariners at Los Angeles Dodgers: Official starter is still TBD (Luis Castillo vs TBD). Block Bankroll Watch promotion until both starters are confirmed.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Cleveland Guardians at Cincinnati Reds | Warmup | Slade Cecconi | Chase Burns | 0-0 |
| Cleveland Guardians at Cincinnati Reds | Scheduled | Gavin Williams | TBD |  |
| Baltimore Orioles at Detroit Tigers | Scheduled | Dean Kremer | Troy Melton |  |
| Arizona Diamondbacks at Pittsburgh Pirates | Scheduled | Brandon Pfaadt | Bubba Chandler |  |
| Texas Rangers at Tampa Bay Rays | Scheduled | TBD | Griffin Jax |  |
| Philadelphia Phillies at Miami Marlins | Scheduled | Aaron Nola | Sandy Alcantara |  |
| Toronto Blue Jays at Washington Nationals | Scheduled | Shane Bieber | Cade Cavalli |  |
| Atlanta Braves at New York Mets | Scheduled | Chris Sale | Christian Scott |  |
| Kansas City Royals at Minnesota Twins | Scheduled | Seth Lugo | Taj Bradley |  |
| New York Yankees at Chicago White Sox | Scheduled | Gerrit Cole | Anthony Kay |  |
| Chicago Cubs at St. Louis Cardinals | Scheduled | Colin Rea | TBD |  |
| Houston Astros at Los Angeles Angels | Scheduled | Peter Lambert | Reid Detmers |  |
| Boston Red Sox at Athletics | Scheduled | Jake Bennett | Gage Jump |  |
| Colorado Rockies at San Diego Padres | Scheduled | Michael Lorenzen | Michael King |  |
| Milwaukee Brewers at San Francisco Giants | Scheduled | Logan Henderson | Landen Roupp |  |
| Seattle Mariners at Los Angeles Dodgers | Scheduled | Luis Castillo | TBD |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Cleveland Guardians at Cincinnati Reds | 2026-07-28T17:41:00Z | Cincinnati Reds -168, Cleveland Guardians +139 |
| Arizona Diamondbacks at Pittsburgh Pirates | 2026-07-28T22:41:00Z | Arizona Diamondbacks -105, Pittsburgh Pirates -115 |
| Baltimore Orioles at Detroit Tigers | 2026-07-28T22:41:00Z | Baltimore Orioles +119, Detroit Tigers -144 |
| Philadelphia Phillies at Miami Marlins | 2026-07-28T22:41:00Z | Miami Marlins -121, Philadelphia Phillies +100 |
| Texas Rangers at Tampa Bay Rays | 2026-07-28T22:41:00Z | Tampa Bay Rays -181, Texas Rangers +149 |
| Toronto Blue Jays at Washington Nationals | 2026-07-28T22:46:00Z | Toronto Blue Jays +119, Washington Nationals -143 |
| Cleveland Guardians at Cincinnati Reds | 2026-07-28T23:10:00Z | Cincinnati Reds +109, Cleveland Guardians -131 |
| Atlanta Braves at New York Mets | 2026-07-28T23:11:00Z | Atlanta Braves -163, New York Mets +135 |
| New York Yankees at Chicago White Sox | 2026-07-28T23:41:00Z | Chicago White Sox +103, New York Yankees -124 |
| Kansas City Royals at Minnesota Twins | 2026-07-28T23:41:00Z | Kansas City Royals +151, Minnesota Twins -184 |
| Chicago Cubs at St. Louis Cardinals | 2026-07-28T23:46:00Z | Chicago Cubs -114, St. Louis Cardinals -105 |
| Houston Astros at Los Angeles Angels | 2026-07-29T01:39:00Z | Houston Astros -111, Los Angeles Angels -108 |
| Boston Red Sox at Athletics | 2026-07-29T01:41:00Z | Athletics +124, Boston Red Sox -150 |
| Colorado Rockies at San Diego Padres | 2026-07-29T01:41:00Z | Colorado Rockies +168, San Diego Padres -206 |
| Milwaukee Brewers at San Francisco Giants | 2026-07-29T01:46:00Z | Milwaukee Brewers -156, San Francisco Giants +129 |
| Seattle Mariners at Los Angeles Dodgers | 2026-07-29T02:11:00Z | Los Angeles Dodgers -191, Seattle Mariners +157 |

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
