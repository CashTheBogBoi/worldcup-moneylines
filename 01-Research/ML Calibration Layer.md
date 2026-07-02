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
- MLB: **v2 (2026-07-01) switched from the 47-game 2025 postseason Statcast file to the
  2020-2024 Retrosheet game-info file, 10,616 regular-season games.** See
  [[Algorithm Audit - 2026-07-01]] finding F6: perturbation testing showed the old
  finite-difference optimizer was silently stalling on the 47-game MLB fit (the loss surface
  was too flat for numerical gradients at any starting point) — it was returning its priors
  back unchanged, not actually fitting anything. The postseason file is also structurally
  biased (postseason home teams are higher seeds). MLB now uses a dedicated analytic-gradient
  logistic regression (closed-form log-loss gradients, no stalling) instead of the shared
  finite-difference fitter Soccer still uses.

Run it with:

```bash
npm run train:ml-calibration
```

It writes `src/mlCalibration.js`, a generated data file (same pattern as
`worldCupBacktestData.js`/`mlbBacktestData.js`) that `main.jsx` imports.

## Method

- **Feature pipeline**: walk-forward team-state builders — no lookahead, a match/game only ever
  sees team state built from *earlier* matches/games. For MLB, the script uses
  **run-differential-based team strength** (the same feature `fetchMlbTeamRatings()` computes
  live from MLB Stats API standings) decomposed into separate offense (RS/G), defense (RA/G),
  and form (win%) terms, plus a starter runs-allowed-per-start feature and a bullpen-fatigue
  feature (pitchers used over the last 3 games vs the team's own season average) — not the
  richer Statcast xwOBA/hard-hit/whiff/CSW features, because the live app has no real-time feed
  for those.
- **Optimizer**: Soccer still uses the hand-rolled finite-difference gradient descent with
  momentum (normalized per-parameter units). **MLB switched to analytic-gradient logistic
  regression** (closed-form log-loss gradients) after perturbation testing showed the
  finite-difference fitter was stalling on the MLB loss surface — see the note above.
- **Regularization**: Soccer keeps L2 toward its prior (λ = 0.015, 852-match sample). MLB now
  uses a tiny L2 toward **zero** (λ = 1e-4), not toward the old hand-set priors — with 8,384
  training games, max-likelihood is the evidence, the old constants are not a leash worth
  keeping.
- **Compression is now fitted, not hand-tuned separately.** The old pipeline had a second,
  independently hand-set 0.78 shrink stacked on top of the fitted logit — a double-correction
  (audit finding F5). The MLB script now scans compression against TRAIN log-loss after the
  coefficients converge; it lands at **1.00**, confirming a max-likelihood fit needs no extra
  temperature.
- **Validation**: chronological 80/20 train/holdout split for both sports. All reported
  accuracy/Brier numbers below are on the **holdout** slice — matches/games the fit never
  touched — not in-sample. MLB additionally reports a **holdout reliability table**
  (predicted-probability bucket vs realized win rate) so any future haircut has to earn its
  place with evidence, not intuition.

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

**MLB v2** (train 8,384 / holdout 2,097 games, 2020-2024 Retrosheet, cold-start games excluded):

| Parameter | Prior | Fitted | Feeds |
|---|---:|---:|---|
| `homeLogit` | 0.160 | 0.1315 | `mlbModel()` home baseline |
| `offK` | 0.230 | 0.2186 | RS/G differential coefficient |
| `defK` | 0.230 | 0.2176 | RA/G differential coefficient |
| `formK` | 0.230 | 0.1322 | win%-form differential coefficient |
| `starterK` | 0.045 | 0.0591 | starter runs-allowed-per-start differential |
| `bullpenK` | 0.000 | -0.0288 | new — bullpen fatigue differential |
| `backtestCompression` | 0.780 | 1.0000 | raw-probability temperature (fitted, not stacked) |
| `backtestCap` | 0.820 | 0.8200 | probability ceiling |
| `xeraLogitPerRun` (converted) | 0.350 | **0.0335** | live starter xERA coefficient, cap ±0.25 |

Holdout accuracy: **54.3% → 55.4%**. Holdout Brier: **0.246 → 0.246** (unchanged — MLB single
games are close to a coin flip with slightly more information than a coin, and a game-level
Brier floor near 0.24 is what the market itself achieves per [[MLB Historical Odds Data 2012-2021]]).
Holdout reliability by confidence bucket (predicted vs actual — this is the evidence that no
extra haircut is needed):

| Bucket | n | Predicted | Actual |
|---|---:|---:|---:|
| 50-55% | 1,132 | 52.4% | 52.7% |
| 55-60% | 681 | 57.2% | 56.2% |
| 60-65% | 245 | 61.9% | 62.0% |
| 65-72% | 39 | 66.7% | 74.4% |
| Away favorite | 642 | 53.6% | 54.0% |

**`xeraLogitPerRun` is now fitted** — the old hand-set `0.35` was roughly **10x too aggressive**;
the data supports ~0.033 logit per run of xERA gap. `starterK` is fitted per run-allowed-per-start
and converted to the live per-9-innings scale using average starter innings/start (5.1).

The 47-game 2025 postseason fit and the old after-loss/strength-composite parameters are
retired — see [[Algorithm Audit - 2026-07-01]] for the full reasoning (F6, F8, F9).

## What did NOT get fitted (and why)

- **`SOCCER_DRAW_ANCHOR_WEIGHT`** (the live draw-probability anchor toward the market's own
  draw price) — there is no market-odds data in a 1930–2014 results file, so this constant has
  no offline training signal at all. Stays hand-set at `0.25`.
- **`LEAGUE_AVG_GOALS` / `MIN_XG` / `MAX_GOALS`** — structural hyperparameters of the Poisson
  grid, not calibration targets.
- **Park factor** — a static context table exists (see [[Algorithm Audit - 2026-07-01]]) but is
  not yet a fitted model term; promotable via the Retrosheet Park ID column in a future pass.

## Live trust dial (keeps learning after the offline fit)

The offline fit is a starting point, not the final word — `computeMlCalibrationTrust()` in
`main.jsx` keeps adjusting how much the live app trusts the fitted coefficients as real graded
picks accumulate in Model Lab:

- `mlTrust.soccer` / `mlTrust.mlb` start at **1** (fully use the fitted values) — with zero
  graded picks there's no live signal to contradict the offline holdout result.
- Each render, live Brier for that sport's graded, **calibration-eligible** Model Lab picks
  (market-only, post-start-tracked, and flagged-contaminated picks excluded — see
  [[Algorithm Audit - 2026-07-01]] F11) is shrunk toward the sport's **offline holdout Brier**
  by a pseudo-count of 10 (same shrinkage math as the adaptive blend weight). It also now
  scores the pick's stored **model-only** probability (`researchProbability`), not the blended
  probability — the same self-referential problem the adaptive weight had (F2) applied here
  too. If live results are calibrating *worse* than the offline holdout promised, trust drops
  (floor 0.4) and the effective coefficient pulls back toward the original hand-set prior. If
  live results are in line with or better than the holdout, trust stays at 1.
- `calibratedValue(sport, key)` in `main.jsx` is what every model formula actually calls now —
  it linearly blends `prior` and `fitted` by the current trust, so this reacts every render
  without any extra persistence: the graded picks it reads (`modelPicks`) are already
  git-backed via the existing vault state pipeline (see [[Data Pipeline and Persistence]]).

## Honest limits

- Both fits are **in-repo, offline, and static** until re-run — they don't retrain
  automatically. Re-run `npm run train:ml-calibration` after adding a materially larger
  historical dataset (a fresh MLB season, more World Cup tournaments) and commit the
  regenerated `src/mlCalibration.js`.
- 2,097 MLB holdout games and 171 soccer holdout matches are both informative now, but the MLB
  Brier (0.246) is still slightly worse than the market's own ~0.240 — the model has not yet
  earned the right to disagree with the market on its own. The consensus-edge gate and adaptive
  blend weight exist precisely because of this; do not read the fit as "the model beats Vegas."
- The live trust dial has almost no calibration-eligible graded picks to react to yet (see
  [[Results Log]] — most existing picks are excluded per F11) — it will do more as clean,
  pregame, model-driven picks accumulate in Model Lab.

Related: [[Algorithm v1 Current Spec]], [[Algorithm Lessons From Backtests]],
[[World Cup Backtest Miss Patterns]], [[MLB Backtest Miss Patterns]],
[[Algorithm Audit - 2026-07-01]], [[Data Pipeline and Persistence]].
