# Daily Data Refresh - 2026-07-26

Generated: 2026-07-26T22:58:12.733Z

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
| Cleveland Guardians at Tampa Bay Rays | Final | Parker Messick | Drew Rasmussen | 0-1 |
| Arizona Diamondbacks at Washington Nationals | Final | Kohl Drake | Miles Mikolas | 7-10 |
| Chicago Cubs at Pittsburgh Pirates | Final | Jameson Taillon | Braxton Ashcraft | 7-8 |
| Toronto Blue Jays at Boston Red Sox | Final | Kevin Gausman | Ranger Suarez | 1-6 |
| Atlanta Braves at Baltimore Orioles | Final | Reynaldo López | Shane Baz | 3-2 |
| Kansas City Royals at Detroit Tigers | Final | Luinder Avila | Framber Valdez | 5-4 |
| Los Angeles Dodgers at New York Mets | Final | Emmet Sheehan | Freddy Peralta | 3-8 |
| San Diego Padres at Miami Marlins | Final | Walker Buehler | Janson Junk | 5-3 |
| Athletics at Minnesota Twins | Final | Jeffrey Springs | Connor Prielipp | 8-11 |
| Houston Astros at Chicago White Sox | Final | Ronel Blanco | Erick Fedde | 3-12 |
| Colorado Rockies at Milwaukee Brewers | Final | Kyle Freeland | Jacob Misiorowski | 2-11 |
| Cincinnati Reds at St. Louis Cardinals | Final | Andrew Abbott | Kyle Leahy | 5-3 |
| Seattle Mariners at Texas Rangers | Final | Logan Gilbert | Jacob deGrom | 6-4 |
| Los Angeles Angels at San Francisco Giants | Final | José Soriano | Carson Whisenhunt | 4-3 |
| New York Yankees at Philadelphia Phillies | Pre-Game | Will Warren | Cristopher Sánchez | 0-0 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| New York Yankees at Philadelphia Phillies | 2026-07-26T23:21:00Z | New York Yankees +177, Philadelphia Phillies -218 |
| Seattle Mariners at Texas Rangers | 2026-07-27T18:35:00Z | Seattle Mariners -131, Texas Rangers +109 |
| Arizona Diamondbacks at Pittsburgh Pirates | 2026-07-27T22:40:00Z | Arizona Diamondbacks +108, Pittsburgh Pirates -130 |
| Baltimore Orioles at Detroit Tigers | 2026-07-27T22:40:00Z | Baltimore Orioles -102, Detroit Tigers -118 |
| Philadelphia Phillies at Miami Marlins | 2026-07-27T22:41:00Z | Miami Marlins +144, Philadelphia Phillies -175 |
| Toronto Blue Jays at Washington Nationals | 2026-07-27T22:46:00Z | Toronto Blue Jays +105, Washington Nationals -126 |
| Atlanta Braves at New York Mets | 2026-07-27T23:10:00Z | Atlanta Braves -115, New York Mets -105 |
| Cleveland Guardians at Cincinnati Reds | 2026-07-27T23:10:00Z | Cincinnati Reds -167, Cleveland Guardians +137 |
| New York Yankees at Chicago White Sox | 2026-07-27T23:40:00Z | Chicago White Sox +113, New York Yankees -136 |
| Houston Astros at Los Angeles Angels | 2026-07-28T01:38:00Z | Houston Astros -118, Los Angeles Angels -102 |
| Boston Red Sox at Athletics | 2026-07-28T01:40:00Z | Athletics +135, Boston Red Sox -163 |
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

- `data/daily/2026-07-26/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-26.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
