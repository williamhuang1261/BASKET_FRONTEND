import { beforeEach, describe, expect, it } from "vitest";
import selectCost from "../../../src/utils/SortingPrice/selectCost";
import { AmountProp, LimitedProp } from "../../../src/interface/Destructed";

let amount: AmountProp;
let limited: LimitedProp;
let reqNum: number;
let normalPrice: number;
let normalMethod: string;

describe("selectCost function", () => {
  beforeEach(() => {
    amount = {
      quantity: 1,
      meas: "weight",
      units: "kg",
      isApprox: false,
    };
    limited = {
      typeOfRebate: "C",
      X: 1,
      Y: 2,
      C: 1,
      rebatePricing: "unit",
      start: Date.now(),
      end: Date.now() + 20000,
      onlyMembers: false,
    };
    reqNum = 3;
    normalPrice = 10;
    normalMethod = "unit";
  });
  const exec = () => {
    const output = selectCost(
      amount,
      limited,
      reqNum,
      normalPrice,
      normalMethod,
    );
    return output;
  };
  it("Should return the proper cost if all is ok", () => {
    const res = exec();
    expect(res).toBe(3);
  });
  it("Should return the proper cost with different typeOfRebate", () => {
    const opts = ["C", "buyXgetYforC", "buyXgetYatC"];
    const output = [3, 11, 12];
    for (let i = 0; i <= 2; i++) {
      limited.typeOfRebate = opts[i];
      const res = exec();
      expect(res).toBe(output[i]);
    }
  });
  it("Should return the proper cost even in the presence of 0`s", () => {
    const types = ["buyXgetYatC", "buyXgetYforC"];
    const opts = ["X", "Y", "C"];
    const outputs = [
      [12, 30, 10],
      [11, 30, 10],
    ];
    for (let i = 0; i <= 1; i++) {
      limited.typeOfRebate = types[i];
      for (let j = 0; j <= 2; j++) {
        const initial = limited[opts[j]];
        limited[opts[j]] = 0;
        const res = exec();
        expect(res).toBe(outputs[i][j]);
        limited[opts[j]] = initial;
      }
    }
  });
  it('Should return undefined if data is inconsistent', () => {
    limited.typeOfRebate = 'buyXgetYatC';
    limited.rebatePricing = 'weight_100g';
    const res = exec();
    expect(res).toBeUndefined();
  });
  it('Should return undefined if value are not accepted fail', () => {
    // @ts-expect-error Testing error handling
    reqNum = 'string';
    const res = exec();
    expect(res).toBeUndefined()
  });
});
