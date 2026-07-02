# Model Lab Snapshot

Updated: 2026-07-02T03:42:40.384Z

## Summary
- Total tracked picks: 8
- Pending: 4
- Graded: 4
- Wins: 3
- Losses: 1
- Draws: 0
- Intel review decisions saved: 14
- Intel confirmed / denied / pending: 13 / 1 / 0

## Recent Picks
| Sport | Match | Pick | Status | Open | Latest | CLV | Model % | Source |
|---|---|---|---:|---:|---:|---:|---:|---|
| Unknown | Pittsburgh Pirates vs Philadelphia Phillies | Pittsburgh Pirates | loss | +203 | - | - | 44.3% | Algorithm v1.0 |
| Soccer | Portugal vs Croatia | Portugal | pending | -125 | -130 | 1.0 pts | 53.6% | Odds API no-vig only |
| Soccer | Canada vs Morocco | Morocco | pending | -120 | -120 | 0.0 pts | 52.8% | Odds API no-vig only |
| MLB | Athletics vs Los Angeles Dodgers | Athletics | pending | +158 | +150 | 1.2 pts | 39.8% | Odds API no-vig only |
| Soccer | Belgium vs Senegal | Belgium | win | +120 | +120 | 0.0 pts | 48.9% | 41% strength model + 59% market no-vig |
| Soccer | Mexico vs Ecuador | Mexico | win | +125 | +136 | -2.1 pts | 44.4% | 41% strength model + 59% market no-vig |
| Unknown | Mexico vs Ecuador | Mexico | pending | +140 | +125 | 2.8 pts | 42.4% | Odds API no-vig |
| Unknown | France vs Sweden | France | win | -185 | -210 | 2.8 pts | 68.2% | Odds API no-vig |

## Intel Review
| Intel ID | Decision | Reviewed At | Note |
|---|---:|---:|---|
| auto-mlb-started-824985 | confirmed | 2026-07-02T01:57:10.954Z |  |
| auto-mlb-started-825064 | confirmed | 2026-07-02T01:56:57.243Z |  |
| auto-soccer-heavy-fav-c798a1ffdeda28e82d930e7145a8ff10 | confirmed | 2026-07-02T01:52:38.876Z |  |
| auto-soccer-heavy-fav-3e161b2448ed76d6b0c0f5bda6fd5bf2 | confirmed | 2026-07-02T01:52:26.342Z |  |
| auto-soccer-draw-fb270a3dac2b682c861bd674a5ff4a04 | confirmed | 2026-07-02T01:52:13.091Z |  |
| auto-soccer-draw-c17fe2e46190d7ab6af01504ff240e82 | confirmed | 2026-07-02T01:52:04.342Z |  |
| auto-soccer-heavy-fav-a518ac20df8f5c732b881e213ae0c230 | confirmed | 2026-07-02T01:51:52.092Z |  |
| auto-mlb-starter-824985 | denied | 2026-07-02T01:51:17.610Z | Roki Sasaki starting tonight |
| auto-mlb-started-824337 | confirmed | 2026-07-02T01:50:01.870Z |  |
| auto-mlb-started-823767 | confirmed | 2026-07-02T01:50:01.051Z |  |
| auto-mlb-started-824174 | confirmed | 2026-07-02T01:49:59.515Z |  |
| auto-mlb-started-824094 | confirmed | 2026-07-02T01:49:57.982Z |  |
| auto-mlb-started-823446 | confirmed | 2026-07-02T01:49:52.547Z |  |
| auto-mlb-started-824905 | confirmed | 2026-07-02T01:49:24.195Z |  |

## Gate Review
| Gate Status | Picks | Settled | Win % | Avg CLV | Avg Brier | ROI |
|---|---:|---:|---:|---:|---:|---:|
| Unknown gate | 8 | 4 | 75.0% | 0.8 pts | 0.217 | -100.0% |

## Blocked Pick Watchlist
- Saved: 2026-07-02T03:42:39.429Z
- Current candidates: 65
- Passed / blocked: 0 / 65

### Top Blockers
- Model ready: 65
- Pregame: 65
- Positive edge: 47
- Positive EV: 47
- Model opinion: 30
- Intel clear: 24
- DraftKings line: 8

### Research Actions
| Sport | Pick | Match | Blocker | Line | Model % | EV | Next Action |
|---|---|---|---|---:|---:|---:|---|
| Soccer | Bosnia & Herzegovina | USA vs Bosnia & Herzegovina | Game too stale/live | +50000 | 1.9% | $839.02 | Skip if already started. If pregame, refresh odds before reconsidering. |
| Soccer | Draw | USA vs Bosnia & Herzegovina | Game too stale/live | +6000 | 9.7% | $489.64 | Skip if already started. If pregame, refresh odds before reconsidering. |
| MLB | Pittsburgh Pirates | Philadelphia Phillies vs Pittsburgh Pirates | Game too stale/live | +5000 | 10.8% | $450.00 | Skip if already started. If pregame, refresh odds before reconsidering. |
| MLB | Kansas City Royals | Kansas City Royals vs Tampa Bay Rays | Game too stale/live | +2800 | 14.5% | $320.82 | Skip if already started. If pregame, refresh odds before reconsidering. |
| MLB | Houston Astros | Houston Astros vs Minnesota Twins | Game too stale/live | +600 | 18.7% | $30.86 | Skip if already started. If pregame, refresh odds before reconsidering. |
| Soccer | USA | USA vs Bosnia & Herzegovina | Game too stale/live | -325 | 88.5% | $15.68 | Skip if already started. If pregame, refresh odds before reconsidering. |
| Soccer | Paraguay | Paraguay vs France | Game too stale/live | +1800 | 5.7% | $7.63 | Skip if already started. If pregame, refresh odds before reconsidering. |
| Soccer | Austria | Spain vs Austria | Game too stale/live | +1000 | 9.7% | $6.99 | Skip if already started. If pregame, refresh odds before reconsidering. |
| MLB | Athletics | Athletics vs Los Angeles Dodgers | Game too stale/live | +150 | 42.3% | $5.86 | Skip if already started. If pregame, refresh odds before reconsidering. |
| Soccer | Canada | Canada vs Morocco | Game too stale/live | +450 | 19.2% | $5.49 | Skip if already started. If pregame, refresh odds before reconsidering. |
| Soccer | Ghana | Colombia vs Ghana | Game too stale/live | +705 | 13.1% | $5.15 | Skip if already started. If pregame, refresh odds before reconsidering. |
| Soccer | Cape Verde | Argentina vs Cape Verde | Game too stale/live | +1900 | 5.2% | $4.82 | Skip if already started. If pregame, refresh odds before reconsidering. |

## Workflow
- Track picks from Best Plays or Value before the game starts.
- Refresh odds after the game is final so closing line and result can auto-grade.
- Run `npm run daily` to write the dated Daily Review note.
