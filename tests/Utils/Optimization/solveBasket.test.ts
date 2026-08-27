import { describe, expect, it } from "vitest";
import solveBasket, {
  searchSpace,
} from "../../../src/utils/Optimization/solveBasket";
import { Matrix } from "../../../src/utils/Optimization/genMatrix";

const item = (code: string, costs: number[]): Matrix[number] => ({
  ref: { code, standard: "PLU" },
  inStock: costs.some((c) => c !== Infinity),
  opts: costs.map((cost, i) => ({ supplier: `S${i + 1}`, cost })),
});

describe("searchSpace", () => {
  it("Should count the supplier sets the exhaustive solver would price", () => {
    expect(searchSpace(20, 10)).toBe(184756);
    expect(searchSpace(6, 3)).toBe(20);
    expect(searchSpace(5, 0)).toBe(1);
    expect(searchSpace(5, 5)).toBe(1);
  });

  it("Should return 0 when more stores are demanded than exist", () => {
    expect(searchSpace(3, 4)).toBe(0);
  });

  it("Should stay exact rather than drifting on large inputs", () => {
    // Naive factorials overflow well before this
    expect(searchSpace(52, 5)).toBe(2598960);
    expect(Number.isInteger(searchSpace(40, 20))).toBe(true);
  });
});

describe("solveBasket", () => {
  const matrix = [item("1", [1, 12, 13]), item("2", [11, 2, 13]), item("3", [11, 12, 3])];

  it("Should solve exactly while the search space is affordable", () => {
    const res = solveBasket(matrix, 3, 2);
    expect(res.method).toBe("exhaustive");
    expect(res.cost).toBe(14);
    expect(res.complete).toBe(true);
  });

  it("Should hand over to greedy once the space exceeds the budget", () => {
    const res = solveBasket(matrix, 3, 2, 2);
    expect(res.method).toBe("greedy");
    expect(res.searchSpace).toBe(3);
  });

  it("Should clamp a store budget larger than the number of suppliers", () => {
    // Asking for 10 stores when 3 exist must not produce an empty search
    const res = solveBasket(matrix, 3, 10);
    expect(res.cost).toBe(6);
    expect(res.complete).toBe(true);
  });

  it("Should report an unfillable basket rather than a bogus price", () => {
    const unreachable = [...matrix, item("4", [Infinity, Infinity, Infinity, 5])];
    const res = solveBasket(unreachable, 3, 1);
    expect(res.complete).toBe(false);
  });

  it("Should let both solvers reach the same cost on the same basket", () => {
    const exact = solveBasket(matrix, 3, 2);
    const greedy = solveBasket(matrix, 3, 2, 0);
    expect(greedy.method).toBe("greedy");
    expect(greedy.cost).toBe(exact.cost);
  });

  it("Should default to zero travel cost and match prior behaviour", () => {
    const withDefault = solveBasket(matrix, 3, 2);
    const explicitZero = solveBasket(matrix, 3, 2, undefined, 0);
    expect(withDefault).toEqual(explicitZero);
    expect(withDefault.travelCost).toBe(0);
  });

  it("Should fold stores * visitCostPerStore into the exhaustive total", () => {
    const free = solveBasket(matrix, 3, 2);
    const withCost = solveBasket(matrix, 3, 2, undefined, 1.5);
    expect(withCost.method).toBe("exhaustive");
    expect(withCost.travelCost).toBe(2 * 1.5);
    expect(withCost.cost).toBe(free.cost + 2 * 1.5);
  });

  it("Should forward the visit cost to the greedy solver", () => {
    // Force greedy via a search-space budget of 0, same as the existing test above
    const free = solveBasket(matrix, 3, 2, 0, 0);
    const expensive = solveBasket(matrix, 3, 2, 0, 100);
    expect(expensive.method).toBe("greedy");
    expect(expensive.suppliers.length).toBeLessThanOrEqual(free.suppliers.length);
  });

  it("Should fold a real per-store cost array into the exhaustive total", () => {
    const costPerStore = [1, 2, 3];
    const withArrayCost = solveBasket(matrix, 3, 2, undefined, costPerStore);
    expect(withArrayCost.method).toBe("exhaustive");
    const expected = withArrayCost.suppliers.reduce(
      (sum, index) => sum + costPerStore[index],
      0,
    );
    expect(withArrayCost.travelCost).toBe(expected);
  });

  it("Should forward a real per-store cost array to the greedy solver", () => {
    // Force greedy via a search-space budget of 0
    const costPerStore = [0, 0.1, 100];
    const res = solveBasket(matrix, 3, 2, 0, costPerStore);
    expect(res.method).toBe("greedy");
    const expected = res.suppliers.reduce(
      (sum, index) => sum + costPerStore[index],
      0,
    );
    expect(res.travelCost).toBe(expected);
  });
});
