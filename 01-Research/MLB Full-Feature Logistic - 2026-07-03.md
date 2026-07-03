# MLB Full-Feature Logistic - 2026-07-03

Generated: 2026-07-03T02:02:34.598Z

Trains a 13-feature L2-regularized logistic regression on the full
[[MLB Training Table - 2026-07-02]] (the live v2 model uses 5 hand-picked composites), and
compares it against the current live model on the identical held-out 2024 season. This revision
adds a 13th feature, `parkFactor`, to directly test the audit's next-step recommendation: does
the park's run environment predict extra home win probability beyond team quality alone?

## Setup

- Source: `/Users/cashmcdearis/Documents/worldcup-moneylines/03-App/mlb-training-table.json`
- Cold-start rows excluded (either team <8 games of season history): 639 of 10616
- Train: 7676 games (2020-2023) · Validation: 2301 games (2024, season-based holdout — never touched during fitting)
- All features are home-minus-away differentials, standardized (z-scored) using TRAIN-only mean/std, EXCEPT `parkFactor` (see below)
- No market features — odds coverage is 22% on train and **zero** on the 2024 validation split, so market price cannot be evaluated out-of-sample here and was excluded from training to avoid leaking train-only market information into a model the live app already blends with the market at inference time

## Park factor

Empirical run factor per park (total runs per game at that park, relative to the train-era
league average), computed from TRAIN games only and shrunk toward neutral (1.0) by a
150-game pseudo-count — small-sample parks (a single international
series, Buffalo's 2020-2021 COVID home, the Field of Dreams game) can't swing their factor far
from 1.0 on 2-3 games. League average: 9.00 runs/game across 36 distinct parks.

Unlike every other feature, `parkFactor` is a **level** feature (the home team's own park), not
a home-minus-away differential — it tests whether an extreme run environment shifts win
probability toward the home side (crowd, familiarity, altitude-adjustment effects), not whether
either specific team benefits.

Most hitter-friendly (sanity check — Coors Field/`DEN02` should top this list):

| Park | Factor | Games |
|---|---:|---:|
| DEN02 | 1.173 | 255 |
| BOS07 | 1.100 | 255 |
| CIN09 | 1.058 | 252 |

Most pitcher-friendly:

| Park | Factor | Games |
|---|---:|---:|
| SEA03 | 0.934 | 250 |
| SAN02 | 0.934 | 255 |
| NYC20 | 0.939 | 258 |

## Fitted weights (standardized units)

| Feature | Weight |
|---|---:|
| `winPctDiff` | 0.0906 |
| `runsForDiff` | -0.0307 |
| `runsAgainstDiff` | -0.1403 |
| `hitsForDiff` | 0.0042 |
| `walksForDiff` | 0.0991 |
| `homersForDiff` | 0.0852 |
| `strikeoutEdgeDiff` | 0.0542 |
| `fieldingEdgeDiff` | -0.0016 |
| `bullpenLoadDiff` | 0.0349 |
| `starterRaDiff` | 0.0395 |
| `afterLossDiff` | -0.0185 |
| `gamesPlayedDiff` | -0.0146 |
| `parkFactor` | 0.0171 |
| bias | 0.1470 |

`parkFactor` ranks **#10 of 13** by absolute weight — near the bottom, close to noise.

## Holdout result (2024 season, same games scored by both models)

| Model | Accuracy | Brier |
|---|---:|---:|
| Full-feature logistic | 56.02% | 0.2450 |
| v2 live model (replica) | 55.98% | 0.2451 |

Raw Brier gap: 0.00008 in the full-feature model's favor.

## Is that gap real?

A lower average Brier is not the same as a better model — with 2301 games, game-to-game
variance swamps a gap this small unless it's checked. Paired t-test on the per-game Brier
difference (same games, both models, so team/opponent/date effects cancel out):

- Mean Brier improvement: **0.00008 ± 0.00068** (standard error)
- t = 0.119, p = 0.906
- **Verdict: no significant difference — raw Brier gap is noise.**

## Reliability (full-feature model, 2024 holdout)

| Bucket | n | Predicted | Actual |
|---|---:|---:|---:|
| 50-55% | 995 | 52.5% | 52.3% |
| 55-60% | 790 | 57.3% | 56.6% |
| 60-65% | 353 | 62.1% | 62.0% |
| 65-72% | 147 | 67.3% | 61.9% |
| 72%+ | 16 | 74.3% | 75.0% |

## Caveats

- v2 replica omits the bullpen-fatigue term: the live model's bullpenK is fit against a recency (last-3-games vs own season average) feature this table does not store; only a season-average differential is available here, which is a different feature. Omitting can only help v2's score in this comparison, never hurt it.
- Market/no-vig comparison is not possible on the 2024 validation split: the odds archive (2012-2021) has zero matched rows there.
- formDiff for the v2 replica uses diffWinPctBefore directly instead of re-deriving the live model's clamp(winPct*10,1,10)/10 form dial; they differ only when a team's win% is under 0.1, which essentially never happens past the 8-game cold-start floor.
- parkFactor is a LEVEL feature (home team's own park), not a home-minus-away differential like the rest — it tests whether an extreme run environment shifts win probability toward the home side beyond team quality, not whether the park makes either specific team better.

## Read

p=0.91 — the 13-feature model including park factor still does not beat v2 on held-out Brier. **Not wiring this into the live app.** `parkFactor` itself ranks #10 of 13 by weight (one of the weakest signals in the model) — the hypothesis that a park's run environment predicts extra home win probability is not supported here. This tracks with sabermetric intuition: park factors mostly affect total RUNS (over/under markets), not who WINS, since an extreme park inflates or deflates both teams' scoring roughly symmetrically. The training table remains a clean, leakage-free asset for the next hypothesis — but the next one should be something that plausibly predicts a WINNER, not a run environment (lineup quality/wOBA, or starter recent-form vs season-to-date).

Related: [[MLB Training Table - 2026-07-02]], [[Algorithm Audit - 2026-07-01]], [[ML Calibration Layer]].
