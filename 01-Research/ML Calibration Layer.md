# ML Calibration Layer

Adds a genuine machine-learning step on top of the existing pure-statistical models
(Dixon-Coles/Poisson for Soccer, a two-way logistic for MLB) rather than replacing them. The
Poisson/logistic math is unchanged — only the coefficients that feed it are learned from data
instead of hand-guessed. See [[Algorithm v1 Current Spec]] for the models these coefficients
plug into.

## What changed

Before this layer, constants like the Dixon-Coles `rho`, the soccer draw soft cap, and the MLB
strength/home-logit/compression coefficients were all hand-set numbers chosen by inference and
backtest-watching (see the `Algorithm v1 Current Spec.md` history). `scripts/train-ml-calibration.mjs`
now **fits** those same constants via regularized gradient descent against the exact historical
datasets the Backtest tab already uses:

- World Cup: `WorldCupMatches.csv`, 852 matches (1930–2014)
- MLB: the 2025 postseason Statcast pitch-by-pitch file, 47 games

Run it with:

```bash
npm run train:ml-calibration
```

It writes `src/mlCalibration.js`, a generated data file (same pattern as
`worldCupBacktestData.js`/`mlbBacktestData.js`) that `main.jsx` imports.

## Method

- **Feature pipeline**: identical, walk-forward team-state builders to the ones already in
  `scripts/backtest-worldcup.mjs` and `scripts/backtest-mlb-statcast.mjs` — no lookahead, a
  match only ever sees team state built from *earlier* matches. For MLB specifically, the
  script uses **run-differential-based team strength** (the same feature
  `fetchMlbTeamRatings()` computes live from MLB Stats API standings), not the richer
  Statcast xwOBA/hard-hit/whiff/CSW features the backtest script also has — because the live
  app has no real-time feed for those, a fit against them wouldn't transfer to the live model.
- **Optimizer**: hand-rolled finite-difference gradient descent with momentum, operating in
  per-parameter normalized units (no new npm dependency — consistent with how Poisson/Elo/Kelly
  are already hand-implemented in this codebase).
- **Regularization**: L2, pulling every fitted value back toward its original hand-set default
  (the "prior"). MLB uses a much stronger pull (λ = 0.06 vs Soccer's 0.015) because 47 games is
  a thin sample for 5 free parameters — this is the same shrink-toward-prior idiom
  `computeAdaptiveModelWeight()` already uses for the market/model blend weight.
- **Validation**: chronological 80/20 train/holdout split. All reported accuracy/Brier numbers
  below are on the **holdout** slice — matches/games the fit never touched — not in-sample.

## What got fitted

**Soccer** (train 681 / holdout 171 matches):

| Parameter | Prior | Fitted | Feeds |
|---|---:|---:|---|
| `formTiltScale` | 40.0 | 40.06 | `soccerModel()` recent-form tilt denominator |
| `rho` (Dixon-Coles) | -0.050 | -0.0475 | low-score draw-mass correction |
| `baseHomeBoost` | 0.000 | 0.0205 | new — generic home-fixture edge, additive to Model Lab's `homeEdge` |
| `drawSoftCap` | 0.340 | 0.2828 | draw-probability ceiling in `calibrateModelOutcomes()` |

Holdout accuracy: **35.7% → 42.1%**. Holdout Brier: **0.217 → 0.210**. The move is almost
entirely the draw cap tightening from 34% to 28% — confirms
[[World Cup Backtest Miss Patterns]]'s finding that draw over-prediction was the single biggest
miss pattern, now with a data-fit correction instead of a hand-picked one.

**MLB** (train 37 / holdout 10 games):

| Parameter | Prior | Fitted | Feeds |
|---|---:|---:|---|
| `homeLogit` | 0.160 | 0.1602 | `mlbModel()` home baseline |
| `strengthK` | 0.270 | 0.2269 | run-diff strength coefficient |
| `afterLossScale` | 0.600 | 0.5977 | after-loss bounce-back nudge |
| `backtestCompression` | 0.780 | 0.7687 | raw-probability compression toward 50/50 |
| `backtestCap` | 0.820 | 0.8227 | compressed-probability ceiling |

Holdout accuracy: **40.0% → 40.0%** (flat — 10 holdout games is too few to move a hit-rate).
Holdout Brier: **0.268 → 0.264** (small improvement). `strengthK` shrinking from 0.27 to 0.227
is the only parameter that moved meaningfully — read as "trust the postseason sample, but only
a little" given the heavy regularization. Treat the MLB fit as a mild, defensible nudge, not a
strong claim — the sample is genuinely thin.

## What did NOT get fitted (and why)

- **`XERA_LOGIT_PER_RUN`** (starter xERA coefficient) — the Statcast feed has no
  live-comparable per-starter season xERA aggregate to fit against without building a much
  larger pitcher-identity pipeline. Stays hand-set at `0.35`.
- **`SOCCER_DRAW_ANCHOR_WEIGHT`** (the live draw-probability anchor toward the market's own
  draw price) — there is no market-odds data in a 1930–2014 results file, so this constant has
  no offline training signal at all. Stays hand-set at `0.25`.
- **`LEAGUE_AVG_GOALS` / `MIN_XG` / `MAX_GOALS`** — structural hyperparameters of the Poisson
  grid, not calibration targets.

## Live trust dial (keeps learning after the offline fit)

The offline fit is a starting point, not the final word — `computeMlCalibrationTrust()` in
`main.jsx` keeps adjusting how much the live app trusts the fitted coefficients as real graded
picks accumulate in Model Lab:

- `mlTrust.soccer` / `mlTrust.mlb` start at **1** (fully use the fitted values) — with zero
  graded picks there's no live signal to contradict the offline holdout result.
- Each render, live Brier for that sport's graded Model Lab picks is shrunk toward the sport's
  **offline holdout Brier** by a pseudo-count of 10 (same shrinkage math as the adaptive blend
  weight). If live results are calibrating *worse* than the offline holdout promised, trust
  drops (floor 0.4) and the effective coefficient pulls back toward the original hand-set
  prior. If live results are in line with or better than the holdout, trust stays at 1.
- `calibratedValue(sport, key)` in `main.jsx` is what every model formula actually calls now —
  it linearly blends `prior` and `fitted` by the current trust, so this reacts every render
  without any extra persistence: the graded picks it reads (`modelPicks`) are already
  git-backed via the existing vault state pipeline (see [[Data Pipeline and Persistence]]).

## Honest limits

- Both fits are **in-repo, offline, and static** until re-run — they don't retrain
  automatically. Re-run `npm run train:ml-calibration` after adding a materially larger
  historical dataset (a fresh MLB season, more World Cup tournaments) and commit the
  regenerated `src/mlCalibration.js`.
- 10 MLB holdout games and 171 soccer holdout matches are informative, not definitive. Treat
  the accuracy/Brier deltas above as directional evidence the coefficients moved in a
  reasonable direction, not proof of a durably better model.
- The live trust dial currently has almost no graded picks to react to (see
  [[Results Log]]) — it will do more as the Model Lab picks pile up.

Related: [[Algorithm v1 Current Spec]], [[Algorithm Lessons From Backtests]],
[[World Cup Backtest Miss Patterns]], [[MLB Backtest Miss Patterns]], [[Data Pipeline and Persistence]].
