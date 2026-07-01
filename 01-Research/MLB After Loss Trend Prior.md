# MLB After Loss Trend Prior

Source:

[TeamRankings MLB After A Loss](https://www.teamrankings.com/mlb/trend/win_trends/is_after_loss?range=yearly_mlb_since_2022)

Range:

```text
yearly_mlb_since_2022
```

## Purpose

This is a bounce-back prior for MLB.

It should help answer:

```text
How has this team performed in games immediately after a loss?
```

## Important rule

This should only apply if the team actually lost its previous game.

Do not use it as a generic team-strength rating.

## Current top after-loss teams

| Team | Record | Win % | MOV | Run line |
|---|---:|---:|---:|---:|
| LA Dodgers | 184-105 | 63.7% | +1.5 | +0.3 |
| Houston | 192-135 | 58.7% | +0.8 | +0.3 |
| Atlanta | 179-136 | 56.8% | +0.6 | -0.2 |
| Milwaukee | 179-138 | 56.5% | +0.6 | +0.3 |
| Philadelphia | 183-147 | 55.5% | +0.6 | +0.1 |
| San Diego | 189-152 | 55.4% | +0.5 | +0.2 |

## Current fade/watch list

| Team | Record | Win % | MOV | Run line |
|---|---:|---:|---:|---:|
| Colorado | 168-297 | 36.1% | -1.5 | -0.2 |
| Chi Sox | 167-275 | 37.8% | -1.0 | -0.1 |
| Sacramento | 175-259 | 40.3% | -1.0 | +0.1 |
| Kansas City | 176-233 | 43.0% | -0.6 | 0.0 |
| Washington | 183-241 | 43.2% | -0.9 | +0.3 |
| LA Angels | 180-233 | 43.6% | -0.4 | +0.2 |

## How to use in model

Recommended use:

- small confidence adjustment,
- tie-breaker in close moneyline decisions,
- extra caution on poor after-loss teams,
- never stronger than starting pitcher/lineup/bullpen.

Possible adjustment rule:

```text
afterLossAdjustment = (teamAfterLossWinPct - leagueAverageAfterLossWinPct) * smallWeight
```

Small weight should be conservative:

```text
0.10 to 0.20 of model confidence
```

## Do not use when

- previous game result is unknown,
- team did not lose previous game,
- starting pitcher changed the matchup dramatically,
- lineup is missing key bats,
- bullpen is gassed,
- price already reflects the trend.

## App status

The MLB tab now displays this trend table.

Not yet automated:

- previous-game result detection,
- team-name mapping from odds feed to TeamRankings names,
- direct probability adjustment.

