# Research Automation Schedule

The app now runs local research cycles throughout the day. Each cycle refreshes model input data and writes a phase-specific Obsidian note in `02-Markets/Research Cycles/`.

## Daily windows

| Window | Command | Purpose |
|---|---|---|
| Morning slate build | `npm run research:morning` | Build the day from scratch: odds, MLB starters, soccer prices, and high-impact intel. |
| Pregame confirmation | `npm run research:pregame` | Confirm starters, lineups, stale odds, DraftKings gaps, and first-wave games before they go live. |
| Next-wave check | `npm run research:wave` | Re-rank later games after market movement and early intel changes. |
| Nightly close and review | `npm run research:nightly` | Refresh finals, auto-grade picks, write Daily Review, and summarize miss patterns. |

## Model input rules

- Track picks from Best Plays or Value before start time.
- Let the app auto-capture closing line, result, CLV, and Brier.
- Use Manual correction only for score-feed misses, provider mismatches, or backfills.
- High-impact intel blocks should stop a pick from becoming a bankroll play.
- Obsidian remains the readable record: Daily Data Refresh, Research Cycles, Daily Reviews, and Model Lab Snapshot.

## Manual fallback

Run the full local daily workflow any time:

```bash
npm run daily
```

