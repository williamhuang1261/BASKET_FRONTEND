# PRD: real geospatial travel cost

## Problem

The existing `visitCostPerStore` (`docs/prd-travel-cost.md`) is one flat
number for every store, regardless of where it actually is — an explicit,
stated limitation of the first travel-cost extension. A shopper deciding
whether a fourth store is worth the trip cares whether it is next door or
across town; a flat number cannot tell the two apart.

## What "real" means here

When a caller has coordinates, `visitCostPerStore` can now be a real per-store
cost: the Haversine great-circle distance from the shopper's home coordinate
to each store, times a caller-chosen cost-per-kilometre rate. Haversine is the
standard closed-form distance between two points on a sphere — the building
block a routing system uses before it ever touches a road graph.

## What this is not

Straight-line distance, not routing. No roads, no one-way streets, no
traffic, and a real trip is rarely a straight line. Road-network routing,
drive-time and live traffic stay explicitly out of scope, a listed follow-up
rather than part of this change. The Earth is also treated as a sphere (mean
radius 6371 km), not an ellipsoid — up to ~0.5% error versus a more exact
model, acceptable at store-to-store scale but stated rather than hidden.

## Why now

Both the flat-cost PRD and the registry name "a real distance/travel-time
model behind `visitCostPerStore`" as the natural next step. Straight-line
distance is the smallest honest move toward that: real geographic input, real
computation, still explicitly not a real route.

## Success metrics

- `haversineDistanceKm` reproduces a known city-pair distance within a stated
  tolerance (a test, not a claim).
- Both solvers accept a per-store cost array alongside the existing flat
  number; the flat-number path stays byte-for-byte unchanged.
- A close candidate store beats a far one once cost comes from real
  coordinates, on a basket where a flat cost could not distinguish them.

## Prioritization

The only extension idea in the registry that speaks directly to this
posting's geospatial gap. It extends an already-shipped, already-documented
limitation rather than adding a new one.
