# Backtest Data Inventory

This note lists the local datasets currently used by Sports Edge Lab.

## WorldCupMatches.csv

Path:

```text
/Users/cashmcdearis/Downloads/WorldCupMatches.csv
```

Generated app file:

```text
src/worldCupBacktestData.js
```

Script:

```bash
npm run backtest:worldcup
```

Rows:

- 852 usable historical matches
- Original file includes blank trailing rows

Date range:

- 1930-07-13 through 2014-07-13

Useful for:

- Soccer home/draw/away prediction accuracy
- draw calibration
- tournament era comparison
- stage-level miss patterns
- confidence bucket calibration

Not useful for:

- betting ROI
- closing-line value
- sportsbook edge

Reason:

- It has final scores but no historical odds.

## Data_MLB_2025_StatcastPostseason_PitchByPitch_20251102a.csv

Path:

```text
/Users/cashmcdearis/Downloads/Data_MLB_2025_StatcastPostseason_PitchByPitch_20251102a.csv
```

Generated app file:

```text
src/mlbBacktestData.js
```

Script:

```bash
npm run backtest:mlb
```

Rows:

- 14,096 pitch rows
- 47 derived games

Date range:

- 2025-09-30 through 2025-11-01

Useful for:

- MLB winner prediction calibration
- xwOBA feature extraction
- hard-hit rate
- whiff rate
- CSW rate
- run differential
- cold-start analysis

Not useful for:

- betting ROI
- moneyline edge
- full-season team strength by itself

Reason:

- It has pitch data and scores but no historical moneylines.
- It is postseason-only, so sample size is small.

## oddsData.csv.zip

Path:

```text
/Users/cashmcdearis/Downloads/oddsData.csv.zip
```

Active note:

```text
[[MLB Historical Odds Data 2012-2021]]
```

Rows:

- 45,530 team rows
- 22,738 reconstructed games
- 20,531 games joined to MLB final scores for calibration

Date range:

- 2012-03-28 through 2021-10-03

Useful for:

- MLB moneyline market calibration,
- favorite/dog bucket analysis,
- vig estimates,
- totals context,
- proving why flat favorite betting loses to vig.

Not useful for:

- current-team strength,
- injuries,
- confirmed lineups,
- pitcher quality,
- closing-line value.

Reason:

- It has historical odds but no explicit opponent, score, sportsbook, or open/close timestamp.
- Scores were joined separately through MLB Stats API, so this is a calibration dataset rather than a fully clean ROI backtest.

## Data still needed

To build a real betting ROI backtest:

- historical moneylines
- closing lines
- sportsbook source
- game date/time
- starting pitcher
- confirmed lineup
- injury report
- weather/park
- previous-game result

## Future match probability baseline

Path:

```text
/Users/cashmcdearis/Downloads/future_match_probabilities_baseline.csv
```

Generated app file:

```text
src/futureMatchBaselineData.js
```

Script:

```bash
npm run import:future-baseline
```

Rows:

- 72 future World Cup group-match priors

Useful for:

- external Soccer match priors,
- Elo-based baseline probability,
- group-match research,
- identifying high draw baselines,
- comparing model probability against live market.

Not useful for:

- betting ROI,
- line shopping,
- sportsbook payout.

Reason:

- It has probabilities but no moneyline prices.
