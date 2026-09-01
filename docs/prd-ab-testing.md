# PRD: A/B testing the savings-summary display

## Problem

`solveBasket`/`greedyOptimize` compute real savings numbers but, per the
README's Known limits, are library code only — nothing in the UI has ever
shown a shopper what they saved. Before wiring the solver into the full
basket-checkout flow (a larger, riskier change), it's worth validating one
narrow question with a small, throwaway-able screen: when a shopper *does*
see a savings number, does how it's framed change whether they click through
to their full basket?

## Hypothesis

Framing savings as a percentage ("You saved 12%") drives more click-throughs
to the full basket than framing the same number as a dollar amount ("You
saved $9.40"), because a percentage reads as a bigger win regardless of
basket size.

## Target metric

Click-through rate from the savings-summary screen to the full basket view:
`conversions / exposures`, per variant.

## How variants are assigned

A `sessionId` is generated once per browser (stored in `localStorage`, no
login or PII required) and deterministically hashed into variant A
("percent") or variant B ("dollar"). No external experimentation service:
the split is a same-input-same-output hash, so a returning visitor always
sees the same variant, and the split is close to 50/50 over many ids
(verified by a unit test, not a claim).

## What this is not

Not a production experimentation platform: no feature-flag service, no
sequential testing, no multi-armed bandit, just one hash function and one
events table. Not real production traffic either: this project has no live
user base large enough to power a real experiment, so the analysis step's
significance readout runs against seeded/test data and demonstrates the
*method*, not a real product decision (the same convention the travel-cost
PRD above follows: report the honest result, whatever it is). And not the
full basket-checkout flow: the summary screen consumes `solveBasket`'s
output directly for one narrow comparison, not a replacement for wiring the
solver into the main basket page.

## Success metrics

- Variant assignment is deterministic per id and close to 50/50 over a large
  sample (unit test).
- Exposure and conversion events for both variants are persisted and
  queryable.
- The analysis step reports a real conversion rate and chi-square result for
  whatever data actually exists — including "not significant" or
  "insufficient data" if that's what it shows, not a chosen-in-advance number.

## Prioritization

This is the smallest change that gives the "experimentation / A/B testing"
gap a real, inspectable artifact, and it doubles as the project's first UI
wiring of `solveBasket`'s output — a long-standing extension idea in the
project's own registry entry, done narrowly rather than as a full basket-page
rebuild.
