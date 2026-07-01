#!/bin/bash
# Auto-commit the Obsidian vault + model-training data to GitHub for durable, git-backed
# persistence. Run on a schedule by the launchd agent (see scripts/com.worldcup.autocommit.plist).
#
# Scope: only the vault DATA and NOTES — the two persisted JSON state files and the research
# note folders. It intentionally does NOT commit src/ code, so a mid-edit save can never be
# pushed in a broken state (and, with the workflow's paths filter, data commits don't redeploy).

set -euo pipefail

# launchd runs with a minimal PATH; add Homebrew + system bins so git and gh resolve.
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

REPO="/Users/cashmcdearis/Documents/worldcup-moneylines"
cd "$REPO" || exit 0

# Only the durable, auto-changing content — not code.
PATHS=(
  "03-App/model-training-state.json"
  "03-App/stats-history.json"
  "00-Index"
  "01-Research"
  "02-Markets"
  "03-App"
  "04-Picks"
)

# Stage only existing paths (a JSON file may not exist yet on first run).
for p in "${PATHS[@]}"; do
  [ -e "$REPO/$p" ] && git add "$p" 2>/dev/null || true
done

# Nothing staged -> nothing to do.
if git diff --cached --quiet; then
  exit 0
fi

git commit -q -m "Auto-commit vault + model data $(date '+%Y-%m-%d %H:%M')" || exit 0
git push -q origin main || exit 0
