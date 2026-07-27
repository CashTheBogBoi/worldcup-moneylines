# Daily Data Refresh - 2026-07-27

Generated: 2026-07-27T18:32:27.772Z

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

- **High MLB Starters** — Chicago Cubs at St. Louis Cardinals: Official starter is still TBD (David Peterson vs TBD). Block Bankroll Watch promotion until both starters are confirmed.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Seattle Mariners at Texas Rangers | Warmup | George Kirby | Kumar Rocker | 0-0 |
| Baltimore Orioles at Detroit Tigers | Scheduled | Kyle Bradish | Keider Montero |  |
| Arizona Diamondbacks at Pittsburgh Pirates | Scheduled | Merrill Kelly | Mitch Keller |  |
| Philadelphia Phillies at Miami Marlins | Scheduled | Zack Wheeler | Tyler Phillips |  |
| Toronto Blue Jays at Washington Nationals | Scheduled | Max Scherzer | Eddy Yean |  |
| Cleveland Guardians at Cincinnati Reds | Scheduled | Slade Cecconi | Chase Burns |  |
| Atlanta Braves at New York Mets | Scheduled | Martín Pérez | Zac Thornton |  |
| New York Yankees at Chicago White Sox | Scheduled | Max Fried | Noah Schultz |  |
| Chicago Cubs at St. Louis Cardinals | Scheduled | David Peterson | TBD |  |
| Houston Astros at Los Angeles Angels | Scheduled | Tatsuya Imai | Walbert Ureña |  |
| Boston Red Sox at Athletics | Scheduled | Payton Tolle | Jack Perkins |  |
| Milwaukee Brewers at San Francisco Giants | Scheduled | Brandon Sproat | Tyler Mahle |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Seattle Mariners at Texas Rangers | 2026-07-27T18:35:00Z | Seattle Mariners -126, Texas Rangers +104 |
| Arizona Diamondbacks at Pittsburgh Pirates | 2026-07-27T22:40:00Z | Arizona Diamondbacks -106, Pittsburgh Pirates -114 |
| Baltimore Orioles at Detroit Tigers | 2026-07-27T22:40:00Z | Baltimore Orioles -101, Detroit Tigers -120 |
| Philadelphia Phillies at Miami Marlins | 2026-07-27T22:41:00Z | Miami Marlins +158, Philadelphia Phillies -193 |
| Toronto Blue Jays at Washington Nationals | 2026-07-27T22:46:00Z | Toronto Blue Jays +104, Washington Nationals -125 |
| Atlanta Braves at New York Mets | 2026-07-27T23:10:00Z | Atlanta Braves -109, New York Mets -110 |
| Cleveland Guardians at Cincinnati Reds | 2026-07-27T23:10:00Z | Cincinnati Reds -164, Cleveland Guardians +136 |
| New York Yankees at Chicago White Sox | 2026-07-27T23:40:00Z | Chicago White Sox +123, New York Yankees -149 |
| Chicago Cubs at St. Louis Cardinals | 2026-07-27T23:46:00Z | Chicago Cubs -125, St. Louis Cardinals +103 |
| Houston Astros at Los Angeles Angels | 2026-07-28T01:38:00Z | Houston Astros -112, Los Angeles Angels -107 |
| Boston Red Sox at Athletics | 2026-07-28T01:40:00Z | Athletics +152, Boston Red Sox -185 |
| Milwaukee Brewers at San Francisco Giants | 2026-07-28T01:45:00Z | Milwaukee Brewers -136, San Francisco Giants +113 |
| Arizona Diamondbacks at Pittsburgh Pirates | 2026-07-28T22:41:00Z | Arizona Diamondbacks -105, Pittsburgh Pirates -115 |
| Baltimore Orioles at Detroit Tigers | 2026-07-28T22:41:00Z | Baltimore Orioles +123, Detroit Tigers -149 |
| Philadelphia Phillies at Miami Marlins | 2026-07-28T22:41:00Z | Miami Marlins -110, Philadelphia Phillies -110 |
| Toronto Blue Jays at Washington Nationals | 2026-07-28T22:46:00Z | Toronto Blue Jays +118, Washington Nationals -142 |
| Atlanta Braves at New York Mets | 2026-07-28T23:11:00Z | Atlanta Braves -156, New York Mets +129 |
| Cleveland Guardians at Cincinnati Reds | 2026-07-28T23:11:00Z | Cincinnati Reds +102, Cleveland Guardians -122 |
| New York Yankees at Chicago White Sox | 2026-07-28T23:41:00Z | Chicago White Sox +123, New York Yankees -149 |
| Kansas City Royals at Minnesota Twins | 2026-07-28T23:41:00Z | Kansas City Royals +129, Minnesota Twins -156 |
| Houston Astros at Los Angeles Angels | 2026-07-29T01:39:00Z | Houston Astros -115, Los Angeles Angels -105 |
| Boston Red Sox at Athletics | 2026-07-29T01:41:00Z | Athletics +123, Boston Red Sox -149 |
| Colorado Rockies at San Diego Padres | 2026-07-29T01:41:00Z | Colorado Rockies +157, San Diego Padres -192 |
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
