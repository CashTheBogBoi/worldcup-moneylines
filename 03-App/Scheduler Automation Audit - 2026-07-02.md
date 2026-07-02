# Scheduler Automation Audit - 2026-07-02

## Status

The research/data/model/deploy chain itself works.

Verified manually through the same scheduled entrypoint:

```bash
npm run scheduler:watchdog
```

The watchdog caught the missing morning window and completed:

- `npm run update:data`
- `npm run grade:picks`
- `npm run sync:firebase`
- research-cycle Obsidian note
- Firebase Hosting deploy

Successful ledger entry:

- `02-Markets/Deploy Logs/Scheduler Run Ledger.md`
- Morning slate success at `2026-07-02T15:39:51.228Z`
- Data snapshot updated at `2026-07-02T15:39:51.466Z`
- Firestore model state saved at `2026-07-02T15:39:51.808Z`
- Deploy log: `02-Markets/Deploy Logs/Deploy - 2026-07-02 1140.md`

## Problem Found

macOS LaunchAgents are installed and loaded, but macOS privacy permissions are blocking background jobs from accessing the project in `Documents`.

Launchd stderr:

```text
shell-init: error retrieving current directory: getcwd: cannot access parent directories: Operation not permitted
zsh:1: operation not permitted: /Users/cashmcdearis/Documents/worldcup-moneylines/02-Markets/Deploy Logs/scheduler.log
```

This means the automations can work when run manually from the terminal, but macOS can stop them when they run unattended in the background.

## Fix Added

Added a watchdog LaunchAgent:

- `com.sportsedgelab.watchdog`
- runs every 15 minutes
- checks which research windows should have run today
- runs any missing window once
- writes a success/failure ledger

Updated status checks:

- `npm run scheduler:status`
- now reports 5 jobs: 4 scheduled windows + watchdog
- now shows `needs-attention` if macOS privacy blocks launchd
- no more false green status when the ledger is empty

## Required Mac Permission Step

Give background shell jobs access to the project folder.

Recommended:

1. Open System Settings.
2. Go to Privacy & Security.
3. Open Full Disk Access.
4. Add/enable:
   - Terminal
   - `/bin/zsh`
   - `/usr/bin/env`
   - the active Node/npm binary if shown
5. Re-run:

```bash
npm run scheduler:install
npm run scheduler:status
```

Then run:

```bash
launchctl kickstart -kp gui/$(id -u)/com.sportsedgelab.watchdog
npm run scheduler:status
```

Healthy status should show:

- `Sports Edge Lab scheduler: installed`
- 5/5 plists installed
- 5/5 jobs loaded
- no privacy-permission alert

## Research Windows

- Morning slate: 8:30 AM
- Pregame check: 12:30 PM
- Next wave: 5:30 PM
- Nightly review: 11:45 PM
- Watchdog catch-up: every 15 minutes

## Files Updated

- `scripts/scheduler-config.mjs`
- `scripts/scheduler-watchdog.mjs`
- `scripts/install-scheduler.mjs`
- `scripts/uninstall-scheduler.mjs`
- `scripts/scheduler-status.mjs`
- `package.json`
