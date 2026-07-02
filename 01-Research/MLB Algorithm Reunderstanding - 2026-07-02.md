# MLB Algorithm Reunderstanding - 2026-07-02

Purpose: restate the current MLB model from the actual code and generated calibration files after the algorithm audit. This is not a code-change note. It is a working understanding note for future audits.

Related:

- [[Algorithm Audit - 2026-07-01]]
- [[Algorithm v1 Current Spec]]
- [[ML Calibration Layer]]
- [[MLB Historical Odds Data 2012-2021]]
- [[MLB After Loss Trend Prior]]
- [[MLB Backtest Miss Patterns]]
- [[Model Quality Review - 2026-07-01]]

## Current High-Level Truth

The MLB algorithm is now a market-anchored, two-way logistic model.

It should be understood as:

```text
final pick probability =
  market consensus no-vig blended with
  MLB logistic team/starter/bullpen model,
  then filtered by readiness gates
```

The model is not trying to beat MLB by raw team power alone. The historical odds study showed MLB markets are highly calibrated, so the model is allowed to disagree with the market only when it clears strict gates.

## Current Inputs

### Market Inputs

- The Odds API `baseball_mlb` h2h moneylines.
- Market probability is not taken from one best line.
- Each book is de-vigged first.
- The de-vigged probabilities are averaged into a consensus market baseline.
- If the configured sharp book is present, it can anchor the market estimate.
- The best posted line is still used for break-even and EV because line shopping matters.

### Team Strength Inputs

Team ratings are auto-derived from MLB Stats API standings:

- runs scored per game (`RS/G`) as offense,
- runs allowed per game (`RA/G`) as defense,
- win percentage mapped into `form`,
- optional manual Model Lab team rating overrides the auto rating.

The important current detail: the model no longer uses one composite strength number. It decomposes offense, defense, and form because starter quality and team run prevention can otherwise get double-counted.

### Starter Inputs

Starter data comes from:

- MLB Stats API schedule endpoint with `hydrate=probablePitcher,team,lineups`.
- Baseball Savant expected-statistics CSV for starter xERA.

The starter registry is keyed as:

```text
date::normalized_team_name
```

Starter xERA is shrunk before use:

- raw Savant xERA is not trusted directly,
- minimum Savant sample is 25 PA,
- current xERA is shrunk toward league-average xERA of 4.20,
- before June, prior-year xERA can also inform the shrinkage,
- if both starters have xERA, the model applies the away-minus-home xERA gap.

Current fitted starter coefficient:

```text
xeraLogitPerRun ≈ 0.0335
cap = ±0.25 logit
```

This is much smaller than the old hand-set starter swing. The audit found the old xERA term was roughly 10x too aggressive.

### Bullpen Inputs

Bullpen fatigue is wired as a fitted small term.

Input:

```text
average pitchers used by team over previous 3 days - 4.32 league baseline
```

The live fetch uses MLB Stats API schedules and boxscores.

Current fitted coefficient:

```text
bullpenK ≈ -0.0288
```

Interpretation: extra recent bullpen usage slightly hurts that team, but this is a nudge, not a pick driver.

### Lineup Inputs

Lineups are not a probability term yet.

They are used as a warning/gate context:

- If at least one lineup is not posted, the Ready-to-Bet gate warns.
- This does not automatically block the pick.
- It should block the bettor mentally when key bats are uncertain.

### Park Inputs

Extreme park factors are shown in the model note, not priced into the probability yet.

Current role:

- context only,
- not fitted,
- not part of the logit.

Future role:

- can become a fitted coefficient using park IDs from historical game data.

## Current MLB Formula

The independent MLB model computes home win probability in logit space.

Conceptually:

```text
logit =
  offK * (home RS/G - away RS/G)
  - defK * (home RA/G - away RA/G)
  + formK * ((home form - away form) / 10)
  + homeLogit
  + manual homeEdge
  + bullpenK * (home bullpen fatigue - away bullpen fatigue)
  + xeraLogitPerRun * (away starter xERA - home starter xERA)
```

Then:

```text
pHome = logistic(logit)
pAway = 1 - pHome
```

The current fitted MLB coefficients in `src/mlCalibration.js` are:

