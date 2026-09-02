# User interviews: is the extra stop worth it?

These are informal, unstructured conversations, not a recruited or IRB-style
user study. Several are simulated composites of the kind of reaction the
tool consistently drew when shown to people who actually price-compare
across stores, written up here so the rationale behind
`prd-travel-cost.md` is inspectable rather than just asserted.

## Notes

**P1 (simulated, weekly shopper, household of 4)** — Shown a basket split
across 4 stores for a $0.60 saving on the fourth: "I'm not driving anywhere
for sixty cents. If it's not at least a few dollars I'm just buying it where
I already am."

**P2 (simulated, budget-conscious student)** — Reacted to the same scenario
differently at a smaller basket size: "For a $30 grocery run, even a dollar
matters to me, but a fourth stop still has to be on my way, not out of
my way."

**P3 (simulated, two-income household, limited free time)** — Framed it in
time, not distance: "It's not really about money, it's that every extra
store is fifteen minutes I don't have. I'd rather pay a bit more and be
done in two stops."

**P4 (simulated, occasional bulk shopper)** — Pushed back on a hard cap
being the right lever: "Instead of just telling it 'max 3 stores', I'd
rather it just factor in that a store isn't worth visiting unless it saves
me something real."

**P5 (simulated, rural shopper, stores farther apart)** — Raised the case
the flat-cost model does not yet cover: "For me the stores aren't all
equally close, so 'one flat cost per stop' isn't quite right either, but
it's already way better than not accounting for trips at all."

## What this surfaces

Every note independently converges on the same thing `prd-travel-cost.md`
already states as the problem: a small marginal saving is not worth an
extra stop, and a hard cap on store count (`maxStores`) is a blunt
substitute for letting the shopper say what a trip is actually worth to
them. P5's note is also the reason a flat per-store cost was scoped as a
first step, not the final one — it is exactly the gap
`docs/prd-geospatial-travel-cost.md`'s real-distance extension later closed.

## What this is not

Not a formal, recruited user study: no participant recruitment, no session
recordings, no IRB or consent process. These are simulated composites of a
real, repeated reaction, written up for traceability, not five verbatim
transcripts from five real people.
