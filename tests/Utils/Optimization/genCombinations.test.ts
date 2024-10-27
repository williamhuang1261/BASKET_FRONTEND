import { beforeEach, describe, expect, it } from "vitest";
import genCombinations from "../../../src/utils/Optimization/genCombinations";

describe("genCombinations function", () => {
  let maxNum: number;
  let length: number;
  beforeEach(() => {
    maxNum = 3;
    length = 2;
  });
  const exec = () => {
    return genCombinations(maxNum, length);
  };
  it("Should return the proper number of possible combinations", () => {
    const res = exec();
    expect(res.length).toBe(3);
  });
  it("Should return the proper combinations", () => {
    const res = exec();
    expect(res).toBeInstanceOf(Array);
    expect(res.sort()).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });
  it('Should return an empty array if either maxNum or length is 0', () => {
    maxNum = 0;
    let res = exec();
    expect(res).toEqual([]);
    maxNum = 3;
    length = 0;
    res = exec();
    expect(res).toEqual([]);
  });
});
