# Competitive scan: multi-store price comparison

Desk research from public app descriptions and store listings, not hands-on
testing of the apps below. Written before the travel-cost PRD to ground that
work in what already exists, rather than assuming a blank slate.

## Apps compared

**Flipp** — aggregates weekly flyers across stores and lets a shopper browse
deals per item. It matches items to flyer prices but does not solve *which
stores to visit*: the shopper still manually decides how many stores are worth
a trip. No optimization layer, no per-item basket total across stores.

**Instacart (price tracking / "compare stores" feature)** — shows the same
cart priced at different single stores, so a shopper can pick the cheapest
whole-basket option. It optimizes for **one** store at a time; it does not
split a basket across multiple stores, so it cannot find the cheaper
multi-store split Basket is built for.

**Basket-splitting list apps (generic category, e.g. grocery list apps with a
"cheapest store per item" view)** — some show which store has the lowest price
per item, but leave the store-selection decision entirely to the shopper and
do not model a limit on how many stores they are willing to visit.

## Where Basket differs

- **Solves the store-selection problem, not just item pricing.** Every app
  above surfaces per-item or per-store prices; none of them decide *which set
  of k stores* minimizes the total bill. That is the problem `solveBasket`
  and `greedyOptimize` solve, with a proven (1 - 1/e) approximation bound when
  the exact search is too large (see `README.md`, "The interesting part").
- **Bilingual hybrid search.** None of the apps surveyed publicly describe a
  vector-search plus full-text fallback for product matching across a
  bilingual (EN/FR) catalogue, which Basket's backend implements (MongoDB
  Atlas `$vectorSearch` fused with full-text, Vertex AI embeddings).
- **Where Basket does not compete:** none of Basket's data is real-time flyer
  ingestion (Flipp's core product), and Basket has no delivery or fulfillment
  logistics (Instacart's core product). Basket is narrowly a store-selection
  and price-normalization tool, not a shopping or delivery platform.

## Why this matters for the travel-cost PRD

Every app surveyed leaves "is a cheaper store worth the extra trip" entirely
to the shopper's judgment. That gap, not a competitor's shortcoming Basket
needs to catch up to, is what motivated treating per-store visit cost as an
explicit objective term rather than a UI hint. See `discovery-user-
interviews.md` for the user-facing side of that same gap, and
`prd-travel-cost.md` for the resulting requirements.
