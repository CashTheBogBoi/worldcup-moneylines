# Daily Data Refresh - 2026-07-05

Generated: 2026-07-05T16:07:41.432Z

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

- **High MLB Starters** — Tampa Bay Rays at Houston Astros: Official starter is still TBD (TBD vs Peter Lambert). Block Bankroll Watch promotion until both starters are confirmed.
- **Medium Soccer Market move** — England at Mexico: Draw price is +215, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Belgium at USA: Draw price is +230, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Colombia at Switzerland: Draw price is +210, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| New York Mets at Atlanta Braves | Pre-Game | Nolan McLean | Martín Pérez | 0-0 |
| Pittsburgh Pirates at Washington Nationals | Pre-Game | Bubba Chandler | Cade Cavalli |  |
| Baltimore Orioles at Cincinnati Reds | Pre-Game | Kyle Bradish | Nick Lodolo | 0-0 |
| Minnesota Twins at New York Yankees | Pre-Game | Joe Ryan | Ryan Weathers | 0-0 |
| Chicago White Sox at Cleveland Guardians | Pre-Game | Chris Murphy | Tanner Bibee | 0-0 |
| St. Louis Cardinals at Chicago Cubs | Pre-Game | Matthew Liberatore | Javier Assad | 0-0 |
| Philadelphia Phillies at Kansas City Royals | Pre-Game | Aaron Nola | Luinder Avila |  |
| Tampa Bay Rays at Houston Astros | Scheduled | TBD | Peter Lambert |  |
| Detroit Tigers at Texas Rangers | Pre-Game | Casey Mize | Kumar Rocker | 0-0 |
| San Francisco Giants at Colorado Rockies | Scheduled | Tyler Mahle | Tanner Gordon |  |
| Milwaukee Brewers at Arizona Diamondbacks | Scheduled | Brandon Sproat | Eduardo Rodriguez |  |
| Miami Marlins at Athletics | Scheduled | Eury Pérez | Gage Jump |  |
| Toronto Blue Jays at Seattle Mariners | Scheduled | Trey Yesavage | Emerson Hancock |  |
| San Diego Padres at Los Angeles Dodgers | Scheduled | JP Sears | Emmet Sheehan |  |
| Boston Red Sox at Los Angeles Angels | Scheduled | Ranger Suarez | Ryan Johnson |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| New York Mets at Atlanta Braves | 2026-07-05T16:30:00Z | Atlanta Braves -105, New York Mets -114 |
| Pittsburgh Pirates at Washington Nationals | 2026-07-05T17:01:00Z | Pittsburgh Pirates +119, Washington Nationals -144 |
| Baltimore Orioles at Cincinnati Reds | 2026-07-05T17:05:00Z | Baltimore Orioles -118, Cincinnati Reds -102 |
| Minnesota Twins at New York Yankees | 2026-07-05T17:35:00Z | Minnesota Twins +109, New York Yankees -131 |
| Chicago White Sox at Cleveland Guardians | 2026-07-05T18:00:00Z | Chicago White Sox +114, Cleveland Guardians -137 |
| St. Louis Cardinals at Chicago Cubs | 2026-07-05T18:30:00Z | Chicago Cubs -144, St. Louis Cardinals +119 |
| Philadelphia Phillies at Kansas City Royals | 2026-07-05T19:01:00Z | Kansas City Royals +119, Philadelphia Phillies -143 |
| Detroit Tigers at Texas Rangers | 2026-07-05T19:31:00Z | Detroit Tigers -125, Texas Rangers +104 |
| Tampa Bay Rays at Houston Astros | 2026-07-05T19:31:00Z | Houston Astros -118, Tampa Bay Rays -102 |
| Milwaukee Brewers at Arizona Diamondbacks | 2026-07-05T20:00:00Z | Arizona Diamondbacks +101, Milwaukee Brewers -122 |
| San Francisco Giants at Colorado Rockies | 2026-07-05T20:00:00Z | Colorado Rockies -101, San Francisco Giants -120 |
| Miami Marlins at Athletics | 2026-07-05T20:31:00Z | Athletics -120, Miami Marlins +100 |
| Toronto Blue Jays at Seattle Mariners | 2026-07-05T21:00:00Z | Seattle Mariners -131, Toronto Blue Jays +109 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-05T23:21:00Z | Los Angeles Dodgers -219, San Diego Padres +178 |
| Boston Red Sox at Los Angeles Angels | 2026-07-06T01:31:00Z | Boston Red Sox -163, Los Angeles Angels +135 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Norway at Brazil | 2026-07-05T20:00:00Z | Brazil -130, Norway +350, Draw +275 |
| England at Mexico | 2026-07-06T00:00:00Z | England +145, Mexico +210, Draw +215 |
| Spain at Portugal | 2026-07-06T19:00:00Z | Portugal +280, Spain -105, Draw +265 |
| Belgium at USA | 2026-07-07T00:00:00Z | Belgium +170, USA +160, Draw +230 |
| Egypt at Argentina | 2026-07-07T16:00:00Z | Argentina -260, Egypt +750, Draw +360 |
| Colombia at Switzerland | 2026-07-07T20:00:00Z | Colombia +130, Switzerland +240, Draw +210 |
| Morocco at France | 2026-07-09T20:00:00Z | France -175, Morocco +500, Draw +285 |

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

- `data/daily/2026-07-05/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-05.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
