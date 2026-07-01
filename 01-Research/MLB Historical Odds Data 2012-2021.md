# MLB Historical Odds Data 2012-2021

Source file:

```text
/Users/cashmcdearis/Downloads/oddsData.csv.zip
```

Contained file:

```text
oddsData.csv
```

## What is inside

Rows:

- 45,530 team rows
- 22,738 reconstructed games
- 2012-03-28 through 2021-10-03
- 30 MLB teams

Columns:

- `date`
- `at` (`H` or `V`)
- `team`
- `gameNumber`
- `line` moneyline
- `runLine`
- `runLineOdds`
- `total`
- `overOdds`
- `underOdds`

No fields for:

- opponent
- final score
- sportsbook
- open vs close timestamp
- starting pitcher
- lineups
- weather

## Reconstruction method

The file is not always stored as direct home/away row pairs. For dates with many games, visitor rows and home rows can be grouped separately.

I reconstructed games by matching rows on:

- date,
- game number,
- matching total,
- matching over/under odds,
- normal two-sided moneyline vig range.

Result:

- 22,738 games paired,
- 45,476 of 45,530 rows paired,
- 99.9% row pairing rate.

Then I joined paired games to MLB Stats API regular-season final scores by date, home team, and away team.

Result:

- 20,531 games joined to final scores,
- 90.3% joined-score rate.

This is strong enough for calibration research, but not perfect enough to blindly treat every unmatched/matched row as official without a cleaned import script.

## Market shape

Average moneyline vig:

- 2.7% average,
- 2.5% median,
- 4.5% 95th percentile.

Favorite distribution:

- home favorite: 63.9%,
- away favorite: 33.7%,
- near coin flip, home 48%-52% no-vig: 16.1%,
- favorite 60%+ no-vig: 32.8%,
- favorite 70%+ no-vig: 3.4%.

Most common totals:

- 8.5 runs,
- 9.0 runs,
- 7.5 runs,
- 8.0 runs,
- 7.0 runs.

## Market calibration against actual winners

Joined sample:

- 20,531 games
- home win rate: 53.6%
- favorite win rate: 58.3%
- average favorite no-vig implied probability: 58.0%
- home-probability Brier score: 0.240

Interpretation:

- The historical MLB moneyline market is very well calibrated overall.
- A favorite winning 58.3% when priced around 58.0% means raw market disagreement alone is not an edge.
- The app should not create MLB picks just because a team is favored.

## Favorite bucket results

| Favorite no-vig bucket | Games | Favorite win rate | Avg implied | Flat favorite ROI |
|---|---:|---:|---:|---:|
| 50%-53% | 4,742 | 51.4% | 51.4% | -2.8% |
| 53%-56% | 4,281 | 56.1% | 54.5% | +0.2% |
| 56%-60% | 4,612 | 57.9% | 58.0% | -2.7% |
| 60%-65% | 4,424 | 61.7% | 62.4% | -3.5% |
| 65%-70% | 1,718 | 69.6% | 67.1% | +0.5% |
| 70%+ | 754 | 71.5% | 72.7% | -4.6% |

Interpretation:

- Betting every favorite loses after vig.
- The 53%-56% and 65%-70% buckets were slightly positive in this sample, but the edge is tiny and may be noise.
- Extremely heavy MLB favorites are dangerous from a profit standpoint even when they win often.

## Home vs away favorites

Home favorites:

- 13,549 joined games,
- 59.0% favorite win rate,
- 58.7% average implied probability,
- -2.0% flat ROI.

Away favorites:

- 6,982 joined games,
- 57.0% favorite win rate,
- 56.7% average implied probability,
- -2.1% flat ROI.

Interpretation:

- The market prices home and away favorites very efficiently.
- Away favorites are not automatically bad, but they still lost to vig in the flat-bet test.

## Totals context

Low totals, 7.5 or lower:

- 6,446 games,
- favorite win rate 57.9%,
- average implied 57.8%,
- -2.6% flat favorite ROI.

Medium totals, 8.0 to 9.0:

- 10,189 games,
- favorite win rate 58.2%,
- average implied 58.0%,
- -2.3% flat favorite ROI.

High totals, 9.5 or higher:

- 3,896 games,
- favorite win rate 59.2%,
- average implied 58.2%,
- -0.5% flat favorite ROI.

Interpretation:

- Higher-total games were slightly less punishing for favorites in this sample, but not enough by itself to become a betting rule.
- Total should be a context feature, not a standalone pick trigger.

## Team-level market residuals

Teams that outperformed market implied probability most in this joined sample:

| Team | Games | Actual win rate | Avg implied | Actual minus implied |
|---|---:|---:|---:|---:|
| OAK | 1,438 | 53.1% | 50.8% | +2.3% |
| STL | 1,409 | 55.4% | 53.6% | +1.8% |
| ATL | 1,410 | 51.8% | 50.2% | +1.7% |
| SEA | 1,446 | 49.7% | 48.2% | +1.5% |
| LAD | 1,315 | 59.8% | 58.7% | +1.1% |

Teams that underperformed market implied probability most:

| Team | Games | Actual win rate | Avg implied | Actual minus implied |
|---|---:|---:|---:|---:|
| CIN | 1,403 | 46.5% | 48.8% | -2.3% |
| NYM | 1,402 | 48.4% | 50.2% | -1.8% |
| MIA | 1,417 | 42.8% | 44.5% | -1.6% |
| PHI | 1,406 | 46.3% | 47.7% | -1.4% |
| SD | 1,309 | 45.5% | 46.6% | -1.2% |

Interpretation:

- These are decade-level historical residuals, not current-team edges.
- Useful as proof that market residuals tend to be small over large samples.
- Do not apply these directly to 2026 teams.

## Algorithm lessons

1. MLB market no-vig should remain a strong anchor.

The market's average favorite probability was almost exactly calibrated to the actual favorite win rate.

2. Do not over-trust huge favorites.

The 70%+ favorite bucket still lost -4.6% flat ROI. Big win probability does not automatically mean good bet.

3. Edge needs model disagreement plus payout value.

The app should require a real gap between algorithm probability and break-even probability after vig, not just a high hit chance.

4. Total can become an MLB context feature.

High-total games had a less negative favorite ROI in this sample. Treat this as a small confidence/context adjustment only.

5. Closing-line value would make this much better.

This file appears to have one line per game/team, not an open/close time series. It can calibrate market probability, but it cannot tell whether a price moved in our favor.

## Recommended app use

Use this dataset to update MLB guardrails:

- Keep MLB model probabilities compressed toward the market.
- Penalize heavy favorites unless the edge over break-even is real.
- Treat market no-vig as a highly credible baseline.
- Add `total` as a small context feature later.
- Prefer tracking CLV in Model Lab because flat market betting loses to vig.

Do not use this dataset as:

- a current-team strength source,
- an injury/lineup source,
- a pitcher-quality source,
- proof that any favorite bucket is automatically profitable.
