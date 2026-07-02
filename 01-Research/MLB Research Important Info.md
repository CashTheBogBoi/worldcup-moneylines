
	Everything included rn, xStats, baseball savant (https://baseballsavant.mlb.com/probable-pitchers)
	https://baseballsavant.mlb.com/gamefeed

## Wired into the app (2026-06-30)

Neither Savant page ships a documented public JSON API, but two things underneath them do,
and both are now live in `src/main.jsx`, no API key needed:

- **Confirmed starters** — `statsapi.mlb.com` (official MLB Stats API) schedule endpoint with
  `hydrate=probablePitcher`. This is what actually answers "who's really starting tonight,"
  which is the MLB pre-bet gate in [[Injury and Lineup Intel]].
- **xStats (xERA)** — Baseball Savant's expected-statistics leaderboard supports a plain
  `&csv=true` export with `xera`, `xwoba`, `est_ba`, `est_slg` per pitcher. The app fetches
  this and matches it to tonight's confirmed starter by name.

Both feed a new starter-quality adjustment in `mlbModel()`: the away pitcher's xERA minus the
home pitcher's xERA (scaled, capped at ±0.6) shifts the win probability on top of the existing
team-strength model — so a Skenes-vs-replacement-level-starter game moves noticeably more than
a coin-flip matchup, matching [[MLB Research]]'s "MLB is much more pitcher-sensitive than
soccer."

This is best-effort: if the browser can't reach Baseball Savant (no documented CORS policy —
unlike the MLB Stats API, which is widely used cross-origin), the app just falls back to
team-strength-only, same as before. Check the MLB tab's "MLB starter data" card each refresh —
it says **Live Statcast xERA** when the fetch worked, **Unavailable** when it didn't. If it's
consistently unavailable, the fix is the same one already flagged for the Odds API key: add a
small server-side proxy so the browser isn't making the cross-origin call directly.

Related:

- [[MLB Research]]
- [[Injury and Lineup Intel]]
- [[ESPN Fantasy MLB Daily Notes - July 1 2026]]
- [[Model Lab]]
- [[Edge Algorithm v0.1]]
