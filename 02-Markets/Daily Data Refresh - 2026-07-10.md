# Daily Data Refresh - 2026-07-10

Generated: 2026-07-10T16:47:48.474Z

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

_No automated high-priority intel flags from the current snapshot._

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Philadelphia Phillies at Detroit Tigers | Scheduled | Aaron Nola | Jack Flaherty |  |
| Milwaukee Brewers at Pittsburgh Pirates | Scheduled | Brandon Sproat | Braxton Ashcraft |  |
| New York Yankees at Washington Nationals | Scheduled | Ryan Weathers | Carson Palmquist |  |
| Kansas City Royals at Baltimore Orioles | Scheduled | Luinder Avila | Brandon Young |  |
| Chicago Cubs at Cincinnati Reds | Scheduled | Shota Imanaga | Hunter Greene |  |
| Seattle Mariners at Tampa Bay Rays | Scheduled | Luis Castillo | Nick Martinez |  |
| Cleveland Guardians at Miami Marlins | Scheduled | Parker Messick | Sandy Alcantara |  |
| Boston Red Sox at New York Mets | Scheduled | Sonny Gray | Nolan McLean |  |
| Athletics at Chicago White Sox | Scheduled | Jacob Lopez | Sean Burke |  |
| Houston Astros at Texas Rangers | Scheduled | Hunter Brown | Cal Quantrill |  |
| Los Angeles Angels at Minnesota Twins | Scheduled | Grayson Rodriguez | Zebby Matthews |  |
| Atlanta Braves at St. Louis Cardinals | Scheduled | Chris Sale | Kyle Leahy |  |
| Toronto Blue Jays at San Diego Padres | Scheduled | Shane Bieber | JP Sears |  |
| Arizona Diamondbacks at Los Angeles Dodgers | Scheduled | Eduardo Rodriguez | Shohei Ohtani |  |
| Colorado Rockies at San Francisco Giants | Scheduled | Tanner Gordon | Robbie Ray |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Philadelphia Phillies at Detroit Tigers | 2026-07-10T22:41:00Z | Detroit Tigers -119, Philadelphia Phillies -102 |
| Milwaukee Brewers at Pittsburgh Pirates | 2026-07-10T22:41:00Z | Milwaukee Brewers +104, Pittsburgh Pirates -126 |
| New York Yankees at Washington Nationals | 2026-07-10T22:46:00Z | New York Yankees -162, Washington Nationals +134 |
| Kansas City Royals at Baltimore Orioles | 2026-07-10T23:06:00Z | Baltimore Orioles -156, Kansas City Royals +129 |
| Chicago Cubs at Cincinnati Reds | 2026-07-10T23:11:00Z | Chicago Cubs -114, Cincinnati Reds -105 |
| Cleveland Guardians at Miami Marlins | 2026-07-10T23:11:00Z | Cleveland Guardians +101, Miami Marlins -122 |
| Seattle Mariners at Tampa Bay Rays | 2026-07-10T23:11:00Z | Seattle Mariners -102, Tampa Bay Rays -118 |
| Boston Red Sox at New York Mets | 2026-07-10T23:16:00Z | Boston Red Sox +123, New York Mets -148 |
| Athletics at Chicago White Sox | 2026-07-10T23:41:00Z | Athletics +130, Chicago White Sox -157 |
| Houston Astros at Texas Rangers | 2026-07-11T00:06:00Z | Houston Astros -143, Texas Rangers +119 |
| Los Angeles Angels at Minnesota Twins | 2026-07-11T00:11:00Z | Los Angeles Angels +124, Minnesota Twins -149 |
| Atlanta Braves at St. Louis Cardinals | 2026-07-11T00:16:00Z | Atlanta Braves -168, St. Louis Cardinals +139 |
| Toronto Blue Jays at San Diego Padres | 2026-07-11T01:41:00Z | San Diego Padres -125, Toronto Blue Jays +104 |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-11T02:11:00Z | Arizona Diamondbacks +215, Los Angeles Dodgers -267 |
| Colorado Rockies at San Francisco Giants | 2026-07-11T02:16:00Z | Colorado Rockies +128, San Francisco Giants -155 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Belgium at Spain | 2026-07-10T19:00:00Z | Belgium +475, Spain -165, Draw +290 |
| England at Norway | 2026-07-11T21:00:00Z | England -110, Norway +300, Draw +265 |
| Switzerland at Argentina | 2026-07-12T01:00:00Z | Argentina -145, Switzerland +450, Draw +255 |

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

- `data/daily/2026-07-10/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-10.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
