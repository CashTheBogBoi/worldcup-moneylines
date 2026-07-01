# World Cup Historical Backtest

Source file: `/Users/cashmcdearis/Downloads/WorldCupMatches.csv`

Generated command:

```bash
npm run backtest:worldcup
```

## Result

- Matches evaluated: 852
- Exact home/draw/away predictions correct: 436
- Accuracy: 51.2%
- Average Brier score: 0.205
- Date range: 1930-07-13 through 2014-07-13

This is the v1.2-style rerun with the Soccer draw guardrail applied. It still cannot test market blend, EV, or ROI because the CSV has scores but no historical odds.

## Confidence buckets

- 70%+: 44/57 correct, 77.2% accuracy, 0.130 Brier
- 60-70%: 34/55 correct, 61.8% accuracy, 0.184 Brier
- 50-60%: 56/97 correct, 57.7% accuracy, 0.189 Brier
- 40-50%: 238/513 correct, 46.4% accuracy, 0.215 Brier
- Under 40%: 64/130 correct, 49.2% accuracy, 0.218 Brier

## Interpretation

The CSV has match results but no historical moneylines, so this is a prediction/calibration backtest, not a profit or ROI backtest.

The useful finding is that the model behaves best when it is very confident. Lower confidence bands are noisy and should not be trusted as picks without odds, injury, lineup, and market context.

## Miss analysis

The draw guardrail helped a lot, but draws remain the most fragile outcome.

- Predicted Home: 316/465 correct, 68.0% accuracy
- Predicted Draw: 54/191 correct, 28.3% accuracy
- Predicted Away: 66/196 correct, 33.7% accuracy

Key takeaway: the draw cap fixed the biggest overprediction issue, but Soccer draw picks still need extra confirmation from market price, lineup news, and to-advance context.

## Next improvement

Add historical odds to calculate:

- closing-line value
- flat-stake ROI
- edge by odds band
- favorite vs underdog performance
- whether the 33% probability floor helps or hurts

Algorithm fixes still worth testing:

- Add historical odds so market blend and edge can be tested.
- Separate knockout-stage regulation draws from match winners/to-advance markets.
- Add Elo/FIFA-ranking priors so elite teams are not treated as ordinary teams after limited tournament sample data.
