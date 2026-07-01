# Algorithm Lessons From Backtests

This note condenses what the historical datasets taught us.

## High-level result

The current model can produce useful research signals, but it is not strong enough to blindly bet.

The biggest lesson:

```text
Prediction quality depends heavily on whether the model has the right sport-specific context.
```

For Soccer, the model needs better priors and less draw bias.

For MLB, the model needs more pregame context:

- starting pitchers
- bullpens
- lineups
- Statcast rolling form
- previous-game result
- market price

## World Cup lesson

Dataset:

- `/Users/cashmcdearis/Downloads/WorldCupMatches.csv`
- 852 historical matches
- 1930 through 2014

Result:

- 436/852 correct
- 51.2% exact home/draw/away accuracy
- 0.205 Brier score

Main failure:

- Before v1.2, the model predicted draws far too often.
- After the draw guardrail, draw predictions dropped from 563 to 191, but draw picks are still the weakest outcome.

Best behavior after v1.2:

- Predicted home winners are still the best side: 316/465 correct, 68.0%.

Worst behavior:

- Predicted draws remain weak: 54/191 correct, 28.3%.

Interpretation:

- Do not trust raw Soccer draw picks yet.
- If the model likes a favorite/side strongly enough to overcome draw risk, that is more useful.
- For knockout games, compare 90-minute moneyline against to-advance markets.

See [[World Cup Backtest Miss Patterns]].

## MLB Statcast lesson

Dataset:

- `/Users/cashmcdearis/Downloads/Data_MLB_2025_StatcastPostseason_PitchByPitch_20251102a.csv`
- 47 postseason games
- 2025-09-30 through 2025-11-01

Result:

- 22/47 correct
- 46.8% winner accuracy
- 0.276 Brier score after v1.3 compression/after-loss prior

Main failure:

- Small postseason-only sample.
- Away winners were hard to catch.
- High-confidence spots were not reliable, and v1.3 compression improved calibration more than accuracy.

Interpretation:

- Statcast features are useful, but this file alone is not enough.
- Need regular-season rolling data before postseason begins.
- Need starting pitcher and bullpen state.

See [[MLB Backtest Miss Patterns]].

## MLB historical odds lesson

Dataset:

- `/Users/cashmcdearis/Downloads/oddsData.csv.zip`
- 45,530 team odds rows
- 22,738 reconstructed games
- 20,531 games joined to final scores
- 2012-03-28 through 2021-10-03

Result:

- Favorite win rate: 58.3%
- Average favorite no-vig implied probability: 58.0%
- Flat favorite ROI: -2.1%
- Home-probability Brier score: 0.240

Main lesson:

- MLB moneyline markets are already very well calibrated.
- A high hit chance is not the same thing as a profitable bet.
- Heavy favorites still lost to vig in the flat-bet test.

Interpretation:

- Keep the market no-vig as a strong anchor for MLB.
- Require real edge over break-even before a pick gets promoted.
- Use pitcher, lineup, bullpen, weather, and CLV data to justify model disagreement.

See [[MLB Historical Odds Data 2012-2021]].

## Practical rule

The app should treat backtest failures as guardrails:

- If Soccer draw probability is high, require extra confirmation.
- If MLB model is high-confidence without pitcher/lineup data, downgrade confidence.
- If a pick is driven only by market no-vig, treat it as research, not a model edge.
- If a pick survives market, Intel, and sport-specific context, then it can be tracked in Model Lab.

## Implemented in Algorithm v1.2

These lessons now feed the app directly:

- Soccer draw probabilities are anchored toward the market, soft-capped, and discounted when Draw is only barely the top outcome.
- Soccer low-confidence reads get less model weight.
- MLB probabilities are compressed toward 50/50 before the market blend.
- MLB high-confidence reads and away-favorite reads get additional confidence/model-weight haircuts.

The goal is not to make the model timid. The goal is to stop the exact miss patterns from being promoted as strong picks.
