# Edge Algorithm v0.1

Status: archived first version.

For the current model, use [[Algorithm v1 Current Spec]].

For what the backtests taught us, use [[Algorithm Lessons From Backtests]].

Related app tab: Algorithm

## Goal

Create a first-pass algorithm for finding better World Cup odds by combining:

- Live sportsbook prices from The Odds API
- No-vig market probabilities
- Trusted external priors from Kalshi/Covers and Neil Paine/Polymarket methodology
- Conservative bankroll/risk rules

## Match algorithm

For 90-minute match moneylines:

1. Pull the best available line for each outcome from The Odds API.
2. Convert each line to raw implied probability.
3. Normalize the three-way market to remove vig.
4. If a trusted external match prior exists, blend:

```text
algorithm chance = 100% market no-vig
```

5. Compare algorithm chance to the posted break-even chance.
6. Rank by:

- EV proxy
- Edge over break-even
- Payout
- Research confidence

## Current research priors

No trusted external match priors are active right now. BetUS was removed from the active model at user request.

## Futures algorithm

For tournament futures:

1. Pull sportsbook futures from The Odds API.
2. Convert sportsbook price to implied probability.
3. Compare against Covers/Kalshi prediction-market probability.
4. Flag teams where Kalshi probability is higher than sportsbook implied probability.

## Current Kalshi/Covers futures priors

| Team | Probability |
|---|---:|
| France | 29.1% |
| Argentina | 21.3% |
| Spain | 10.7% |
| England | 9.4% |
| Brazil | 7.1% |
| Portugal | 6.2% |
| USA | 3.9% |
| Morocco | 3.6% |
| Mexico | 3.1% |
| Colombia | 2.8% |
| Norway | 2.1% |
| Belgium | 1.1% |
| Bosnia and Herzegovina | 1.0% |

## Limitations

- The algorithm is not a predictive model yet.
- It does not know injuries, lineup news, tactics, fatigue, weather, or live score state.
- It uses market-derived estimates, not an independent soccer simulation.
- It should identify research candidates, not automatic bets.

## Next upgrades

- Add editable user projection probability.
- Add source confidence controls.
- Add line staleness checks.
- Add Kalshi API ingestion.
- Add manual trusted-source line entry forms.
- Add stage advancement probabilities inspired by Neil Paine's normalization method.
- Feed Model Lab xG/team-strength values into match probabilities.

Related:

- [[Probability and Value Math]]
- [[Model Lab]]
- [[External Source Research - 2026-06-30]]
- [[Bankroll and Risk Rules]]
