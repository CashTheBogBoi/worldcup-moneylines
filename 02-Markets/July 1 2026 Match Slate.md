# July 1 2026 Match Slate

Round of 32 slate researched June 30, 2026 (live web sources) for play on July 1, 2026.
Three matches complete tomorrow's Round of 32 card.

## Matches

| Match | Time (ET) | Venue | Research note |
|---|---:|---|---|
| England vs DR Congo | Noon | Atlanta | England has a real right-back injury crisis. DR Congo fully fit. |
| Belgium vs Senegal | 4 p.m. | Seattle | Senegal's starting GK is a doubt with a knee injury. First-ever meeting between these nations. |
| USA vs Bosnia-Herzegovina | 8 p.m. | Santa Clara (Levi's Stadium) | Heavy USA favorite by book price; Bosnia gets a key defender back from suspension. |

## England vs DR Congo — Noon ET, Atlanta Stadium

- England has a notable **right-back injury crisis**: Reece James missed the Panama win with
  a hamstring issue, and his direct replacement Jarell Quansah went off with an ankle injury
  in that same match. **Djed Spence is expected to start** at right-back as the third-choice
  option — a real depth/availability gap worth flagging in Intel before trusting an England
  moneyline price built on a "full-strength" assumption.
- DR Congo has **no reported injuries**. First-time World Cup participants, came out of the
  group stage unbeaten but with an uninspiring draw and a labored win — recent form is shakier
  than the seeding suggests.
- Predicted lineups:
  - **England (4-2-3-1):** Pickford; Spence, Konsa, Guehi, O'Reilly; Anderson, Rice; Saka, Bellingham, Rashford; Kane
  - **DR Congo (5-3-2):** Mpasi; Wan-Bissaka, Mbemba, Tuanzebe, Kapuadi, Masuaku; Mukau, Moutoussamy, Kayembe; Wissa, Bakambu
- App implication: England isn't yet a rated team in Model Lab — until xG/strength inputs are
  added, the algorithm falls back to market-only pricing for this match, which won't capture
  the right-back injury context. Add an Intel note (High impact) for this before trusting any
  England line in Bankroll Watch.

## Belgium vs Senegal — 4 p.m. ET, Seattle

- Belgium won Group G with a 5-1 demolition of New Zealand in the final group match; Senegal
  advanced as the 8th-best third-place finisher after beating Iraq 5-0.
- **Senegal's starting goalkeeper Édouard Mendy has a knee injury** sustained against Norway
  in the group stage and has left camp for further assessment in Saudi Arabia — his
  availability is in serious doubt. **Mory Diaw is the likely replacement.** This is a
  High-impact item: a backup keeper start against a Belgium side built around De Bruyne and
  Lukaku is a real line-mover.
- Belgium's Zeno Debast (leg injury) is a doubt but trained for the first time this tournament
  on Sunday and could be passed fit.
- Key players: De Bruyne and Lukaku for Belgium; Sarr (group-stage standout) and the
  experienced Mané leading Senegal's attack.
- App implication: neither team is rated in Model Lab yet. The Senegal GK situation is exactly
  the kind of "Intel should adjust the line" case [[App Build Plan]] calls for — add it as a
  High-impact Soccer intel note so Bankroll Watch's confidence haircut applies even before
  ratings exist.

## USA vs Bosnia-Herzegovina — 8 p.m. ET, Santa Clara

- **Odds:** FanDuel has USA at -800 / Bosnia-Herzegovina at +520. Other books quoted closer to
  USA -185 / Bosnia +800 in earlier research — a wide spread across sources, so **line-shop
  this one specifically** before using any single book's number as the model anchor; do not
  let a single inflated favorite price (-800) distort the no-vig read if other books are
  materially different (External Source Research's "compare to a sharper source" guidance).
- USA team news: Sergino Dest, Chris Richards, Antonee Robinson, Tyler Adams, Malik Tillman,
  Christian Pulisic, and Weston McKennie are expected starters. **Pulisic** is back from a
  minor calf issue (returned off the bench vs Türkiye) and is expected to start on the left
  wing. Still need final fitness checks on **Christian Roldan** (muscle, in modified
  workouts), **Mark McKenzie** (foot, improving but remains out), and **Auston Trusty**
  (ankle, resumed full training) before the squad is locked.
- Bosnia-Herzegovina gets a real boost: **center-back Tarik Muharemović returns from
  suspension**, stabilizing a backline that looked exposed in the group stage. This works
  against the extreme -800 price — Bosnia is not as depleted as the line might suggest.
- Predicted Bosnia-Herzegovina lineup: Vasilj; Dedic, Katic, Muharemović, Kolasinac;
  Bajraktarević, Sunjic, Basic, Alajbegović; Dzeko, Demirović.
- App implication: USA is not yet rated in Model Lab. Given the wide cross-book spread on this
  game specifically, this is a good candidate to manually enter a trusted prior in
  `matchResearchModels` (the blend hook documented in [[Edge Algorithm v0.1]]) rather than
  trust market-only no-vig built from a single outlier book.

## Algorithm gap to close before tomorrow

None of England, DR Congo, Belgium, Senegal, USA, or Bosnia-Herzegovina are in the current
Model Lab team-ratings table (only the six June 30 teams are seeded). Until xG/form/venue
ratings are added for these six teams, the app's algorithm probability for every July 1 match
falls back to market-consensus-only — the independent model contributes nothing. Add ratings
for at least USA and England (the two with real injury-driven uncertainty) before relying on
Bankroll Watch for this slate.

Related:

- [[June 30 2026 Match Slate]]
- [[Injury and Lineup Intel]]
- [[Bovada Futures Snapshot]]
- [[Edge Algorithm v0.1]]
- [[App Build Plan]]
- [[Bankroll and Risk Rules]]
