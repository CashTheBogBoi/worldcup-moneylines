# World Cup Moneyline Research

Last researched: June 30, 2026.

## Product direction

Build this as a World Cup market tracker first, then layer picks on top:

1. Current 90-minute moneylines by match.
2. Advance/qualify lines for knockout matches.
3. Tournament futures.
4. Historical snapshots and closing-line movement.
5. Pick notebook for Bovada, PrizePicks, and other sources.

This should not be a bet-placement app. It should track market prices, source differences, implied probabilities, and notes.

## Source map

### Bovada

Use Bovada as a research/front-end odds source, especially for:

- World Cup match pages.
- Tournament futures.
- Specials.
- Live/in-play context.

Bovada does not appear to offer a public developer API. For app data, prefer an odds aggregator that includes Bovada instead of scraping Bovada pages.

Useful pages:

- https://www.bovada.lv/sports/soccer/fifa-world-cup
- https://www.bovada.lv/sports/soccer/fifa-world-cup/fifa-world-cup-matches
- https://www.bovada.lv/sports/soccer/fifa-world-cup/fifa-world-cup-futures/tournament-futures/futures-odd

### PrizePicks

PrizePicks is not a normal sportsbook moneyline source. Treat it as:

- Picks and match previews.
- Team Picks / payout-multiplier style markets where available.
- Player projection research for props.

Useful pages:

- https://www.prizepicks.com/tags/2026-world-cup
- https://www.prizepicks.com/category/soccer

For machine-readable PrizePicks data, research third-party feeds like OpticOdds or SportsGameOdds.

### The Odds API

Best starter API for the current app:

- Sport key: `soccer_fifa_world_cup`
- Match market: `h2h`
- Futures key: `soccer_fifa_world_cup_winner`
- Club World Cup key: `soccer_fifa_club_world_cup`
- Historical odds endpoint available on paid plans.

Useful docs:

- https://the-odds-api.com/sports-odds-data/sports-apis.html
- https://the-odds-api.com/liveapi/guides/v4/
- https://the-odds-api.com/historical-odds-data/

### Deeper feeds

Use these if the app needs more than the starter API:

- OpticOdds: broad sportsbook coverage, historical odds, props, faster feeds.
- SportsGameOdds: World Cup coverage, PrizePicks-oriented endpoints, props.
- TheRundown: odds, scores, schedules, Kalshi/Polymarket.

## June 30, 2026 match slate

Round of 32:

- Ivory Coast vs Norway, 1 p.m. ET, Arlington/Dallas area.
- France vs Sweden, 5 p.m. ET, East Rutherford.
- Mexico vs Ecuador, 9 p.m. ET, Mexico City.

Research notes:

- Ivory Coast vs Norway: market generally makes Norway the favorite in regulation or to advance, but 90-minute moneyline pricing can be plus money because draw is live in soccer.
- France vs Sweden: France is a heavy favorite. Sweden looks more viable in props or handicap markets than straight moneyline unless chasing a long price.
- Mexico vs Ecuador: tighter market. Mexico has home/venue edge and defensive form, Ecuador brings upset profile and stronger transition/defensive arguments.

## Bovada futures snapshot

Bovada tournament winner prices seen in research:

- France +225
- Argentina +350
- England +700
- Spain +700
- Brazil +1200
- Portugal +1200
- Morocco +2000
- Colombia +3000
- USA +3000
- Norway +5000
- Mexico +6000
- Ecuador +15000
- Ivory Coast +30000
- Sweden +40000

Always re-check before using. Futures move quickly after each knockout result.

## App backlog

Near-term:

- Add "best line" and "worst line" by outcome.
- Add stale-line warnings with timestamp.

Historical:

- Add paid historical snapshot support through The Odds API.
- Save local snapshots every refresh to `localStorage` for a lightweight personal line-history view.
- Track opening line, latest line, and closing line.

PrizePicks:

- Add a section for projection notes, not sportsbook moneylines.
- Record player prop targets, line, projection, source, and confidence.

Compliance:

- Show legal/age reminder.
- Do not automate bet placement.
- Avoid calling anything a lock.

## Probability and value math

American odds show payout and break-even chance:

- Positive odds: `+150` means a $100 stake wins $150 profit. Break-even probability is `100 / (150 + 100) = 40%`.
- Negative odds: `-150` means a $150 stake wins $100 profit. Break-even probability is `150 / (150 + 100) = 60%`.

The app shows:

- Raw implied probability: direct conversion from the posted line.
- No-vig probability: each raw probability divided by the market's total implied probability. This removes the book's margin from the three-way market.
- Fair line: American odds converted back from the no-vig probability.
- $100 profit: profit returned if a $100 stake wins at the posted line.
- EV proxy: `modelProbability * profit - (1 - modelProbability) * stake`.

Important limitation: no-vig probability is only a market-implied estimate. A real edge needs an independent projection that beats the market often enough over time.
