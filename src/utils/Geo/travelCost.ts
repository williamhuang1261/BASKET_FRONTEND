import { haversineDistanceKm, StoreCoordinate } from "./haversine";

/**
 * @description Turns a shopper's home coordinate and each store's coordinate
 * into a real per-store travel cost, for use as `visitCostPerStore` in
 * `greedyOptimize` / `solveBasket`. Distance is straight-line (Haversine),
 * not a road-network route - see `docs/prd-geospatial-travel-cost.md`.
 *
 * @param {StoreCoordinate} home - The shopper's starting point
 * @param {StoreCoordinate[]} stores - One coordinate per supplier, aligned to
 * the same index the optimizers already use for `matrix[i].opts`
 * @param {number} costPerKm - Caller-chosen rate turning distance into cost,
 * in the same currency unit as the basket prices
 * @example
 * const cost = computeVisitCostByStore(home, storeCoordinates, 0.5);
 * greedyOptimize(matrix, suppliers.length, maxStores, cost);
 * @returns {number[]} Per-store cost, aligned to supplier index
 */
export const computeVisitCostByStore = (
  home: StoreCoordinate,
  stores: StoreCoordinate[],
  costPerKm: number,
): number[] =>
  stores.map((store) => haversineDistanceKm(home, store) * costPerKm);
