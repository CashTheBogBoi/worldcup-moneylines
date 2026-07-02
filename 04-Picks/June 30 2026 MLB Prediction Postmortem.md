# June 30 2026 MLB Prediction Postmortem

Source scoreboard:

```text
https://www.mlb.com/scores/2026-06-30
```

Local app source:

```text
03-App/model-training-state.json
```

This note compares the app's tracked June 30 MLB predictions against the official MLB.com
final scores. The key conclusion is that most of these were not clean pregame full-model
predictions. They were recorded as `Odds API no-vig only`, and several were tracked after
first pitch.

## Tracked slate summary

Tracked MLB picks from the June 30 slate:

- 8 settled MLB picks
- 3 wins
- 5 losses
- 37.5% hit rate

Important context:

- Most entries had source `Odds API no-vig only`.
- That means the app did not have a mapped full MLB strength/starter/after-loss model at the
  time the pick was tracked.
- Several picks were tracked after the game had already started.
- Several close prices are clearly live/post-start prices, not true closing lines.

## Pick-by-pick comparison

| Game | Our pick | Algo chance | Open | Close | Final score | Grade | Source |
|---|---:|---:|---:|---:|---|---|---|
| Chicago White Sox at Baltimore Orioles | White Sox | 94.8% | -5000 | -2000 | White Sox 9, Orioles 3 | Win | Odds API no-vig only |
| Texas Rangers at Cleveland Guardians | Guardians | 47.4% | +130 | +1100 | Rangers 4, Guardians 2 | Loss | Odds API no-vig only |
| Pittsburgh Pirates at Philadelphia Phillies | Pirates | 34.0% | +196 | +4000 | Phillies 8, Pirates 0 | Loss | Odds API no-vig only |
| Washington Nationals at Boston Red Sox | Nationals | 45.0% | +117 | -1800 | Nationals 8, Red Sox 1 | Win | Odds API no-vig only |
| New York Mets at Toronto Blue Jays | Blue Jays | 47.7% | +135 | +2200 | Mets 3, Blue Jays 0 | Loss | Odds API no-vig only |
| St. Louis Cardinals at Atlanta Braves | Braves | 37.3% | +272 | +1000 | Cardinals 5, Braves 3 | Loss | Odds API no-vig only |
| San Diego Padres at Chicago Cubs | Cubs | 57.1% | -132 | -350 | Cubs 9, Padres 7 | Win | Odds API no-vig only |
| Miami Marlins at Colorado Rockies | Rockies | 44.9% | +117 | +550 | Marlins 14, Rockies 3 | Loss | Odds API no-vig only |

## Start-time contamination

Several tracked entries were created after the listed start time:

| Pick | Created relative to start | Why it matters |
|---|---:|---|
| Braves ML | about 60 minutes after first pitch | Not a pregame prediction; likely live-market state. |
| White Sox ML | about 89 minutes after first pitch | Not a pregame prediction; -5000 price implies live context. |
| Guardians ML | about 84 minutes after first pitch | Not a pregame prediction; close price later moved to +1100. |
| Blue Jays ML | about 55 minutes after first pitch | Not a pregame prediction; close price later moved to +2200. |

Clean-ish pregame/near-pregame entries:

| Pick | Created relative to start | Note |
|---|---:|---|
| Cubs ML | about 3 minutes before first pitch | Best normal-looking tracked win. |
| Rockies ML | about 39 minutes before first pitch | Pregame, but model source was still market-only. |
| Nationals ML | about 171 minutes before first pitch | Pregame, but source was market-only. |
| Pirates ML | about 156 minutes before first pitch | Pregame, but source was market-only. |

## What went right

### Cubs over Padres

- Pick: Cubs ML
- Algo chance: 57.1%
- Open: -132
- Final: Cubs 9, Padres 7

This was the cleanest normal-looking tracked MLB win. It was tracked just before first pitch
and had a reasonable price.

### Nationals over Red Sox

- Pick: Nationals ML
- Algo chance: 45.0%
- Open: +117
- Final: Nationals 8, Red Sox 1

The side won, but this was still recorded as `Odds API no-vig only`, so it should be treated
as a market/value hit rather than proof the full MLB model found a deep edge.

