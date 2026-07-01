# Probability and Value Math

Related app tab: Value

## American odds

American odds show payout and break-even probability.

Positive odds:

```text
+150 means a $100 stake wins $150 profit.
Break-even probability = 100 / (150 + 100) = 40.0%
```

Negative odds:

```text
-150 means a $150 stake wins $100 profit.
Break-even probability = 150 / (150 + 100) = 60.0%
```

## Raw implied probability

For positive odds:

```text
100 / (odds + 100)
```

For negative odds:

```text
abs(odds) / (abs(odds) + 100)
```

## No-vig probability

The sportsbook margin is embedded in the raw implied probabilities. To estimate a fair market probability:

```text
no-vig probability = raw probability / sum(all raw probabilities in the market)
```

For a World Cup 90-minute market, the outcomes are usually:

- Home team
- Draw
- Away team

## Fair line

The app converts no-vig probability back into American odds.

If probability is 50% or higher:

```text
American odds = -(probability / (1 - probability)) * 100
```

If probability is below 50%:

```text
American odds = ((1 - probability) / probability) * 100
```

## Expected value proxy

The app uses:

```text
EV = modelProbability * profit - (1 - modelProbability) * stake
```

In the current app, `modelProbability` now uses Edge Algorithm v0.1:

```text
100% Odds API no-vig market probability for match markets
Kalshi/Covers comparison for futures
```

BetUS is not used in the active model.

## Important limitation

No-vig probability is only the market's implied estimate after removing margin. It is not a true independent projection. A real betting edge needs a better model than the market.

Related:

- [[Bankroll and Risk Rules]]
- [[App Build Plan]]
- [[Edge Algorithm v0.1]]
