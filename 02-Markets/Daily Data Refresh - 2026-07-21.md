# Daily Data Refresh - 2026-07-21

Generated: 2026-07-22T03:49:09.691Z

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

- **High MLB Market move** — St. Louis Cardinals at Los Angeles Angels: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Athletics at Arizona Diamondbacks: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Cincinnati Reds at Seattle Mariners: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Pittsburgh Pirates at New York Yankees: Game status is Postponed. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Baltimore Orioles at Boston Red Sox: Game status is Postponed. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Minnesota Twins at Cleveland Guardians | Final | Kendry Rojas | Parker Messick | 2-5 |
| Los Angeles Dodgers at Philadelphia Phillies | Final | Justin Wrobleski | Zack Wheeler | 2-1 |
| Tampa Bay Rays at Toronto Blue Jays | Final | Drew Rasmussen | Kevin Gausman | 12-2 |
| San Diego Padres at Atlanta Braves | Final | Walker Buehler | Reynaldo López | 8-3 |
| San Francisco Giants at Kansas City Royals | Final | Tyler Mahle | Luinder Avila | 2-3 |
| New York Mets at Milwaukee Brewers | Final | Zac Thornton | Brandon Sproat | 4-0 |
| Detroit Tigers at Chicago Cubs | Final | Framber Valdez | David Peterson | 2-11 |
| Chicago White Sox at Texas Rangers | Final | Noah Schultz | Kumar Rocker | 0-10 |
| Miami Marlins at Houston Astros | Final | Tyler Phillips | Tatsuya Imai | 3-5 |
| Washington Nationals at Colorado Rockies | Final | Carson Palmquist | Michael Lorenzen | 7-8 |
| St. Louis Cardinals at Los Angeles Angels | In Progress | Matthew Liberatore | Walbert Ureña | 1-5 |
| Athletics at Arizona Diamondbacks | In Progress | Jack Perkins | Kohl Drake | 1-4 |
| Cincinnati Reds at Seattle Mariners | In Progress | Chase Burns | Luis Castillo | 3-1 |
| Pittsburgh Pirates at New York Yankees | Postponed | Bubba Chandler | Will Warren |  |
| Baltimore Orioles at Boston Red Sox | Postponed | Kyle Bradish | Eduardo Rivera |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-22T01:39:00Z | none |
| Athletics at Arizona Diamondbacks | 2026-07-22T01:41:00Z | Arizona Diamondbacks -8400, Athletics +1220 |
| Cincinnati Reds at Seattle Mariners | 2026-07-22T01:41:00Z | Cincinnati Reds -548, Seattle Mariners +358 |
| Pittsburgh Pirates at New York Yankees | 2026-07-22T17:06:00Z | New York Yankees -162, Pittsburgh Pirates +134 |
| Baltimore Orioles at Boston Red Sox | 2026-07-22T17:36:00Z | Baltimore Orioles +113, Boston Red Sox -136 |
| San Francisco Giants at Kansas City Royals | 2026-07-22T18:11:00Z | Kansas City Royals -102, San Francisco Giants -118 |
| New York Mets at Milwaukee Brewers | 2026-07-22T18:11:00Z | Milwaukee Brewers -149, New York Mets +123 |
| Washington Nationals at Colorado Rockies | 2026-07-22T19:11:00Z | Colorado Rockies +114, Washington Nationals -137 |
| Athletics at Arizona Diamondbacks | 2026-07-22T19:41:00Z | Arizona Diamondbacks -118, Athletics -102 |
| Cincinnati Reds at Seattle Mariners | 2026-07-22T19:41:00Z | Cincinnati Reds +130, Seattle Mariners -157 |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-22T20:08:00Z | Los Angeles Angels -120, St. Louis Cardinals +100 |
| Los Angeles Dodgers at Philadelphia Phillies | 2026-07-22T22:40:00Z | Los Angeles Dodgers -120, Philadelphia Phillies +100 |
| Minnesota Twins at Cleveland Guardians | 2026-07-22T22:41:00Z | Cleveland Guardians -126, Minnesota Twins +104 |
| Pittsburgh Pirates at New York Yankees | 2026-07-22T23:05:00Z | New York Yankees -172, Pittsburgh Pirates +142 |
| Tampa Bay Rays at Toronto Blue Jays | 2026-07-22T23:08:00Z | none |
| Baltimore Orioles at Boston Red Sox | 2026-07-22T23:10:00Z | Baltimore Orioles +123, Boston Red Sox -149 |
| San Diego Padres at Atlanta Braves | 2026-07-22T23:16:00Z | Atlanta Braves -120, San Diego Padres +100 |
| Detroit Tigers at Chicago Cubs | 2026-07-23T00:06:00Z | Chicago Cubs -117, Detroit Tigers -103 |
| Chicago White Sox at Texas Rangers | 2026-07-23T00:06:00Z | Chicago White Sox -105, Texas Rangers -115 |
| Miami Marlins at Houston Astros | 2026-07-23T00:11:00Z | Houston Astros -118, Miami Marlins -102 |

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
