# PRD: travel cost in the store-selection objective

## Problem

Today the solvers treat "visit 2 stores" and "visit 5 stores" as differing only
in the basket's dollar total — see the README's Known limits: *"Travel cost is
not modelled. Two stores are treated as two stores whether they are next door
or across the city."* That is wrong for the shopper the tool is actually built
for: someone weighing whether the next store's savings are worth a second trip.
A greedy pick with a $0.40 marginal saving is not obviously worth visiting, but
the current objective cannot tell the two apart from a $40 saving.

## Why now (informal user research)

This is not the result of a formal study — it is the same rationale that
produced the existing "which k stores" framing in the README, extended by
talking through the tool with a few people who actually price-compare across
stores:

- Everyone consulted independently raised the same objection when shown the
  current behaviour: the tool will happily recommend a fourth store to save
  $0.60 on a $80 basket, which nobody would actually do.
- The `maxStores` cap already exists as a blunt version of this problem (cap
  the *count* of stores). A per-store cost is the natural next step: instead of
  a hard cap, let the shopper say what an extra stop is worth avoiding, and let
  the objective decide how many stores clear that bar on its own.

## What this is not

This models a **flat cost per store visited**, not a real distance or travel
time. There is no geocoding, no supplier coordinates, no map. `visitCostPerStore`
is a single number the caller supplies — a stand-in for "what a trip is worth
to me" — not a computed distance. Modelling real distance is a listed follow-up
extension, not part of this change.

## Success metrics

- The greedy solver visibly chooses fewer stores as `visitCostPerStore`
  increases, on the same basket that currently always maxes out `maxStores`
  when marginal savings are small (verified by a unit test, not a claim).
- Existing behaviour is unchanged at the default (`visitCostPerStore = 0`) —
  every existing test in `basketCost`, `optimize`, `greedyOptimize` and
  `solveBasket` passes without modification.
- The exhaustive solver's limitation (it still searches exactly `maxStores`
  stores, so it cannot yet trade off fewer stores against a lower total) is
  stated in the README, not left implicit.

## Prioritization

This is the only extension idea already flagged in the project's own registry
entry as directly addressing an honestly-documented gap (`mprojects.md`,
"a travel-cost or distance term in the objective") — it closes a limitation the
README already admits to, rather than adding a new one.
