# Daily Data Refresh - 2026-08-01

Generated: 2026-08-01T16:16:34.735Z

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
| St. Louis Cardinals at Toronto Blue Jays | Pre-Game | Quinn Mathews | Kevin Gausman | 0-0 |
| Minnesota Twins at Seattle Mariners | Scheduled | Connor Prielipp | Logan Gilbert |  |
| Chicago White Sox at Tampa Bay Rays | Pre-Game | Jordan Hicks | Drew Rasmussen |  |
| Miami Marlins at New York Mets | Scheduled | Tyler Phillips | Zac Thornton |  |
| Pittsburgh Pirates at Cincinnati Reds | Scheduled | Braxton Ashcraft | Andrew Abbott |  |
| Philadelphia Phillies at Baltimore Orioles | Scheduled | Cristopher Sánchez | Shane Baz |  |
| Texas Rangers at Houston Astros | Scheduled | Jacob deGrom | Ronel Blanco |  |
| Arizona Diamondbacks at Cleveland Guardians | Scheduled | Kohl Drake | Parker Messick |  |
| Washington Nationals at Atlanta Braves | Scheduled | Miles Mikolas | Reynaldo López |  |
| New York Yankees at Chicago Cubs | Scheduled | Max Fried | David Peterson |  |
| Kansas City Royals at Colorado Rockies | Scheduled | Luinder Avila | Ryan Feltner |  |
| San Francisco Giants at San Diego Padres | Scheduled | Tyler Mahle | Walker Buehler |  |
| Boston Red Sox at Los Angeles Dodgers | Scheduled | Payton Tolle | Yoshinobu Yamamoto |  |
| Milwaukee Brewers at Los Angeles Angels | Scheduled | Robert Gasser | José Soriano |  |
| Detroit Tigers at Athletics | Scheduled | Framber Valdez | Jack Perkins |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| St. Louis Cardinals at Toronto Blue Jays | 2026-08-01T19:08:00Z | St. Louis Cardinals +135, Toronto Blue Jays -163 |
| Chicago White Sox at Tampa Bay Rays | 2026-08-01T20:11:00Z | Chicago White Sox +143, Tampa Bay Rays -173 |
| Miami Marlins at New York Mets | 2026-08-01T20:11:00Z | Miami Marlins +113, New York Mets -136 |
| Minnesota Twins at Seattle Mariners | 2026-08-01T20:11:00Z | Minnesota Twins +141, Seattle Mariners -171 |
| Pittsburgh Pirates at Cincinnati Reds | 2026-08-01T22:41:00Z | Cincinnati Reds -104, Pittsburgh Pirates -115 |
| Philadelphia Phillies at Baltimore Orioles | 2026-08-01T23:06:00Z | Baltimore Orioles +123, Philadelphia Phillies -149 |
| Texas Rangers at Houston Astros | 2026-08-01T23:11:00Z | Houston Astros +108, Texas Rangers -130 |
| Arizona Diamondbacks at Cleveland Guardians | 2026-08-01T23:16:00Z | Arizona Diamondbacks +148, Cleveland Guardians -180 |
| Washington Nationals at Atlanta Braves | 2026-08-01T23:16:00Z | Atlanta Braves -182, Washington Nationals +150 |
| New York Yankees at Chicago Cubs | 2026-08-01T23:16:00Z | Chicago Cubs -120, New York Yankees -101 |
| Kansas City Royals at Colorado Rockies | 2026-08-02T00:10:00Z | Colorado Rockies -120, Kansas City Royals +100 |
| San Francisco Giants at San Diego Padres | 2026-08-02T00:41:00Z | San Diego Padres -150, San Francisco Giants +124 |
| Boston Red Sox at Los Angeles Dodgers | 2026-08-02T01:11:00Z | Boston Red Sox +139, Los Angeles Dodgers -168 |
| Milwaukee Brewers at Los Angeles Angels | 2026-08-02T01:39:00Z | Los Angeles Angels +102, Milwaukee Brewers -123 |
| Detroit Tigers at Athletics | 2026-08-02T01:41:00Z | Athletics +139, Detroit Tigers -168 |

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

- `data/daily/2026-08-01/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-08-01.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
