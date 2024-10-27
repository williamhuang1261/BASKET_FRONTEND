import { beforeEach, describe, expect, it } from "vitest";
import optimize from "../../../src/utils/Optimization/optimize";
import { Matrix } from "../../../src/utils/Optimization/genMatrix";

describe("optimize function", () => {
  let matrix: Matrix;
  let combinations: number[][];

  beforeEach(() => {
    matrix = [
      {
        ref: {
          code: "11111",
          standard: "PLU",
        },
        inStock: true,
        opts: [
          {
            supplier: "S1",
            cost: 1,
          },
          {
            supplier: "S2",
            cost: 12,
          },
          {
            supplier: "S3",
            cost: 13,
          },
        ],
      },
      {
        ref: {
          code: "22222",
          standard: "PLU",
        },
        inStock: true,
        opts: [
          {
            supplier: "S1",
            cost: 11,
          },
          {
            supplier: "S2",
            cost: 2,
          },
          {
            supplier: "S3",
            cost: 13,
          },
        ],
      },
      {
        ref: {
          code: "33333",
          standard: "PLU",
        },
        inStock: true,
        opts: [
          {
            supplier: "S1",
            cost: 11,
          },
          {
            supplier: "S2",
            cost: 12,
          },
          {
            supplier: "S3",
            cost: 3,
          },
        ],
      },
    ];
    combinations = [
      [1, 2],
      [1, 3],
      [2, 3],
    ];
  });

  const exec = () => {
    return optimize(matrix, combinations);
  };

  it("Should return the optimized price and the combination", () => {
    const res = exec();
    expect(res[0].setup[0].supplier).toBe("S1");
    expect(res[0].setup[1].supplier).toBe("S2");
    expect(res[0].setup[2].supplier).toBe("S1");
    expect(res[0].cost).toBe(14);
  });
  it("Should return all two possible suppliers if they offer the same price", () => {
    matrix[0].opts[1].cost = 1;
    combinations = [[1, 2]];
    const res = exec();
    expect(res[0].setup.length).toBe(4);
    expect(res[0].setup[0].supplier).toBe("S1");
    expect(res[0].setup[1].supplier).toBe("S2");
    expect(res[0].setup[2].supplier).toBe("S2");
    expect(res[0].setup[3].supplier).toBe("S1");
  });
  it("Should return all best combinations if they result in the same cost", () => {
    for (const item of matrix) {
      for (let i = 0; i < item.opts.length; i++) {
        item.opts[i].cost = 1;
      }
    }
    const res = exec();
    expect(res.length).toBe(3);
    for (let i = 0; i < res.length; i++) {
      expect(res[i].cost).toBe(3);
    }
  });
  it("Should ignore any item that has no supplier", () => {
    matrix[0].inStock = false
    const res = exec();
    expect(res[0].setup.length).toBe(2)
  });
});
