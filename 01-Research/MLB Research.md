# MLB Research

Related app tab: MLB

## Live data source

Use The Odds API:

```text
Sport key: baseball_mlb
Market: h2h
Odds format: american
```

This gives MLB moneylines. Later, add spreads and totals.

## Comparison sources

Use these for line shopping and manual comparison:

- Covers MLB odds
- ESPN odds
- VegasInsider consensus
- DraftKings / FanDuel screens
- Yahoo Sports odds

These are context sources unless we add structured ingestion.

## Model inputs that matter for MLB

MLB is much more pitcher-sensitive than soccer. A useful model should track:

- Starting pitcher
- Pitcher handedness
- Pitcher recent form
- Bullpen fatigue
- Lineup confirmation
- Team wRC+ / xwOBA / xSLG
- Park factor
- Weather and wind
- Travel/rest
- Closing line value

## Team trend source

[TeamRankings MLB After A Loss](https://www.teamrankings.com/mlb/trend/win_trends/is_after_loss?range=yearly_mlb_since_2022) is now tracked as a bounce-back prior.

Use this carefully:

- It should apply only when the team actually lost its previous game.
- It is a team-context prior, not a standalone pick.
- It should be weaker than starting pitcher, lineup, bullpen, and market price.
- It is useful for tie-breaking close MLB moneyline reads.

Notable since-2022 after-loss leaders from the current research pass:

- LA Dodgers: 184-105, 63.7%
- Houston: 192-135, 58.7%
- Atlanta: 179-136, 56.8%
- Milwaukee: 179-138, 56.5%
- Philadelphia: 183-147, 55.5%

After-loss fade/watch list:

- Colorado: 168-297, 36.1%
- Chi Sox: 167-275, 37.8%
- Sacramento: 175-259, 40.3%
- Kansas City: 176-233, 43.0%
- Washington: 183-241, 43.2%

## Current app behavior

- Pulls MLB moneylines with `baseball_mlb`.
- Includes MLB in Bankroll Watch.
- Highlights a single best remaining pick for tonight, prioritizing DraftKings when a DraftKings line is available.
- Uses Odds API no-vig probability as the current model probability.

## Next upgrades

- Add starter/bullpen input fields.
- Add park/weather notes.
- Add Statcast-inspired xwOBA inputs.
- Add previous-game result detection so after-loss trends can adjust MLB model confidence.
- Auto-send best MLB candidate to Model Lab for CLV/Brier tracking.

Related:

- [[Model Lab]]
- [[Edge Algorithm v0.1]]
- [[Bankroll and Risk Rules]]
