# Backtest Model Comparison - 2026-07-01

Generated: 2026-07-02T03:59:48.719Z

This compares the current model logic against older model variants on the same historical
datasets. It does not use live odds, so it measures prediction accuracy and calibration, not
ROI.

## Soccer / World Cup

| Model | Accuracy | Correct | Brier | Avg confidence | High-conf accuracy |
|---|---:|---:|---:|---:|---:|
| Old: Poisson/Dixon-Coles without draw calibration | 36.2% | 308/852 | 0.235 | 57.2% | 41.9% |
| Current: draw-calibrated Soccer model | 51.2% | 436/852 | 0.205 | 48.5% | 69.6% |

Delta: accuracy +15.0%, Brier -0.030.

## MLB

| Model | Accuracy | Correct | Brier | Avg confidence | High-conf accuracy |
|---|---:|---:|---:|---:|---:|
| Old: Statcast model, uncompressed, no after-loss prior | 46.8% | 22/47 | 0.296 | 65.2% | 50.0% |
| Current: compressed + after-loss prior | 46.8% | 22/47 | 0.276 | 61.0% | 50.0% |

Delta: accuracy +0.0%, Brier -0.020.

## MLB 2020-2024 Game Info

| Model | Accuracy | Correct | Brier | Avg confidence | High-conf accuracy |
|---|---:|---:|---:|---:|---:|
| Old: rolling team form only, uncompressed | 56.3% | 5976/10616 | 0.244 | 57.0% | 61.8% |
| v1: compressed + after-loss + starter-history prior | 56.7% | 6015/10616 | 0.244 | 55.9% | 64.3% |
| v2 (live): fitted decomposed logistic, no stacked shrinks | 56.0% | 5942/10616 | 0.244 | 56.2% | 63.7% |

Delta (v2 vs old): accuracy -0.3%, Brier -0.000.

Matched-bucket high confidence (same games for every model, bucketed by v2 ≥60% confidence): oldMlbGameInfoTeamOnly 63.7% (1371/2153) · currentMlbGameInfoCompressedStarterIntel 63.7% (1371/2153) · v2MlbGameInfoFittedLogistic 63.7% (1371/2153)

## Read

- A lower Brier score is better.
- Soccer draw calibration is mainly a risk-control change; it should reduce bad draw
  overconfidence even when exact-result accuracy moves only a little.
- MLB compression is also a risk-control change. It intentionally avoids overconfident MLB
  moneylines because single-game baseball outcomes are noisy.
- The 2020-2024 MLB Game Info backtest is a much broader regular-season sample. It uses only
  prior games to form rolling team and starter priors, then predicts the next game before
  updating with that game's final box score.
- The new local daily-intel layer cannot be fully measured on these historical CSVs because the
  CSVs do not include daily injury, lineup, DraftKings availability, or starter-source
  disagreement states. Its value is gating bad live picks, not improving old-score replay.

Related:

- [[World Cup Historical Backtest]]
- [[MLB Statcast Postseason Backtest]]
- [[Algorithm Lessons From Backtests]]
- [[Daily Data Refresh - 2026-07-01]]
