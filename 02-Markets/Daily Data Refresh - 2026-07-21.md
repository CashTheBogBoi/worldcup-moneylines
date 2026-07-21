# Daily Data Refresh - 2026-07-21

Generated: 2026-07-21T22:06:09.142Z

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

- **High MLB Market move** — Pittsburgh Pirates at New York Yankees: Game status is Postponed. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Baltimore Orioles at Boston Red Sox: Game status is Postponed. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Minnesota Twins at Cleveland Guardians | Pre-Game | Kendry Rojas | Parker Messick | 0-0 |
| Los Angeles Dodgers at Philadelphia Phillies | Pre-Game | Justin Wrobleski | Zack Wheeler | 0-0 |
| Tampa Bay Rays at Toronto Blue Jays | Pre-Game | Drew Rasmussen | Kevin Gausman | 0-0 |
| San Diego Padres at Atlanta Braves | Pre-Game | Walker Buehler | Reynaldo López | 0-0 |
| San Francisco Giants at Kansas City Royals | Pre-Game | Tyler Mahle | Luinder Avila | 0-0 |
| New York Mets at Milwaukee Brewers | Pre-Game | Zac Thornton | Brandon Sproat | 0-0 |
| Detroit Tigers at Chicago Cubs | Pre-Game | Framber Valdez | David Peterson | 0-0 |
| Chicago White Sox at Texas Rangers | Pre-Game | Noah Schultz | Kumar Rocker | 0-0 |
| Miami Marlins at Houston Astros | Pre-Game | Tyler Phillips | Tatsuya Imai | 0-0 |
| Washington Nationals at Colorado Rockies | Pre-Game | Carson Palmquist | Michael Lorenzen | 0-0 |
| St. Louis Cardinals at Los Angeles Angels | Pre-Game | Matthew Liberatore | Walbert Ureña | 0-0 |
| Athletics at Arizona Diamondbacks | Pre-Game | Jack Perkins | Kohl Drake |  |
| Cincinnati Reds at Seattle Mariners | Pre-Game | Chase Burns | Luis Castillo |  |
| Pittsburgh Pirates at New York Yankees | Postponed | Bubba Chandler | Will Warren |  |
| Baltimore Orioles at Boston Red Sox | Postponed | Kyle Bradish | Eduardo Rivera |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Minnesota Twins at Cleveland Guardians | 2026-07-21T22:41:00Z | Cleveland Guardians -156, Minnesota Twins +129 |
| Tampa Bay Rays at Toronto Blue Jays | 2026-07-21T23:08:00Z | Tampa Bay Rays -108, Toronto Blue Jays -111 |
| Los Angeles Dodgers at Philadelphia Phillies | 2026-07-21T23:11:00Z | Los Angeles Dodgers +100, Philadelphia Phillies -120 |
| San Diego Padres at Atlanta Braves | 2026-07-21T23:16:00Z | Atlanta Braves -149, San Diego Padres +123 |
| San Francisco Giants at Kansas City Royals | 2026-07-21T23:41:00Z | Kansas City Royals -110, San Francisco Giants -110 |
| New York Mets at Milwaukee Brewers | 2026-07-21T23:41:00Z | Milwaukee Brewers -141, New York Mets +117 |
| Detroit Tigers at Chicago Cubs | 2026-07-22T00:06:00Z | Chicago Cubs -122, Detroit Tigers +101 |
| Chicago White Sox at Texas Rangers | 2026-07-22T00:06:00Z | Chicago White Sox -103, Texas Rangers -117 |
| Miami Marlins at Houston Astros | 2026-07-22T00:11:00Z | Houston Astros -126, Miami Marlins +105 |
| Washington Nationals at Colorado Rockies | 2026-07-22T00:41:00Z | Colorado Rockies -106, Washington Nationals -114 |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-22T01:39:00Z | Los Angeles Angels -109, St. Louis Cardinals -111 |
| Athletics at Arizona Diamondbacks | 2026-07-22T01:41:00Z | Arizona Diamondbacks -137, Athletics +114 |
| Cincinnati Reds at Seattle Mariners | 2026-07-22T01:41:00Z | Cincinnati Reds +101, Seattle Mariners -121 |
| San Francisco Giants at Kansas City Royals | 2026-07-22T18:11:00Z | Kansas City Royals -110, San Francisco Giants -110 |
| New York Mets at Milwaukee Brewers | 2026-07-22T18:11:00Z | Milwaukee Brewers -149, New York Mets +123 |
| Washington Nationals at Colorado Rockies | 2026-07-22T19:11:00Z | Colorado Rockies +114, Washington Nationals -137 |
| Athletics at Arizona Diamondbacks | 2026-07-22T19:41:00Z | Arizona Diamondbacks -118, Athletics -102 |
| Cincinnati Reds at Seattle Mariners | 2026-07-22T19:41:00Z | Cincinnati Reds +130, Seattle Mariners -157 |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-22T20:08:00Z | Los Angeles Angels -120, St. Louis Cardinals +100 |
| Minnesota Twins at Cleveland Guardians | 2026-07-22T22:41:00Z | Cleveland Guardians -126, Minnesota Twins +104 |
| Los Angeles Dodgers at Philadelphia Phillies | 2026-07-22T22:41:00Z | Los Angeles Dodgers -110, Philadelphia Phillies -110 |
| Detroit Tigers at Chicago Cubs | 2026-07-23T00:06:00Z | Chicago Cubs -115, Detroit Tigers -105 |
| Chicago White Sox at Texas Rangers | 2026-07-23T00:06:00Z | Chicago White Sox -105, Texas Rangers -115 |
| Miami Marlins at Houston Astros | 2026-07-23T00:11:00Z | Houston Astros -120, Miami Marlins +100 |

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

- `data/daily/2026-07-21/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-21.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
