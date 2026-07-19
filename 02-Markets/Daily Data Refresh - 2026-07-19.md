# Daily Data Refresh - 2026-07-19

Generated: 2026-07-19T22:31:33.014Z

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

- **High MLB Market move** — Washington Nationals at Athletics: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Detroit Tigers at Los Angeles Angels: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — San Francisco Giants at Seattle Mariners: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — St. Louis Cardinals at Arizona Diamondbacks: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Chicago White Sox at Toronto Blue Jays | Final | Sean Burke | Trey Yesavage | 3-0 |
| Los Angeles Dodgers at New York Yankees | Final | Yoshinobu Yamamoto | Cam Schlittler | 8-2 |
| Los Angeles Dodgers at New York Yankees | Pre-Game | Will Klein | Ryan Yarbrough | 0-0 |
| Tampa Bay Rays at Boston Red Sox | Final | Shane McClanahan | Sonny Gray | 1-6 |
| New York Mets at Philadelphia Phillies | Final | Nolan McLean | Alan Rangel | 6-1 |
| Texas Rangers at Atlanta Braves | Final | Nathan Eovaldi | Grant Holmes | 5-8 |
| Pittsburgh Pirates at Cleveland Guardians | Final | Paul Skenes | Joey Cantillo | 7-1 |
| Baltimore Orioles at Houston Astros | Final | Brandon Young | Hunter Brown | 5-2 |
| San Diego Padres at Kansas City Royals | Final | Germán Márquez | Noah Cameron | 19-2 |
| Miami Marlins at Milwaukee Brewers | Final | Eury Pérez | Robert Gasser | 1-3 |
| Minnesota Twins at Chicago Cubs | Final | Zebby Matthews | Shota Imanaga | 1-10 |
| Cincinnati Reds at Colorado Rockies | Final | Hunter Greene | Ryan Feltner | 9-6 |
| Washington Nationals at Athletics | In Progress | Foster Griffin | Jacob Lopez | 5-1 |
| Detroit Tigers at Los Angeles Angels | In Progress | Casey Mize | Ryan Johnson | 1-3 |
| San Francisco Giants at Seattle Mariners | In Progress | Robbie Ray | Logan Gilbert | 3-6 |
| St. Louis Cardinals at Arizona Diamondbacks | In Progress | Andre Pallante | Eduardo Rodriguez | 7-3 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Washington Nationals at Athletics | 2026-07-19T20:06:00Z | Athletics +1040, Washington Nationals -4200 |
| Detroit Tigers at Los Angeles Angels | 2026-07-19T20:08:00Z | Detroit Tigers +504, Los Angeles Angels -890 |
| St. Louis Cardinals at Arizona Diamondbacks | 2026-07-19T20:11:00Z | Arizona Diamondbacks +750, St. Louis Cardinals -1780 |
| San Francisco Giants at Seattle Mariners | 2026-07-19T20:11:00Z | none |
| Los Angeles Dodgers at New York Yankees | 2026-07-19T23:21:00Z | Los Angeles Dodgers -135, New York Yankees +112 |
| Minnesota Twins at Cleveland Guardians | 2026-07-20T22:41:00Z | Cleveland Guardians +101, Minnesota Twins -121 |
| Pittsburgh Pirates at New York Yankees | 2026-07-20T23:06:00Z | New York Yankees -121, Pittsburgh Pirates +101 |
| Tampa Bay Rays at Toronto Blue Jays | 2026-07-20T23:08:00Z | Tampa Bay Rays +118, Toronto Blue Jays -142 |
| Baltimore Orioles at Boston Red Sox | 2026-07-20T23:11:00Z | Baltimore Orioles +118, Boston Red Sox -142 |
| Los Angeles Dodgers at Philadelphia Phillies | 2026-07-20T23:11:00Z | Los Angeles Dodgers +118, Philadelphia Phillies -142 |
| San Diego Padres at Atlanta Braves | 2026-07-20T23:16:00Z | Atlanta Braves -157, San Diego Padres +130 |
| San Francisco Giants at Kansas City Royals | 2026-07-20T23:41:00Z | none |
| New York Mets at Milwaukee Brewers | 2026-07-20T23:41:00Z | Milwaukee Brewers -192, New York Mets +157 |
| Detroit Tigers at Chicago Cubs | 2026-07-21T00:06:00Z | Chicago Cubs -113, Detroit Tigers -107 |
| Chicago White Sox at Texas Rangers | 2026-07-21T00:06:00Z | Chicago White Sox +142, Texas Rangers -172 |
| Miami Marlins at Houston Astros | 2026-07-21T00:11:00Z | Houston Astros -142, Miami Marlins +118 |
| Washington Nationals at Colorado Rockies | 2026-07-21T00:41:00Z | none |
| Athletics at Arizona Diamondbacks | 2026-07-21T01:41:00Z | none |
| Cincinnati Reds at Seattle Mariners | 2026-07-21T01:41:00Z | Cincinnati Reds +129, Seattle Mariners -156 |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-21T02:11:00Z | Los Angeles Angels -121, St. Louis Cardinals +101 |

## DraftKings Soccer odds snapshot

_No rows returned._

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

- `data/daily/2026-07-19/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-19.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
