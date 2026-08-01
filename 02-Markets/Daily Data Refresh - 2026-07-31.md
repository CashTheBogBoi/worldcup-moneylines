# Daily Data Refresh - 2026-07-31

Generated: 2026-07-31T18:29:31.652Z

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

- **High MLB Market move** — New York Yankees at Chicago Cubs: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Starters** — Philadelphia Phillies at Baltimore Orioles: Official starter is still TBD (TBD vs Brandon Young). Block Bankroll Watch promotion until both starters are confirmed.
- **High MLB Starters** — Miami Marlins at New York Mets: Official starter is still TBD (Janson Junk vs TBD). Block Bankroll Watch promotion until both starters are confirmed.
- **High MLB Starters** — Detroit Tigers at Athletics: Official starter is still TBD (TBD vs Jeffrey Springs). Block Bankroll Watch promotion until both starters are confirmed.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| New York Yankees at Chicago Cubs | In Progress | Will Warren | Shota Imanaga | 0-0 |
| Pittsburgh Pirates at Cincinnati Reds | Pre-Game | Paul Skenes | Hunter Greene |  |
| Philadelphia Phillies at Baltimore Orioles | Scheduled | TBD | Brandon Young |  |
| St. Louis Cardinals at Toronto Blue Jays | Scheduled | Kyle Leahy | Dylan Cease |  |
| Arizona Diamondbacks at Cleveland Guardians | Scheduled | Mitch Bratt | Tanner Bibee |  |
| Chicago White Sox at Tampa Bay Rays | Scheduled | Erick Fedde | Nick Martinez |  |
| Miami Marlins at New York Mets | Scheduled | Janson Junk | TBD |  |
| Washington Nationals at Atlanta Braves | Scheduled | Foster Griffin | Bryce Elder |  |
| Texas Rangers at Houston Astros | Scheduled | Nathan Eovaldi | Hunter Brown |  |
| Kansas City Royals at Colorado Rockies | Scheduled | Michael Wacha | Tomoyuki Sugano |  |
| Milwaukee Brewers at Los Angeles Angels | Scheduled | Shane Drohan | Ryan Johnson |  |
| Detroit Tigers at Athletics | Scheduled | TBD | Jeffrey Springs |  |
| San Francisco Giants at San Diego Padres | Scheduled | Carson Whisenhunt | Bradgley Rodriguez |  |
| Boston Red Sox at Los Angeles Dodgers | Scheduled | Ranger Suarez | Edgardo Henriquez |  |
| Minnesota Twins at Seattle Mariners | Scheduled | Zebby Matthews | Bryce Miller |  |

## DraftKings MLB odds snapshot

| Game | Start | DraftKings |
| --- | --- | --- |
| New York Yankees at Chicago Cubs | 2026-07-31T18:21:00Z | Chicago Cubs -221, New York Yankees +166 |
| Pittsburgh Pirates at Cincinnati Reds | 2026-07-31T22:11:00Z | Cincinnati Reds +115, Pittsburgh Pirates -139 |
| Philadelphia Phillies at Baltimore Orioles | 2026-07-31T23:06:00Z | Baltimore Orioles -119, Philadelphia Phillies -102 |
| St. Louis Cardinals at Toronto Blue Jays | 2026-07-31T23:08:00Z | St. Louis Cardinals +158, Toronto Blue Jays -193 |
| Arizona Diamondbacks at Cleveland Guardians | 2026-07-31T23:11:00Z | Arizona Diamondbacks +124, Cleveland Guardians -150 |
| Chicago White Sox at Tampa Bay Rays | 2026-07-31T23:11:00Z | Chicago White Sox +114, Tampa Bay Rays -137 |
| Miami Marlins at New York Mets | 2026-07-31T23:11:00Z | none |
| Washington Nationals at Atlanta Braves | 2026-07-31T23:16:00Z | Atlanta Braves -118, Washington Nationals -102 |
| Texas Rangers at Houston Astros | 2026-08-01T00:16:00Z | Houston Astros -138, Texas Rangers +115 |
| Kansas City Royals at Colorado Rockies | 2026-08-01T00:41:00Z | Colorado Rockies -110, Kansas City Royals -110 |
| Milwaukee Brewers at Los Angeles Angels | 2026-08-01T01:39:00Z | Los Angeles Angels +139, Milwaukee Brewers -168 |
| Detroit Tigers at Athletics | 2026-08-01T01:41:00Z | Athletics +119, Detroit Tigers -143 |
| San Francisco Giants at San Diego Padres | 2026-08-01T01:46:00Z | San Diego Padres -150, San Francisco Giants +124 |
| Boston Red Sox at Los Angeles Dodgers | 2026-08-01T02:11:00Z | Boston Red Sox +113, Los Angeles Dodgers -136 |
| Minnesota Twins at Seattle Mariners | 2026-08-01T02:11:00Z | Minnesota Twins +138, Seattle Mariners -167 |
| St. Louis Cardinals at Toronto Blue Jays | 2026-08-01T19:08:00Z | St. Louis Cardinals +122, Toronto Blue Jays -147 |
| Chicago White Sox at Tampa Bay Rays | 2026-08-01T20:11:00Z | Chicago White Sox +147, Tampa Bay Rays -179 |
| Miami Marlins at New York Mets | 2026-08-01T20:11:00Z | Miami Marlins +108, New York Mets -131 |
| Minnesota Twins at Seattle Mariners | 2026-08-01T20:11:00Z | Minnesota Twins +147, Seattle Mariners -178 |
| Pittsburgh Pirates at Cincinnati Reds | 2026-08-01T22:41:00Z | Cincinnati Reds +104, Pittsburgh Pirates -126 |
| Philadelphia Phillies at Baltimore Orioles | 2026-08-01T23:06:00Z | Baltimore Orioles +117, Philadelphia Phillies -141 |
| Texas Rangers at Houston Astros | 2026-08-01T23:11:00Z | Houston Astros +108, Texas Rangers -131 |
| Arizona Diamondbacks at Cleveland Guardians | 2026-08-01T23:16:00Z | Arizona Diamondbacks +139, Cleveland Guardians -168 |
| Washington Nationals at Atlanta Braves | 2026-08-01T23:16:00Z | Atlanta Braves -193, Washington Nationals +158 |
| New York Yankees at Chicago Cubs | 2026-08-01T23:16:00Z | Chicago Cubs +104, New York Yankees -125 |
| Kansas City Royals at Colorado Rockies | 2026-08-02T00:11:00Z | Colorado Rockies -126, Kansas City Royals +104 |
| Boston Red Sox at Los Angeles Dodgers | 2026-08-02T01:11:00Z | Boston Red Sox +145, Los Angeles Dodgers -176 |
| Milwaukee Brewers at Los Angeles Angels | 2026-08-02T01:39:00Z | Los Angeles Angels +104, Milwaukee Brewers -126 |
| Detroit Tigers at Athletics | 2026-08-02T01:41:00Z | Athletics +118, Detroit Tigers -142 |

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

- `data/daily/2026-07-31/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-31.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
