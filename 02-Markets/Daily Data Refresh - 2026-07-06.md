# Daily Data Refresh - 2026-07-06

Generated: 2026-07-06T14:18:19.310Z

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

- **Medium Soccer Market move** — Colombia at Switzerland: Draw price is +210, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Philadelphia Phillies at Kansas City Royals | Scheduled | Cristopher Sánchez | Noah Cameron |  |
| New York Yankees at Tampa Bay Rays | Scheduled | Cam Schlittler | Griffin Jax |  |
| Houston Astros at Washington Nationals | Scheduled | Mike Burrows | Miles Mikolas |  |
| New York Mets at Atlanta Braves | Scheduled | Freddy Peralta | Reynaldo López |  |
| Milwaukee Brewers at St. Louis Cardinals | Scheduled | Shane Drohan | Dustin May |  |
| Arizona Diamondbacks at San Diego Padres | Scheduled | Brandon Pfaadt | Walker Buehler |  |
| Toronto Blue Jays at San Francisco Giants | Scheduled | Kevin Gausman | Landen Roupp |  |
| Colorado Rockies at Los Angeles Dodgers | Scheduled | Kyle Freeland | Eric Lauer |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Philadelphia Phillies at Kansas City Royals | 2026-07-06T18:11:00Z | Kansas City Royals +179, Philadelphia Phillies -219 |
| New York Yankees at Tampa Bay Rays | 2026-07-06T22:41:00Z | New York Yankees -105, Tampa Bay Rays -115 |
| Houston Astros at Washington Nationals | 2026-07-06T22:46:00Z | Houston Astros -101, Washington Nationals -120 |
| New York Mets at Atlanta Braves | 2026-07-06T23:16:00Z | Atlanta Braves -132, New York Mets +109 |
| Milwaukee Brewers at St. Louis Cardinals | 2026-07-06T23:46:00Z | Milwaukee Brewers -111, St. Louis Cardinals -108 |
| Arizona Diamondbacks at San Diego Padres | 2026-07-07T01:41:00Z | Arizona Diamondbacks +103, San Diego Padres -124 |
| Toronto Blue Jays at San Francisco Giants | 2026-07-07T01:46:00Z | San Francisco Giants -105, Toronto Blue Jays -114 |
| Colorado Rockies at Los Angeles Dodgers | 2026-07-07T02:11:00Z | Colorado Rockies +188, Los Angeles Dodgers -231 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Spain at Portugal | 2026-07-06T19:00:00Z | Portugal +295, Spain -110, Draw +265 |
| Belgium at USA | 2026-07-07T00:00:00Z | Belgium +185, USA +145, Draw +240 |
| Egypt at Argentina | 2026-07-07T16:00:00Z | Argentina -270, Egypt +800, Draw +380 |
| Colombia at Switzerland | 2026-07-07T20:00:00Z | Colombia +130, Switzerland +240, Draw +210 |
| Morocco at France | 2026-07-09T20:00:00Z | France -170, Morocco +500, Draw +285 |
| England at Norway | 2026-07-11T21:00:00Z | England -115, Norway +300, Draw +270 |

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

- `data/daily/2026-07-06/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-06.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
