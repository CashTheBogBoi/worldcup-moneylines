# Daily Data Refresh - 2026-07-29

Generated: 2026-07-29T16:11:51.976Z

This note was created by `npm run update:data`. It is the local snapshot used to keep the app
and Obsidian vault aligned without Firebase or cloud storage.

## Refresh status

| Source | Status |
|---|---|
| The Odds API Soccer | Skipped / failed |
| The Odds API MLB | Skipped / failed |
| MLB Stats API probable pitchers | Loaded |
| FIFA men's ranking | Loaded (211 teams, id14870) |

## Errors / warnings

- soccerOdds: 401 Unauthorized
- mlbOdds: 401 Unauthorized
- soccerFutures: 401 Unauthorized
- mlbScores: 401 Unauthorized
- soccerScores: 401 Unauthorized
- fifaMensRankings: FIFA page shows latest official update 2026-07-20, but the public ranking endpoint returned rows for 2025-09-18 (id14870). Treat as a fallback ranking prior until FIFA exposes current rows.

## Top intel

- **High MLB Market move** — Philadelphia Phillies at Miami Marlins: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Starters** — Colorado Rockies at San Diego Padres: Official starter is still TBD (Gabriel Hughes vs TBD). Block Bankroll Watch promotion until both starters are confirmed.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Philadelphia Phillies at Miami Marlins | In Progress | Jesús Luzardo | Ryan Gusto | 0-0 |
| Arizona Diamondbacks at Pittsburgh Pirates | Warmup | Eduardo Rodriguez | Jared Jones | 0-0 |
| Toronto Blue Jays at Washington Nationals | Pre-Game | Trey Yesavage | Zack Littell | 0-0 |
| Baltimore Orioles at Detroit Tigers | Pre-Game | Trevor Rogers | Tarik Skubal | 0-0 |
| Atlanta Braves at New York Mets | Pre-Game | AJ Smith-Shawver | Sean Manaea | 0-0 |
| Atlanta Braves at New York Mets | Scheduled | Chris Sale | Christian Scott |  |
| Milwaukee Brewers at San Francisco Giants | Scheduled | Shane Drohan | Logan Webb |  |
| Colorado Rockies at San Diego Padres | Scheduled | Gabriel Hughes | TBD |  |
| Texas Rangers at Tampa Bay Rays | Scheduled | MacKenzie Gore | Casey Legumina |  |
| Cleveland Guardians at Cincinnati Reds | Scheduled | Joey Cantillo | Brady Singer |  |
| Kansas City Royals at Minnesota Twins | Scheduled | Randy Dobnak | Joe Ryan |  |
| New York Yankees at Chicago White Sox | Scheduled | Cam Schlittler | Davis Martin |  |
| Chicago Cubs at St. Louis Cardinals | Scheduled | Matthew Boyd | Dustin May |  |
| Houston Astros at Los Angeles Angels | Scheduled | Hayden Wesneski | Grayson Rodriguez |  |
| Boston Red Sox at Athletics | Scheduled | Patrick Sandoval | Jacob Lopez |  |
| Seattle Mariners at Los Angeles Dodgers | Scheduled | Emerson Hancock | Eric Lauer |  |

## DraftKings MLB odds snapshot

_No rows returned._

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

- `data/daily/2026-07-29/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-29.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
