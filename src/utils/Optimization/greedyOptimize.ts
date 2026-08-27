import basketCost, { SetupProp } from "./basketCost";
import { Matrix } from "./genMatrix";

/**
 * @description A supplier set built by greedy selection, with the diagnostics
 * needed to judge how far it may sit from the true optimum
 * @interface GreedyResult
 */
export interface GreedyResult {
  /** Total basket cost. Infinity when a stocked item stayed unreachable. */
  cost: number;
  /** Cheapest supplier for each item, from basketCost */
  setup: SetupProp[];
  /** Stocked items the chosen suppliers can fill */
  covered: number;
  /** Stocked items in the basket */
  stocked: number;
  /** Zero-based supplier indices, in the order greedy committed to them */
  suppliers: number[];
  /** Money saved against the per-item reference price (see below) */
  savings: number;
  /** Candidate sets priced, the honest unit of work for a speed comparison */
  evaluations: number;
  /** Sum of each chosen store's visit cost, already folded into `cost` */
  travelCost: number;
}

/** Reads a candidate's visit cost whether visitCostPerStore is a flat number
 *  or a real per-store array from `computeVisitCostByStore` */
const costOf = (
  visitCostPerStore: number | number[],
  index: number,
): number =>
  Array.isArray(visitCostPerStore)
    ? (visitCostPerStore[index] ?? 0)
    : visitCostPerStore;

/**
 * @description Per-item reference price: the most a shopper could pay for the
 * item among suppliers that stock it. Savings are measured against this, which
 * is what makes the objective non-negative and bounded.
 */
const referencePrices = (matrix: Matrix): number[] =>
  matrix.map((item) => {
    if (!item.inStock) return 0;
    let max = 0;
    for (const opt of item.opts) {
      if (opt.cost !== Infinity && opt.cost > max) max = opt.cost;
    }
    return max;
  });

/**
 * @description Approximate solver for the store-selection problem, for the
 * baskets where the exhaustive search is too wide to run.
 *
 * ## Why greedy is defensible here
 *
 * Choosing k of n stores to minimise a basket is NP-hard, so the exhaustive
 * search in `optimize` is not something we can simply make faster. What saves
 * us is the shape of the objective. Write the savings of a supplier set S as
 *
 *     f(S) = sum over items i of [ P(i) - min over j in S of cost(i, j) ]
 *
 * with P(i) the reference price above, and a term of 0 for items S cannot
 * reach. Each term is a maximum of non-negative quantities, so each term is
 * monotone and submodular, and a sum of submodular functions is submodular.
 * f is therefore monotone submodular with f({}) = 0, and Nemhauser, Wolsey and
 * Fisher (1978) give greedy selection a guarantee on exactly that class:
 *
 *     f(greedy) >= (1 - 1/e) * f(optimum)  ~  63% of the attainable savings
 *
 * ## What that guarantee does not say
 *
 * The bound covers *savings*, not total cost. A basket where every store
 * charges roughly the same has little savings to win, so 63% of a small number
 * is a weak statement about the bill itself. The bound is also worst-case;
 * `scripts/benchmarkOptimizer.ts` measures what actually happens on random
 * baskets, and the README quotes those numbers rather than the theory.
 *
 * Marginal savings decide each pick. Ties break on coverage, so a store holding
 * the only copy of some item is still reachable even though it offers no
 * savings by this definition. That tie-break is a heuristic and carries no
 * bound of its own, which is why `covered` is reported: a caller that needs a
 * complete basket must check it rather than trust it.
 *
 * @param {Matrix} matrix - Per-item supplier costs, from genMatrix
 * @param {number} supplierCount - How many suppliers each item's `opts` holds
 * @param {number} maxStores - The most stores the shopper agrees to visit
 * @param {number|number[]} [visitCostPerStore] - Cost of visiting one more
 * store: a flat number for every candidate (see docs/prd-travel-cost.md), or
 * a `number[]` aligned to supplier index for a real per-store cost, e.g. from
 * `computeVisitCostByStore` (see docs/prd-geospatial-travel-cost.md). A
 * candidate is only added once its marginal savings clear its own cost,
 * reusing the existing "nothing pays for the trip" stopping condition.
 * @example
 * const res = greedyOptimize(matrix, suppliers.length, 4);
 * if (res.covered < res.stocked) { ... basket cannot be completed ... }
 * @returns {GreedyResult} The chosen suppliers and the resulting basket
 */
const greedyOptimize = (
  matrix: Matrix,
  supplierCount: number,
  maxStores: number,
  visitCostPerStore: number | number[] = 0,
): GreedyResult => {
  const reference = referencePrices(matrix);
  const chosen: number[] = [];
  let evaluations = 0;

  // Cheapest price secured so far for each item, Infinity while unreachable.
  // Capped at the reference price so an unreachable item scores 0 savings
  // rather than -Infinity, which is what keeps the objective well behaved.
  const effective: number[] = matrix.map((item, i) =>
    item.inStock ? reference[i] : 0,
  );

  const rounds = Math.min(maxStores, supplierCount);
  for (let round = 0; round < rounds; round++) {
    let bestIndex = -1;
    let bestSavings = 0;
    let bestCoverage = 0;

    for (let candidate = 0; candidate < supplierCount; candidate++) {
      if (chosen.includes(candidate)) continue;
      evaluations++;

      let savingsGain = 0;
      let coverageGain = 0;

      for (let i = 0; i < matrix.length; i++) {
        const item = matrix[i];
        if (!item.inStock) continue;

        const opt = item.opts[candidate];
        if (!opt || opt.cost === Infinity) continue;

        // An item still sitting at its reference price is not yet reachable
        if (effective[i] === reference[i] && !chosen.some((c) => {
          const prior = item.opts[c];
          return prior && prior.cost !== Infinity;
        })) {
          coverageGain++;
        }

        if (opt.cost < effective[i]) savingsGain += effective[i] - opt.cost;
      }

      // Savings decide, coverage only breaks ties
      if (
        savingsGain > bestSavings ||
        (savingsGain === bestSavings && coverageGain > bestCoverage)
      ) {
        bestIndex = candidate;
        bestSavings = savingsGain;
        bestCoverage = coverageGain;
      }
    }

    // Nothing left that pays for the trip, once the trip itself has a cost.
    // A store needed purely for coverage (bestCoverage > 0) is still worth
    // the trip regardless of cost - the alternative is an incomplete basket,
    // not a cheaper one.
    if (bestIndex === -1) break;
    if (bestSavings <= costOf(visitCostPerStore, bestIndex) && bestCoverage === 0) break;

    chosen.push(bestIndex);
    for (let i = 0; i < matrix.length; i++) {
      const opt = matrix[i].opts[bestIndex];
      if (matrix[i].inStock && opt && opt.cost < effective[i]) {
        effective[i] = opt.cost;
      }
    }
  }

  // Price the winning set through the shared model so the number is directly
  // comparable with what optimize returns
  const priced = basketCost(matrix, chosen);
  const savings = matrix.reduce(
    (acc, item, i) => (item.inStock ? acc + (reference[i] - effective[i]) : acc),
    0,
  );
  const travelCost = chosen.reduce(
    (sum, index) => sum + costOf(visitCostPerStore, index),
    0,
  );

  return {
    ...priced,
    cost: priced.cost === Infinity ? priced.cost : priced.cost + travelCost,
    suppliers: chosen,
    savings,
    evaluations,
    travelCost,
  };
};

export default greedyOptimize;
