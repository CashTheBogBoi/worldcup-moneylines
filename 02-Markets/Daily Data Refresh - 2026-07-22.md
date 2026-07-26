# Daily Data Refresh - 2026-07-22

Generated: 2026-07-23T03:52:24.024Z

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

_No automated high-priority intel flags from the current snapshot._

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Pittsburgh Pirates at New York Yankees | Final | Mitch Keller | Gerrit Cole | 5-3 |
| Pittsburgh Pirates at New York Yankees | Final | Bubba Chandler | Max Fried | 0-2 |
| Baltimore Orioles at Boston Red Sox | Final | Dean Kremer | Jake Bennett | 3-6 |
| Baltimore Orioles at Boston Red Sox | Final | Kyle Bradish | Eduardo Rivera | 5-1 |
| San Francisco Giants at Kansas City Royals | Final | Landen Roupp | Seth Lugo | 4-5 |
| New York Mets at Milwaukee Brewers | Final | Christian Scott | Logan Henderson | 3-4 |
| Washington Nationals at Colorado Rockies | Final | Cade Cavalli | Gabriel Hughes | 8-0 |
| Athletics at Arizona Diamondbacks | Final | Gage Jump | Merrill Kelly | 5-15 |
| Cincinnati Reds at Seattle Mariners | Final | Brady Singer | Emerson Hancock | 5-3 |
| St. Louis Cardinals at Los Angeles Angels | Final | Hunter Dobbins | Reid Detmers | 1-0 |
| Minnesota Twins at Cleveland Guardians | Final | Bailey Ober | Slade Cecconi | 10-6 |
| Los Angeles Dodgers at Philadelphia Phillies | Final | Eric Lauer | Aaron Nola | 9-5 |
| Tampa Bay Rays at Toronto Blue Jays | Final | Griffin Jax | Braydon Fisher | 4-2 |
| San Diego Padres at Atlanta Braves | Final | Michael King | Martín Pérez | 6-7 |
| Chicago White Sox at Texas Rangers | Final | Anthony Kay | Tyler Alexander | 4-2 |
| Detroit Tigers at Chicago Cubs | Final | Keider Montero | Colin Rea | 5-1 |
| Miami Marlins at Houston Astros | Final | Sandy Alcantara | Peter Lambert | 2-5 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| San Diego Padres at Atlanta Braves | 2026-07-23T16:16:00Z | Atlanta Braves -237, San Diego Padres +192 |
| Minnesota Twins at Cleveland Guardians | 2026-07-23T17:11:00Z | Cleveland Guardians -135, Minnesota Twins +112 |
| Tampa Bay Rays at Toronto Blue Jays | 2026-07-23T19:08:00Z | Tampa Bay Rays -110, Toronto Blue Jays -109 |
| Arizona Diamondbacks at St. Louis Cardinals | 2026-07-23T21:16:00Z | Arizona Diamondbacks +104, St. Louis Cardinals -126 |
| Kansas City Royals at Detroit Tigers | 2026-07-23T22:41:00Z | Detroit Tigers -205, Kansas City Royals +167 |

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

- `data/daily/2026-07-22/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-22.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
