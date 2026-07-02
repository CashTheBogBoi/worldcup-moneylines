# Auto Grading Fix - 2026-07-02

## Problem

Games that had ended were not automatically updating on the site/model state.

## Root Cause

The scheduled data refresh wrote final scores into:

```text
public/data/latest.json
data/daily/YYYY-MM-DD/latest.json
```

But it did not grade:

```text
03-App/model-training-state.json
```

Before this fix, grading mostly happened in the browser inside `reconcileModelPicks()`. That meant the state could stay pending unless the app was open and refreshed after final scores were available.

There was also a timing issue: the `2026-07-02T01:56Z` snapshot still had Brewers/Reds and Astros/Twins as in-progress. A later data refresh was required before final scores existed for those exact event IDs.

## Fix

Added:

```text
npm run grade:picks
```

Script:

```text
scripts/grade-finished-picks.mjs
```

What it does:

- reads `public/data/latest.json`,
- reads `03-App/model-training-state.json`,
- finds pending tracked picks with event IDs,
- grades them from completed Soccer/MLB scores,
- writes the updated model state back to the vault,
- writes an Obsidian grading note.

It is now wired into:

```text
npm run daily
scripts/research-cycle.mjs
```

So every scheduled research window now runs:

```text
update data -> grade finished picks -> write research/review notes -> deploy
```

## Immediate Result

After refreshing data and running the grader, these MLB picks settled:

| Match | Pick | Result | Final |
|---|---|---:|---|
| Milwaukee Brewers vs Cincinnati Reds | Cincinnati Reds | loss | Brewers 4, Reds 2 |
| Milwaukee Brewers vs Cincinnati Reds | Milwaukee Brewers | win | Brewers 4, Reds 2 |
| Houston Astros vs Minnesota Twins | Houston Astros | loss | Twins 8, Astros 3 |
| Houston Astros vs Minnesota Twins | Minnesota Twins | win | Twins 8, Astros 3 |

Generated note:

```text
02-Markets/Daily Reviews/Auto Grading - 2026-07-02.md
```

## Remaining Watch Item

The hosted site still depends on synced model state. The safest workflow is:

```text
npm run daily
npm run deploy:firebase
```

or the scheduled equivalent:

```text
npm run schedule:nightly
```

The local app also mirrors vault state to Firestore when it loads, but the durable fix is that the vault state now gets graded before reviews/deploys.

