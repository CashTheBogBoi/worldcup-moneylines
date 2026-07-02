# June 30 2026 World Cup Scoreboard Facts

Primary requested scoreboard:

```text
https://www.espn.com/soccer/scoreboard/_/date/20260630/league/all
```

Access note:

- ESPN's scoreboard page returned a JavaScript / bot-verification page in the research browser.
- Final scores were cross-checked through ESPN search snippets, Yahoo Sports, LA Times, The Times,
  FourFourTwo, and other public match reports.

Useful source URLs:

- ESPN fixtures/results schedule: `https://www.espn.com/soccer/story/_/id/48939282/2026-fifa-world-cup-fixtures-results-match-schedule-group-stage-knockout-rounds-bracket`
- Yahoo results page: `https://sports.yahoo.com/soccer/article/2026-world-cup-results-standings-and-schedule-live-scores-group-stage-updates-and-how-to-watch-050724193.html`
- LA Times live updates: `https://www.latimes.com/sports/soccer/live/fifa-world-cup-live-updates-tv-schedule-knockout-results-mexico-highlights`
- ESPN World Cup Daily recap: `https://www.espn.com/soccer/story/_/id/49223441/paraguay-tv-cuts-vital-pen-mexico-fans-get-noisy-ecuador-hotel`

## Final scores

| Date | Stage | Match | Final | Advanced |
|---|---|---|---|---|
| 2026-06-30 | Round of 32 | Ivory Coast vs Norway | Ivory Coast 1, Norway 2 | Norway |
| 2026-06-30 | Round of 32 | France vs Sweden | France 3, Sweden 0 | France |
| 2026-06-30 | Round of 32 | Mexico vs Ecuador | Mexico 2, Ecuador 0 | Mexico |

## Match facts relevant to the app

### Ivory Coast 1, Norway 2

Manual app/vault pick:

- Norway to advance / Norway lean
- Result: Win

Useful match context:

- Norway won 2-1.
- Erling Haaland scored the late winner according to match reports.
- This validated the manual research note that Norway was the cleaner advancement side.

### France 3, Sweden 0

Model Lab / seeded tracked pick:

- France ML
- Algorithm probability in old seed: 68.2%
- Result: Win

Useful match context:

- France won cleanly, 3-0.
- Kylian Mbappe was cited in public recaps as a major driver of the result.
- This was a favorite-side result, not a draw-risk result.

### Mexico 2, Ecuador 0

Model Lab tracked pick:

- Mexico ML
- Algorithm probability: 44.4% to 45.1%, depending on tracked record version
- Open line: around +125 to +131
- Close line: around +136
- Result: Win

Useful match context:

- Mexico won 2-0.
- Match reports cited goals from Julian Quinones and Raul Jimenez.
- Mexico's home/venue edge mattered.
- The old draw-risk concern did not materialize.

## App-relevant result grades

| Pick source | Pick | Match | Result | Notes |
|---|---|---|---|---|
| Pick Notebook | Norway to advance / Norway lean | Ivory Coast vs Norway | Win | Manual research pick, not necessarily Model Lab tracked. |
| Model Lab seed | France ML | France vs Sweden | Win | Seed/tracked example, old `Odds API no-vig` style. |
| Model Lab | Mexico ML | Mexico vs Ecuador | Win | Best clean tracked World Cup side from the June 30 slate. |

## Related notes

- [[June 30 2026 World Cup Prediction Postmortem]]
- [[June 30 2026 Soccer Tracking Fix List]]
- [[Pick Notebook]]
- [[Results Log]]
- [[World Cup Backtest Miss Patterns]]
