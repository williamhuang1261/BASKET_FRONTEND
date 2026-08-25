import { Matrix } from "./genMatrix";

/**
 * @description One item sourced from one supplier at one price
 * @interface SetupProp
 */
export interface SetupProp {
  itemRef: {
    code: string;
    standard: string;
  };
  supplier: string;
  cost: number;
}

/**
 * @description The result of filling a basket from a fixed set of suppliers
 * @interface BasketCost
 */
export interface BasketCost {
  /** Total basket cost. Infinity when a stocked item is unavailable in the set. */
  cost: number;
  /** Cheapest supplier for each item. Ties keep every supplier that matches. */
  setup: SetupProp[];
  /** Stocked items that at least one chosen supplier can actually fill */
  covered: number;
  /** Stocked items in the basket, independent of the chosen set */
  stocked: number;
}

/**
 * @description Prices a basket when the shopper agrees to visit only `chosen`
 * suppliers. Every item is bought wherever it is cheapest inside that set, which
 * is optimal for a fixed set: with no cross-item constraints the per-item
 * minimum is independent of what happens to the other items.
 *
 * A stocked item that none of the chosen suppliers carries makes the whole set
 * infeasible, reported as a cost of Infinity so callers can reject it.
 *
 * @param {Matrix} matrix - Per-item supplier costs, from genMatrix
 * @param {number[]} chosen - Zero-based indices into each item's `opts` array
 * @example
 * // Cost of shopping at only the first and third supplier
 * const { cost } = basketCost(matrix, [0, 2]);
 * @returns {BasketCost} Total cost, the per-item assignment, and coverage
 */
const basketCost = (matrix: Matrix, chosen: number[]): BasketCost => {
  const setup: SetupProp[] = [];
  let cost = 0;
  let covered = 0;
  let stocked = 0;

  for (const item of matrix) {
    // Items no supplier carries at all are not the shopper's problem
    if (!item.inStock) continue;
    stocked++;

    let itemCost: number = Infinity;
    let picks: SetupProp[] = [];

    for (const index of chosen) {
      const opt = item.opts[index];
      if (!opt) continue;

      if (opt.cost < itemCost) {
        picks = [
          {
            itemRef: item.ref,
            supplier: opt.supplier,
            cost: opt.cost,
          },
        ];
        itemCost = opt.cost;
      } else if (opt.cost === itemCost && opt.cost !== Infinity) {
        picks.push({
          itemRef: item.ref,
          supplier: opt.supplier,
          cost: opt.cost,
        });
      }
    }

    if (itemCost !== Infinity) covered++;
    cost = cost + itemCost;
    setup.push(...picks);
  }

  return { cost, setup, covered, stocked };
};

export default basketCost;
