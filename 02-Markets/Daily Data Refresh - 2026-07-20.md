# Daily Data Refresh - 2026-07-20

Generated: 2026-07-21T03:57:49.821Z

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

- **High MLB Market move** — Detroit Tigers at Chicago Cubs: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Athletics at Arizona Diamondbacks: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Cincinnati Reds at Seattle Mariners: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — St. Louis Cardinals at Los Angeles Angels: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Minnesota Twins at Cleveland Guardians | Final | Joe Ryan | Tanner Bibee | 4-13 |
| Pittsburgh Pirates at New York Yankees | Final | Braxton Ashcraft | Ryan Weathers | 5-8 |
| Tampa Bay Rays at Toronto Blue Jays | Final | Nick Martinez | Dylan Cease | 7-1 |
| Baltimore Orioles at Boston Red Sox | Final | Shane Baz | Payton Tolle | 5-6 |
| Los Angeles Dodgers at Philadelphia Phillies | Final | Emmet Sheehan | Cristopher Sánchez | 7-10 |
| San Diego Padres at Atlanta Braves | Final | JP Sears | Bryce Elder | 2-3 |
| San Francisco Giants at Kansas City Royals | Final | Trevor McDonald | Michael Wacha | 3-4 |
| New York Mets at Milwaukee Brewers | Final | Freddy Peralta | Jacob Misiorowski | 3-8 |
| Detroit Tigers at Chicago Cubs | In Progress | Jack Flaherty | Jameson Taillon | 8-5 |
| Chicago White Sox at Texas Rangers | Final | Erick Fedde | Jacob deGrom | 10-3 |
| Miami Marlins at Houston Astros | Final | Janson Junk | Ronel Blanco | 5-8 |
| Washington Nationals at Colorado Rockies | Final | Andrew Alvarez | Kyle Freeland | 7-3 |
| Athletics at Arizona Diamondbacks | In Progress | Jeffrey Springs | Mitch Bratt | 2-2 |
| Cincinnati Reds at Seattle Mariners | In Progress | Andrew Abbott | George Kirby | 0-7 |
| St. Louis Cardinals at Los Angeles Angels | In Progress | Kyle Leahy | José Soriano | 2-1 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Detroit Tigers at Chicago Cubs | 2026-07-21T00:35:00Z | Chicago Cubs +790, Detroit Tigers -1960 |
| Athletics at Arizona Diamondbacks | 2026-07-21T01:41:00Z | Arizona Diamondbacks -111, Athletics -117 |
| Cincinnati Reds at Seattle Mariners | 2026-07-21T01:42:00Z | none |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-21T02:11:00Z | Los Angeles Angels +139, St. Louis Cardinals -183 |
| Minnesota Twins at Cleveland Guardians | 2026-07-21T22:41:00Z | Cleveland Guardians -156, Minnesota Twins +129 |
| Los Angeles Dodgers at Philadelphia Phillies | 2026-07-21T22:41:00Z | Los Angeles Dodgers +113, Philadelphia Phillies -136 |
| Pittsburgh Pirates at New York Yankees | 2026-07-21T23:06:00Z | New York Yankees -149, Pittsburgh Pirates +123 |
| Tampa Bay Rays at Toronto Blue Jays | 2026-07-21T23:08:00Z | Tampa Bay Rays -115, Toronto Blue Jays -105 |
| Baltimore Orioles at Boston Red Sox | 2026-07-21T23:11:00Z | Baltimore Orioles +113, Boston Red Sox -136 |
| San Diego Padres at Atlanta Braves | 2026-07-21T23:16:00Z | Atlanta Braves -145, San Diego Padres +120 |
| San Francisco Giants at Kansas City Royals | 2026-07-21T23:41:00Z | Kansas City Royals -109, San Francisco Giants -111 |
| New York Mets at Milwaukee Brewers | 2026-07-21T23:41:00Z | Milwaukee Brewers -149, New York Mets +123 |
| Detroit Tigers at Chicago Cubs | 2026-07-22T00:06:00Z | Chicago Cubs -117, Detroit Tigers -103 |
| Miami Marlins at Houston Astros | 2026-07-22T00:11:00Z | Houston Astros -126, Miami Marlins +105 |
| Washington Nationals at Colorado Rockies | 2026-07-22T00:41:00Z | Colorado Rockies -114, Washington Nationals -106 |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-22T01:39:00Z | Los Angeles Angels -105, St. Louis Cardinals -114 |
| Cincinnati Reds at Seattle Mariners | 2026-07-22T01:41:00Z | Cincinnati Reds -106, Seattle Mariners -114 |

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

- `data/daily/2026-07-20/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-20.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
