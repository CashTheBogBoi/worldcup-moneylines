# Daily Data Refresh - 2026-07-17

Generated: 2026-07-18T03:58:14.323Z

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

- **High MLB Market move** — Detroit Tigers at Los Angeles Angels: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Washington Nationals at Athletics: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — St. Louis Cardinals at Arizona Diamondbacks: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — San Francisco Giants at Seattle Mariners: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Pittsburgh Pirates at Cleveland Guardians: Game status is Postponed. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium Soccer Market move** — Argentina at Spain: Draw price is +200, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Tampa Bay Rays at Boston Red Sox | Final | Griffin Jax | Jake Bennett | 0-10 |
| Tampa Bay Rays at Boston Red Sox | Final | Mason Englert | Eduardo Rivera | 3-5 |
| Los Angeles Dodgers at New York Yankees | Final | Roki Sasaki | Gerrit Cole | 2-1 |
| Texas Rangers at Atlanta Braves | Final | Cal Quantrill | Chris Sale | 1-15 |
| Chicago White Sox at Toronto Blue Jays | Final | Anthony Kay | Spencer Miles | 12-4 |
| Miami Marlins at Milwaukee Brewers | Final | Sandy Alcantara | Logan Henderson | 1-2 |
| Minnesota Twins at Chicago Cubs | Final | Bailey Ober | Colin Rea | 5-2 |
| Baltimore Orioles at Houston Astros | Final | Dean Kremer | Peter Lambert | 3-2 |
| San Diego Padres at Kansas City Royals | Final | Michael King | Seth Lugo | 6-7 |
| Cincinnati Reds at Colorado Rockies | Final | Brady Singer | Gabriel Hughes | 7-2 |
| Detroit Tigers at Los Angeles Angels | In Progress | Troy Melton | Reid Detmers | 0-1 |
| Washington Nationals at Athletics | In Progress | Cade Cavalli | Gage Jump | 14-2 |
| St. Louis Cardinals at Arizona Diamondbacks | In Progress | Michael McGreevy | Merrill Kelly | 4-2 |
| San Francisco Giants at Seattle Mariners | In Progress | Landen Roupp | Bryce Miller | 3-0 |
| Pittsburgh Pirates at Cleveland Guardians | Postponed | Jared Jones | Gavin Williams |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Detroit Tigers at Los Angeles Angels | 2026-07-18T01:39:00Z | Detroit Tigers +276, Los Angeles Angels -396 |
| St. Louis Cardinals at Arizona Diamondbacks | 2026-07-18T01:41:00Z | Arizona Diamondbacks +431, St. Louis Cardinals -710 |
| Washington Nationals at Athletics | 2026-07-18T01:41:00Z | none |
| San Francisco Giants at Seattle Mariners | 2026-07-18T02:11:00Z | San Francisco Giants -1000, Seattle Mariners +546 |
| Pittsburgh Pirates at Cleveland Guardians | 2026-07-18T17:11:00Z | Cleveland Guardians -131, Pittsburgh Pirates +109 |
| Minnesota Twins at Chicago Cubs | 2026-07-18T18:21:00Z | Chicago Cubs -143, Minnesota Twins +119 |
| Chicago White Sox at Toronto Blue Jays | 2026-07-18T19:08:00Z | Chicago White Sox -118, Toronto Blue Jays -102 |
| Cincinnati Reds at Colorado Rockies | 2026-07-18T19:11:00Z | none |
| New York Mets at Philadelphia Phillies | 2026-07-18T20:06:00Z | New York Mets +138, Philadelphia Phillies -167 |
| St. Louis Cardinals at Arizona Diamondbacks | 2026-07-18T20:11:00Z | Arizona Diamondbacks -120, St. Louis Cardinals +100 |
| Texas Rangers at Atlanta Braves | 2026-07-18T20:11:00Z | Atlanta Braves -117, Texas Rangers -103 |
| Baltimore Orioles at Houston Astros | 2026-07-18T20:11:00Z | Baltimore Orioles -110, Houston Astros -110 |
| Tampa Bay Rays at Boston Red Sox | 2026-07-18T20:11:00Z | Boston Red Sox -120, Tampa Bay Rays -101 |
| San Diego Padres at Kansas City Royals | 2026-07-18T20:11:00Z | none |
| Miami Marlins at Milwaukee Brewers | 2026-07-18T20:11:00Z | Miami Marlins +112, Milwaukee Brewers -135 |
| Pittsburgh Pirates at Cleveland Guardians | 2026-07-18T23:10:00Z | Cleveland Guardians -108, Pittsburgh Pirates -112 |
| Los Angeles Dodgers at New York Yankees | 2026-07-19T00:09:00Z | Los Angeles Dodgers -114, New York Yankees -106 |
| San Francisco Giants at Seattle Mariners | 2026-07-19T00:09:00Z | San Francisco Giants +112, Seattle Mariners -135 |
| Washington Nationals at Athletics | 2026-07-19T02:06:00Z | Athletics -130, Washington Nationals +108 |
| Detroit Tigers at Los Angeles Angels | 2026-07-19T02:08:00Z | Detroit Tigers -192, Los Angeles Angels +157 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| England at France | 2026-07-18T21:00:00Z | England +270, France -110, Draw +285 |
| Argentina at Spain | 2026-07-19T19:00:00Z | Argentina +255, Spain +125, Draw +200 |

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

- `data/daily/2026-07-17/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-17.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
