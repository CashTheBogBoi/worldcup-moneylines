# Daily Data Refresh - 2026-07-03

Generated: 2026-07-03T14:39:59.645Z

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

- **High MLB Starters** — San Francisco Giants at Colorado Rockies: Official starter is still TBD (TBD vs Ryan Feltner). Block Bankroll Watch promotion until both starters are confirmed.
- **Medium Soccer Market move** — Egypt at Australia: Draw price is +195, which is short enough to demand draw-risk review before backing either side.
- **Medium Soccer Market move** — Cape Verde at Argentina: Argentina is priced at -700. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — France at Paraguay: France is priced at -525. Heavy favorites need lineup/news confirmation and usually offer poor value unless the model is above market.
- **Medium Soccer Market move** — England at Mexico: Draw price is +215, which is short enough to demand draw-risk review before backing either side.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| St. Louis Cardinals at Chicago Cubs | Scheduled | Andre Pallante | David Peterson |  |
| Pittsburgh Pirates at Washington Nationals | Scheduled | Mitch Keller | Foster Griffin |  |
| Minnesota Twins at New York Yankees | Scheduled | Mike Paredes | Gerrit Cole |  |
| Baltimore Orioles at Cincinnati Reds | Scheduled | Trevor Rogers | Brady Singer |  |
| Chicago White Sox at Cleveland Guardians | Scheduled | Anthony Kay | Gavin Williams |  |
| New York Mets at Atlanta Braves | Scheduled | Christian Scott | Grant Holmes |  |
| San Francisco Giants at Colorado Rockies | Scheduled | TBD | Ryan Feltner |  |
| Tampa Bay Rays at Houston Astros | Scheduled | Nick Martinez | Spencer Arrighetti |  |
| Boston Red Sox at Los Angeles Angels | Scheduled | Jake Bennett | Reid Detmers |  |
| Miami Marlins at Athletics | Scheduled | Tyler Phillips | Jack Perkins |  |
| Milwaukee Brewers at Arizona Diamondbacks | Scheduled | Kyle Harrison | Jose Cabrera |  |
| San Diego Padres at Los Angeles Dodgers | Scheduled | Michael King | Shohei Ohtani |  |
| Toronto Blue Jays at Seattle Mariners | Scheduled | Dylan Cease | Luis Castillo |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| St. Louis Cardinals at Chicago Cubs | 2026-07-03T20:05:00Z | Chicago Cubs -136, St. Louis Cardinals +113 |
| Pittsburgh Pirates at Washington Nationals | 2026-07-03T22:45:00Z | Pittsburgh Pirates +124, Washington Nationals -149 |
| Minnesota Twins at New York Yankees | 2026-07-03T23:05:00Z | Minnesota Twins +153, New York Yankees -187 |
| Baltimore Orioles at Cincinnati Reds | 2026-07-03T23:10:00Z | Baltimore Orioles -123, Cincinnati Reds +102 |
| Chicago White Sox at Cleveland Guardians | 2026-07-03T23:10:00Z | Chicago White Sox +109, Cleveland Guardians -132 |
| New York Mets at Atlanta Braves | 2026-07-03T23:15:00Z | Atlanta Braves -114, New York Mets -105 |
| San Francisco Giants at Colorado Rockies | 2026-07-04T00:10:00Z | Colorado Rockies +129, San Francisco Giants -156 |
| Tampa Bay Rays at Houston Astros | 2026-07-04T00:15:00Z | Houston Astros -105, Tampa Bay Rays -114 |
| Boston Red Sox at Los Angeles Angels | 2026-07-04T01:38:00Z | Boston Red Sox -105, Los Angeles Angels -114 |
| Miami Marlins at Athletics | 2026-07-04T01:40:00Z | Athletics -135, Miami Marlins +112 |
| Milwaukee Brewers at Arizona Diamondbacks | 2026-07-04T01:45:00Z | Arizona Diamondbacks +129, Milwaukee Brewers -156 |
| San Diego Padres at Los Angeles Dodgers | 2026-07-04T02:10:00Z | Los Angeles Dodgers -258, San Diego Padres +208 |
| Toronto Blue Jays at Seattle Mariners | 2026-07-04T02:10:00Z | Seattle Mariners +105, Toronto Blue Jays -126 |

## DraftKings Soccer odds snapshot

| Match | Start | DraftKings |
| --- | --- | --- |
| Egypt at Australia | 2026-07-03T18:00:00Z | Australia +265, Egypt +135, Draw +195 |
| Cape Verde at Argentina | 2026-07-03T22:00:00Z | Argentina -700, Cape Verde +1900, Draw +750 |
| Ghana at Colombia | 2026-07-04T01:30:00Z | Colombia -230, Ghana +750, Draw +340 |
| Morocco at Canada | 2026-07-04T17:00:00Z | Canada +400, Morocco -125, Draw +250 |
| France at Paraguay | 2026-07-04T21:00:00Z | France -525, Paraguay +1800, Draw +600 |
| Norway at Brazil | 2026-07-05T20:00:00Z | Brazil -115, Norway +310, Draw +280 |
| England at Mexico | 2026-07-06T00:00:00Z | England +140, Mexico +220, Draw +215 |
| Spain at Portugal | 2026-07-06T19:00:00Z | Portugal +300, Spain -105, Draw +260 |
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

- `data/daily/2026-07-03/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-03.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