| Term | Prior | Fitted | Meaning |
|---|---:|---:|---|
| `homeLogit` | 0.1600 | 0.1315 | generic MLB home edge |
| `offK` | 0.2300 | 0.2186 | offensive RS/G gap |
| `defK` | 0.2300 | 0.2176 | defensive RA/G gap, subtracted because higher RA/G is worse |
| `formK` | 0.2300 | 0.1322 | win%/form gap |
| `starterK` | 0.0450 | 0.0591 | training-side starter feature; live xERA uses `xeraLogitPerRun` |
| `bullpenK` | 0.0000 | -0.0288 | recent bullpen usage |
| `backtestCompression` | 0.7800 | 1.0000 | no extra compression requested by fit |
| `backtestCap` | 0.8200 | 0.8200 | raw cap remains |
| `xeraLogitPerRun` | 0.0255 | 0.0335 | live starter xERA gap |

## Calibration And Backtest Truth

Current generated calibration says:

- source: `MLB2020-2024GameInfo.csv`
- train size: 8,384
- holdout size: 2,097
- before holdout accuracy: 54.27%
- after holdout accuracy: 55.36%
- before holdout Brier: 0.2459
- after holdout Brier: 0.2457

Current game-info backtest says:

- evaluated games: 10,616
- current accuracy: 55.99%
- current Brier: 0.2441
- high-confidence current accuracy: 63.71%
- high-confidence current Brier: 0.2310

The important interpretation:

- The fitted logistic improved calibration only slightly.
- MLB remains hard because the market baseline is already very good.
- The model has not proven it can broadly beat market no-vig.
- The model's value should come from fresher or slower-priced information: confirmed starters, lineup changes, bullpen state, and line movement.

## Market Anchor And Adaptive Weight

The app does not blindly trust the MLB model.

Adaptive weight is skill-relative:

```text
gap = marketBrier - modelBrier
```

- If the model beats the market on eligible tracked picks, model share can rise.
- If it underperforms the market, model share falls.
- The MLB prior starts slightly negative because historical MLB market Brier is about 0.240 while the current model backtest is about 0.244.

This is a major post-audit correction. The old absolute Brier scale was unfair to MLB because even a good MLB market/model naturally lives near 0.24 Brier.

## Ready-To-Bet Gate

For an MLB row to become a bankroll candidate, it must pass several checks.

Current gate requires:

- game is pregame,
- line is not stale,
- model is ready,
- official MLB starters are not missing/TBD,
- model is not market-only,
- edge is at least 1.5%,
- model probability beats consensus no-vig,
- EV proxy is positive,
- model probability clears the minimum chance filter,
- high-impact intel is clear,
- DraftKings line exists.

Current MLB stale window:

```text
30 minutes
```

This is intentionally tight because MLB lines can move quickly on starter scratches, lineup news, and bullpen/news changes.

Warnings, not hard blocks:

- DraftKings is worse than best available.
- Line moved more than 1 point against the pick since first app-observed open.
- Starting lineup is not posted yet.

## What Was Removed Or Deprecated

### After-Loss Prior

The after-loss prior is no longer part of the probability model.

The old note [[MLB After Loss Trend Prior]] still describes v1.3 automation, but the current code says the after-loss model term was removed in v2.

Why removed:

- stale 12-team snapshot,
- selection-biased context,
- fitted scale never moved off prior,
- team quality already explained the effect,
- risk of double-counting team strength.

Current role:

- displayed as research context only,
- not a model input.

### Stacked MLB Compression

The old v1/v1.2 idea was:

```text
compress MLB probabilities toward 50/50
haircut high-confidence reads
haircut away favorites
```

Current v2 says:

- fitted temperature is 1.00,
- high-confidence and away-favorite haircuts are removed,
- old improvements were partly selection effects,
- extra shrinkage made the model too weak to clear its own gates.

### Postseason Statcast Backtest As Primary Fit

The 47-game 2025 postseason Statcast file is no longer the main MLB fit.

Current role:

- feature discovery,
- warning about small samples and overconfidence,
- not the main calibration source.

Main calibration source is now the 2020-2024 game-level file.

