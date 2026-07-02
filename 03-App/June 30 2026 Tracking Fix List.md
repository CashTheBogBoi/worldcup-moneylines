# June 30 2026 Tracking Fix List

This note turns the June 30 MLB postmortem into concrete app changes.

Primary postmortem:

- [[June 30 2026 MLB Prediction Postmortem]]

## Problem 1: Post-start tracking

June 30 showed several picks were tracked after first pitch:

- Braves ML, about 60 minutes after start.
- White Sox ML, about 89 minutes after start.
- Guardians ML, about 84 minutes after start.
- Blue Jays ML, about 55 minutes after start.

### Required app change

Disable tracking when:

```text
new Date(row.startTime).getTime() <= Date.now()
```

### UI behavior

Show:

```text
Started — live read only
```

Do not show:

```text
Track this pick
```

## Problem 2: Live odds contaminated CLV

Bad close prices:

- Braves close: +1000
- Blue Jays close: +2200
- Pirates close: +4000
- Nationals close: -1800

These are not usable closing lines.

### Required app change

In `reconcileModelPicks()`:

```text
if now < commenceTime:
  update closePrice
else:
  stop updating closePrice
```

If close was never captured before start:

```text
closePrice = ""
autoClosed = false
closeNote = "No clean pregame close captured"
```

## Problem 3: Market-only rows looked like model picks

Most June 30 MLB tracked picks had:

```text
source = Odds API no-vig only
```

This means no independent team/starter model was active.

### Required app change

Create a row flag:

```text
modelReady = row.modelSource !== "Odds API no-vig only"
```

Then:

- Bankroll Watch should heavily penalize `modelReady === false`.
- Track button should label those as `Track market read`.
- Algorithm tab should show `No independent model` in the Source column.

## Problem 4: Best Pick can be underqualified

June 30 showed that a row can look attractive because of price but still lack enough baseball
context.

### Required app change

For MLB `Best pick for tonight`, require:

```text
sport === "MLB"
modelSource !== "Odds API no-vig only"
!stale
startTime > now
modelProbability >= minProbability
edge > 0
```

Preferred additional requirements:

```text
starter data loaded
team ratings loaded
no high-impact intel pending
```

If no row qualifies, show:

```text
No model-ready MLB pick tonight
```

## Problem 5: Pick snapshots are too thin

The tracked pick currently stores the probability and odds, but not enough context for a clean
postmortem.

### Required app change

When `trackPick(row)` runs, add:

```json
{
  "trackedAt": "ISO timestamp",
  "minutesUntilStart": "number",
  "marketProbability": "number",
  "researchProbability": "number|null",
  "edge": "number|null",
  "ev": "number|null",
  "modelConfidence": "number",
  "modelNotes": "string",
  "stale": "boolean",
  "staleReason": "string",
  "intelFlag": "boolean",
  "intelAdjustment": "object",
  "preferredBook": "boolean",
  "book": "string",
  "bookKey": "string"
}
```

For MLB, also snapshot:

```json
{
  "starterInfo": {
    "home": "pitcher + xERA",
    "away": "pitcher + xERA"
  },
  "afterLossPrior": {
    "home": "win/loss + logit nudge",
    "away": "win/loss + logit nudge"
  }
}
```

## Priority order

1. Block post-start tracking.
2. Freeze close price at first pitch.
3. Penalize/label market-only rows.
4. Require model-ready criteria for Best Pick.
5. Add richer pick snapshots.

## Success criteria

After these changes:

- A post-start MLB row cannot enter the tracked pregame record.
- CLV cannot be overwritten by live odds.
- Market-only rows are clearly marked as market reads.
- Bankroll Watch does not promote rows without an independent model.
- Future postmortems can explain misses without reconstructing context manually.

## Related notes

- [[June 30 2026 MLB Prediction Postmortem]]
- [[Algorithm v1 Current Spec]]
- [[Data Pipeline and Persistence]]
- [[Model Lab]]
- [[Bankroll and Risk Rules]]
