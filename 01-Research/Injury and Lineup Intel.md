# Injury and Lineup Intel

This note supports the app's Intel tab. Use it before trusting any Bankroll Watch or Value pick.

## Core rule

Odds move faster than most injury notes. A pick is not ready until the current line still beats the fair price after injuries, lineups, starters, weather, and late scratches are checked.

## MLB sources

- [MLB Injury Report](https://www.mlb.com/injuries): official status, injured list moves, and team injury context.
- [MLB Probable Pitchers](https://www.mlb.com/probable-pitchers): starter confirmation and matchup context.
- [RotoWire Daily Lineups](https://www.rotowire.com/baseball/daily-lineups.php): lineup confirmation, scratches, rest days, and batting order.
- [ESPN MLB Injuries](https://www.espn.com/mlb/injuries): secondary status check.
- [Covers MLB Injuries](https://www.covers.com/sport/baseball/mlb/injuries): betting-focused injury board.
- [RotoGrinders MLB Weather](https://rotogrinders.com/weather/mlb): wind, rain, temperature, roof, and delay risk.

## Soccer sources

- [ESPN World Cup injuries tracker](https://www.espn.com/soccer/story/_/id/48572979/2026-fifa-world-cup-injuries-tracker-which-stars-miss-latest-info): tournament injury updates.
- [FIFA World Cup hub](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026): official tournament and match-centre context.

## MLB pre-bet gates

- Probable pitcher confirmed and not scratched.
- Starting lineup posted; key bats are active.
- Bullpen was not overused in the last 1-3 games.
- Weather, wind, roof, and park conditions do not break the model read.
- Line has not moved past the fair price from Value or Bankroll Watch.

## Soccer pre-bet gates

- Injuries and suspensions checked for both teams.
- Starting XI or reliable projected XI matches the model assumptions.
- Rotation/rest/travel context does not reduce favorite strength.
- Venue, heat, altitude, and weather are accounted for.
- Moneyline is compared against draw/to-advance market context.

## App workflow

1. Open the Intel tab.
2. Check the relevant source cards.
3. Add a local note for every meaningful injury, lineup, starter, weather, or market-move item.
4. Mark the impact as High when a pitcher scratch, star absence, or lineup surprise should change the bet.
5. Re-check Bankroll Watch only after high-impact notes are reviewed.

## Algorithm adjustment

The app now reads team-specific Intel notes before it calculates the independent model.

- If the note names one team in the matchup, it adjusts that team's rating before the Soccer Poisson or MLB logistic model runs.
- If the note is generic, such as "Tonight's MLB board", it can reduce confidence but does not punish both teams.
- Negative words such as `out`, `scratch`, `doubtful`, `suspended`, `sitting`, or `downgrade` reduce the named team's strength.
- Positive words such as `active`, `available`, `fit`, `returns`, `starting`, or `upgraded` can raise the named team's strength.
- `High`, `Medium`, and `Low` impact notes scale the size of the adjustment.
- `Confirmed` applies the full adjustment, `Watch` applies a partial adjustment, and `Cleared` applies none.

This keeps the algorithm conservative: the note must name a team before it changes a probability.

## Research log — 2026-06-30 (live web sources)

These are sourced findings from live web research, ready to copy into the app's Intel tab
local notebook (sport / match / category / impact / status / note).

### Today (June 30) — Round of 32

- **Ivory Coast vs Norway — settled.** Norway won 2-1 on a late Haaland goal. No injury
  angle needed now; this is a grading item for [[Pick Notebook]], not a forward-looking note.
- **France vs Sweden** — no new injuries reported for either side; lineups confirmed as
  expected. Sweden has no surprise absences. Impact: **Low** (informational only).
- **Mexico vs Ecuador** — both teams report **no injury concerns**. Raúl Jiménez is back in
  Mexico's XI after a rest day. Impact: **Low** (informational only, but worth noting because
  "fully healthy on both sides" removes one common source of edge for this match).

### Tomorrow (July 1) — Round of 32

- **England vs DR Congo, High impact.** Right-back depth crisis: Reece James out
  (hamstring), his direct replacement Jarell Quansah also injured (ankle) in the same game.
  Djed Spence — third-choice — is set to start. Source:
  [Yahoo Sports England XI news](https://sports.yahoo.com/articles/england-xi-vs-dr-congo-180417277.html).
- **Belgium vs Senegal, High impact.** Senegal starting goalkeeper Édouard Mendy has a knee
  injury from the Norway group game and left camp for assessment — Mory Diaw is the likely
  replacement. Belgium's Zeno Debast (leg) trained Sunday and is a game-time call. Source:
  [Sports Mole Belgium predicted XI](https://www.sportsmole.co.uk/football/belgium/world-cup-2026/predicted-lineups/is-debast-back-for-the-knockouts-predicted-belgium-xi-vs-senegal_600367.html).
- **USA vs Bosnia-Herzegovina, Medium impact.** Pulisic fit and expected to start after a
  minor calf issue. Still pending fitness checks on Roldan (muscle), McKenzie (foot, still
  out), and Trusty (ankle, resumed full training). Bosnia gets CB Tarik Muharemović back from
  suspension — meaningfully stabilizes their backline against the wide -800/-185 price spread
  quoted across books. Source:
  [ESPN USA vs Bosnia preview](https://www.espn.com/soccer/story/_/id/49212832/united-states-vs-bosnia-herzegovina-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-injury-predicted-line-ups).

Full match-level detail and lineups: [[July 1 2026 Match Slate]].
