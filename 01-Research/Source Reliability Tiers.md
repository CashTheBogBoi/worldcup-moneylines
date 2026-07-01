# Source Reliability Tiers

This note defines how strongly each source should influence the app.

## Tier 1: Structured live market data

Use directly in the app.

- The Odds API
- DraftKings line when present in Odds API
- other regulated sportsbook lines through Odds API

Use for:

- current moneyline price,
- break-even probability,
- market consensus,
- line shopping,
- snapshots.

## Tier 2: Official / near-official availability data

Use for Intel before picks.

MLB:

- MLB Injuries
- MLB Probable Pitchers
- official starting lineups when available

Soccer:

- FIFA match centre
- official lineups
- official federation/team updates

Use for:

- injury status,
- starting pitcher,
- starting XI,
- lineup confirmation.

## Tier 3: Specialist research / projections

Use as a model input or confidence adjustment.

- RotoWire lineups
- RotoGrinders weather
- Covers injury pages
- ESPN injuries
- TeamRankings trends
- Statcast data
- local future match probability baseline

Use for:

- context,
- feature engineering,
- model adjustment,
- manual research notes.

## Tier 4: Prediction-market context

Use as a probability comparison, not a sportsbook line.

- Kalshi
- Polymarket-style trackers
- Neil Paine methodology

Use for:

- futures comparison,
- normalized probability thinking,
- market sanity checks.

## Tier 5: Manual screenshots / notes

Use only as research context.

- Bovada manual pages
- PrizePicks screens
- manually entered lines

Use for:

- notebook context,
- props ideas,
- unavailable markets.

## Excluded / not trusted

- BetUS is archived and should not be used as an active source.

Reason:

- user explicitly said not to trust it.
