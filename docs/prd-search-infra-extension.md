# PRD: search infrastructure — OpenSearch, async reindexing, batch features

## Problem

The API's hybrid search runs entirely inside one MongoDB Atlas aggregation:
`$vectorSearch` unioned with a full-text stage, scored and merged in the same
pipeline (see `getHybridSearchPipeline.ts`). That is a fine shape for the
project's current scale, but it couples three concerns that a larger catalog
would want to separate: which search engine answers a query, how a catalog
write reaches that engine, and where expensive per-basket computation
(travel cost across a whole store list) gets done. This PRD scopes three
small, independent additions that separate those concerns without touching
the existing MongoDB path at all.

## What's being added

1. **A second search backend (OpenSearch).** A BM25 + kNN hybrid query
   against a real local OpenSearch index, built the same way the existing
   MongoDB pipeline is: lexical and vector retrieval, combined. This is not
   a replacement for MongoDB Atlas search — both paths exist side by side,
   and nothing about the primary catalog store changes.
2. **An async write path (SQS).** Catalog writes that used to index a search
   engine inline (blocking the request) instead enqueue a reindex message; a
   separate worker consumes it. This targets the OpenSearch side only — the
   existing synchronous MongoDB write is untouched.
3. **An offline batch feature job (Spark).** A local PySpark job precomputes,
   per store, catalog coverage, price competitiveness, and travel distance
   from a fixed reference point — the same kind of number the frontend's
   `computeVisitCostByStore` computes per request, but done once, offline,
   over the whole catalog instead of per basket.

## What "benchmark" means here

There is no way to run a live, credentialed comparison against production
MongoDB Atlas Search in this environment — Atlas is a managed cloud service
and this project has never had its own paid cluster to test against (the
existing README already states the project "is not deployed publicly").
The OpenSearch step's benchmark is scoped to what is actually measurable
without that: real latency and result counts from a real local OpenSearch
container, comparing its own BM25-only mode against its hybrid mode. That is
an honest, inspectable number — not a claimed win over Atlas.

## What this is not

Not a migration off MongoDB: the existing hybrid pipeline, its scoring
formula, and every existing test stay exactly as they are. Not a production
deployment: OpenSearch and LocalStack run locally via
`docker-compose.dev.yml`, the same "needs local infra, documented" pattern
this project already uses for its Mongo integration tests. Not a real AWS
account: LocalStack emulates SQS with no billing and no real credentials.
Not a shared Haversine implementation: the Spark job's distance calculation
is a small, separate reimplementation in Python, because a batch job in a
different runtime does not share code across that language boundary with
the frontend's TypeScript `Geo` module — the same trade-off already made
for `onchain`-style second-language components elsewhere in this
candidate's portfolio.

## Success metrics

- OpenSearch: real indexed documents, a real query, real measured latency
  for both query modes, printed by a script that actually ran.
- SQS: a real message sent through a real local queue and actually consumed
  by a worker, verified by an integration test against LocalStack.
- Spark: a real `pyspark` job run, producing a real output file whose values
  are checked against hand-computed expectations for the known 25-item
  sample catalog.

## Prioritization

This is the smallest set of additions that gives the OpenSearch/SQS/Spark
gap (flagged by a portfolio-fit check against the candidate's public repos)
a real, inspectable artifact in the project a recruiter is already pointed
at, rather than a fourth unrelated repo.
