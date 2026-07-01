# Sports Edge Lab

A local React/Vite app for tracking profitable odds across Soccer and MLB.

## What it does

- Fetches `h2h` moneyline odds from The Odds API for Soccer and MLB.
- Falls back to sample matches when no API key is configured.
- Shows best available home/draw/away lines across books.
- Lets you filter by bookmaker, search teams, and manually refresh.
- Tracks futures, to-advance research lines, local line-history snapshots, and pick notes.
- Adds an Intel tab for injury reports, probable pitchers, lineups, weather, and local pre-bet notes.
- Team-specific Intel notes adjust Soccer/MLB model ratings before the app ranks value and bankroll candidates.
- Calculates raw and no-vig implied probabilities.
- Tracks MLB moneylines with the same Odds API key using `baseball_mlb`.
- Prioritizes DraftKings in Bankroll Watch for the free `$200` workflow.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Add your API key to `.env`:

```bash
VITE_ODDS_API_KEY=your_key_here
```

By default this uses:

```bash
VITE_ODDS_SPORT_KEY=soccer_fifa_world_cup
VITE_ODDS_MLB_SPORT_KEY=baseball_mlb
VITE_ODDS_FUTURES_KEY=soccer_fifa_world_cup_winner
VITE_ODDS_REGION=us
```

## Tabs

- Soccer: current 90-minute moneylines, raw implied probability, no-vig probability, and to-advance research notes.
- MLB: current baseball moneylines and MLB modeling research notes.
- Futures: tournament winner prices from live API when configured, otherwise the research snapshot.
- Value: best current edges across Soccer and MLB.
- Algorithm: fair-line, no-vig, and research-probability comparison.
- Backtest: historical World Cup winner/draw prediction results from `WorldCupMatches.csv`.
- Backtest also includes 2025 MLB postseason Statcast winner checks from pitch-by-pitch data.
- Intel: injury, lineup, starter, weather, and late-scratch research links with a local notebook.
- Model Lab: closing-line value, Brier score, and editable team-strength inputs.
- Bankroll Watch: DraftKings-first best pick for tonight plus capped stake guidance.
- History: local snapshots saved every time odds refresh.
- Picks: a local notebook for Bovada, PrizePicks, futures, props, and research leans.
- Research: source notes and data plan.

## API note

This is a client-side starter, so the API key is visible in browser dev tools. That is fine for a private MVP, but production should use a small server endpoint to keep the key secret.

## Betting note

This app displays odds and implied probabilities for tracking. It does not place bets or recommend wagers.

## Backtest note

Run the World Cup historical backtest with:

```bash
npm run backtest:worldcup
npm run backtest:mlb
```

The provided CSV files have scores and/or Statcast features but no historical moneylines, so these measure prediction accuracy and calibration, not betting ROI.
