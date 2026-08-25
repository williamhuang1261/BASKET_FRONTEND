import genCombinations from "./genCombinations";
import greedyOptimize from "./greedyOptimize";
import optimize from "./optimize";
import { SetupProp } from "./basketCost";
import { Matrix } from "./genMatrix";

/** Which solver actually produced a result */
export type SolverMethod = "exhaustive" | "greedy";

/**
 * @description A solved basket, annotated with how it was solved so the caller
 * can tell an exact answer from an approximate one
 * @interface SolveResult
 */
export interface SolveResult {
  cost: number;
  setup: SetupProp[];
  covered: number;
  stocked: number;
  suppliers: number[];
  /** Whether the answer is provably optimal or within the greedy bound */
  method: SolverMethod;
  /** True only when the whole basket can be filled from the chosen stores */
  complete: boolean;
  /** C(n, k) for this basket, the size of the space the exact solver would walk */
  searchSpace: number;
}

/**
 * @description How many supplier sets the exhaustive solver would have to price.
 * Multiplies and divides in step so the intermediate value stays small, and
 * gives up to Infinity rather than silently overflowing.
 *
 * @param {number} n - Suppliers available
 * @param {number} k - Stores the shopper will visit
 * @example searchSpace(20, 10) // 184756
 * @returns {number} C(n, k), or Infinity when it exceeds the float range
 */
export const searchSpace = (n: number, k: number): number => {
  if (k < 0 || k > n) return 0;
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = (result * (n - k + i)) / i;
    if (!Number.isFinite(result)) return Infinity;
  }
  return Math.round(result);
};

/**
 * @description Past this many candidate sets the exhaustive search stops being
 * something to run inside a click handler, so the greedy solver takes over.
 * Roughly 25 ms on the benchmark machine for a 25-item basket.
 */
export const DEFAULT_SEARCH_BUDGET = 20000;

/**
 * @description Solves the store-selection problem with whichever solver fits the
 * basket: exact while the search space is small enough to walk, greedy once it
 * is not.
 *
 * The two solvers disagree in one visible way. The exhaustive search is asked
 * for sets of exactly `maxStores`, while greedy stops as soon as another store
 * cannot pay for itself, so greedy may return fewer stores at the same cost.
 * Since basket cost never rises when a store is added, that is a better answer
 * for the shopper, not a worse one, but it does mean `suppliers.length` is not
 * a fixed quantity.
 *
 * @param {Matrix} matrix - Per-item supplier costs, from genMatrix
 * @param {number} supplierCount - How many suppliers each item's `opts` holds
 * @param {number} maxStores - The most stores the shopper agrees to visit
 * @param {number} [budget] - Candidate sets above which greedy takes over
 * @example
 * const res = solveBasket(matrix, suppliers.length, 5);
 * if (res.method === "greedy") showApproximateBadge();
 * if (!res.complete) warnBasketCannotBeFilled();
 * @returns {SolveResult} The chosen stores, the bill, and how it was reached
 */
const solveBasket = (
  matrix: Matrix,
  supplierCount: number,
  maxStores: number,
  budget: number = DEFAULT_SEARCH_BUDGET,
): SolveResult => {
  // Asking for more stores than exist is not an error, it just means no limit
  const stores = Math.max(0, Math.min(maxStores, supplierCount));
  const space = searchSpace(supplierCount, stores);

  if (space > 0 && space <= budget) {
    const exact = optimize(matrix, genCombinations(supplierCount, stores));

    // Every set was infeasible: the basket cannot be filled within the limit
    if (exact.length) {
      const best = exact[0];
      return {
        cost: best.cost,
        setup: best.setup,
        covered: best.setup.length,
        stocked: matrix.filter((item) => item.inStock).length,
        suppliers: best.suppliers,
        method: "exhaustive",
        complete: best.cost !== Infinity,
        searchSpace: space,
      };
    }
  }

  const approx = greedyOptimize(matrix, supplierCount, stores);
  return {
    cost: approx.cost,
    setup: approx.setup,
    covered: approx.covered,
    stocked: approx.stocked,
    suppliers: approx.suppliers,
    method: "greedy",
    complete: approx.covered === approx.stocked && approx.cost !== Infinity,
    searchSpace: space,
  };
};

export default solveBasket;
