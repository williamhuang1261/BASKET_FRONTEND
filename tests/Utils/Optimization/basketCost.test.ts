import { beforeEach, describe, expect, it } from "vitest";
import basketCost from "../../../src/utils/Optimization/basketCost";
import { Matrix } from "../../../src/utils/Optimization/genMatrix";

/** Item stocked at all three suppliers, cheapest at the index given. */
const item = (code: string, costs: number[]): Matrix[number] => ({
  ref: { code, standard: "PLU" },
  inStock: costs.some((c) => c !== Infinity),
  opts: costs.map((cost, i) => ({ supplier: `S${i + 1}`, cost })),
});

describe("basketCost", () => {
  let matrix: Matrix;

  beforeEach(() => {
    matrix = [
      item("11111", [1, 12, 13]),
      item("22222", [11, 2, 13]),
      item("33333", [11, 12, 3]),
    ];
  });

  it("Should buy every item at the cheapest supplier inside the chosen set", () => {
    const res = basketCost(matrix, [0, 1]);
    expect(res.cost).toBe(1 + 2 + 11);
    expect(res.setup.map((s) => s.supplier)).toEqual(["S1", "S2", "S1"]);
  });

  it("Should keep every supplier that ties for the cheapest price", () => {
    matrix[0].opts[1].cost = 1;
    const res = basketCost(matrix, [0, 1]);
    expect(res.setup.filter((s) => s.itemRef.code === "11111")).toHaveLength(2);
  });

  it("Should report the whole set as infeasible when a stocked item is unreachable", () => {
    // Only S3 carries this item, and S3 is not in the chosen set
    matrix.push(item("44444", [Infinity, Infinity, 5]));
    const res = basketCost(matrix, [0, 1]);
    expect(res.cost).toBe(Infinity);
    expect(res.covered).toBe(3);
    expect(res.stocked).toBe(4);
  });

  it("Should ignore items that no supplier carries at all", () => {
    matrix.push(item("55555", [Infinity, Infinity, Infinity]));
    const res = basketCost(matrix, [0, 1, 2]);
    expect(res.stocked).toBe(3);
    expect(res.cost).toBe(1 + 2 + 3);
  });

  it("Should cost an empty supplier set as infeasible, not as free", () => {
    const res = basketCost(matrix, []);
    expect(res.cost).toBe(Infinity);
    expect(res.covered).toBe(0);
  });

  it("Should never cost more as suppliers are added", () => {
    // Monotonicity: a superset can always fall back on the subset's choices
    const subset = basketCost(matrix, [0, 1]).cost;
    const superset = basketCost(matrix, [0, 1, 2]).cost;
    expect(superset).toBeLessThanOrEqual(subset);
  });
});
