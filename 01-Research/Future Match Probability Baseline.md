# Future Match Probability Baseline

Source file:

```text
/Users/cashmcdearis/Downloads/future_match_probabilities_baseline.csv
```

Import command:

```bash
npm run import:future-baseline
```

Generated app file:

```text
src/futureMatchBaselineData.js
```

## What it contains

The file contains future 2026 World Cup group-match probabilities.

Rows imported:

```text
72
```

Each row includes:

- group
- home team
- away team
- tournament
- home Elo
- away Elo
- Elo difference
- home injury flag
- away injury flag
- home win probability
- draw probability
- away win probability

## Columns

| Column | Meaning |
|---|---|
| `group` | World Cup group letter |
| `home_team` | Home/listed team |
| `away_team` | Away/listed team |
| `date` | Match date if known |
| `tournament` | Tournament label |
| `home_elo` | Home/listed team Elo |
| `away_elo` | Away/listed team Elo |
| `elo_diff` | Home Elo minus away Elo |
| `home_injury_flag` | Injury flag for home/listed team |
| `away_injury_flag` | Injury flag for away/listed team |
| `p_home_win` | Home/listed team 90-minute win probability |
| `p_draw` | Draw probability |
| `p_away_win` | Away/listed team 90-minute win probability |

## How the app uses it

The app imports this file as a research prior.

If a live odds matchup matches one of these rows, the algorithm can use the row's probabilities as a trusted external baseline.

The prior is stored in `matchResearchModels` as:

```text
home team probability
draw probability
away team probability
source = Future baseline · Group X
```

## Confidence rules

Full team Elo available:

```text
confidence = 0.52
```

Unknown playoff placeholder:

```text
confidence = 0.35
```

This keeps unknown teams like `UEFA_Playoff_D` from being over-trusted.

## Important limitation

These are not sportsbook odds.

They should be used as a model prior, not as a line or payout source.

To decide if a bet has value, compare these probabilities to:

- live sportsbook line,
- no-vig market probability,
- injury/team news,
- draw/to-advance market context,
- model's known draw overprediction issue.

See [[World Cup Backtest Miss Patterns]].

