# June 30 2026 World Cup Prediction Postmortem

This note mirrors the June 30 MLB postmortem process, but for the World Cup Round of 32 slate.

Primary scoreboard requested:

```text
https://www.espn.com/soccer/scoreboard/_/date/20260630/league/all
```

Related scoreboard facts:

- [[June 30 2026 World Cup Scoreboard Facts]]

## Slate summary

June 30 World Cup matches:

| Match | Final | Advanced |
|---|---|---|
| Ivory Coast vs Norway | Ivory Coast 1, Norway 2 | Norway |
| France vs Sweden | France 3, Sweden 0 | France |
| Mexico vs Ecuador | Mexico 2, Ecuador 0 | Mexico |

## App-tracked and vault-tracked picks

| Pick | Match | Probability / read | Price | Close | Result | Tracking source |
|---|---|---:|---:|---:|---|---|
| Norway to advance / Norway lean | Ivory Coast vs Norway | Manual research lean | not recorded | not recorded | Win | Pick Notebook |
| France ML | France vs Sweden | 68.2% | -185 | -210 | Win | Model Lab seed/example |
| Mexico ML | Mexico vs Ecuador | 44.4%-45.1% | +125 to +131 | +136 | Win | Model Lab |

## Clean grading

### Norway over Ivory Coast

Result:

```text
Ivory Coast 1, Norway 2
```

Grade:

```text
Win
```

What went right:

- Manual research correctly identified Norway as the cleaner advancement side.
- The pre-match research leaned on Norway's full-strength attack and Erling Haaland returning
  after rest.
- The result matched that read: Norway advanced 2-1.

Limit:

- This was stored in Pick Notebook, not necessarily as a Model Lab algorithm pick.
- It should be graded as manual research success unless it was also placed/tracked elsewhere.

### France over Sweden

Result:

```text
France 3, Sweden 0
```

Grade:

```text
Win
```

What went right:

- Favorite-side read was correct.
- France avoided the draw-risk trap and won by multiple goals.
- This supports the backtest lesson that clear favorite/side reads are stronger than raw draw
  reads.

Limit:

- The Model Lab entry appears to be an older seeded/example pick:

```text
source = Odds API no-vig
note = Seed example; update result after final.
```

- Do not over-credit the current full model for this unless the pick was intentionally tracked
  as a real bet/research pick.

### Mexico over Ecuador

Result:

```text
Mexico 2, Ecuador 0
```

Grade:

```text
Win
```

What went right:

- The app's Mexico ML read won.
- The price was plus money, around +125 to +131.
- The close around +136 did not move badly against the pick.
- Mexico's home/venue edge mattered.
- Public match reports describe Mexico starting fast and controlling the game state enough to
  win 2-0.

Why this was the best World Cup tracked read:

- It was not tracked after kickoff.
- It used a model blend rather than pure `Odds API no-vig only`.
- It was a side/favorite-context pick, not a pure draw pick.
- It matched the post-v1.2 lesson: prefer side reads that overcome draw risk.

## What went wrong or almost went wrong

### 1. Old draw-risk logic still needs quarantine

Earlier app state had a Mexico/Ecuador Draw record at 34.1% that lost. The current tracked
state now emphasizes Mexico ML, but the lesson remains important:

```text
Do not treat Soccer draw probability as actionable unless market, matchup, and lineup context all confirm it.
```

Mexico winning 2-0 is exactly why the v1.2 draw guardrail exists.

### 2. Seed/example picks can pollute learning

France ML appears as a seed/example-style entry. It won, but if example rows remain in Model Lab,
they can distort:

- Brier score,
- adaptive model weight,
- win rate,
- perceived model quality.

Action:

```text
Mark seed picks as examples or exclude them from learning.
```

### 3. To-advance and 90-minute markets need separate treatment

Norway was documented as an advancement-side pick. The algorithm mostly tracks 90-minute h2h
moneylines. Those are not the same market.

For knockout soccer:

- 90-minute moneyline can lose on a draw even if the team advances.
- To-advance can win even if regulation ends tied.

Action:

```text
Store marketType explicitly: 90-minute ML, draw, to advance, futures, prop.
```

## World Cup slate performance

If counting the real research reads:

```text
Norway lean/to-advance: Win
Mexico ML: Win
```

If counting the seed France record:

```text
France ML: Win
```

Practical grade:

```text
June 30 World Cup side/advancement reads did well.
The major risk remains draw-market handling and seed/example contamination.
```

## Why World Cup did better than MLB on June 30

MLB June 30 had many market-only and post-start rows.

World Cup June 30 was cleaner:

- fewer tracked picks,
- clearer slate,
- model side read on Mexico was pre-kick,
- manual Norway research was correctly framed as advancement/lean,
- France was a straightforward favorite result.

## Algorithm lessons

### Keep

- Venue/home-edge treatment for Mexico-style situations.
- Favorite-side preference when the model has enough strength to overcome draw risk.
- Manual research notes for knockout context.

### Fix

- Separate 90-minute ML from to-advance.
- Exclude seed/example picks from learning.
- Keep draw picks quarantined unless multiple confirmations align.
- Store match market type and kickoff timing in every tracked pick.

## Related notes

- [[June 30 2026 World Cup Scoreboard Facts]]
- [[June 30 2026 Soccer Tracking Fix List]]
- [[World Cup Backtest Miss Patterns]]
- [[Future Match Probability Baseline]]
- [[Results Log]]
- [[Pick Notebook]]
