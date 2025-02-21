import { beforeEach, describe, expect, it } from "vitest";
import toUnit from "../../../src/utils/Units/toUnit";
import { AmountProp } from "../../../src/interface/Destructed";

describe("toUnit function", () => {
  let amount: AmountProp;
  let required: {
    quantity: number;
    units: string;
  };
  beforeEach(() => {
    amount = {
      isApprox: false,
      method: "weight",
      units: "g",
      quantity: 100,
    };
    required = {
      quantity: 1,
      units: "kg",
    };
  });
  const exec = () => {
    const res = toUnit(amount, required);
    return res;
  };
  it("Should return the correct number of units", () => {
    const res = exec();
    expect(res).toBe(10);
  });
  it("Should return undefined if the conversion is impossible", () => {
    required.units = "mL";
    const res = exec();
    expect(res).toBe(undefined);
  });
  it("Should return undefined if  `required` parameter is undefined", () => {
    // @ts-expect-error Testing error handling
    required = undefined;
    const res = exec();
    expect(res).toBe(undefined);
  });
  it("Should return undefined if `amount` parameter is undefined", () => {
    // @ts-expect-error Testing error handling
    amount = undefined;
    const res = exec();
    expect(res).toBe(undefined);
  });
});
