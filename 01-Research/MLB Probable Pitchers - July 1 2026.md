# MLB Probable Pitchers - July 1 2026

Primary source:

- MLB.com probable pitchers: `https://www.mlb.com/probable-pitchers/2026-07-01`

This is the official starter source for the July 1 MLB board. Use this above ESPN, LineupExperts,
CBS, RotoWire, or any sportsbook blurb when starter sources disagree.

## Source priority

For the app:

1. MLB.com probable pitchers / MLB Stats API = source of truth for listed starter.
2. Baseball Savant = source of truth for xStats after starter identity is known.
3. Lineup board = source of truth for batting order, weather, umpire, and late lineup context.
4. ESPN Fantasy Daily Notes = projection context only.

## Official listed starters

| Game | Status when reviewed | Away starter | Away line | Home starter | Home line | Model note |
|---|---|---|---|---|---|---|
| Pirates at Phillies | In progress, top 4 | Paul Skenes | RHP, 6-7, 3.47 ERA, 117 SO | Zack Wheeler | RHP, 8-1, 2.18 ERA, 80 SO | True ace-vs-ace. Price should be tight; Phillies edge comes from Wheeler/team context, not just favorite status. |
| Cardinals at Braves | In progress, top 3 | Michael McGreevy | RHP, 3-6, 3.15 ERA, 59 SO | Reynaldo Lopez | RHP, 3-1, 3.49 ERA, 43 SO | Starter gap small. Need lineup/bullpen/market edge. |
| Rays at Royals | In progress, bot 1 | Shane McClanahan | LHP, 6-5, 3.30 ERA, 73 SO | Seth Lugo | RHP, 3-5, 4.34 ERA, 71 SO | Tampa gets starter-quality lean; Royals price would need compensation. |
| Twins at Astros | Warmup | Taj Bradley | RHP, 6-3, 3.98 ERA, 91 SO | Tatsuya Imai | RHP, 5-3, 5.36 ERA, 58 SO | ESPN liked Imai, but MLB surface line is weaker than the headline. Do not upgrade Astros blindly. |
| Reds at Brewers | Pregame | Andrew Abbott | LHP, 5-4, 3.90 ERA, 70 SO | Shane Drohan | LHP, 3-2, 3.12 ERA, 52 SO | ESPN liked Abbott, but Drohan's listed ERA is better and Brewers have stronger team context. |
| Marlins at Rockies | Pregame | Max Meyer | RHP, 9-0, 2.60 ERA, 107 SO | Kyle Freeland | LHP, 1-7, 7.50 ERA, 61 SO | Clear starter gap to Miami, but Coors adds volatility. Market price decides whether it is playable. |
| Dodgers at Athletics | Pregame | TBD | No MLB starter listed | J.T. Ginn | RHP, 6-4, 3.15 ERA, 78 SO | **Model not ready** until Dodgers starter is confirmed. Block Bankroll Watch promotion. |
| Giants at Diamondbacks | Pregame | Trevor McDonald | RHP, 2-6, 4.94 ERA, 45 SO | Zac Gallen | RHP, 3-7, 6.15 ERA, 52 SO | Both starters have weak surface lines. Avoid confident side unless market/model edge is strong. |
| White Sox at Orioles | Final | Noah Schultz | LHP, 2-5, 5.86 ERA, 40 SO | Dean Kremer | RHP, 1-1, 3.18 ERA, 20 SO | Orioles won. ESPN liked Kremer; official starter data supports Baltimore starter edge. |
| Rangers at Guardians | Final | MacKenzie Gore | LHP, 5-7, 4.31 ERA, 104 SO | Joey Cantillo | LHP, 7-3, 3.86 ERA, 89 SO | Guardians won. ESPN's Gore signal missed the official surface-stat/team context. |
| Tigers at Yankees | Final | Troy Melton | RHP, 4-1, 2.05 ERA, 32 SO | Will Warren | RHP, 7-3, 3.73 ERA, 91 SO | Tigers won. Melton's official line was much stronger than generic Yankees home/team appeal. |
| Nationals at Red Sox | Final | Brad Lord | RHP, 5-1, 3.18 ERA, 52 SO | Payton Tolle | LHP, 4-6, 3.39 ERA, 74 SO | Nationals won. Prior slate note had stale Andrew Alvarez; official refresh fixed it. |
| Padres at Cubs | Final | Walker Buehler | RHP, 5-4, 4.61 ERA, 76 SO | Colin Rea | RHP, 6-5, 4.74 ERA, 68 SO | Cubs won 23-3. Starter names did not matter as much as full game/lineup/park context. |
| Mets at Blue Jays | Final | Freddy Peralta | RHP, 5-7, 4.81 ERA, 92 SO | Braydon Fisher | RHP, 3-3, 3.40 ERA, 43 SO | Blue Jays won. Official source corrected stale Patrick Corbin note. |

## Model lessons

### Starter identity must be official

The app should not use a starter adjustment unless MLB.com / MLB Stats API confirms the starter.
If a secondary source has a different pitcher, flag the game as source-disagreement and block
promotion to "best pick tonight."

### Surface line is not enough

The official probable-pitchers page gives ERA, wins/losses, and strikeouts. These are useful
for human review but should not replace Baseball Savant xERA/xwOBA. Use them as sanity checks:

- strong official line + strong xERA = durable starter upgrade,
- weak official line + strong ESPN fantasy rank = investigate before trusting,
- source disagreement or TBD = no starter edge.

### July 1 strongest starter signals

- **Max Meyer over Kyle Freeland**: largest official starter gap, but Coors Field volatility
  demands a price discount.
- **Zack Wheeler over Paul Skenes**: Wheeler has the better listed line, but Skenes is strong
  enough to prevent a huge favorite adjustment.
- **Shane McClanahan over Seth Lugo**: moderate Tampa starter lean.
- **Brad Lord over stale Alvarez note**: proof that stale probable-pitcher data can break the
  model if not refreshed.

### July 1 fade / caution signals

- **Dodgers at Athletics**: Dodgers starter TBD on official page. No model-ready side.
- **Astros / Imai**: ESPN headline was positive, but official MLB surface stats were not
  strong enough for an automatic Astros upgrade.
- **Giants at Diamondbacks**: both starters had weak listed ERAs; this should be market/team
  strength led rather than starter led.

## App changes this supports

- Add `starterConfirmedBy: "MLB.com"` to MLB pick snapshots.
- Add `starterSourceDisagreement: true` when MLB.com and a lineup board disagree.
- Add `starterSurfaceLine` to the model tooltip: handedness, ERA, SO, W-L.
- Keep `xera` as the actual coefficient input when available.
- Block Bankroll Watch if official starter is TBD.

Related:

- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[MLB Research Important Info]]
- [[Injury and Lineup Intel]]
- [[MLB Slate - June 30 to July 1 2026]]
- [[June 30 2026 Tracking Fix List]]
