# Daily Data Refresh - 2026-07-30

Generated: 2026-07-31T00:12:07.603Z

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

- **High MLB Market move** — Pittsburgh Pirates at Cincinnati Reds: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Market move** — Washington Nationals at Atlanta Braves: Game status is In Progress. Do not track this as a pregame pick; any current line is live-market contaminated.
- **High MLB Starters** — San Francisco Giants at San Diego Padres: Official starter is still TBD (TBD vs JP Sears). Block Bankroll Watch promotion until both starters are confirmed.

## MLB probable pitchers

| Game | Status | Away starter | Home starter | Score |
| --- | --- | --- | --- | --- |
| Texas Rangers at Tampa Bay Rays | Final | Cole Winn | Shane McClanahan | 2-3 |
| Kansas City Royals at Minnesota Twins | Final | Noah Cameron | Bailey Ober | 3-4 |
| New York Yankees at Chicago White Sox | Final | Ryan Weathers | Sean Burke | 1-2 |
| Chicago Cubs at St. Louis Cardinals | Final | Javier Assad | Andre Pallante | 4-2 |
| Pittsburgh Pirates at Cincinnati Reds | In Progress | Yohan Ramírez | Rhett Lowder | 0-2 |
| Miami Marlins at New York Mets | Warmup | Eury Pérez | Nolan McLean | 0-0 |
| Washington Nationals at Atlanta Braves | In Progress | Jake Irvin | Grant Holmes | 3-1 |
| Boston Red Sox at Athletics | Pre-Game | Sonny Gray | Mason Barnett | 0-0 |
| San Francisco Giants at San Diego Padres | Pre-Game | TBD | JP Sears | 0-0 |
| Seattle Mariners at Los Angeles Dodgers | Pre-Game | Bryan Woo | Roki Sasaki | 0-0 |

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

- `data/daily/2026-07-30/latest.json`
- `public/data/latest.json`
- `public/data/daily-2026-07-30.json`

Related:

- [[Injury and Lineup Intel]]
- [[MLB Research Important Info]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[FIFA Men's Ranking Data]]
