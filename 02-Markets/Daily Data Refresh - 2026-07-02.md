# Daily Data Refresh - 2026-07-02

Generated: 2026-07-02T23:51:29.780Z

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

- **High MLB Market move** — Chicago White Sox at Cleveland Guardians: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — St. Louis Cardinals at Atlanta Braves: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Tampa Bay Rays at Kansas City Royals: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium Soccer Market move** — Algeria at Switzerland: Draw price is +225, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Egypt at Australia: Draw price is +190, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Cape Verde at Argentina: Argentina is priced at -650. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — France at Paraguay: France is priced at -575. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — England at Mexico: Draw price is +215, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Pittsburgh Pirates at Philadelphia Phillies | Final | Jared Jones | Alan Rangel | 6-1 |
| Cincinnati Reds at Milwaukee Brewers | Final | Chase Burns | Jacob Misiorowski | 7-2 |
| Miami Marlins at Colorado Rockies | Final | Ryan Gusto | Michael Lorenzen | 4-14 |
| Chicago White Sox at Cleveland Guardians | In Progress | Davis Martin | Slade Cecconi | 0-2 |
| St. Louis Cardinals at Atlanta Braves | In Progress | Dustin May | Hurston Waldrep | 3-5 |
| Tampa Bay Rays at Kansas City Royals | In Progress | Ian Seymour | Stephen Kolek | 0-1 |
| Detroit Tigers at Texas Rangers | Warmup | Framber Valdez | Nathan Eovaldi | 0-0 |
| Los Angeles Angels at Seattle Mariners | Pre-Game | Walbert Ureña | Bryce Miller | 0-0 |
| San Diego Padres at Los Angeles Dodgers | Pre-Game | Randy Vásquez | Roki Sasaki | 0-0 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Chicago White Sox at Cleveland Guardians | 2026-07-02T22:41:00Z | Chicago White Sox +328, Cleveland Guardians -489 |
| St. Louis Cardinals at Atlanta Braves | 2026-07-02T23:16:00Z | Atlanta Braves -418, St. Louis Cardinals +279 |
| Tampa Bay Rays at Kansas City Royals | 2026-07-02T23:41:00Z | Kansas City Royals -143, Tampa Bay Rays +110 |
| Detroit Tigers at Texas Rangers | 2026-07-03T00:06:00Z | Detroit Tigers -110, Texas Rangers -110 |
| Los Angeles Angels at Seattle Mariners | 2026-07-03T01:41:00Z | Los Angeles Angels +188, Seattle Mariners -231 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-03T02:11:00Z | Los Angeles Dodgers -198, San Diego Padres +162 |
| St. Louis Cardinals at Chicago Cubs | 2026-07-03T20:06:00Z | Chicago Cubs -131, St. Louis Cardinals +109 |
| Pittsburgh Pirates at Washington Nationals | 2026-07-03T22:46:00Z | Pittsburgh Pirates +119, Washington Nationals -143 |
| Minnesota Twins at New York Yankees | 2026-07-03T23:06:00Z | Minnesota Twins +153, New York Yankees -186 |
| Baltimore Orioles at Cincinnati Reds | 2026-07-03T23:11:00Z | Baltimore Orioles -125, Cincinnati Reds +104 |
| Chicago White Sox at Cleveland Guardians | 2026-07-03T23:11:00Z | Chicago White Sox +113, Cleveland Guardians -136 |
| New York Mets at Atlanta Braves | 2026-07-03T23:16:00Z | Atlanta Braves -126, New York Mets +104 |
| San Francisco Giants at Colorado Rockies | 2026-07-04T00:11:00Z | none |
| Tampa Bay Rays at Houston Astros | 2026-07-04T00:16:00Z | none |
| Boston Red Sox at Los Angeles Angels | 2026-07-04T01:39:00Z | none |
| Miami Marlins at Athletics | 2026-07-04T01:41:00Z | Athletics -131, Miami Marlins +109 |
| Milwaukee Brewers at Arizona Diamondbacks | 2026-07-04T01:46:00Z | Arizona Diamondbacks +141, Milwaukee Brewers -171 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-04T02:11:00Z | Los Angeles Dodgers -246, San Diego Padres +199 |
| Toronto Blue Jays at Seattle Mariners | 2026-07-04T02:11:00Z | none |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Croatia at Portugal | 2026-07-02T23:00:00Z | Croatia +650, Portugal -130, Draw +175 |
| Algeria at Switzerland | 2026-07-03T03:00:00Z | Algeria +330, Switzerland +100, Draw +225 |
| Egypt at Australia | 2026-07-03T18:00:00Z | Australia +230, Egypt +150, Draw +190 |
| Cape Verde at Argentina | 2026-07-03T22:00:00Z | Argentina -650, Cape Verde +1900, Draw +700 |
| Ghana at Colombia | 2026-07-04T01:30:00Z | Colombia -225, Ghana +750, Draw +330 |
| Morocco at Canada | 2026-07-04T17:00:00Z | Canada +400, Morocco -125, Draw +250 |
| France at Paraguay | 2026-07-04T21:00:00Z | France -575, Paraguay +1800, Draw +600 |
| Norway at Brazil | 2026-07-05T20:00:00Z | Brazil -115, Norway +310, Draw +280 |
| England at Mexico | 2026-07-06T00:00:00Z | England +140, Mexico +220, Draw +215 |
| Belgium at USA | 2026-07-07T00:00:00Z | Belgium +175, USA +160, Draw +245 |

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

- `data/daily/2026-07-02/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-02.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
