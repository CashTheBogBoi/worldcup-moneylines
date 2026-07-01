# Source Map

For source quality rules, see [[Source Reliability Tiers]].

## Bovada

Use Bovada as a manual market research source for:

- World Cup match pages
- Tournament futures
- Specials
- Live/in-play context

Bovada does not appear to provide a public developer API. For automated app data, use an odds aggregator that includes Bovada when available instead of scraping Bovada pages.

Useful pages:

- https://www.bovada.lv/sports/soccer/fifa-world-cup
- https://www.bovada.lv/sports/soccer/fifa-world-cup/fifa-world-cup-matches
- https://www.bovada.lv/sports/soccer/fifa-world-cup/fifa-world-cup-futures/tournament-futures/futures-odd

Related:

- [[Bovada Futures Snapshot]]
- [[June 30 2026 Match Slate]]
- [[External Source Research - 2026-06-30]]

## BetUS - archived / not trusted

Do not use BetUS as an active algorithm source. It is archived here only because it was researched earlier and then removed from the model.

It had exposed a broader market menu than the starter app currently models:

- Regulation moneyline
- Handicap/spread
- Totals
- Team totals
- To qualify
- Both teams to score
- Scorer props
- Golden Boot futures

Research note: removed from active source set at user request.

## PrizePicks

PrizePicks is not a normal sportsbook moneyline source. Treat it as:

- Soccer props
- Projection research
- Team picks where available
- Payout-multiplier markets
- Pick notes

Useful pages:

- https://www.prizepicks.com/tags/2026-world-cup
- https://www.prizepicks.com/category/soccer

Related:

- [[Pick Notebook]]

## The Odds API

Best starter API for the app:

- Match sport key: `soccer_fifa_world_cup`
- Match market: `h2h`
- Futures key: `soccer_fifa_world_cup_winner`
- Club World Cup key: `soccer_fifa_club_world_cup`
- Historical odds endpoint available on paid plans

Useful docs:

- https://the-odds-api.com/sports-odds-data/sports-apis.html
- https://the-odds-api.com/liveapi/guides/v4/
- https://the-odds-api.com/historical-odds-data/

## Deeper feeds to research later

- OpticOdds: broad sportsbook coverage, historical odds, props, faster feeds.
- SportsGameOdds: World Cup coverage, PrizePicks-oriented endpoints, props.
- TheRundown: odds, scores, schedules, Kalshi/Polymarket.

## Kalshi

Use Kalshi as a prediction-market source, not a sportsbook source.

**STATUS: now wired LIVE (v1.1).** The app pulls live World Cup winner probabilities from
Kalshi's public markets API (`series_ticker=KXMENWORLDCUP`) each refresh and uses them for the
futures comparison, replacing the old hardcoded snapshot. Kalshi 403s browser-origin requests,
so it goes through a Vite dev proxy that strips the Origin header — see
[[Data Pipeline and Persistence]]. Falls back to last-saved values, then the snapshot.

Useful pages:

- https://kalshi.com/markets/kxmenworldcup/mens-world-cup-winner/kxmenworldcup-26
- https://docs.kalshi.com/welcome
- https://docs.kalshi.com/api-reference/search/get-filters-for-sports

Integration note:

- Kalshi offers REST, WebSocket, and FIX APIs for real-time market data and trading.
- Prices come back as decimal dollars (0-1) = probability directly; the app uses the bid/ask
  midpoint, falling back to last trade.

## MLB Stats API + Baseball Savant (auto, no key)

Wired live in v1.1 to auto-derive the MLB model instead of hand-typing team ratings:

- **MLB Stats API** (`statsapi.mlb.com`) — confirmed probable starters (`hydrate=probablePitcher`)
  and standings (run differential, RS/G, RA/G, win%). CORS-friendly, works in-browser.
- **Baseball Savant** (`baseballsavant.mlb.com`) — expected-stats CSV export (`&csv=true`) for
  starter xERA / xwOBA. Works in-browser.

See [[MLB Research Important Info]] and [[Data Pipeline and Persistence]].

## Neil Paine / Polymarket

Use Neil Paine's tracker as methodology inspiration for normalized advancement probabilities.

Useful page:

- https://neilpaine.substack.com/p/2026-world-cup-odds-tracker

Key idea:

- Normalize odds within each stage/subset so the total number of winners/advancers matches the real competition structure.

## Local future match baseline

Use this as an imported model-prior source for 2026 group-stage matches.

Current file:

- `/Users/cashmcdearis/Downloads/future_match_probabilities_baseline.csv`

Active note:

- [[Future Match Probability Baseline]]

Use case:

- Elo/injury baseline for future group matches,
- trusted external prior in `matchResearchModels`,
- comparison against live sportsbook lines.

## TeamRankings

Use TeamRankings for trend priors, not direct bets.

Current tracked page:

- https://www.teamrankings.com/mlb/trend/win_trends/is_after_loss?range=yearly_mlb_since_2022

Active note:

- [[MLB After Loss Trend Prior]]

Use case:

- after-loss bounce-back/fade context,
- tie-breaker for MLB moneyline reads,
- confidence adjustment only after previous-game result is known.

## Statcast

Use Statcast data for MLB feature engineering.

Current local dataset:

- `/Users/cashmcdearis/Downloads/Data_MLB_2025_StatcastPostseason_PitchByPitch_20251102a.csv`

Active notes:

- [[MLB Statcast Feature Dictionary]]
- [[MLB Statcast Postseason Backtest]]
- [[MLB Backtest Miss Patterns]]

## Local MLB historical odds

Use this as a historical market-calibration source, not a live odds source.

Current file:

- `/Users/cashmcdearis/Downloads/oddsData.csv.zip`

Active note:

- [[MLB Historical Odds Data 2012-2021]]

Use case:

- calibrate MLB moneyline probabilities,
- estimate normal MLB vig,
- study favorite buckets,
- remind the algorithm that the market is already well calibrated.

Limit:

- no explicit opponent column,
- no sportsbook name,
- no open/close timestamp,
- no injuries/lineups/pitchers,
- requires reconstruction and score joins before ROI analysis.
