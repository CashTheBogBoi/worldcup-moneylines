# Model Lab

Related app tab: Model Lab

## Purpose

Model Lab is where the app stops merely ranking odds and starts grading whether the algorithm is actually useful.

## Metrics

### Closing line value

CLV compares the price when a pick was flagged against the final closing price.

```text
CLV points = implied probability at pick price - implied probability at closing price
```

Positive CLV means the pick beat the closing market.

### Brier score

Brier score grades probability accuracy.

```text
Brier score = (forecast probability - actual result)^2
```

Lower is better.

### Win rate

Win rate is useful, but it is less important than calibration and CLV. A model can win less than half its picks and still be profitable if it finds enough plus-money value.

## Team-strength inputs

The app now tracks editable team inputs:

- xG for
- xG against
- form rating
- venue/home edge
- team news note

Current simple strength score:

```text
xG for - xG against + venue edge + ((form - 5) / 10)
```

This is not a full soccer model yet. It is a practical first input layer that can later feed match probabilities.

## Workflow

1. Let the app rank candidates.
2. Add promising candidates to Model Lab.
3. Record the pick price.
4. Later record the closing price.
5. Mark win/loss after result.
6. Watch CLV and Brier score over time.

## Next upgrades

- Auto-send Bankroll Watch picks into Model Lab.
- Add closing-line snapshots automatically.
- Use team-strength inputs directly in probability calculation.
- Add calibration buckets: 40%-50%, 50%-60%, 60%-70%, etc.
- Add CSV export for model picks.

Related:

- [[Edge Algorithm v0.1]]
- [[Probability and Value Math]]
- [[Bankroll and Risk Rules]]
