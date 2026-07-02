# Finished Game Status Fix - 2026-07-02

## Problem

Bankroll Watch and Algorithm rows were still showing already-started or already-finished games as blocked betting candidates.

The example was:

- Arizona Diamondbacks vs San Francisco Giants
- Odds event start: `2026-07-02T01:41:00Z`
- The row showed `Blocked` with `Game has started`
- The score feed had a score, but the Odds API score object still said `completed: false`

## Root Cause

The app had two separate concepts:

- tracked Model Lab picks, which could be graded from final scores
- generated board rows, which were built directly from odds events

The generated rows did not know that a matching score existed. They only knew the start time had passed, so they stayed in `Blocked / Game has started` instead of showing a settled/final state.

The grading code also only trusted `completed: true`. That misses MLB cases where the score exists but the upstream completed flag lags.

## Fix

Added a score registry in the app:

- keyed by Odds API event id
- fallback keyed by normalized team pair
- used by generated value rows, preferred-book rows, Ready-to-Bet gate, and tracked-pick reconciliation

Added a final-score fallback:

- trust `completed: true`
- otherwise, if numeric scores exist and the event started at least `5.5` hours ago, treat it as settled

Updated `scripts/grade-finished-picks.mjs` to use the same logic so browser grading and scheduled grading agree.

## User-Facing Result

Finished games should no longer sit on the board as ordinary blocked candidates. They should fail the gate with `Game is final` and tracked picks can be graded even when the upstream completed flag is late.

## Files

- `src/main.jsx`
- `scripts/grade-finished-picks.mjs`
