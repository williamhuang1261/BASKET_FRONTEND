# Personas: is the extra stop worth it?

Synthesized from `docs/discovery-user-interviews.md`. Those notes are
simulated composites of a real, repeated reaction, not a recruited or
IRB-style user study — the same caveat applies here: these two personas are
a synthesis of that write-up, not profiles built from new interviews.

## Persona 1 — "Priya, the time-squeezed planner"

- **Built from:** P1 (household of 4, weekly shopper) and P3 (two-income
  household, limited free time).
- **Context:** Does one planned weekly grocery run for a family. Money
  matters, but so does not turning one errand into three.
- **Quote (P1):** *"I'm not driving anywhere for sixty cents. If it's not
  at least a few dollars I'm just buying it where I already am."*
- **Quote (P3):** *"It's not really about money, it's that every extra
  store is fifteen minutes I don't have. I'd rather pay a bit more and be
  done in two stops."*
- **Goal:** Know, before leaving the house, whether a second or third stop
  is worth the time it costs, not just whether it's cheaper on paper.
- **Frustration with the status quo:** A basket split across many stores
  for a few cents each is technically "optimal" and practically useless to
  her.
- **What "solved" looks like for her:** The tool's own per-store visit cost
  (`visitCostPerStore` in `prd-travel-cost.md`) already models this as a
  number; what she needs on screen is *why* a store made the cut, not just
  the final total (see `wireframes.md`'s proposed revision).

## Persona 2 — "Marcus, the budget-conscious optimizer"

- **Built from:** P2 (budget-conscious student) and P4 (occasional bulk
  shopper).
- **Context:** Shops on a tight, variable budget. Willing to work harder
  for savings, but only if a stop is genuinely on the way.
- **Quote (P2):** *"For a $30 grocery run, even a dollar matters to me, but
  a fourth stop still has to be on my way, not out of my way."*
- **Quote (P4):** *"Instead of just telling it 'max 3 stores', I'd rather
  it just factor in that a store isn't worth visiting unless it saves me
  something real."*
- **Goal:** Squeeze out every real saving, but trust the tool to filter out
  the ones that aren't worth the trip rather than hitting a blunt store-count
  cap (`maxStores`).
- **Frustration with the status quo:** A hard cap on store count is a
  proxy for what he actually cares about (is this stop worth it), and a
  clumsy one.
- **What "solved" looks like for him:** The per-store visit-cost objective
  `prd-travel-cost.md` describes replaces the blunt cap; he'd want the UI to
  show the marginal saving per store so he can see the tool's reasoning, not
  just its answer.

## Persona not built

P5 (rural shopper, stores farther apart) is intentionally not folded into
either persona above — their note is what motivated the *geospatial* travel
cost extension (`prd-geospatial-travel-cost.md`), a distinct and already-shipped
piece of work, not a personas gap. Keeping the personas to two, each backed by
two convergent notes, is a deliberate choice: five interview notes support two
clear personas better than five thin ones.
