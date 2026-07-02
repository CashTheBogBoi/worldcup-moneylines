# June 30 2026 MLB Scoreboard Facts

Source:

```text
https://www.mlb.com/scores/2026-06-30
```

This note records the official final scores relevant to the app's tracked June 30 MLB picks.

## Tracked games

| Game | Final | Winning pitcher | Losing pitcher | App pick |
|---|---|---|---|---|
| Chicago White Sox at Baltimore Orioles | White Sox 9, Orioles 3 | Fedde | Gibson | White Sox ML |
| Texas Rangers at Cleveland Guardians | Rangers 4, Guardians 2 | deGrom | Bibee | Guardians ML |
| Pittsburgh Pirates at Philadelphia Phillies | Phillies 8, Pirates 0 | Cristopher Sánchez | Chandler | Pirates ML |
| New York Mets at Toronto Blue Jays | Mets 3, Blue Jays 0 | McLean | Gausman | Blue Jays ML |
| Washington Nationals at Boston Red Sox | Nationals 8, Red Sox 1 | Cavalli | Weissert | Nationals ML |
| St. Louis Cardinals at Atlanta Braves | Cardinals 5, Braves 3 | Liberatore | Martín Pérez | Braves ML |
| San Diego Padres at Chicago Cubs | Cubs 9, Padres 7 | Boyd | Sears | Cubs ML |
| Miami Marlins at Colorado Rockies | Marlins 14, Rockies 3 | not captured in postmortem scrape | not captured in postmortem scrape | Rockies ML |

## Result by app pick

| App pick | Grade | Final score |
|---|---|---|
| White Sox ML | Win | White Sox 9, Orioles 3 |
| Guardians ML | Loss | Rangers 4, Guardians 2 |
| Pirates ML | Loss | Phillies 8, Pirates 0 |
| Blue Jays ML | Loss | Mets 3, Blue Jays 0 |
| Nationals ML | Win | Nationals 8, Red Sox 1 |
| Braves ML | Loss | Cardinals 5, Braves 3 |
| Cubs ML | Win | Cubs 9, Padres 7 |
| Rockies ML | Loss | Marlins 14, Rockies 3 |

## Big scoreline notes

### White Sox 9, Orioles 3

The app pick won, but it was tracked about 89 minutes after first pitch at `-5000`. Treat this
as live-market contamination, not a useful pregame model win.

### Rangers 4, Guardians 2

The app picked Cleveland at 47.4%. Texas won behind Jacob deGrom. This is a classic example of
why starter context must be present before an MLB side is trusted.

### Phillies 8, Pirates 0

The app picked Pittsburgh at 34.0%. This was a low-probability plus-money shot and should not
have been promoted without a clear external edge.

### Mets 3, Blue Jays 0

The app picked Toronto at 47.7%. This was essentially a coin-flip market read and missed.

### Nationals 8, Red Sox 1

The app picked Washington at 45.0% and won. Good side, but still market-only.

### Cardinals 5, Braves 3

The app picked Atlanta at 37.3% and lost. The pick was tracked about 60 minutes after first
pitch, so it should not count as a clean pregame model prediction.

### Cubs 9, Padres 7

The app picked Chicago at 57.1% and won. This was the cleanest normal-looking tracked MLB win.

### Marlins 14, Rockies 3

The app picked Colorado at 44.9% and lost badly. This is the sharpest reminder that plus-money
MLB sides need stronger starter/bullpen/lineup/park support.

## Related notes

- [[June 30 2026 MLB Prediction Postmortem]]
- [[June 30 2026 Tracking Fix List]]
- [[Results Log]]
