# Daily Data Refresh - 2026-07-16

Generated: 2026-07-17T03:56:23.012Z

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

- **Medium Soccer Market move** — Argentina at Spain: Draw price is +195, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| New York Mets at Philadelphia Phillies | Final | Christian Scott | Aaron Nola | 4-1 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Tampa Bay Rays at Boston Red Sox | 2026-07-17T17:36:00Z | Boston Red Sox -126, Tampa Bay Rays +105 |
| Los Angeles Dodgers at New York Yankees | 2026-07-17T23:06:00Z | Los Angeles Dodgers -115, New York Yankees -105 |
| Pittsburgh Pirates at Cleveland Guardians | 2026-07-17T23:11:00Z | Cleveland Guardians -131, Pittsburgh Pirates +109 |
| Texas Rangers at Atlanta Braves | 2026-07-17T23:16:00Z | Atlanta Braves -206, Texas Rangers +169 |
| Chicago White Sox at Toronto Blue Jays | 2026-07-17T23:16:00Z | Chicago White Sox +113, Toronto Blue Jays -136 |
| Miami Marlins at Milwaukee Brewers | 2026-07-17T23:41:00Z | Miami Marlins +123, Milwaukee Brewers -149 |
| Minnesota Twins at Chicago Cubs | 2026-07-18T00:06:00Z | Chicago Cubs -137, Minnesota Twins +114 |
| Baltimore Orioles at Houston Astros | 2026-07-18T00:11:00Z | Baltimore Orioles -106, Houston Astros -113 |
| San Diego Padres at Kansas City Royals | 2026-07-18T00:11:00Z | Kansas City Royals -107, San Diego Padres -112 |
| Cincinnati Reds at Colorado Rockies | 2026-07-18T00:41:00Z | Cincinnati Reds -105, Colorado Rockies -114 |
| Detroit Tigers at Los Angeles Angels | 2026-07-18T01:39:00Z | Detroit Tigers -110, Los Angeles Angels -110 |
| St. Louis Cardinals at Arizona Diamondbacks | 2026-07-18T01:41:00Z | none |
| Washington Nationals at Athletics | 2026-07-18T01:41:00Z | Athletics -111, Washington Nationals -108 |
| San Francisco Giants at Seattle Mariners | 2026-07-18T02:11:00Z | San Francisco Giants +130, Seattle Mariners -157 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| England at France | 2026-07-18T21:00:00Z | England +270, France -110, Draw +285 |
| Argentina at Spain | 2026-07-19T19:00:00Z | Argentina +255, Spain +130, Draw +195 |

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

- `data/daily/2026-07-16/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-16.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
