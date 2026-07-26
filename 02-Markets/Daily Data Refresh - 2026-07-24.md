# Daily Data Refresh - 2026-07-24

Generated: 2026-07-25T03:46:24.829Z

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

- **High MLB Market move** — Los Angeles Angels at San Francisco Giants: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Colorado Rockies at Milwaukee Brewers | Final | Tomoyuki Sugano | Shane Drohan | 5-2 |
| Kansas City Royals at Detroit Tigers | Final | Beck Way | Tarik Skubal | 1-2 |
| Chicago Cubs at Pittsburgh Pirates | Final | Matthew Boyd | Jared Jones | 3-2 |
| Arizona Diamondbacks at Washington Nationals | Final | Eduardo Rodriguez | Carson Palmquist | 3-2 |
| New York Yankees at Philadelphia Phillies | Final | Cam Schlittler | Jesús Luzardo | 1-0 |
| Atlanta Braves at Baltimore Orioles | Final | Grant Holmes | Trevor Rogers | 7-6 |
| Los Angeles Dodgers at New York Mets | Final | Roki Sasaki | Sean Manaea | 4-2 |
| Cleveland Guardians at Tampa Bay Rays | Final | Joey Cantillo | Shane McClanahan | 3-11 |
| San Diego Padres at Miami Marlins | Final | Germán Márquez | Ryan Gusto | 4-2 |
| Toronto Blue Jays at Boston Red Sox | Final | Trey Yesavage | Patrick Sandoval | 4-6 |
| Houston Astros at Chicago White Sox | Final | Spencer Arrighetti | Davis Martin | 9-5 |
| Seattle Mariners at Texas Rangers | Final | Bryce Miller | MacKenzie Gore | 4-5 |
| Athletics at Minnesota Twins | Final | Jacob Lopez | Zebby Matthews | 2-0 |
| Cincinnati Reds at St. Louis Cardinals | Final | Rhett Lowder | Dustin May | 4-2 |
| Los Angeles Angels at San Francisco Giants | In Progress | Grayson Rodriguez | Logan Webb | 4-5 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Los Angeles Angels at San Francisco Giants | 2026-07-25T02:16:00Z | Los Angeles Angels +311, San Francisco Giants -459 |
| Kansas City Royals at Detroit Tigers | 2026-07-25T17:11:00Z | Detroit Tigers -181, Kansas City Royals +149 |
| Arizona Diamondbacks at Washington Nationals | 2026-07-25T20:06:00Z | Arizona Diamondbacks +114, Washington Nationals -137 |
| Los Angeles Angels at San Francisco Giants | 2026-07-25T20:06:00Z | Los Angeles Angels +108, San Francisco Giants -130 |
| Toronto Blue Jays at Boston Red Sox | 2026-07-25T20:11:00Z | Boston Red Sox -120, Toronto Blue Jays +100 |
| San Diego Padres at Miami Marlins | 2026-07-25T20:11:00Z | Miami Marlins -136, San Diego Padres +113 |
| New York Yankees at Philadelphia Phillies | 2026-07-25T22:06:00Z | New York Yankees -118, Philadelphia Phillies -102 |
| Cleveland Guardians at Tampa Bay Rays | 2026-07-25T22:11:00Z | Cleveland Guardians +111, Tampa Bay Rays -134 |
| Chicago Cubs at Pittsburgh Pirates | 2026-07-25T22:41:00Z | Chicago Cubs +113, Pittsburgh Pirates -136 |
| Atlanta Braves at Baltimore Orioles | 2026-07-25T23:06:00Z | Atlanta Braves -108, Baltimore Orioles -112 |
| Athletics at Minnesota Twins | 2026-07-25T23:11:00Z | Athletics +139, Minnesota Twins -168 |
| Houston Astros at Chicago White Sox | 2026-07-25T23:11:00Z | Chicago White Sox -126, Houston Astros +104 |
| Colorado Rockies at Milwaukee Brewers | 2026-07-25T23:11:00Z | Colorado Rockies +183, Milwaukee Brewers -224 |
| Cincinnati Reds at St. Louis Cardinals | 2026-07-25T23:16:00Z | Cincinnati Reds +102, St. Louis Cardinals -123 |
| Los Angeles Dodgers at New York Mets | 2026-07-25T23:16:00Z | Los Angeles Dodgers -163, New York Mets +135 |
| Seattle Mariners at Texas Rangers | 2026-07-25T23:16:00Z | Seattle Mariners -111, Texas Rangers -108 |

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

- `data/daily/2026-07-24/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-24.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
