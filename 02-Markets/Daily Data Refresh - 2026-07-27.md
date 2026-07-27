# Daily Data Refresh - 2026-07-27

Generated: 2026-07-27T14:06:26.388Z

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
| Seattle Mariners at Texas Rangers | Scheduled | George Kirby | Kumar Rocker |  |
| Baltimore Orioles at Detroit Tigers | Scheduled | Kyle Bradish | Keider Montero |  |
| Arizona Diamondbacks at Pittsburgh Pirates | Scheduled | Merrill Kelly | Mitch Keller |  |
| Philadelphia Phillies at Miami Marlins | Scheduled | Zack Wheeler | Tyler Phillips |  |
| Toronto Blue Jays at Washington Nationals | Scheduled | Max Scherzer | Andrew Alvarez |  |
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
| Seattle Mariners at Texas Rangers | 2026-07-27T18:35:00Z | Seattle Mariners -142, Texas Rangers +118 |
| Arizona Diamondbacks at Pittsburgh Pirates | 2026-07-27T22:40:00Z | Arizona Diamondbacks +101, Pittsburgh Pirates -121 |
| Baltimore Orioles at Detroit Tigers | 2026-07-27T22:40:00Z | Baltimore Orioles -101, Detroit Tigers -119 |
| Philadelphia Phillies at Miami Marlins | 2026-07-27T22:41:00Z | Miami Marlins +153, Philadelphia Phillies -186 |
| Toronto Blue Jays at Washington Nationals | 2026-07-27T22:46:00Z | Toronto Blue Jays -101, Washington Nationals -120 |
| Atlanta Braves at New York Mets | 2026-07-27T23:10:00Z | Atlanta Braves -118, New York Mets -102 |
| Cleveland Guardians at Cincinnati Reds | 2026-07-27T23:10:00Z | Cincinnati Reds -167, Cleveland Guardians +138 |
| New York Yankees at Chicago White Sox | 2026-07-27T23:40:00Z | Chicago White Sox +123, New York Yankees -149 |
| Chicago Cubs at St. Louis Cardinals | 2026-07-27T23:46:00Z | Chicago Cubs -122, St. Louis Cardinals +101 |
| Houston Astros at Los Angeles Angels | 2026-07-28T01:38:00Z | Houston Astros -115, Los Angeles Angels -105 |
| Boston Red Sox at Athletics | 2026-07-28T01:40:00Z | Athletics +149, Boston Red Sox -181 |
| Milwaukee Brewers at San Francisco Giants | 2026-07-28T01:45:00Z | Milwaukee Brewers -136, San Francisco Giants +113 |

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