### White Sox over Orioles

- Pick: White Sox ML
- Algo chance: 94.8%
- Open: -5000
- Final: White Sox 9, Orioles 3

The pick won, but this should not be counted as a useful pregame model win. It was tracked
about 89 minutes after first pitch and had a huge live-style price.

## What went wrong

### The model allowed market-only rows into tracked predictions

Most of the tracked MLB picks had:

```text
source = Odds API no-vig only
```

That means the event fell back to market-only because the model did not have usable mapped
ratings/starter data at the moment of tracking.

Missing from those tracked predictions:

- auto MLB team-strength model,
- confirmed starter xERA,
- after-loss trend prior,
- lineup/injury context,
- bullpen context,
- weather/park context.

### The tracking system accepted live/post-start picks

The app should not let a row be treated as a normal prediction once the game has started.
Those rows are live betting reads, not pregame backtestable picks.

### Close-price tracking was contaminated

Close prices like these are not reliable closing-line values:

```text
Braves close: +1000
Blue Jays close: +2200
Pirates close: +4000
Nationals close: -1800
```

These likely came from live or near-final price states. The app should freeze close-price
tracking at first pitch or use the last pregame line only.

### The Rockies miss exposed missing context

Rockies ML lost 14-3 to the Marlins.

This kind of miss needs:

- starter context,
- bullpen freshness,
- park/weather context,
- lineup quality,
- recent run prevention form.

A plus-money side at 44.9% is not enough by itself.

### Pirates ML was too thin

Pirates ML lost 8-0 to the Phillies.

The algorithm chance was only 34.0%. That is below the type of probability that should be
promoted as a serious pick unless there is a very clear external edge.

## Root cause

The issue was not simply "the full model was wrong."

The actual root cause:

```text
The app allowed market-only, stale, and post-start rows to enter the tracked-pick record.
```

That polluted:

- win/loss record,
- Brier score,
- CLV,
- adaptive model-weight learning,
- user trust in the Bankroll Watch board.

## Algorithm rule changes to make

### 1. Block tracking after game start

Rule:

```text
if now >= commence_time:
  disable Track button
  label row as Live / Started
```

Reason:

- Prevents post-start rows from being stored as pregame predictions.

### 2. Freeze close line at first pitch

Rule:

```text
Only update closePrice while now < commence_time.
After commence_time, stop overwriting closePrice.
```

Reason:

- Stops live prices from corrupting CLV.

### 3. Label market-only rows as "Market read"

Rule:

```text
if modelSource === "Odds API no-vig only":
  do not call it a model pick
  show Market read / No model edge
```

Reason:

- A no-vig market probability is not an independent edge.

### 4. Require MLB model inputs for "best pick"

Minimum requirements before Bankroll Watch can call an MLB row a best pick:

- MLB team rating exists,
- start time has not passed,
- line is not stale,
- event source is not `Odds API no-vig only`,
- preferably probable starters are loaded.

### 5. Store model snapshot at pick time

When a pick is tracked, store:

- `modelSource`,
- `modelNotes`,
- `marketProbability`,
- `researchProbability`,
- `modelProbability`,
- `edge`,
- `stale`,
- `staleReason`,
- `intelFlag`,
- `intelAdjustment`,
- `starterInfo`,
- `afterLossPrior`,
- `trackedAt`,
- `minutesUntilStart`.

Reason:

- Postmortems should not depend on reconstructing context later.

## How to interpret June 30 going forward

Use June 30 as a systems-quality warning, not a pure prediction-quality warning.

Valid lessons:

- Market-only rows should not be promoted.
- Live/post-start tracking must be blocked.
- Close-price logic needs first-pitch protection.
- MLB needs starter/team/intel data before calling anything a pick.

Do not use June 30 to conclude:

- the full MLB model is bad,
- the after-loss prior failed,
- starter xERA failed,
- team-strength ratings failed.

Those pieces mostly were not active in the tracked rows.

## Related notes

- [[Results Log]]
- [[MLB Historical Odds Data 2012-2021]]
- [[MLB Backtest Miss Patterns]]
- [[Algorithm v1 Current Spec]]
- [[Bankroll and Risk Rules]]
- [[June 30 2026 Tracking Fix List]]
