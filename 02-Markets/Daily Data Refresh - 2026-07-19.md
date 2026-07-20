# Daily Data Refresh - 2026-07-19

Generated: 2026-07-20T00:53:51.753Z

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

- **High MLB Market move** — Los Angeles Dodgers at New York Yankees: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Chicago White Sox at Toronto Blue Jays | Final | Sean Burke | Trey Yesavage | 3-0 |
| Los Angeles Dodgers at New York Yankees | Final | Yoshinobu Yamamoto | Cam Schlittler | 8-2 |
| Los Angeles Dodgers at New York Yankees | In Progress | Will Klein | Ryan Yarbrough | 0-1 |
| Tampa Bay Rays at Boston Red Sox | Final | Shane McClanahan | Sonny Gray | 1-6 |
| New York Mets at Philadelphia Phillies | Final | Nolan McLean | Alan Rangel | 6-1 |
| Texas Rangers at Atlanta Braves | Final | Nathan Eovaldi | Grant Holmes | 5-8 |
| Pittsburgh Pirates at Cleveland Guardians | Final | Paul Skenes | Joey Cantillo | 7-1 |
| Baltimore Orioles at Houston Astros | Final | Brandon Young | Hunter Brown | 5-2 |
| San Diego Padres at Kansas City Royals | Final | Germán Márquez | Noah Cameron | 19-2 |
| Miami Marlins at Milwaukee Brewers | Final | Eury Pérez | Robert Gasser | 1-3 |
| Minnesota Twins at Chicago Cubs | Final | Zebby Matthews | Shota Imanaga | 1-10 |
| Cincinnati Reds at Colorado Rockies | Final | Hunter Greene | Ryan Feltner | 9-6 |
| Washington Nationals at Athletics | Final | Foster Griffin | Jacob Lopez | 5-2 |
| Detroit Tigers at Los Angeles Angels | Final | Casey Mize | Ryan Johnson | 2-3 |
| San Francisco Giants at Seattle Mariners | Final | Robbie Ray | Logan Gilbert | 3-6 |
| St. Louis Cardinals at Arizona Diamondbacks | Final | Andre Pallante | Eduardo Rodriguez | 7-8 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Los Angeles Dodgers at New York Yankees | 2026-07-19T23:21:00Z | Los Angeles Dodgers +307, New York Yankees -451 |
| Minnesota Twins at Cleveland Guardians | 2026-07-20T22:41:00Z | Cleveland Guardians +100, Minnesota Twins -120 |
| Pittsburgh Pirates at New York Yankees | 2026-07-20T23:06:00Z | New York Yankees -123, Pittsburgh Pirates +102 |
| Tampa Bay Rays at Toronto Blue Jays | 2026-07-20T23:08:00Z | Tampa Bay Rays +118, Toronto Blue Jays -142 |
| Baltimore Orioles at Boston Red Sox | 2026-07-20T23:11:00Z | Baltimore Orioles +118, Boston Red Sox -142 |
| Los Angeles Dodgers at Philadelphia Phillies | 2026-07-20T23:11:00Z | Los Angeles Dodgers +118, Philadelphia Phillies -142 |
| San Diego Padres at Atlanta Braves | 2026-07-20T23:16:00Z | Atlanta Braves -156, San Diego Padres +129 |
| San Francisco Giants at Kansas City Royals | 2026-07-20T23:41:00Z | Kansas City Royals -115, San Francisco Giants -104 |
| New York Mets at Milwaukee Brewers | 2026-07-20T23:41:00Z | Milwaukee Brewers -193, New York Mets +158 |
| Detroit Tigers at Chicago Cubs | 2026-07-21T00:06:00Z | Chicago Cubs -117, Detroit Tigers -103 |
| Chicago White Sox at Texas Rangers | 2026-07-21T00:06:00Z | Chicago White Sox +144, Texas Rangers -175 |
| Miami Marlins at Houston Astros | 2026-07-21T00:11:00Z | Houston Astros -136, Miami Marlins +113 |
| Washington Nationals at Colorado Rockies | 2026-07-21T00:41:00Z | Colorado Rockies +100, Washington Nationals -120 |
| Athletics at Arizona Diamondbacks | 2026-07-21T01:41:00Z | Arizona Diamondbacks -163, Athletics +135 |
| Cincinnati Reds at Seattle Mariners | 2026-07-21T01:41:00Z | Cincinnati Reds +129, Seattle Mariners -156 |
| St. Louis Cardinals at Los Angeles Angels | 2026-07-21T02:11:00Z | Los Angeles Angels -120, St. Louis Cardinals +100 |

## DraftKings Soccer odds snapshot

_No rows returned._

## FIFA men's ranking model input

Source: https://inside.fifa.com/fifa-world-ranking/men

- Last official update shown by FIFA: 2026-06-11T10:00:59.636Z
- Next official update shown by FIFA: unknown
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
