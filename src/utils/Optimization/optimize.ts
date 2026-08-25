import basketCost, { SetupProp } from "./basketCost";
import { Matrix } from "./genMatrix";

interface CostOptProp {
  cost: number;
  setup: SetupProp[];
  /** Zero-based supplier indices making up this set, for callers that need
   *  the stores themselves rather than the per-item assignment */
  suppliers: number[];
}

type CostProp = CostOptProp[];

/**
 * @description Exhaustive solver for the store-selection problem. Prices every
 * candidate set of suppliers and keeps the cheapest, returning every set that
 * ties for the best cost.
 *
 * This is exact but the caller pays for it: `combinations` holds C(n, k) entries,
 * so cost grows combinatorially in the number of suppliers. Use `solveBasket`
 * to fall back to `greedyOptimize` once that number stops being tractable.
 *
 * @param {Matrix} matrix - Per-item supplier costs, from genMatrix
 * @param {number[][]} combinations - One-based supplier sets, from genCombinations
 * @example
 * const combinations = genCombinations(suppliers.length, maxStores);
 * const best = optimize(matrix, combinations);
 * @returns {CostProp} Every supplier set achieving the minimum cost
 */
const optimize = (matrix: Matrix, combinations: number[][]): CostProp => {
  let costTransport: CostProp = [];
  let combCost: number = Infinity;

  // Calculate the price of each combination
  for (const comb of combinations) {
    // genCombinations counts from 1, basketCost indexes from 0
    const suppliers = comb.map((index) => index - 1);
    const { cost, setup } = basketCost(matrix, suppliers);

    if (cost < combCost) {
      costTransport = [{ cost, setup, suppliers }];
      combCost = cost;
    } else if (cost === combCost && cost !== Infinity) {
      costTransport.push({ cost, setup, suppliers });
    }
  }

  return costTransport;
};

export default optimize;
