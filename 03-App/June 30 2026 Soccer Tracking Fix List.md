# June 30 2026 Soccer Tracking Fix List

This note turns the June 30 World Cup postmortem into app changes.

Primary postmortem:

- [[June 30 2026 World Cup Prediction Postmortem]]

## Problem 1: Seed/example picks affect learning

France ML appears as a seed/example-style Model Lab entry:

```text
source = Odds API no-vig
note = Seed example; update result after final.
```

It won, but example rows should not influence the adaptive model's Brier score or win rate.

### Required app change

Add a field:

```json
{
  "isExample": true
}
```

Then exclude examples from:

- Brier score,
- adaptive model weight,
- win rate,
- ROI,
- postmortem tallies.

## Problem 2: Soccer markets are not all the same

June 30 included:

- Mexico 90-minute moneyline,
- Norway to-advance / advancement lean,
- France moneyline / seeded favorite read.

These cannot be evaluated the same way.

### Required app change

Add:

```json
{
  "marketType": "90-minute ML | draw | to advance | futures | prop"
}
```

Use `marketType` in grading:

- 90-minute ML: side loses if match is drawn.
- Draw: wins only if regulation draw.
- To advance: wins if team progresses, including extra time / penalties.
- Futures: settle only at tournament end.
- Prop: use prop-specific result.

## Problem 3: Draw picks need stronger guardrails

Mexico beat Ecuador 2-0. Any prior draw lean was wrong.

The World Cup backtest already showed draws were the weakest model behavior:

- pre-v1.2 model predicted too many draws,
- v1.2 reduced draw overprediction,
- draw picks still need extra confirmation.

### Required app change

For `selection === "Draw"`:

Require at least one of:

- market draw price is meaningfully better than fair line,
- both teams are close in model strength,
- lineup/news supports low scoring,
- to-advance market confirms a tight match,
- weather/venue conditions suppress scoring.

Otherwise label:

```text
Draw watch only
```

## Problem 4: Advancement picks need a separate model path

Norway was a good manual advancement read.

The current h2h model mostly thinks in 90-minute outcomes:

```text
Home / Draw / Away
```

But knockout picks often need:

```text
Team to advance
```

### Required app change

Create a separate `toAdvance` probability model:

```text
toAdvanceProbability = regulationWin + drawProbability * extraTimePenaltyShare
```

This can start simple:

```text
if side is stronger:
  side gets 55%-65% of draw-path advancement probability
else:
  side gets 35%-45%
```

Later improvement:

- use penalty records,
- goalkeeper quality,
- extra-time fatigue,
- tournament experience.

## Problem 5: Need World Cup postmortem snapshots

When tracking a Soccer pick, store:

```json
{
  "marketType": "90-minute ML",
  "regulationHomeProbability": "number",
  "regulationDrawProbability": "number",
  "regulationAwayProbability": "number",
  "toAdvanceProbability": "number|null",
  "venueEdge": "number",
  "eloTilt": "number",
  "drawCalibrationApplied": "boolean",
  "futureBaselinePrior": "object|null",
  "trackedAt": "ISO timestamp",
  "minutesUntilStart": "number"
}
```

## Priority order

1. Exclude seed/example picks from learning.
2. Add `marketType` to tracked picks.
3. Add draw-pick guardrail labels.
4. Add to-advance market support.
5. Store richer Soccer model snapshots.

## Success criteria

After these changes:

- France-style seed examples do not distort learning.
- Norway-style advancement picks are graded correctly.
- Mexico-style side picks remain clean and explainable.
- Draw picks are clearly separated from side picks.
- Future World Cup postmortems do not have to infer market type after the fact.

## Related notes

- [[June 30 2026 World Cup Prediction Postmortem]]
- [[June 30 2026 World Cup Scoreboard Facts]]
- [[World Cup Backtest Miss Patterns]]
- [[Algorithm v1 Current Spec]]
- [[Model Lab]]
