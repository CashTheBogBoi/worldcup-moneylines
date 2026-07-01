# Data Pipeline and Persistence

How the app gets its data automatically and how that data is kept durable. Added 2026-06-30
(v1.1) to stop hand-collecting stats and to stop losing state on resets. Companion to
[[Algorithm v1 Current Spec]] and [[App Build Plan]].

## Automated data sources

All free, no API key, all best-effort (a failed/blocked fetch degrades gracefully — it never
crashes and never wipes what was already saved).

| Source | Feeds | Endpoint | Browser-reachable? |
|---|---|---|---|
| The Odds API | Soccer + MLB moneylines, futures, `/scores` | `api.the-odds-api.com` (key in `.env`) | Yes |
| MLB Stats API | Confirmed starters, team standings (run diff) | `statsapi.mlb.com` | Yes (CORS-friendly) |
| Baseball Savant | Starter xERA (expected-stats CSV) | `baseballsavant.mlb.com` | Yes (confirmed) |
| Kalshi | Live futures win-probabilities | `api.elections.kalshi.com` | **No — needs proxy** |

### The Kalshi CORS block

Kalshi's API returns **403 Forbidden** to any request carrying a browser `Origin` header
(confirmed: with-Origin → 403, without → data). So a direct client fetch can never work. Fix: a
**Vite dev-server proxy** in `vite.config.js` routes same-origin `/kalshi/...` to Kalshi
server-side with the Origin header stripped. Works in `npm run dev`. A static production build
has no proxy, so it falls back to the snapshot until a serverless function is added.

MLB Stats API and Baseball Savant do NOT do this, which is why those work live in the browser.

## Persistence — two git-backed vault files

Everything the app learns from, and every fetched fact worth keeping, is mirrored to JSON files
**inside this vault** via a Vite dev endpoint. This survives dev-server restarts, port changes
(localStorage is keyed by origin — a restart on a different port made data *look* wiped), and
browser clears. Both files are committable to git for permanent durability.

- **`03-App/model-training-state.json`** (via `/api/state`) — the training set: graded model
  picks, team ratings, intel notes, results-based Elo, snapshots, settings.
- **`03-App/stats-history.json`** (via `/api/stats`) — fetched FACTS: MLB team ratings (run
  diff, RS/G, RA/G), starter xERA, Kalshi probabilities, plus a dated **history** time series
  (capped ~180 days) for future backtesting.

Odds/moneylines are deliberately NOT persisted — they only matter in the present.

### Keep-on-failure

The stats merge ignores empty fetch results, so the last-known stats survive a failed refresh —
the model keeps running on **cached stats** instead of going dark. On boot, the model hydrates
from saved stats immediately, before any live fetch. UI shows "Cached stats" (MLB tab) /
"(saved)" (Futures) when running on persisted data vs a fresh pull.

localStorage is retained as a fast cache and the production fallback; the vault file wins on boot.

## Operational notes

- **Restart the dev server after any `vite.config.js` change** — Vite only reads config at
  startup. This applies to both the Kalshi proxy and the `/api/state` + `/api/stats` endpoints.
- For durability across a full machine/container reset, `git commit` the two JSON files
  periodically (a scheduled auto-commit could do this).
- Production (static Firebase hosting) has no dev endpoints: persistence falls back to
  localStorage and Kalshi falls back to the snapshot. Add serverless functions to close both.

Related:

- [[Algorithm v1 Current Spec]]
- [[App Build Plan]]
- [[Source Map]]
- [[MLB Research Important Info]]
- [[External Source Research - 2026-06-30]]
