# Daily Data Refresh - 2026-07-26

Generated: 2026-07-26T17:42:01.432Z

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

- **High MLB Market move** — Cleveland Guardians at Tampa Bay Rays: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Arizona Diamondbacks at Washington Nationals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Chicago Cubs at Pittsburgh Pirates: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Toronto Blue Jays at Boston Red Sox: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Atlanta Braves at Baltimore Orioles: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Kansas City Royals at Detroit Tigers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Los Angeles Dodgers at New York Mets: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — San Diego Padres at Miami Marlins: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Cleveland Guardians at Tampa Bay Rays | In Progress | Parker Messick | Drew Rasmussen | 0-1 |
| Arizona Diamondbacks at Washington Nationals | In Progress | Kohl Drake | Miles Mikolas | 0-0 |
| Chicago Cubs at Pittsburgh Pirates | In Progress | Jameson Taillon | Braxton Ashcraft | 0-0 |
| Toronto Blue Jays at Boston Red Sox | In Progress | Kevin Gausman | Ranger Suarez | 0-0 |
| Atlanta Braves at Baltimore Orioles | In Progress | Reynaldo López | Shane Baz | 0-0 |
| Kansas City Royals at Detroit Tigers | In Progress | Luinder Avila | Framber Valdez | 0-0 |
| Los Angeles Dodgers at New York Mets | In Progress | Emmet Sheehan | Freddy Peralta | 0-0 |
| San Diego Padres at Miami Marlins | In Progress | Walker Buehler | Janson Junk | 0-0 |
| Athletics at Minnesota Twins | Pre-Game | Jeffrey Springs | Connor Prielipp | 0-0 |
| Houston Astros at Chicago White Sox | Pre-Game | Ronel Blanco | Erick Fedde | 0-0 |
| Colorado Rockies at Milwaukee Brewers | Pre-Game | Kyle Freeland | Jacob Misiorowski | 0-0 |
| Cincinnati Reds at St. Louis Cardinals | Pre-Game | Andrew Abbott | Kyle Leahy | 0-0 |
| Seattle Mariners at Texas Rangers | Pre-Game | Logan Gilbert | Jacob deGrom | 0-0 |
| Los Angeles Angels at San Francisco Giants | Pre-Game | José Soriano | Carson Whisenhunt | 0-0 |
| New York Yankees at Philadelphia Phillies | Scheduled | Will Warren | Cristopher Sánchez |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Cleveland Guardians at Tampa Bay Rays | 2026-07-26T16:16:00Z | Cleveland Guardians +488, Tampa Bay Rays -850 |
| Arizona Diamondbacks at Washington Nationals | 2026-07-26T17:36:00Z | Arizona Diamondbacks -180, Washington Nationals +137 |
| Atlanta Braves at Baltimore Orioles | 2026-07-26T17:36:00Z | Atlanta Braves +103, Baltimore Orioles -134 |
| Toronto Blue Jays at Boston Red Sox | 2026-07-26T17:36:00Z | Boston Red Sox -181, Toronto Blue Jays +137 |
| Chicago Cubs at Pittsburgh Pirates | 2026-07-26T17:36:00Z | Chicago Cubs +127, Pittsburgh Pirates -166 |
| Los Angeles Dodgers at New York Mets | 2026-07-26T17:41:00Z | Los Angeles Dodgers -157, New York Mets +120 |
| San Diego Padres at Miami Marlins | 2026-07-26T17:41:00Z | Miami Marlins -139, San Diego Padres +107 |
| Kansas City Royals at Detroit Tigers | 2026-07-26T17:42:00Z | Detroit Tigers -192, Kansas City Royals +157 |
| Athletics at Minnesota Twins | 2026-07-26T18:11:00Z | Athletics +135, Minnesota Twins -163 |
| Houston Astros at Chicago White Sox | 2026-07-26T18:11:00Z | Chicago White Sox -117, Houston Astros -103 |
| Colorado Rockies at Milwaukee Brewers | 2026-07-26T18:11:00Z | Colorado Rockies +290, Milwaukee Brewers -373 |
| Cincinnati Reds at St. Louis Cardinals | 2026-07-26T18:16:00Z | Cincinnati Reds +113, St. Louis Cardinals -136 |
| Seattle Mariners at Texas Rangers | 2026-07-26T18:36:00Z | Seattle Mariners -103, Texas Rangers -117 |
| Los Angeles Angels at San Francisco Giants | 2026-07-26T20:06:00Z | Los Angeles Angels -114, San Francisco Giants -105 |
| New York Yankees at Philadelphia Phillies | 2026-07-26T23:21:00Z | New York Yankees +159, Philadelphia Phillies -193 |

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

- `data/daily/2026-07-26/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-26.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
