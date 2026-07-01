# MLB Statcast Postseason Backtest

Source file: `/Users/cashmcdearis/Downloads/Data_MLB_2025_StatcastPostseason_PitchByPitch_20251102a.csv`

Generated command:

```bash
npm run backtest:mlb
```

## Result

- Games evaluated: 47
- Winners predicted correctly: 22
- Accuracy: 46.8%
- Average Brier score: 0.291
- Date range: 2025-09-30 through 2025-11-01

## What the file supports

This is pitch-by-pitch Statcast data, so it can feed MLB model features:

- xwOBA for and xwOBA allowed
- hard-hit rate for and allowed
- whiff rate for batters and pitchers
- CSW rate for pitching
- run differential
- cold-start vs prior-postseason-data splits

## Miss read

- Predicted home teams: 16/31 correct, 51.6% accuracy
- Predicted away teams: 6/16 correct, 37.5% accuracy
- Actual away winners were the pain point: only 6/21 correct
- 70%+ confidence spots were not reliable in this small postseason-only sample: 8/17 correct

## Interpretation

This is not enough by itself to build a full MLB betting model because the sample is postseason-only and has no moneylines. But it is useful for deciding which Statcast features the live MLB algorithm should absorb next.

Best next step: add regular-season Statcast or team rolling stats so the model has more data before postseason games begin.
