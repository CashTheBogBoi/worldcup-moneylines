# Daily Data Refresh - 2026-07-02

Generated: 2026-07-03T03:54:03.277Z

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

- **High MLB Market move** — Los Angeles Angels at Seattle Mariners: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — San Diego Padres at Los Angeles Dodgers: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **Medium Soccer Market move** — Egypt at Australia: Draw price is +185, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Cape Verde at Argentina: Argentina is priced at -700. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — France at Paraguay: France is priced at -550. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — England at Mexico: Draw price is +215, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Pittsburgh Pirates at Philadelphia Phillies | Final | Jared Jones | Alan Rangel | 6-1 |
| Cincinnati Reds at Milwaukee Brewers | Final | Chase Burns | Jacob Misiorowski | 7-2 |
| Miami Marlins at Colorado Rockies | Final | Ryan Gusto | Michael Lorenzen | 4-14 |
| Chicago White Sox at Cleveland Guardians | Final | Davis Martin | Slade Cecconi | 5-6 |
| St. Louis Cardinals at Atlanta Braves | Final | Dustin May | Hurston Waldrep | 11-5 |
| Tampa Bay Rays at Kansas City Royals | Final | Ian Seymour | Stephen Kolek | 5-2 |
| Detroit Tigers at Texas Rangers | Final | Framber Valdez | Nathan Eovaldi | 4-10 |
| Los Angeles Angels at Seattle Mariners | In Progress | Walbert Ureña | Bryce Miller | 0-1 |
| San Diego Padres at Los Angeles Dodgers | In Progress | Randy Vásquez | Roki Sasaki | 6-8 |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| Los Angeles Angels at Seattle Mariners | 2026-07-03T01:41:00Z | Los Angeles Angels +730, Seattle Mariners -1660 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-03T02:11:00Z | Los Angeles Dodgers -1680, San Diego Padres +650 |
| St. Louis Cardinals at Chicago Cubs | 2026-07-03T20:06:00Z | Chicago Cubs -126, St. Louis Cardinals +105 |
| Pittsburgh Pirates at Washington Nationals | 2026-07-03T22:46:00Z | Pittsburgh Pirates +119, Washington Nationals -143 |
| Minnesota Twins at New York Yankees | 2026-07-03T23:06:00Z | Minnesota Twins +153, New York Yankees -186 |
| Baltimore Orioles at Cincinnati Reds | 2026-07-03T23:11:00Z | Baltimore Orioles -122, Cincinnati Reds +101 |
| Chicago White Sox at Cleveland Guardians | 2026-07-03T23:11:00Z | Chicago White Sox +114, Cleveland Guardians -137 |
| New York Mets at Atlanta Braves | 2026-07-03T23:16:00Z | Atlanta Braves -122, New York Mets +101 |
| San Francisco Giants at Colorado Rockies | 2026-07-04T00:11:00Z | Colorado Rockies +129, San Francisco Giants -156 |
| Tampa Bay Rays at Houston Astros | 2026-07-04T00:16:00Z | Houston Astros -110, Tampa Bay Rays -110 |
| Boston Red Sox at Los Angeles Angels | 2026-07-04T01:39:00Z | Boston Red Sox -110, Los Angeles Angels -110 |
| Miami Marlins at Athletics | 2026-07-04T01:41:00Z | Athletics -126, Miami Marlins +105 |
| Milwaukee Brewers at Arizona Diamondbacks | 2026-07-04T01:46:00Z | Arizona Diamondbacks +139, Milwaukee Brewers -168 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-04T02:11:00Z | Los Angeles Dodgers -246, San Diego Padres +199 |
| Toronto Blue Jays at Seattle Mariners | 2026-07-04T02:11:00Z | Seattle Mariners +102, Toronto Blue Jays -122 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Algeria at Switzerland | 2026-07-03T03:00:00Z | Algeria +1100, Switzerland -270, Draw +300 |
| Egypt at Australia | 2026-07-03T18:00:00Z | Australia +255, Egypt +145, Draw +185 |
| Cape Verde at Argentina | 2026-07-03T22:00:00Z | Argentina -700, Cape Verde +2000, Draw +750 |
| Ghana at Colombia | 2026-07-04T01:30:00Z | Colombia -230, Ghana +750, Draw +340 |
| Morocco at Canada | 2026-07-04T17:00:00Z | Canada +400, Morocco -125, Draw +250 |
| France at Paraguay | 2026-07-04T21:00:00Z | France -550, Paraguay +1700, Draw +600 |
| Norway at Brazil | 2026-07-05T20:00:00Z | Brazil -115, Norway +310, Draw +280 |
| England at Mexico | 2026-07-06T00:00:00Z | England +140, Mexico +220, Draw +215 |
| Spain at Portugal | 2026-07-06T19:00:00Z | Portugal +310, Spain -110, Draw +260 |
| Belgium at USA | 2026-07-07T00:00:00Z | Belgium +180, USA +155, Draw +240 |

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