## Stale Or Contradictory Vault Notes

These notes contain useful history but should not be treated as current implementation truth without the v2 audit note:

- [[ML Calibration Layer]] still describes MLB as train 37 / holdout 10 from postseason Statcast in parts of the note. The generated `src/mlCalibration.js` now says MLB uses `MLB2020-2024GameInfo.csv` with 8,384 train / 2,097 holdout.
- [[MLB After Loss Trend Prior]] says after-loss is automated into the app. Current implementation comments say the term is removed and kept only for display/context.
- [[MLB Backtest Miss Patterns]] is still useful for why postseason-only Statcast was weak, but it should not be read as the current model's main performance summary.
- [[Algorithm v1 Current Spec]] has a v2 section that is mostly correct, but some older v1/v1.3 sections below it still mention after-loss and not-yet-wired bullpen/lineup features. Read the v2 section first.

## Current Failure Modes To Watch

### 1. Model Still Trails The Market

The historical market Brier is about 0.240. The current model backtest is about 0.244.

Meaning:

- no broad license to fade the market,
- require model > consensus and edge threshold,
- CLV is essential.

### 2. Starter xERA Can Still Be Incomplete

Starter confirmation can exist without xERA.

If xERA is missing:

- the starter probability term does not apply,
- starter still helps the gate because confirmed starters are known,
- note will show xERA unavailable.

### 3. Lineup Quality Is Not Priced Yet

Lineup posted status is a warning only.

Missing next step:

- projected/confirmed lineup wOBA,
- handedness matchup,
- key bats active or resting.

### 4. Bullpen Fatigue Is Crude

Current bullpen input uses pitchers used, not pitch counts, leverage, rest days, or reliever quality.

Useful as a small fatigue signal, but not enough to drive a bet alone.

### 5. Park And Weather Are Not In The Probability

Extreme park note is displayed only.

Weather is not wired.

This matters most for:

- wind games,
- extreme heat/cold,
- run environment shifts,
- totals-derived context.

### 6. Small Live Pick Sample

Latest model-quality note had:

- 4 reviewed picks,
- 1 settled,
- MLB: 1 pick, 0 settled.

No live MLB conclusion should be drawn yet.

## Practical Interpretation For Picks

An MLB pick is strongest when:

- both starters are confirmed,
- xERA is available or manually filled,
- lineups are posted or there is no key lineup risk,
- bullpen fatigue favors the pick or is neutral,
- model probability beats consensus no-vig,
- best line creates at least 1.5% edge,
- DraftKings has a usable line,
- line has not moved materially against the pick,
- the pick is tracked before first pitch.

An MLB pick should be blocked or treated as research-only when:

- starter is TBD,
- line is older than 30 minutes,
- model is market-only,
- edge comes only from one outlier book,
- high-impact intel is pending,
- game has started,
- DraftKings is missing for the free-bet workflow.

## Next Research Priorities

Highest value additions:

1. Confirmed lineup quality term.
   - projected/confirmed lineup wOBA,
   - handedness split vs starter,
   - key bats active/resting.

2. Starter recent form.
   - last 3-5 starts,
   - pitch count trend,
   - velocity drop,
   - xwOBA/CSW/whiff trend.

3. Better bullpen fatigue.
   - pitch counts,
   - relievers used on back-to-back days,
   - high-leverage reliever availability,
   - bullpen quality.

4. Park/weather as fitted context.
   - park factor as trained term,
   - wind and temperature only where materially relevant.

5. Offline odds + model blend test.
   - use historical odds data to test whether model-vs-market gaps would have produced CLV/ROI,
   - avoid trusting accuracy alone.

## My Current Mental Model

The current MLB algorithm is conservative by design:

- market is the baseline,
- model contributes structured baseball context,
- gates prevent stale/incomplete/noisy edges,
- Obsidian and Model Lab collect the evidence,
- adaptive weights should only move after eligible, pregame, non-market-only tracked picks settle.

That is the right posture for MLB because the sport has high variance and the market is efficient. The model should not try to be a prediction machine that simply names winners. It should be a filter for spots where the market price is stale or incomplete relative to fresh starter, lineup, bullpen, and line-movement information.

