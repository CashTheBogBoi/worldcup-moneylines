# Daily Data Refresh - 2026-07-11

Generated: 2026-07-11T12:32:18.870Z

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

- **High MLB Starters** — Milwaukee Brewers at Pittsburgh Pirates: Official starter is still TBD (TBD vs TBD). Block Bankroll Watch promotion until both starters are confirmed.
- **High MLB Starters** — Boston Red Sox at New York Mets: Official starter is still TBD (TBD vs Freddy Peralta). Block Bankroll Watch promotion until both starters are confirmed.
- **Medium Soccer Market move** — Spain at France: Draw price is +225, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Milwaukee Brewers at Pittsburgh Pirates | Scheduled | TBD | TBD |  |
| Milwaukee Brewers at Pittsburgh Pirates | Scheduled | Shane Drohan | Bubba Chandler |  |
| Los Angeles Angels at Minnesota Twins | Scheduled | Ryan Johnson | Joe Ryan |  |
| Athletics at Chicago White Sox | Scheduled | Gage Jump | Bryan Hudson |  |
| Colorado Rockies at San Francisco Giants | Scheduled | Kyle Freeland | Tyler Mahle |  |
| New York Yankees at Washington Nationals | Scheduled | Cam Schlittler | Miles Mikolas |  |
| Boston Red Sox at New York Mets | Scheduled | TBD | Freddy Peralta |  |
| Seattle Mariners at Tampa Bay Rays | Scheduled | Logan Gilbert | Griffin Jax |  |
| Cleveland Guardians at Miami Marlins | Scheduled | Tanner Bibee | Eury Pérez |  |
| Philadelphia Phillies at Detroit Tigers | Scheduled | Cristopher Sánchez | Casey Mize |  |
| Kansas City Royals at Baltimore Orioles | Scheduled | Noah Cameron | Kyle Bradish |  |
| Houston Astros at Texas Rangers | Scheduled | Peter Lambert | Kumar Rocker |  |
| Chicago Cubs at Cincinnati Reds | Scheduled | Javier Assad | Nick Lodolo |  |
| Atlanta Braves at St. Louis Cardinals | Scheduled | Reynaldo López | Matthew Liberatore |  |
| Toronto Blue Jays at San Diego Padres | Scheduled | Trey Yesavage | Walker Buehler |  |
| Arizona Diamondbacks at Los Angeles Dodgers | Scheduled | Brandon Pfaadt | Yoshinobu Yamamoto |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Milwaukee Brewers at Pittsburgh Pirates | 2026-07-11T16:06:00Z | none |
| Athletics at Chicago White Sox | 2026-07-11T18:11:00Z | Athletics -108, Chicago White Sox -112 |
| Los Angeles Angels at Minnesota Twins | 2026-07-11T18:11:00Z | Los Angeles Angels +152, Minnesota Twins -185 |
| New York Yankees at Washington Nationals | 2026-07-11T20:05:00Z | New York Yankees -199, Washington Nationals +163 |
| Colorado Rockies at San Francisco Giants | 2026-07-11T20:06:00Z | Colorado Rockies +124, San Francisco Giants -149 |
| Milwaukee Brewers at Pittsburgh Pirates | 2026-07-11T20:06:00Z | Milwaukee Brewers -126, Pittsburgh Pirates +105 |
| Boston Red Sox at New York Mets | 2026-07-11T20:11:00Z | Boston Red Sox +123, New York Mets -149 |
| Cleveland Guardians at Miami Marlins | 2026-07-11T20:11:00Z | Cleveland Guardians +128, Miami Marlins -155 |
| Seattle Mariners at Tampa Bay Rays | 2026-07-11T20:11:00Z | Seattle Mariners -108, Tampa Bay Rays -112 |
| Philadelphia Phillies at Detroit Tigers | 2026-07-11T22:11:00Z | Detroit Tigers +113, Philadelphia Phillies -136 |
| Kansas City Royals at Baltimore Orioles | 2026-07-11T23:06:00Z | Baltimore Orioles -155, Kansas City Royals +128 |
| Houston Astros at Texas Rangers | 2026-07-11T23:06:00Z | Houston Astros -101, Texas Rangers -120 |
| Chicago Cubs at Cincinnati Reds | 2026-07-11T23:11:00Z | Chicago Cubs -120, Cincinnati Reds -101 |
| Atlanta Braves at St. Louis Cardinals | 2026-07-11T23:15:00Z | Atlanta Braves -122, St. Louis Cardinals +101 |
| Toronto Blue Jays at San Diego Padres | 2026-07-12T00:41:00Z | San Diego Padres -114, Toronto Blue Jays -105 |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-12T01:10:00Z | Arizona Diamondbacks +230, Los Angeles Dodgers -287 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| England at Norway | 2026-07-11T21:00:00Z | England -105, Norway +280, Draw +265 |
| Switzerland at Argentina | 2026-07-12T01:00:00Z | Argentina -145, Switzerland +450, Draw +255 |
| Spain at France | 2026-07-14T19:00:00Z | France +135, Spain +215, Draw +225 |

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

- `data/daily/2026-07-11/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-11.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
