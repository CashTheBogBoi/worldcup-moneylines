# Daily Data Refresh - 2026-07-10

Generated: 2026-07-11T03:42:23.294Z

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

- **High MLB Market move** — New York Yankees at Washington Nationals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Atlanta Braves at St. Louis Cardinals: Game status is Delayed. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Toronto Blue Jays at San Diego Padres: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Arizona Diamondbacks at Los Angeles Dodgers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Colorado Rockies at San Francisco Giants: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Milwaukee Brewers at Pittsburgh Pirates: Game status is Postponed. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium Soccer Market move** — Spain at France: Draw price is +225, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Philadelphia Phillies at Detroit Tigers | Final | Aaron Nola | Jack Flaherty | 2-10 |
| New York Yankees at Washington Nationals | In Progress | Ryan Weathers | Carson Palmquist | 5-3 |
| Kansas City Royals at Baltimore Orioles | Final | Luinder Avila | Brandon Young | 3-5 |
| Chicago Cubs at Cincinnati Reds | Final | Shota Imanaga | Hunter Greene | 0-4 |
| Seattle Mariners at Tampa Bay Rays | Final | Luis Castillo | Nick Martinez | 2-7 |
| Cleveland Guardians at Miami Marlins | Final | Parker Messick | Sandy Alcantara | 3-2 |
| Boston Red Sox at New York Mets | Final | Sonny Gray | Nolan McLean | 6-2 |
| Athletics at Chicago White Sox | Final | Jacob Lopez | Sean Burke | 1-14 |
| Houston Astros at Texas Rangers | Final | Hunter Brown | Cal Quantrill | 3-7 |
| Los Angeles Angels at Minnesota Twins | Final | Grayson Rodriguez | Zebby Matthews | 4-3 |
| Atlanta Braves at St. Louis Cardinals | Delayed | Chris Sale | Kyle Leahy | 0-0 |
| Toronto Blue Jays at San Diego Padres | In Progress | Shane Bieber | JP Sears | 5-2 |
| Arizona Diamondbacks at Los Angeles Dodgers | In Progress | Eduardo Rodriguez | Kyle Hurt | 6-2 |
| Colorado Rockies at San Francisco Giants | In Progress | Tanner Gordon | Robbie Ray | 1-1 |
| Milwaukee Brewers at Pittsburgh Pirates | Postponed | Brandon Sproat | Braxton Ashcraft |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Atlanta Braves at St. Louis Cardinals | 2026-07-11T00:16:05Z | Atlanta Braves -171, St. Louis Cardinals +131 |
| New York Yankees at Washington Nationals | 2026-07-11T00:46:00Z | New York Yankees -1820, Washington Nationals +760 |
| Toronto Blue Jays at San Diego Padres | 2026-07-11T01:41:00Z | San Diego Padres +620, Toronto Blue Jays -1260 |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-11T02:11:00Z | Arizona Diamondbacks -484, Los Angeles Dodgers +325 |
| Colorado Rockies at San Francisco Giants | 2026-07-11T02:16:00Z | Colorado Rockies +193, San Francisco Giants -261 |
| Athletics at Chicago White Sox | 2026-07-11T18:11:00Z | Athletics -115, Chicago White Sox -105 |
| Los Angeles Angels at Minnesota Twins | 2026-07-11T18:11:00Z | Los Angeles Angels +153, Minnesota Twins -186 |
| New York Yankees at Washington Nationals | 2026-07-11T20:05:00Z | New York Yankees -199, Washington Nationals +163 |
| Colorado Rockies at San Francisco Giants | 2026-07-11T20:06:00Z | Colorado Rockies +130, San Francisco Giants -157 |
| Boston Red Sox at New York Mets | 2026-07-11T20:11:00Z | none |
| Cleveland Guardians at Miami Marlins | 2026-07-11T20:11:00Z | Cleveland Guardians +124, Miami Marlins -149 |
| Seattle Mariners at Tampa Bay Rays | 2026-07-11T20:11:00Z | Seattle Mariners -105, Tampa Bay Rays -115 |
| Philadelphia Phillies at Detroit Tigers | 2026-07-11T22:11:00Z | Detroit Tigers +119, Philadelphia Phillies -143 |
| Kansas City Royals at Baltimore Orioles | 2026-07-11T23:06:00Z | Baltimore Orioles -163, Kansas City Royals +135 |
| Houston Astros at Texas Rangers | 2026-07-11T23:06:00Z | Houston Astros +102, Texas Rangers -122 |
| Chicago Cubs at Cincinnati Reds | 2026-07-11T23:11:00Z | Chicago Cubs -122, Cincinnati Reds +101 |
| Atlanta Braves at St. Louis Cardinals | 2026-07-11T23:15:00Z | Atlanta Braves -119, St. Louis Cardinals -102 |
| Toronto Blue Jays at San Diego Padres | 2026-07-12T00:41:00Z | San Diego Padres -126, Toronto Blue Jays +104 |
| Arizona Diamondbacks at Los Angeles Dodgers | 2026-07-12T01:10:00Z | Arizona Diamondbacks +225, Los Angeles Dodgers -282 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| England at Norway | 2026-07-11T21:00:00Z | England -110, Norway +290, Draw +265 |
| Switzerland at Argentina | 2026-07-12T01:00:00Z | Argentina -145, Switzerland +450, Draw +255 |
| Spain at France | 2026-07-14T19:00:00Z | France +135, Spain +215, Draw +225 |

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
