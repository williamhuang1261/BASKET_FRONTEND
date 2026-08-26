import { describe, expect, it } from "vitest";
import greedyOptimize from "../../../src/utils/Optimization/greedyOptimize";
import optimize from "../../../src/utils/Optimization/optimize";
import genCombinations from "../../../src/utils/Optimization/genCombinations";
import basketCost from "../../../src/utils/Optimization/basketCost";
import { Matrix } from "../../../src/utils/Optimization/genMatrix";

const item = (code: string, costs: number[]): Matrix[number] => ({
  ref: { code, standard: "PLU" },
  inStock: costs.some((c) => c !== Infinity),
  opts: costs.map((cost, i) => ({ supplier: `S${i + 1}`, cost })),
});

/** Deterministic LCG so a failing case can be reproduced from its seed. */
const rng = (seed: number) => () =>
  ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);

const randomMatrix = (
  items: number,
  suppliers: number,
  next: () => number,
): Matrix =>
  Array.from({ length: items }, (_, i) =>
    item(
      `${i}`,
      Array.from({ length: suppliers }, () =>
        // 1 in 4 suppliers does not carry a given item
        next() < 0.25 ? Infinity : Math.round(next() * 1000) / 100,
      ),
    ),
  );

describe("greedyOptimize", () => {
  it("Should pick the single cheapest store when only one trip is allowed", () => {
    const matrix = [
      item("1", [1, 5]),
      item("2", [1, 5]),
      item("3", [1, 5]),
    ];
    const res = greedyOptimize(matrix, 2, 1);
    expect(res.suppliers).toEqual([0]);
    expect(res.cost).toBe(3);
  });

  it("Should spread across stores when that is genuinely cheaper", () => {
    const matrix = [item("1", [1, 12]), item("2", [11, 2])];
    const res = greedyOptimize(matrix, 2, 2);
    expect(res.suppliers.sort()).toEqual([0, 1]);
    expect(res.cost).toBe(3);
  });

  it("Should stop early when another store cannot pay for itself", () => {
    // S2 is beaten on every item, so a second trip buys nothing
    const matrix = [item("1", [1, 9]), item("2", [1, 9])];
    const res = greedyOptimize(matrix, 2, 2);
    expect(res.suppliers).toHaveLength(1);
  });

  it("Should reach a store holding the only copy of an item", () => {
    // S2 offers zero savings on item 2 (it is the only price) but the basket
    // cannot be completed without it
    const matrix = [item("1", [1, 4]), item("2", [Infinity, 7])];
    const res = greedyOptimize(matrix, 2, 2);
    expect(res.covered).toBe(2);
    expect(res.cost).toBe(8);
  });

  it("Should never exceed the store budget", () => {
    const next = rng(99);
    const matrix = randomMatrix(12, 8, next);
    for (const budget of [1, 2, 3, 4]) {
      expect(greedyOptimize(matrix, 8, budget).suppliers.length).toBeLessThanOrEqual(budget);
    }
  });

  it("Should agree with the exhaustive solver on the cost it reports", () => {
    // Whatever set greedy picks, basketCost must price it identically
    const next = rng(7);
    const matrix = randomMatrix(10, 6, next);
    const res = greedyOptimize(matrix, 6, 3);
    expect(basketCost(matrix, res.suppliers).cost).toBe(res.cost);
  });

  it("Should hold the (1 - 1/e) savings guarantee against brute force", () => {
    const bound = 1 - 1 / Math.E;
    let worstRatio = Infinity;

    for (let seed = 1; seed <= 60; seed++) {
      const next = rng(seed);
      const suppliers = 7;
      const budget = 3;
      const matrix = randomMatrix(14, suppliers, next);

      const exact = optimize(matrix, genCombinations(suppliers, budget));
      const approx = greedyOptimize(matrix, suppliers, budget);
      if (!exact.length || exact[0].cost === Infinity) continue;
      if (approx.cost === Infinity) continue;

      // Compare savings against the same reference the theory uses: the most
      // the basket could cost, which is what both solvers are cutting into
      const worst = matrix.reduce((acc, it) => {
        if (!it.inStock) return acc;
        return acc + Math.max(...it.opts.map((o) => o.cost).filter(Number.isFinite));
      }, 0);

      const exactSavings = worst - exact[0].cost;
      const approxSavings = worst - approx.cost;
      if (exactSavings <= 0) continue;

      worstRatio = Math.min(worstRatio, approxSavings / exactSavings);
    }

    expect(worstRatio).toBeGreaterThanOrEqual(bound);
  });

  it("Should often match the exhaustive optimum outright", () => {
    let matched = 0;
    let total = 0;

    for (let seed = 100; seed < 160; seed++) {
      const next = rng(seed);
      const suppliers = 6;
      const budget = 3;
      const matrix = randomMatrix(12, suppliers, next);

      const exact = optimize(matrix, genCombinations(suppliers, budget));
      const approx = greedyOptimize(matrix, suppliers, budget);
      if (!exact.length || exact[0].cost === Infinity || approx.cost === Infinity) continue;

      total++;
      if (Math.abs(approx.cost - exact[0].cost) < 1e-9) matched++;
    }

    expect(total).toBeGreaterThan(0);
    expect(matched / total).toBeGreaterThan(0.5);
  });
});
