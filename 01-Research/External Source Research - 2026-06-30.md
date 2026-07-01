# External Source Research - 2026-06-30

Links researched:

- Neil Paine Substack: https://neilpaine.substack.com/p/2026-world-cup-odds-tracker
- Covers World Cup odds: https://www.covers.com/world-cup/odds
- Reddit r/ussoccer odds thread: https://www.reddit.com/r/ussoccer/comments/1ueicst/current_world_cup_odds/
- Kalshi World Cup category: https://kalshi.com/category/sports/soccer/fifa-world-cup/world-cup/games
- Kalshi World Cup winner market: https://kalshi.com/markets/kxmenworldcup/mens-world-cup-winner/kxmenworldcup-26
- BetUS World Cup odds: https://www.betus.com.pa/sportsbook/fifa/world-cup/ - archived, not trusted for active model

## Neil Paine / Polymarket tracker

Neil Paine's tracker is useful because it aggregates Polymarket odds across tournament advancement outcomes:

- Win group
- Make knockout round
- Advance through later rounds
- Win the World Cup

Key methodology note: odds are normalized within each competition subset so the totals match the correct number of advancing teams. This is valuable because raw market probabilities can overstate totals when margins or overlapping markets are not normalized.

App implication:

- Add a future "Advancement Model" tab.
- Store probabilities by stage, not only tournament winner.
- Compare Polymarket/Neil-style stage probabilities against sportsbook "to qualify" markets.

## Covers / Kalshi futures

Covers published a June 30, 2026 update using Kalshi probabilities. It framed France as the top choice after a perfect group stage, with Argentina close behind and Spain third.

Covers/Kalshi snapshot:

| Team | Probability | American odds |
|---|---:|---:|
| France | 29.1% | +244 |
| Argentina | 21.3% | +369 |
| Spain | 10.7% | +835 |
| England | 9.4% | +964 |
| Brazil | 7.1% | +1308 |
| Portugal | 6.2% | +1513 |
| USA | 3.9% | +2464 |
| Morocco | 3.6% | +2678 |
| Mexico | 3.1% | +3126 |
| Colombia | 2.8% | +3471 |
| Norway | 2.1% | +4662 |
| Belgium | 1.1% | +8991 |
| Bosnia and Herzegovina | <1% | +9900 |

Research notes:

- France was market leader.
- Argentina remained the closest challenger.
- Germany and Netherlands exits reshaped the futures board.
- Brazil had already reached the quarterfinals after eliminating Japan.
- USA futures were boosted by path and group performance, but still long-shot territory.

App implication:

- Add Kalshi futures as a separate prediction-market source from sportsbook futures.
- Do not mix Kalshi probabilities and sportsbook odds without labeling source type.

## Kalshi direct market

Kalshi's direct World Cup winner market exposed:

- France around 28.9%
- Argentina around 21.2%
- Spain around 10.7%
- Yes/No contract prices in cents
- Market/event metadata, including series/event/market identifiers

Kalshi also has official API docs covering real-time market data and trade execution via REST, WebSocket, and FIX. The sports filters endpoint can list available sports filters.

App implication:

- Kalshi can become a data source if we add a Kalshi API integration.
- Prediction-market contracts should be shown as probabilities/cents first, American odds second.
- The app should keep regulatory/risk language separate from sportsbook language.

## BetUS match markets - archived / not trusted

Do not use BetUS in the active algorithm. It remains here only as an archived research artifact.

BetUS had detailed World Cup match markets and props for June 30.

### France vs Sweden

Regulation moneyline:

| Selection | Price |
|---|---:|
| France | -360 |
| Draw | +525 |
| Sweden | +910 |

To qualify:

| Selection | Price |
|---|---:|
| France to qualify | -800 |
| Sweden to qualify | +500 |

Props seen:

- Both teams to score Yes: -140
- Both teams to score No: Even
- Kylian Mbappe to score Yes: -165
- Ousmane Dembele to score Yes: +125
- Alexander Isak to score Yes: +375

### Mexico vs Ecuador

Regulation moneyline:

| Selection | Price |
|---|---:|
| Mexico | +125 |
| Draw | +185 |
| Ecuador | +295 |

To qualify:

| Selection | Price |
|---|---:|
| Mexico to qualify | -175 |
| Ecuador to qualify | +145 |

Props seen:

- Both teams to score Yes: +140
- Both teams to score No: -180
- Raul Jimenez to score Yes: +225

App implication:

- BetUS is not trusted as an active app source.
- Match market pages include regulation, to-qualify, BTTS, scorer props, totals, and handicaps.
- The app should support separate market categories instead of only `h2h`.

## Reddit r/ussoccer sentiment thread

The Reddit thread is not a data source, but it is useful for market sentiment and user-level arguments.

Notable themes:

- USA odds were discussed as potentially inflated by home soil, path, and casual money.
- Some users liked long-shot/dark-horse prices such as Morocco or Norway, but others argued these are usually poor bets unless odds are clear outliers.
- A useful betting-process comment argued that profitable betting requires finding outlier prices relative to a sharper source, not simply liking a team.
- The same comment suggested that futures need a meaningful premium over sharp-market prices to overcome vig and timing risk.

App implication:

- Add a "Sentiment" note source, but keep it clearly separate from pricing data.
- Add "compare to sharp source" as a future app feature.
- The Bankroll Watch tab should remain conservative.

## Research conclusions

1. Use The Odds API for starter automated sportsbook odds.
2. Add Kalshi as a separate prediction-market source if we want real-time futures probability.
3. Use Bovada/Covers/Kalshi manually for cross-checking markets and finding props.
4. Use Neil Paine/Polymarket style normalization as inspiration for an advancement-probability tab.
5. Use Reddit only as sentiment/context, not truth.

Related:

- [[Source Map]]
- [[Probability and Value Math]]
- [[Bovada Futures Snapshot]]
- [[June 30 2026 Match Slate]]
- [[App Build Plan]]
- [[Bankroll and Risk Rules]]
