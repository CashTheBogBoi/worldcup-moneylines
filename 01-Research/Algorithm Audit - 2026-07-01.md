# Algorithm Audit - 2026-07-01

Deep technical audit of the MLB algorithm across the vault, `src/main.jsx`, `src/mlCalibration.js`, and the training/backtest scripts. Every finding below was verified against the code, and the fixes shipped the same day (Algorithm v2). See [[Algorithm v1 Current Spec]] for the updated spec and [[ML Calibration Layer]] for the new fit.

## What was verified clean

- All three backtest scripts are walk-forward with no look-ahead bias — predictions are always made before team state updates.
- Post-start pick tracking is blocked (`readyToBetGate` requires pregame).
- Kelly/EV/edge consistently use the blended probability and the best posted price.
- No hardcoded research priors override the MLB model.

## Findings (ranked) and fixes

### F1. Closing-line capture never froze at first pitch — CLV was corrupted (FIXED)
`reconcileModelPicks` overwrote `closePrice` on every refresh until grading, with no start-time check — live in-game odds (June 30: Blue Jays +135 "closed" +2200) became closing prices. This was Priority 2 on [[June 30 2026 Tracking Fix List]] and had never been implemented.
**Fix:** close capture now stops at `commence_time`; `closeFrozenAt` is stamped. Unit-verified.

### F2. The adaptive-weight loop graded the wrong probability (FIXED)
`computeAdaptiveModelWeight` scored the **blended** pick probability. Self-referential: as model weight falls, the blend tracks the market, the measured Brier converges to the market's, and the loop can never learn whether the *model* is good.
**Fix:** picks now store `researchProbability` (model-only) and `marketProbability` at track time; the weight is driven by the **gap** `marketBrier − modelBrier` on the same picks.

### F3. Absolute Brier scale structurally pinned MLB at minimum weight (FIXED)
The 0.18→60% / 0.28→25% mapping is impossible for MLB: the market itself scores ~0.240 ([[MLB Historical Odds Data 2012-2021]], 20,531 games) because games are ~55/45. No MLB model can reach 0.18 — weight was permanently ~37% regardless of skill.
**Fix:** skill-relative mapping — gap of +0.02 vs the market → 60%, −0.02 → 25%, shrunk toward the historical prior gap (currently −0.004, so MLB opens at ~41%).

