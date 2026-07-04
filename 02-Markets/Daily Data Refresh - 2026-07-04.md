# Daily Data Refresh - 2026-07-04

Generated: 2026-07-04T21:30:05.895Z

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

- **High MLB Market move** — Detroit Tigers at Texas Rangers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Toronto Blue Jays at Seattle Mariners: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium MLB Market move** — Philadelphia Phillies at Kansas City Royals: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.
- **Medium MLB Market move** — Boston Red Sox at Los Angeles Angels: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.
- **Medium MLB Market move** — Miami Marlins at Athletics: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.
- **Medium Soccer Market move** — England at Mexico: Draw price is +220, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Colombia at Switzerland: Draw price is +220, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Pittsburgh Pirates at Washington Nationals | Final | Braxton Ashcraft | Carson Palmquist | 7-1 |
| Minnesota Twins at New York Yankees | Final | Zebby Matthews | Brendan Beck | 11-4 |
| Detroit Tigers at Texas Rangers | In Progress | Jack Flaherty | Cal Quantrill | 3-0 |
| Toronto Blue Jays at Seattle Mariners | In Progress | Shane Bieber | Logan Gilbert | 0-5 |
| Baltimore Orioles at Cincinnati Reds | Pre-Game | Brandon Young | Hunter Greene | 0-0 |
| Tampa Bay Rays at Houston Astros | Pre-Game | Drew Rasmussen | Hunter Brown | 0-0 |
| Chicago White Sox at Cleveland Guardians | Pre-Game | Sean Burke | Parker Messick | 0-0 |
| St. Louis Cardinals at Chicago Cubs | Pre-Game | Kyle Leahy | Shota Imanaga |  |
| New York Mets at Atlanta Braves | Pre-Game | Sean Manaea | Chris Sale |  |
| San Francisco Giants at Colorado Rockies | Pre-Game | Robbie Ray | Sean Sullivan |  |
| Philadelphia Phillies at Kansas City Royals | Pre-Game | Jesús Luzardo | Michael Wacha | 0-0 |
| Boston Red Sox at Los Angeles Angels | Pre-Game | Sonny Gray | Sam Aldegheri |  |
| Miami Marlins at Athletics | Pre-Game | Sandy Alcantara | Aaron Civale |  |
| Milwaukee Brewers at Arizona Diamondbacks | Pre-Game | Brandon Woodruff | Merrill Kelly |  |
| San Diego Padres at Los Angeles Dodgers | Scheduled | Wandy Peralta | Yoshinobu Yamamoto |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Detroit Tigers at Texas Rangers | 2026-07-04T20:06:00Z | Detroit Tigers -890, Texas Rangers +506 |
| Toronto Blue Jays at Seattle Mariners | 2026-07-04T20:11:00Z | none |
| Baltimore Orioles at Cincinnati Reds | 2026-07-04T23:11:00Z | Baltimore Orioles +109, Cincinnati Reds -131 |
| Chicago White Sox at Cleveland Guardians | 2026-07-04T23:11:00Z | Chicago White Sox +123, Cleveland Guardians -148 |
| Tampa Bay Rays at Houston Astros | 2026-07-04T23:11:00Z | Houston Astros -118, Tampa Bay Rays -102 |
| New York Mets at Atlanta Braves | 2026-07-05T00:09:00Z | Atlanta Braves -171, New York Mets +141 |
| St. Louis Cardinals at Chicago Cubs | 2026-07-05T00:09:00Z | Chicago Cubs -163, St. Louis Cardinals +135 |
| San Francisco Giants at Colorado Rockies | 2026-07-05T00:11:00Z | Colorado Rockies +118, San Francisco Giants -143 |
| Philadelphia Phillies at Kansas City Royals | 2026-07-05T00:11:00Z | Kansas City Royals +129, Philadelphia Phillies -156 |
| Boston Red Sox at Los Angeles Angels | 2026-07-05T01:39:00Z | Boston Red Sox -171, Los Angeles Angels +141 |
| Milwaukee Brewers at Arizona Diamondbacks | 2026-07-05T01:41:00Z | Arizona Diamondbacks +134, Milwaukee Brewers -162 |
| Miami Marlins at Athletics | 2026-07-05T01:41:00Z | Athletics +119, Miami Marlins -143 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-05T02:11:00Z | Los Angeles Dodgers -274, San Diego Padres +220 |
| New York Mets at Atlanta Braves | 2026-07-05T16:30:00Z | Atlanta Braves -122, New York Mets +102 |
| Baltimore Orioles at Cincinnati Reds | 2026-07-05T17:05:00Z | Baltimore Orioles -108, Cincinnati Reds -112 |
| Minnesota Twins at New York Yankees | 2026-07-05T17:35:00Z | Minnesota Twins +113, New York Yankees -136 |
| Chicago White Sox at Cleveland Guardians | 2026-07-05T18:00:00Z | Chicago White Sox +129, Cleveland Guardians -156 |
| St. Louis Cardinals at Chicago Cubs | 2026-07-05T18:30:00Z | Chicago Cubs -149, St. Louis Cardinals +123 |
| Philadelphia Phillies at Kansas City Royals | 2026-07-05T19:01:00Z | none |
| Detroit Tigers at Texas Rangers | 2026-07-05T19:31:00Z | none |
| Milwaukee Brewers at Arizona Diamondbacks | 2026-07-05T20:00:00Z | Arizona Diamondbacks +102, Milwaukee Brewers -122 |
| San Francisco Giants at Colorado Rockies | 2026-07-05T20:00:00Z | Colorado Rockies +109, San Francisco Giants -131 |
| Miami Marlins at Athletics | 2026-07-05T20:31:00Z | none |
| San Diego Padres at Los Angeles Dodgers | 2026-07-05T23:21:00Z | Los Angeles Dodgers -219, San Diego Padres +179 |
| Boston Red Sox at Los Angeles Angels | 2026-07-06T01:31:00Z | none |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| France at Paraguay | 2026-07-04T21:03:00Z | France -475, Paraguay +1900, Draw +450 |
| Norway at Brazil | 2026-07-05T20:00:00Z | Brazil -120, Norway +310, Draw +275 |
| England at Mexico | 2026-07-06T00:00:00Z | England +140, Mexico +205, Draw +220 |
| Spain at Portugal | 2026-07-06T19:00:00Z | Portugal +295, Spain -110, Draw +265 |
| Belgium at USA | 2026-07-07T00:00:00Z | Belgium +170, USA +155, Draw +240 |
| Egypt at Argentina | 2026-07-07T16:00:00Z | Argentina -275, Egypt +850, Draw +370 |
| Colombia at Switzerland | 2026-07-07T20:00:00Z | Colombia +120, Switzerland +245, Draw +220 |

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

- `data/daily/2026-07-04/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-04.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
