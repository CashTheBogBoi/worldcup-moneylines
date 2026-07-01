# World Cup Historical Backtest

Source file: `/Users/cashmcdearis/Downloads/WorldCupMatches.csv`

Generated command:

```bash
npm run backtest:worldcup
```

## Result

- Matches evaluated: 852
- Exact home/draw/away predictions correct: 308
- Accuracy: 36.2%
- Average Brier score: 0.235
- Date range: 1930-07-13 through 2014-07-13

## Confidence buckets

- 70%+: 55/91 correct, 60.4% accuracy, 0.195 Brier
- 60-70%: 87/248 correct, 35.1% accuracy, 0.261 Brier
- 50-60%: 87/270 correct, 32.2% accuracy, 0.233 Brier
- 40-50%: 61/191 correct, 31.9% accuracy, 0.226 Brier
- Under 40%: 18/52 correct, 34.6% accuracy, 0.222 Brier

## Interpretation

The CSV has match results but no historical moneylines, so this is a prediction/calibration backtest, not a profit or ROI backtest.

The useful finding is that the model behaves best when it is very confident. Lower confidence bands are noisy and should not be trusted as picks without odds, injury, lineup, and market context.

## Miss analysis

The largest failure mode is draw overprediction.

- Predicted Draw: 135/563 correct, 24.0% accuracy
- Predicted Home: 154/212 correct, 72.6% accuracy
- Predicted Away: 19/77 correct, 24.7% accuracy

The biggest confusion patterns:

- Draw predicted / Home actual: 291 misses
- Draw predicted / Away actual: 137 misses
- Away predicted / Home actual: 43 misses
- Home predicted / Draw actual: 40 misses

By scoreline:

- One-goal games: 65/334 correct, 19.5% accuracy
- Two-goal games: 45/172 correct, 26.2% accuracy
- Blowouts: 63/156 correct, 40.4% accuracy
- Draws: 135/190 correct, 71.1% accuracy

By era:

- 2010s were worst: 38/144 correct, 26.4% accuracy
- 1930s-1940s were best: 38/53 correct, 71.7% accuracy

Key takeaway: the model is too attracted to the draw outcome and not decisive enough when one side is only modestly stronger. For betting, this means the current Soccer model should be more trusted for clear favorite/underdog reads than for tight 90-minute moneylines.

## Next improvement

Add historical odds to calculate:

- closing-line value
- flat-stake ROI
- edge by odds band
- favorite vs underdog performance
- whether the 33% probability floor helps or hurts

Algorithm fixes to test:

- Reduce Dixon-Coles draw lift or make it conditional on low-scoring, evenly matched teams.
- Add a favorite-strength threshold that suppresses draw picks when one team has a clear form/xG edge.
- Separate knockout-stage regulation draws from match winners/to-advance markets.
- Add Elo/FIFA-ranking priors so elite teams are not treated as ordinary teams after limited tournament sample data.
