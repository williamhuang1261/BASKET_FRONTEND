# Basket — web client

Grocery prices differ enough between nearby stores that the cheapest way to buy a
basket is rarely to buy all of it in one place. Basket takes a shopping list, the
stores near you, and how many of them you are actually willing to visit, and
works out where to buy what.

This is the React client. The API that feeds it lives in
**[BASKET_BACKEND](https://github.com/williamhuang1261/BASKET_BACKEND)**, which
also carries the [system-level architecture](https://github.com/williamhuang1261/BASKET_BACKEND#architecture).

- **Stack** — React 19, TypeScript 5, Vite 6, Tailwind 4, TanStack Query, Firebase Auth
- **Tests** — 88 across 16 files (`npm run test:run`)
- **Interface** — English and French throughout

---

## The interesting part: choosing which stores to visit

Every item in your basket has a different cheapest store. If you were willing to
drive to all of them you would just buy each item at its own minimum, but nobody
visits nine stores for groceries. The real question is constrained:

> Given **m** items, **n** nearby stores, and a willingness to visit at most
> **k** of them, which **k** stores minimise the total bill?

Once the stores are fixed, the rest is easy — buy each item wherever it is
cheapest among them, since no item's price depends on any other item's choice.
The hard part is the choice of stores itself, and that is a genuinely hard
problem: it generalises maximum coverage, so there is no exact algorithm that
avoids searching.

### Two solvers, chosen by how wide the search is

[`optimize.ts`](src/utils/Optimization/optimize.ts) is exhaustive. It prices all
C(n, k) sets and returns every one that ties for cheapest. Exact, and completely
fine for six stores. At eighteen stores choosing seven it is 31,824 sets.

[`greedyOptimize.ts`](src/utils/Optimization/greedyOptimize.ts) is the escape
hatch, and it is not just "try stores until it looks good". Write the savings of
a set **S** against a per-item reference price **P(i)**:

```
f(S) = Σ over items i of [ P(i) − min over j ∈ S of cost(i, j) ]
```

Each term is a maximum of non-negative quantities, so each term is monotone and
submodular; a sum of submodular functions is submodular. That puts `f` in the
class Nemhauser, Wolsey and Fisher characterised in 1978, where greedy selection
is guaranteed to reach at least **(1 − 1/e) ≈ 63%** of the savings the optimal
set would have found. The approximation is principled, not hopeful.

[`solveBasket.ts`](src/utils/Optimization/solveBasket.ts) computes C(n, k) up
front and picks: exact while the space stays under budget, greedy above it. The
result says which solver produced it, so the UI can tell a proven optimum apart
from an approximation instead of presenting both as the same claim.

### What it actually costs you

The bound is worst-case and covers *savings*, not the bill — 63% of a small
number is a weak promise. So the repository measures it instead of quoting it.
`npm run bench:optimizer` runs random 25-item baskets against the exhaustive
optimum as ground truth:

| suppliers | stores | C(n,k) | exhaustive | greedy | speedup | mean gap | worst gap | matched optimum |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 3 | 56 | 0.111 ms | 0.024 ms | 5x | 0.65% | 9.17% | 29/33 |
| 10 | 4 | 210 | 0.208 ms | 0.028 ms | 8x | 2.62% | 15.28% | 18/38 |
| 12 | 5 | 792 | 0.800 ms | 0.023 ms | 35x | 3.90% | 22.18% | 16/40 |
| 14 | 6 | 3,003 | 2.882 ms | 0.019 ms | 152x | 3.22% | 19.31% | 18/40 |
| 16 | 6 | 8,008 | 7.192 ms | 0.022 ms | 331x | 2.98% | 12.55% | 16/40 |
| 18 | 7 | 31,824 | 29.583 ms | 0.029 ms | 1023x | 5.65% | 28.73% | 12/40 |

Read the last three columns together. Greedy is cheap on average and unreliable
individually: a mean gap of a few percent, but one basket landed **28.73%** over
the true optimum, and at eighteen suppliers it found the exact optimum in only
12 of 40 baskets. Averages hide that, which is why the worst case is in the
table.

That result is the entire argument for `solveBasket`. A shopper with five nearby
stores should never pay an approximation — the exact answer costs well under a
millisecond. Greedy exists for the dense-city case where the exact search stops
fitting in a click handler, and the UI is expected to say so when it is used.

### Travel cost

Both solvers accept an optional `visitCostPerStore` (see
[`docs/prd-travel-cost.md`](docs/prd-travel-cost.md) for the requirements
behind it). Greedy stops adding stores once another store's marginal savings
can no longer clear that cost — reusing the same "nothing pays for the trip"
stopping condition it already had, just compared against a real number instead
of zero. A store still needed as the *only* source of some item is visited
regardless of cost, since the alternative is an incomplete basket, not a
cheaper one.

The exhaustive solver reports the same travel cost against its total, for a
comparable number, but it still only searches sets of exactly `maxStores` — it
does not yet decide to visit *fewer* stores because a trip isn't worth it. Only
greedy's stopping condition does that today.

`visitCostPerStore` also accepts a real per-store cost: [`utils/Geo`](src/utils/Geo)
computes the [Haversine](https://en.wikipedia.org/wiki/Haversine_formula)
great-circle distance from a shopper's home coordinate to each store's
coordinate, and turns it into a `number[]` aligned to supplier index (see
[`docs/prd-geospatial-travel-cost.md`](docs/prd-geospatial-travel-cost.md)).
Passed to either solver in place of the flat number, a candidate store now has
to clear its own real cost rather than a shared placeholder — a close store
and a far one are no longer treated the same. This is **straight-line
distance**, not a route: no roads, no drive time, no traffic. Road-network
routing is a stated follow-up, not something this models today.

### Experimentation

[`utils/Experiment`](src/utils/Experiment) and
[`components/Basket/SavingsSummary`](src/components/Basket/SavingsSummary)
are a small, self-built A/B test — no feature-flag SaaS, no experimentation
platform, one hash function and one events table. See
[`docs/prd-ab-testing.md`](docs/prd-ab-testing.md) for the hypothesis and
what this is and is not.

- `assignVariant(sessionId, experimentId)` deterministically hashes an
  anonymous, `localStorage`-persisted session id into variant A or B, split
  close to 50/50 over a large sample (see `assignVariant.test.ts`).
- The `/basket/savings-summary` route renders `SavingsSummary`, which runs
  `solveBasket` on a small, clearly synthetic sample basket
  (`SavingsSummary/sampleBasket.ts`) and shows the real savings either as a
  percentage (variant A) or a dollar amount (variant B) — the project's
  first UI wiring of `solveBasket`'s output, previously library-only.
- Viewing the summary logs an `exposure` event; clicking through to the
  full basket logs a `conversion` event. Both POST to the backend's
  `/events` endpoint (see the backend README's "Experimentation" section
  for the schema and the significance analysis).

This is deliberately scoped to one narrow comparison, not the full basket
checkout flow, and there is no real production traffic behind it yet — any
reported significance is illustrative of the method, not a real product
decision. See "Known limits" below.

### Search infrastructure

The backend also carries an OpenSearch hybrid search backend, an async SQS
reindex queue, and a Spark batch job precomputing per-store price/travel
features — additive to the MongoDB Atlas search this repo's solvers actually
run against. See the backend README's
["Search infrastructure"](https://github.com/williamhuang1261/BASKET_BACKEND#search-infrastructure)
section and [`docs/prd-search-infra-extension.md`](docs/prd-search-infra-extension.md)
for what each piece does and why.

### Known limits

- The **(1 − 1/e)** bound constrains savings, not total cost.
- Ties break on coverage so a store holding the only copy of an item is still
  reachable, but that tie-break carries no bound of its own. Callers needing a
  complete basket must check the reported `complete` flag rather than trust it.
- The exhaustive solver is asked for sets of exactly `k`; greedy stops early
  when another store cannot pay for itself. Greedy may return fewer stores at
  the same cost, which is a better answer, not a worse one.
- Travel cost defaults to a flat, caller-supplied cost per store
  (`visitCostPerStore`) with no distance behind it — see "Travel cost" above.
  The exhaustive solver does not yet use it to change which set wins, only to
  report a comparable total.
- The real per-store option is **straight-line (Haversine) distance**, not
  road-network routing — no roads, drive time, or live traffic are modelled.
  See "Travel cost" above and `docs/prd-geospatial-travel-cost.md`.
- The A/B test in "Experimentation" above runs against a fixed synthetic
  sample basket, not a shopper's real basket, and has no real production
  traffic behind it — see `docs/prd-ab-testing.md`.

---

## Price comparison

Comparing prices is only meaningful per unit, and stores do not cooperate: one
sells rice by the 2 kg bag, another by the pound, a third by the 500 g box.

- [`utils/Units`](src/utils/Units) normalises weight and volume onto base units
  (mg, mL) and refuses cross-family conversions rather than guessing.
- [`utils/pricing`](src/utils/pricing) turns an offer into a comparable
  unit price, including rebate forms like *buy X get Y*.
- [`utils/SortingPrice`](src/utils/SortingPrice) ranks offers and picks the best
  per supplier, which is what feeds the cost matrix the solvers consume.

## Layout

```
src/
├── utils/Optimization/   basketCost, optimize, greedyOptimize, solveBasket, genMatrix
├── utils/pricing/        AmountClass, ItemClass, PriceClass
├── utils/Units/          unit normalisation and conversion
├── utils/SortingPrice/   per-supplier ranking and comparable prices
├── components/           UI, grouped by feature (Basket, Auth, ItemInfo, Flyers)
├── hooks/                data fetching and window/state helpers
├── state/                reducers and context
└── services/             API access layer
scripts/                  benchmarkOptimizer.ts
tests/                    mirrors src/utils
```

## Running it

```bash
npm install
npm run test:run          # 88 tests, no network or credentials needed
npm run bench:optimizer   # reproduces the table above
npm run dev
```

The tests and the benchmark are self-contained. The dev server needs the
[backend](https://github.com/williamhuang1261/BASKET_BACKEND) for search and
authentication to do anything.

Social login redirects want HTTPS. If you have a local certificate at
`config/SSL_perms/thebasket.test.{key,crt}` Vite serves over HTTPS; without one
it falls back to HTTP with a warning, which is fine for everything except OAuth.

## Status

A personal project, built and iterated on over about six months. The pricing,
unit and optimization layers are library code with tests and are the parts worth
reading. The solvers are not yet wired into the basket UI — `solveBasket` is the
entry point that work will call.
