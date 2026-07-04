# MLB Starter Recent Form - 2026-07-04

Generated: 2026-07-04T20:37:11.548Z

Tests whether a starter's RECENT form (trailing last-3 or last-5 starts' runs-allowed) predicts
the winner better than the season-to-date average the live v2 model and the earlier
[[MLB Full-Feature Logistic - 2026-07-03]] experiment both use. Required a data-layer addition
first — see [[MLB Training Table - 2026-07-02]]'s 2026-07-04 update — since the flat table only
had cumulative season stats, not a per-start sequence.

## Setup

- Three otherwise-identical 13-feature logistic models, differing ONLY in the starter feature's
  source: season-to-date, trailing last-3, trailing last-5. Same 11 other features (team
  offense/defense/form/hits/walks/homers/strikeouts/fielding/bullpen/after-loss/park-factor),
  same train-only standardization, same season-based 2024 holdout as the prior experiments.
- Train: 7676 games (2020-2023) · Validation: 2301 games (2024)
- All three variants gate their starter feature to 0 ("no information") when the relevant
  starts threshold isn't met — 3 starts for season/recent3, 5 for recent5 — never averaged over
  padding.

## Results

| Starter feature | Weight (standardized) | Holdout accuracy | Holdout Brier |
|---|---:|---:|---:|
| Season-to-date (current v2 + earlier full-feature experiment) | 0.0395 | 56.02% | 0.2450 |
| Trailing last-3 starts | 0.0159 | 55.45% | 0.2451 |
| Trailing last-5 starts | 0.0222 | 55.45% | 0.2450 |
| v2 live model (replica) | — | 55.98% | 0.2451 |

## Paired significance tests (2024 holdout)

| Comparison | Mean Brier improvement | t | p | Significant? |
|---|---:|---:|---:|---|
| seasonVsV2 | +0.00008 ± 0.00068 | 0.119 | 0.906 | no |
| recent3VsV2 | +0.00001 ± 0.00072 | 0.013 | 0.990 | no |
| recent5VsV2 | +0.00005 ± 0.00072 | 0.064 | 0.949 | no |
| recent3VsSeason | -0.00007 ± 0.00015 | -0.476 | 0.634 | no |
| recent5VsSeason | -0.00003 ± 0.00015 | -0.221 | 0.825 | no |
| recent3VsRecent5 | -0.00004 ± 0.00008 | -0.485 | 0.628 | no |

Positive "mean Brier improvement" favors the first model named in the comparison label.

## Verdict

- Best holdout Brier: **season**
- Recent-form beats season-to-date on an isolated swap (same other 11 features, same holdout): **NO**
- Any variant significantly beats the live v2 model: **NO**

## Read

Recent form does not measurably beat season-to-date, and neither beats v2. Read this as further evidence (after the full-feature and park-factor experiments) that this training table's box-score-derived features are close to exhausted for predicting MLB winners specifically — recency doesn't rescue a starter-quality signal that a season-long average already captures reasonably well at the team-outcome level. **Not wiring anything from this experiment into the live app.** The next genuinely untested idea is lineup quality/wOBA — but unlike everything tested so far, it has no historical backtest available in this table, so it would ship without the validation rigor this whole line of experiments has depended on. Worth an explicit conversation about that tradeoff before building it.

Related: [[MLB Training Table - 2026-07-02]], [[MLB Full-Feature Logistic - 2026-07-03]], [[Algorithm Audit - 2026-07-01]], [[ML Calibration Layer]].
