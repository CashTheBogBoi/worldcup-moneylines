# FIFA Men's Ranking Data

Source: https://inside.fifa.com/fifa-world-ranking/men

Added: 2026-07-02

## What Was Added

- `npm run update:data` now fetches the FIFA/Coca-Cola men's world ranking page.
- The refresh extracts FIFA's page metadata:
  - Last official update date.
  - Next official update date.
  - Available ranking date ids.
  - FIFA highlight cards such as top ranked, biggest climber, and biggest drop.
- The refresh then calls FIFA's internal ranking overview endpoint until it finds a date id with a full ranking table.
- The resulting table is stored in:
  - `public/data/latest.json`
  - `data/daily/YYYY-MM-DD/latest.json`
  - `02-Markets/Daily Data Refresh - YYYY-MM-DD.md`

## Current Snapshot

- FIFA page latest official update: 2026-06-11.
- FIFA page next official update: 2026-07-20.
- Full table successfully loaded: 211 teams.
- Ranking table date id currently used: `id14870`.
- Ranking table listed date currently used: 2025-09-18.

## Important Caveat

The FIFA page metadata says the latest official update is 2026-06-11, but the public `ranking-overview` endpoint returned empty rows for the newer `FRS_Male_Football_*` ids. The refresh therefore falls back to the newest date id that returns a complete table.

This means the FIFA ranking data should be treated as a conservative country-strength prior, not as the final current-strength source. Current lineups, injuries, match context, market no-vig, and observed Elo/results still matter more for day-of picks.

## Model Use

The app now converts FIFA rank and points into soccer team rating fields only when a team does not already have a manual Model Lab rating.

Manual ratings still win. FIFA ranking fallback only fills gaps.

Mapped fields:

- `xgFor`: higher for stronger FIFA points/rank.
- `xgAgainst`: lower for stronger FIFA points/rank.
- `form`: scaled from FIFA strength.
- `homeEdge`: always `0`; FIFA ranking should not create venue edge.
- `news`: notes the FIFA rank and points used.

## Why This Helps

- Prevents market-only fallbacks for unmapped countries.
- Gives the soccer model a reasonable baseline for teams we have not researched deeply yet.
- Makes the daily data refresh more complete for World Cup and international soccer slates.

## Watch Items

- Keep checking whether FIFA exposes current 2026-06-11 rows through the ranking endpoint.
- If current rows become available, the refresh should automatically use the newest available date id.
- Backtest whether FIFA-rank fallback improves unmapped-team predictions or just adds noise.
- Replace FIFA-derived ratings with Model Lab ratings when we have real xG/news/team-specific research.
