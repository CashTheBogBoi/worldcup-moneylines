# Algorithm v1 Current Spec

This note describes what the app currently does after the MLB, Soccer, Intel, backtest,
**automated-data-pipeline**, and **backtest-calibration** upgrades (v1.2, 2026-07-01). For the data sourcing + persistence
infrastructure behind this, see [[Data Pipeline and Persistence]].

**v1.4 (2026-07-01):** every hand-set constant below that has a usable offline training signal
(Dixon-Coles `rho`, the soccer draw soft cap, MLB's strength/home-logit/compression terms) is
now fit via regularized gradient descent against the historical backtest datasets instead of
guessed, with a live trust dial that keeps adjusting from graded Model Lab picks. The formulas
themselves are unchanged — see [[ML Calibration Layer]] for the full methodology and results.

**v2 (2026-07-01, post-audit):** the MLB model was rebuilt after [[Algorithm Audit - 2026-07-01]].
Headlines — read that note for the full list:

- MLB strength is DECOMPOSED (offense RS/G, defense RA/G, form win%) with coefficients fitted
  by max-likelihood on the 10,616-game 2020-2024 Retrosheet backtest (not 37 postseason games).
- Starter xERA coefficient is now FITTED at ~0.033 logit/run, cap ±0.25 (the hand-set 0.35/±0.8
  was ~10x too big); xERA is PA-shrunk with a prior-year blend before June.
- The after-loss prior, the stacked 0.78 compression, and the >72%/away-favorite haircuts are
  REMOVED — the fitted temperature is 1.00 and the holdout reliability table is clean, so they
  were double-corrections. See [[MLB After Loss Trend Prior]] (deprecated as a model input).
- New fitted bullpen-fatigue term (last 3 days' pitchers used vs 4.32 baseline, coeff −0.029).
- Adaptive blend weight is now SKILL-RELATIVE (model-vs-market Brier gap on the same picks),
  not absolute Brier; picks store model-only and market probabilities for that purpose.
- Gate: minimum 1.5% edge AND model must beat consensus no-vig (kills one-book phantom edges);
  MLB stale window 30 min; closing prices freeze at first pitch (CLV is trustworthy again).
- Optional Pinnacle sharp anchor (`VITE_ODDS_SHARP_REGION=eu`), opening-line capture with a
  moved-against-you gate warning, lineups-posted warning, extreme-park context note.

## Scope

The app is now a local sports betting research lab focused on:

- Soccer / World Cup moneylines
- World Cup futures
- MLB moneylines
- Local pick tracking
- Backtesting prediction quality

It does not place bets and does not guarantee outcomes.

## Live odds inputs

The app pulls odds from The Odds API when `.env` has `VITE_ODDS_API_KEY`.

Configured keys:

```text
VITE_ODDS_SPORT_KEY=soccer_fifa_world_cup
VITE_ODDS_MLB_SPORT_KEY=baseball_mlb
VITE_ODDS_FUTURES_KEY=soccer_fifa_world_cup_winner
VITE_ODDS_REGION=us
```

Markets:

- Soccer matches: `h2h`
- MLB games: `h2h`
- Futures: `soccer_fifa_world_cup_winner`

## Market probability

For match markets, the app converts sportsbook American odds into raw implied probability, removes vig, and builds a market baseline.

Current v1 improvement:

- It does not rely only on one best line for market probability.
- It de-vigs each book first.
- It averages de-vigged probabilities across books.
- It still uses the best available line for break-even/EV because line shopping matters.

## Soccer model

The Soccer model is an independent Dixon-Coles / Poisson-style model using editable Model Lab inputs:

- `xgFor`
- `xgAgainst`
- `form`
- `homeEdge`

Outputs:

- Home probability
- Draw probability
- Away probability

**Results-based Elo (v1.1):** on top of the xG inputs, each team carries an Elo rating that
starts neutral (1500) and auto-updates from `/scores` results (deduped by match id, persisted).
It feeds a bounded ±20% tilt into the goal expectations, so soccer strength self-corrects from
real outcomes without re-tuning xG/form by hand. It starts at zero effect (neutral) and only
diverges as results accrue, so it never double-counts the xG inputs.

Backtest calibration (v1.2):

- Draw probability is anchored 25% toward the market draw price when available.
- Draw probability has a soft cap around 34%; excess draw probability is redistributed to the two sides.
- If Draw is barely ahead of the best side, it is discounted because historical draw predictions missed far too often.
- Lower-confidence Soccer reads get less model weight.
- See [[World Cup Backtest Miss Patterns]].

## MLB model

The MLB live-board model is a two-way logistic strength model, computed entirely in logit
units and calibrated to baseball's compressed win-probability range (an elite team hosting the
worst team tops out around 73% / -271, not the 95% a soccer-sized coefficient produced).

**Now automated (v1.1) — no manual entry:**

- **Team strength** is auto-derived from MLB Stats API standings: run differential per game
  (RS/G and RA/G) plus win%, mapped onto the same `xgFor`/`xgAgainst`/`form` fields. This is
  what actually turns the MLB model ON — before v1.1 no MLB team had a rating, so every MLB
  game silently fell through to market-only and the starter work never even executed.
- **Starting pitcher quality** is auto-derived: confirmed probable starters from the MLB Stats
  API, matched by name to Baseball Savant expected stats (xERA). The away-minus-home xERA gap
  (scaled, capped) shifts the win probability — pitching is the biggest single-game lever.

A manual Model Lab rating still overrides the auto rating if entered.

Additional MLB context now wired:

- **After-loss trend prior (v1.3):** recent MLB scores from The Odds API are converted into each
  team's last completed result. If a team lost its previous game and appears in the TeamRankings
  after-loss table, the model applies a small capped logit nudge:

```text
afterLossLogit = clamp((teamAfterLossWinPct - 0.500) * 0.60, -0.08, +0.08)
```

This is intentionally smaller than pitcher quality and the market anchor because [[MLB Historical Odds Data 2012-2021]] showed MLB moneylines are already well calibrated.

Inputs researched but not yet wired into the probability (still on the roadmap):

- xwOBA / hard-hit / whiff / CSW beyond the starter xERA term
- bullpen fatigue
- lineup confirmation
- weather / park

See [[MLB Research Important Info]], [[MLB Statcast Feature Dictionary]], and
[[MLB After Loss Trend Prior]].

Backtest calibration (v1.2):

- Raw MLB model probabilities are compressed toward 50/50 before blending with the market.
- High-confidence MLB reads receive a model-weight haircut because the postseason Statcast backtest showed poor high-confidence calibration.
- Away-favorite MLB reads receive a smaller haircut because away predictions were weaker in the postseason sample.

## Blend (now adaptive, v1.1)

The model's share of the blend is no longer a fixed 45%. It **flexes 25%–60% based on the
model's measured calibration** (Brier score): well-calibrated → the model earns more say;
near-coin-flip or worse → it's pulled back toward the market.

```text
model share = f(Brier)   # 0.18 Brier -> 60% model, 0.28 Brier -> 25% model
```

- Live signal = Brier of graded Model Lab picks.
- Shrunk toward the historical backtest Brier (~0.235) by sample size, so a handful of results
  can't swing it wildly but a real track record eventually rules.
- Shown live on the Algorithm tab's "Adaptive weights" card.

The model weight is *further* reduced per-event when:

- Team ratings are missing (falls to market-only)
- Backtest calibration flags the sport-specific pattern as historically fragile
- High-impact Intel is pending
- A game has started
- Odds are stale

## Intel adjustment

Team-specific Intel can now adjust model strength before the market blend.

Rules:

- If a note names a team, it can move that team's rating.
- If a note is generic, it lowers confidence but does not punish both teams.
- `High`, `Medium`, `Low` scale impact.
- `Confirmed`, `Watch`, `Cleared` scale whether the note applies.

See [[Injury and Lineup Intel]].

## Candidate filtering

The app has a minimum model-chance filter in the topbar.

Default:

```text
33%
```

Purpose:

- Hide tiny longshot noise.
- Keep the board focused on picks with a realistic chance to hit.

## Bankroll Watch

Bankroll Watch:

- Ranks Soccer and MLB together.
- Prioritizes DraftKings when available.
- Uses edge, EV proxy, model confidence, stale penalties, Intel penalties, and DraftKings bonus.
- Uses capped quarter-Kelly logic.

Hard cap:

```text
0.25% - 1% bankroll max label
```

## Futures

Futures are handled separately.

Current logic:

- Convert futures price to implied probability.
- Normalize the futures board (de-vig the whole field).
- Compare book fair probability to Kalshi probability.

**Kalshi is now LIVE (v1.1):** the comparison uses live Kalshi prediction-market probabilities
pulled from Kalshi's public API each refresh, not the old hardcoded snapshot. Because Kalshi
403s browser-origin requests, this goes through a Vite dev proxy that strips the Origin header
(see [[Data Pipeline and Persistence]]). On any failure it falls back to the last saved live
values, then the built-in snapshot. Example: France read 33.8% live vs 29.1% in the old snapshot.

Why:

- Futures boards have large vig.
- Raw implied futures probability is not comparable to prediction-market probability unless normalized.
