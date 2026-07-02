# Daily Data Refresh - 2026-07-02

Generated: 2026-07-02T17:54:20.996Z

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

- **High MLB Market move** — Pittsburgh Pirates at Philadelphia Phillies: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium MLB Market move** — Chicago White Sox at Cleveland Guardians: DraftKings moneyline was missing from the local odds snapshot. Do not use the free-$200 workflow unless DK has a current playable line.
- **Medium Soccer Market move** — Austria at Spain: Spain is priced at -340. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — Algeria at Switzerland: Draw price is +230, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Egypt at Australia: Draw price is +190, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Cape Verde at Argentina: Argentina is priced at -650. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — France at Paraguay: France is priced at -575. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — England at Mexico: Draw price is +215, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Pittsburgh Pirates at Philadelphia Phillies | In Progress | Jared Jones | Alan Rangel | 0-1 |
| Cincinnati Reds at Milwaukee Brewers | Warmup | Chase Burns | Jacob Misiorowski | 0-0 |
| Miami Marlins at Colorado Rockies | Pre-Game | Ryan Gusto | Michael Lorenzen | 0-0 |
| Chicago White Sox at Cleveland Guardians | Scheduled | Davis Martin | Slade Cecconi |  |
| St. Louis Cardinals at Atlanta Braves | Scheduled | Dustin May | Hurston Waldrep |  |
| Tampa Bay Rays at Kansas City Royals | Scheduled | Ian Seymour | Stephen Kolek |  |
| Detroit Tigers at Texas Rangers | Scheduled | Framber Valdez | Nathan Eovaldi |  |
| Los Angeles Angels at Seattle Mariners | Scheduled | Walbert Ureña | Bryce Miller |  |
| San Diego Padres at Los Angeles Dodgers | Scheduled | Randy Vásquez | Roki Sasaki |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Pittsburgh Pirates at Philadelphia Phillies | 2026-07-02T16:36:00Z | Philadelphia Phillies -315, Pittsburgh Pirates +228 |
| Cincinnati Reds at Milwaukee Brewers | 2026-07-02T18:11:00Z | Cincinnati Reds +178, Milwaukee Brewers -219 |
| Miami Marlins at Colorado Rockies | 2026-07-02T19:11:00Z | Colorado Rockies +113, Miami Marlins -136 |
| Chicago White Sox at Cleveland Guardians | 2026-07-02T22:41:00Z | Chicago White Sox -107, Cleveland Guardians -112 |
| St. Louis Cardinals at Atlanta Braves | 2026-07-02T23:16:00Z | Atlanta Braves -115, St. Louis Cardinals -105 |
| Tampa Bay Rays at Kansas City Royals | 2026-07-02T23:41:00Z | Kansas City Royals +104, Tampa Bay Rays -125 |
| Detroit Tigers at Texas Rangers | 2026-07-03T00:06:00Z | Detroit Tigers -109, Texas Rangers -110 |
| Los Angeles Angels at Seattle Mariners | 2026-07-03T01:41:00Z | Los Angeles Angels +178, Seattle Mariners -219 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-03T02:11:00Z | Los Angeles Dodgers -198, San Diego Padres +162 |
| St. Louis Cardinals at Chicago Cubs | 2026-07-03T20:06:00Z | none |
| Pittsburgh Pirates at Washington Nationals | 2026-07-03T22:46:00Z | none |
| Minnesota Twins at New York Yankees | 2026-07-03T23:06:00Z | none |
| Baltimore Orioles at Cincinnati Reds | 2026-07-03T23:11:00Z | none |
| Chicago White Sox at Cleveland Guardians | 2026-07-03T23:11:00Z | none |
| New York Mets at Atlanta Braves | 2026-07-03T23:16:00Z | none |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Austria at Spain | 2026-07-02T19:00:00Z | Austria +1100, Spain -340, Draw +450 |
| Croatia at Portugal | 2026-07-02T23:00:00Z | Croatia +450, Portugal -150, Draw +280 |
| Algeria at Switzerland | 2026-07-03T03:00:00Z | Algeria +350, Switzerland -110, Draw +230 |
| Egypt at Australia | 2026-07-03T18:00:00Z | Australia +230, Egypt +150, Draw +190 |
| Cape Verde at Argentina | 2026-07-03T22:00:00Z | Argentina -650, Cape Verde +1900, Draw +700 |
| Ghana at Colombia | 2026-07-04T01:30:00Z | Colombia -190, Ghana +600, Draw +310 |
| Morocco at Canada | 2026-07-04T17:00:00Z | Canada +400, Morocco -125, Draw +250 |
| France at Paraguay | 2026-07-04T21:00:00Z | France -575, Paraguay +1800, Draw +600 |
| Norway at Brazil | 2026-07-05T20:00:00Z | Brazil -115, Norway +310, Draw +280 |
| England at Mexico | 2026-07-06T00:00:00Z | England +140, Mexico +220, Draw +215 |
| Belgium at USA | 2026-07-07T00:00:00Z | Belgium +180, USA +155, Draw +245 |

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
