# MLB After Loss Trend Prior

**DEPRECATED as a model input (2026-07-01).** [[Algorithm Audit - 2026-07-01]] (finding F9)
found the fitted `afterLossScale` never moved meaningfully off its hand-set prior on any
dataset tried (postseason 47-game fit or the 10,616-game 2020-2024 refit) — i.e., the data
found no independent bounce-back effect beyond what team quality (already priced by the
strength terms) explains. The term has been removed from `mlbModel()`. This note and the
TeamRankings table stay on the MLB tab as manual research context only — the mechanics below
describe the retired implementation.

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

The MLB tab displays this trend table.

Automated in Algorithm v1.3:

- previous-game result detection from The Odds API `/scores`,
- team-name mapping from Odds API / MLB names to TeamRankings names,
- direct probability adjustment inside `mlbModel()`,
- persisted `mlbLastResults` in `03-App/stats-history.json` / local stats cache.

Current implementation:

```text
afterLossLogit = clamp((teamAfterLossWinPct - 0.500) * 0.60, -0.08, +0.08)
```

For the home team, the logit is added. For the away team, the logit is subtracted from the
home-team probability logit.

Guardrail:

- This is a small nudge only.
- It does not apply unless the team lost its previous completed game.
- It should not override starter quality, lineup news, bullpen state, or market no-vig.
- The historical MLB odds study showed the market is already efficient, so the trend prior is context, not a pick by itself.
