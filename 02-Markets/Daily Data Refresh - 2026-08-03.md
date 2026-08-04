# Daily Data Refresh - 2026-08-03

Generated: 2026-08-03T23:47:25.726Z

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

- **High MLB Market move** — Washington Nationals at Philadelphia Phillies: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — St. Louis Cardinals at New York Yankees: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Pittsburgh Pirates at Milwaukee Brewers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium MLB Market move** — San Francisco Giants at Texas Rangers: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.
- **Medium MLB Market move** — Tampa Bay Rays at Colorado Rockies: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.
- **Medium MLB Market move** — San Diego Padres at Arizona Diamondbacks: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Washington Nationals at Philadelphia Phillies | In Progress | Andrew Alvarez | Aaron Nola | 3-0 |
| St. Louis Cardinals at New York Yankees | In Progress | Michael McGreevy | Cam Schlittler | 3-0 |
| Pittsburgh Pirates at Milwaukee Brewers | In Progress | Bubba Chandler | Brandon Sproat | 0-0 |
| Los Angeles Dodgers at Chicago Cubs | Warmup | Justin Wrobleski | Matthew Boyd | 0-0 |
| San Francisco Giants at Texas Rangers | Warmup | Logan Webb | Cal Quantrill | 0-0 |
| Toronto Blue Jays at Houston Astros | Pre-Game | Shane Bieber | Cristian Javier | 0-0 |
| Tampa Bay Rays at Colorado Rockies | Pre-Game | Ian Seymour | Michael Lorenzen | 0-0 |
| San Diego Padres at Arizona Diamondbacks | Pre-Game | Michael King | Brandon Pfaadt | 0-0 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Washington Nationals at Philadelphia Phillies | 2026-08-03T22:41:00Z | Philadelphia Phillies +275, Washington Nationals -393 |
| St. Louis Cardinals at New York Yankees | 2026-08-03T23:06:00Z | New York Yankees +218, St. Louis Cardinals -299 |
| Pittsburgh Pirates at Milwaukee Brewers | 2026-08-03T23:41:00Z | Milwaukee Brewers -183, Pittsburgh Pirates +139 |
| Los Angeles Dodgers at Chicago Cubs | 2026-08-04T00:06:00Z | Chicago Cubs +105, Los Angeles Dodgers -126 |
| San Francisco Giants at Texas Rangers | 2026-08-04T00:06:00Z | San Francisco Giants +113, Texas Rangers -136 |
| Toronto Blue Jays at Houston Astros | 2026-08-04T00:10:00Z | Houston Astros -156, Toronto Blue Jays +129 |
| Tampa Bay Rays at Colorado Rockies | 2026-08-04T00:41:00Z | Colorado Rockies +153, Tampa Bay Rays -186 |
| San Diego Padres at Arizona Diamondbacks | 2026-08-04T01:41:00Z | Arizona Diamondbacks -114, San Diego Padres -105 |
| Los Angeles Angels at Baltimore Orioles | 2026-08-04T22:36:00Z | none |
| Athletics at Cincinnati Reds | 2026-08-04T22:40:00Z | Athletics +118, Cincinnati Reds -142 |
| New York Mets at Cleveland Guardians | 2026-08-04T22:40:00Z | Cleveland Guardians -142, New York Mets +118 |
| Washington Nationals at Philadelphia Phillies | 2026-08-04T22:40:00Z | Philadelphia Phillies -229, Washington Nationals +186 |
| St. Louis Cardinals at New York Yankees | 2026-08-04T23:06:00Z | none |
| Chicago White Sox at Boston Red Sox | 2026-08-04T23:11:00Z | none |
| Miami Marlins at Atlanta Braves | 2026-08-04T23:16:00Z | none |
| Pittsburgh Pirates at Milwaukee Brewers | 2026-08-04T23:40:00Z | Milwaukee Brewers -164, Pittsburgh Pirates +136 |
| Minnesota Twins at Kansas City Royals | 2026-08-04T23:41:00Z | Kansas City Royals +123, Minnesota Twins -149 |
| Los Angeles Dodgers at Chicago Cubs | 2026-08-05T00:06:00Z | Chicago Cubs +168, Los Angeles Dodgers -205 |
| San Francisco Giants at Texas Rangers | 2026-08-05T00:06:00Z | none |
| Toronto Blue Jays at Houston Astros | 2026-08-05T00:10:00Z | Houston Astros -131, Toronto Blue Jays +109 |
| Tampa Bay Rays at Colorado Rockies | 2026-08-05T00:41:00Z | none |
| San Diego Padres at Arizona Diamondbacks | 2026-08-05T01:41:00Z | none |
| Detroit Tigers at Seattle Mariners | 2026-08-05T01:41:00Z | none |

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

- `data/daily/2026-08-03/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-08-03.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