### F4. Phantom edge from best-line outliers, no minimum threshold (FIXED)
Gate required literally `edge > 0` at the best posted price — one stale/soft book manufactured picks, and `STALE_MINUTES=90` was far too loose for MLB. Avg vig is 2.7%; sub-1.5% "edges" are noise.
**Fix:** gate now requires edge ≥ 1.5% AND model > consensus no-vig (so a one-book outlier can't create a pick); MLB staleness window tightened to 30 min.

### F5. Double/triple shrinkage meant the model could almost never produce a pick (FIXED)
Stack: compression ×0.77 → cap → ≤40% blend weight → per-event haircuts. Result: 63 of 65 candidates blocked, mostly on edge/EV. The same correction (poor calibration) was applied two or three times.
**Fix:** compression is now folded INTO the max-likelihood fit. The fitted temperature came out at exactly **1.00** — i.e., a properly fitted logistic needs no bolt-on shrink at all. The >0.72-confidence and away-favorite haircuts were also removed (see F7).

### F6. Five parameters were "fitted" on 37 postseason games while 10,616 games sat unused (FIXED)
Worse: the finite-difference optimizer was silently **stalling** — perturbation testing showed it returned whatever priors it was given (the loss surface is too flat for numerical gradients). The old "fit" was an echo of the hand-set constants.
**Fix:** the MLB calibration now runs analytic-gradient logistic regression on the 2020-2024 Retrosheet file (8,384 train / 2,097 holdout, cold-start games excluded). Fitted: homeLogit 0.132, offK 0.219, defK 0.218, formK 0.132, starterK 0.059/run-per-start, bullpenK −0.029.

### F7. The high-confidence "improvement" was a selection effect (CONFIRMED + documented)
Old high-conf bucket: 2,657 games @ 61.8%; "current": 1,852 @ 64.3%. Matched-bucket analysis (same games for every variant) shows **all variants pick identically** on any fixed game set — the entire improvement was compression shrinking the bucket to easier games. The comparison script now reports matched buckets so this can't recur.

### F8. Starter xERA was double-counted with team strength (FIXED)
Team RA/G already contains the starters' runs; adding a starter bonus on top counted rotations twice. **Fix:** strength decomposed into separate offense/defense/form coefficients fitted jointly WITH the starter term, so the data allocates the weight.

### F9. After-loss prior was stale, selection-biased, and a team-quality proxy (REMOVED)
Hardcoded 12-team snapshot, never refreshed, fuzzy name matching, and the fitted scale never moved off its prior on any dataset — team quality explains the entire "bounce-back" effect. The model term is deleted; the TeamRankings table stays on the MLB tab as context only. See [[MLB After Loss Trend Prior]].

### F10. Raw xERA with min=1 PA fed the model's biggest term (FIXED)
A 20-PA April xERA flowed into a ±0.8 logit swing with a hand-set 0.35/run coefficient. The fit says the real coefficient is **~0.033/run — ten times smaller.**
**Fix:** Savant fetch min=25 PA, PA-based shrinkage toward league-average 4.20 (pseudo-PA 150), prior-year blend before June 1, fitted coefficient with cap ±0.25.

### F11. Quality metrics poisoned by contaminated picks and shown at n=1 (FIXED)
100% win rate displayed on 1 settled pick; June 30 market-only/post-start picks fed Brier/CLV.
**Fix:** `isCalibrationEligible()` excludes market-only, post-start-tracked, and flagged picks from every calibration metric (they still count in the P/L ledger); win rates carry an "n<20 = noise" label; the review script reports model-vs-market Brier separately.

### F12. Intel keyword matcher misfires (FIXED)
"wind" was a negative keyword, so a weather note penalized whichever team it mentioned. Removed.

## New data sources (v2)

1. **Bullpen fatigue** — pitchers used over each team's last 3 days vs the 4.32 league baseline (statsapi boxscores), coefficient fitted at −0.029 on Retrosheet. Holdout accuracy 54.9% → 55.4% with it.
2. **Pinnacle sharp anchor** — set `VITE_ODDS_SHARP_REGION=eu`; when Pinnacle is on the board its de-vig replaces the retail average as the market anchor. Opt-in because extra regions multiply Odds API quota.
3. **Opening-line capture + steam warning** — first-seen best line per event/outcome is persisted; the gate warns when the market has moved >1 pt against a candidate pick since open.
4. **Lineups-posted gate** — `hydrate=lineups` rides on the existing schedule fetch; warning when a lineup isn't posted.
5. **Park factors** — static extreme-park table shown in the model note (context, not a model term yet — promotable via the Retrosheet Park ID column).

## Honest numbers after the rebuild

- v2 live-equivalent model on 10,616 games: **55.97% accuracy, 0.2441 Brier** (old composite: 56.29% / 0.2444; v1 "current" with box-score features the live app never had: 56.66% / 0.2438).
- Holdout reliability is now clean bucket-by-bucket (52.4% predicted vs 52.7% actual; 57.2 vs 56.2; 61.9 vs 62.0).
- The model is still ~0.004 Brier WORSE than the market's 0.240. **The model has not yet earned the right to disagree with the market** — the blend, the consensus-edge gate, and CLV tracking are what protect the bankroll until it does. The next real edge must come from information the market prices slowly: confirmed lineups, bullpen state, starter recent form — not from re-weighting season aggregates.

## Remaining roadmap (unchanged priorities)

- Starter recent form (last 3-5 starts) + handedness splits vs opposing lineup
- Projected/confirmed lineup wOBA as a model term
- Park factor as a fitted coefficient (Retrosheet Park ID)
- Weather for the handful of parks where it matters
- ROI/CLV backtest once enough eligible tracked picks accumulate (the 2012-2021 odds file could also support an offline market-blend ROI test)
