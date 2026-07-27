# Daily Data Refresh - 2026-07-27

Generated: 2026-07-27T23:51:41.370Z

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

- **High MLB Market move** — Baltimore Orioles at Detroit Tigers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Arizona Diamondbacks at Pittsburgh Pirates: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Philadelphia Phillies at Miami Marlins: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Toronto Blue Jays at Washington Nationals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Atlanta Braves at New York Mets: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Chicago Cubs at St. Louis Cardinals: Game status is Delayed Start. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Cleveland Guardians at Cincinnati Reds: Game status is Postponed. Do not track this as a pregame pick; any current line is live-market contaminated.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Seattle Mariners at Texas Rangers | Final | George Kirby | Kumar Rocker | 3-7 |
| Baltimore Orioles at Detroit Tigers | In Progress | Kyle Bradish | Keider Montero | 4-1 |
| Arizona Diamondbacks at Pittsburgh Pirates | In Progress | Merrill Kelly | Mitch Keller | 0-0 |
| Philadelphia Phillies at Miami Marlins | In Progress | Zack Wheeler | Tyler Phillips | 2-5 |
| Toronto Blue Jays at Washington Nationals | In Progress | Max Scherzer | Eddy Yean | 2-1 |
| Atlanta Braves at New York Mets | In Progress | Martín Pérez | Zac Thornton | 1-3 |
| New York Yankees at Chicago White Sox | Warmup | Max Fried | Noah Schultz | 0-0 |
| Chicago Cubs at St. Louis Cardinals | Delayed Start | David Peterson | Matthew Liberatore | 0-0 |
| Houston Astros at Los Angeles Angels | Pre-Game | Tatsuya Imai | Walbert Ureña | 0-0 |
| Boston Red Sox at Athletics | Pre-Game | Payton Tolle | Jack Perkins | 0-0 |
| Milwaukee Brewers at San Francisco Giants | Pre-Game | Brandon Sproat | Tyler Mahle | 0-0 |
| Cleveland Guardians at Cincinnati Reds | Postponed | Slade Cecconi | Chase Burns |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Baltimore Orioles at Detroit Tigers | 2026-07-27T22:40:44Z | Baltimore Orioles -170, Detroit Tigers +130 |
| Philadelphia Phillies at Miami Marlins | 2026-07-27T22:41:00Z | Miami Marlins -493, Philadelphia Phillies +330 |
| Arizona Diamondbacks at Pittsburgh Pirates | 2026-07-27T22:42:04Z | Arizona Diamondbacks -101, Pittsburgh Pirates -128 |
| Toronto Blue Jays at Washington Nationals | 2026-07-27T22:46:00Z | Toronto Blue Jays -174, Washington Nationals +133 |
| Atlanta Braves at New York Mets | 2026-07-27T23:10:03Z | Atlanta Braves +139, New York Mets -183 |
| New York Yankees at Chicago White Sox | 2026-07-28T00:00:00Z | Chicago White Sox +119, New York Yankees -144 |
| Cleveland Guardians at Cincinnati Reds | 2026-07-28T00:15:00Z | Cincinnati Reds -161, Cleveland Guardians +133 |
| Chicago Cubs at St. Louis Cardinals | 2026-07-28T00:46:00Z | Chicago Cubs -123, St. Louis Cardinals +102 |
| Houston Astros at Los Angeles Angels | 2026-07-28T01:38:00Z | Houston Astros -107, Los Angeles Angels -112 |
| Boston Red Sox at Athletics | 2026-07-28T01:40:00Z | Athletics +158, Boston Red Sox -192 |
| Milwaukee Brewers at San Francisco Giants | 2026-07-28T01:45:00Z | Milwaukee Brewers -142, San Francisco Giants +118 |
| Arizona Diamondbacks at Pittsburgh Pirates | 2026-07-28T22:41:00Z | Arizona Diamondbacks -103, Pittsburgh Pirates -117 |
| Baltimore Orioles at Detroit Tigers | 2026-07-28T22:41:00Z | Baltimore Orioles +119, Detroit Tigers -144 |
| Philadelphia Phillies at Miami Marlins | 2026-07-28T22:41:00Z | Miami Marlins -110, Philadelphia Phillies -110 |
| Texas Rangers at Tampa Bay Rays | 2026-07-28T22:41:00Z | none |
| Toronto Blue Jays at Washington Nationals | 2026-07-28T22:46:00Z | Toronto Blue Jays +118, Washington Nationals -142 |
| Cleveland Guardians at Cincinnati Reds | 2026-07-28T23:10:00Z | Cincinnati Reds +112, Cleveland Guardians -135 |
| Atlanta Braves at New York Mets | 2026-07-28T23:11:00Z | Atlanta Braves -157, New York Mets +130 |
| New York Yankees at Chicago White Sox | 2026-07-28T23:41:00Z | Chicago White Sox +114, New York Yankees -137 |
| Kansas City Royals at Minnesota Twins | 2026-07-28T23:41:00Z | Kansas City Royals +129, Minnesota Twins -156 |
| Houston Astros at Los Angeles Angels | 2026-07-29T01:39:00Z | Houston Astros -112, Los Angeles Angels -108 |
| Boston Red Sox at Athletics | 2026-07-29T01:41:00Z | Athletics +125, Boston Red Sox -151 |
| Colorado Rockies at San Diego Padres | 2026-07-29T01:41:00Z | Colorado Rockies +153, San Diego Padres -187 |
| Milwaukee Brewers at San Francisco Giants | 2026-07-29T01:46:00Z | Milwaukee Brewers -144, San Francisco Giants +119 |

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

- `data/daily/2026-07-27/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-27.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
