import { AmountProp } from "../../../src/interface/Destructed";
import calcCost from "../../../src/utils/SortingPrice/calcCost";
import { describe, expect, beforeEach, it } from "vitest";


describe("calcCost", () => {
  let price: number;
  let method: string;
  let req: {
    quantity: number;
    units: string;
  };
  let amount: AmountProp
  let conv: string | undefined;

  beforeEach(() => {
    amount = {
      isApprox: false,
      method: "weight",
      units: "kg",
      quantity: 1,
    };
    price = 1;
    (method = "weight_kg"),
      (req = {
        quantity: 1,
        units: "unit",
      });
    conv = undefined;
  });
  const exec = () => {
    const res = calcCost({ amount: amount }, price, method, req, conv);
    return res;
  };
  it("Should return the correct cost for the required amount", () => {
    const res = exec();
    expect(res).toBe(1);
  });
  it("Should return the correct cost even with unit conversion for original amount", () => {
    amount.units = "g";
    amount.quantity = 1000;
    const res = exec();
    expect(res).toBe(1);
  });
  it("Should return the correct cost even with conversion of the required amount", () => {
    req.quantity = 1000;
    req.units = "g";
    const res = exec();
    expect(res).toBe(1);
  });
  it("Should return the correct cost even with conversion of the price format", () => {
    price = 0.1;
    method = "weight_100g";
    const res = exec();
    expect(res).toBe(1);
  });
  it("Should return the correct conversion if asked for unit output", () => {
    conv = "unit";
    const res = exec();
    expect(res).toBe(1);
  });
  it("Should return the correct conversion if asked for a weight output", () => {
    conv = "weight_100g";
    let res = exec();
    expect(res).toBe(0.1);

    conv = "weight_kg";
    res = exec();
    expect(res).toBe(1);
  });
  it("Should return the correct conversion if asked for unit output", () => {
    conv = "unit";
    const res = exec();
    expect(res).toBe(1);
  });
  it("Should return undefined if one of the parameters is missing", () => {
    // @ts-expect-error Testing error handling
    amount = undefined;
    let res = exec();
    expect(res).toBeUndefined();
    amount = {
      isApprox: false,
      method: "weight",
      units: "kg",
      quantity: 1,
    };

    // @ts-expect-error Testing error handling
    price = undefined;
    res = exec();
    expect(res).toBeUndefined();
    price = 1;

    // @ts-expect-error Testing error handling
    method = undefined;
    res = exec();
    expect(res).toBeUndefined();
    method = "weight_kg";

    // @ts-expect-error Testing error handling
    req = undefined;
    res = exec();
    expect(res).toBeUndefined();
  });
  it("Should return undefined if the pricing method is not supported", () => {
    method = "string";
    const res = exec();
    expect(res).toBeUndefined();
  });
  it("Should return undefined if the unit conversion fails", () => {
    amount.units = "mL";
    const res = exec();
    expect(res).toBeUndefined();
  });
  it(`Shouldn't return undefined if the req doesn't have weight units`, () => {
    req.units = "mL";
    const res = exec();
    expect(res).toBeUndefined();
  });
  it("Should return undefined if conv string is invalid", () => {
    conv = "string";
    const res = exec();
    expect(res).toBeUndefined();
  });
});
