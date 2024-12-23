import { beforeEach, describe, expect, it } from "vitest";
import setMaxItem from "../../src/utils/SortingPrice/setMaxItem";

let maxAmountFilter:
  | {
      quantity: number;
      units: string;
    }
  | undefined;
let itemAmount:
  | {
      quantity: number;
      units: string;
    }
  | undefined;

describe("setMaxItem", () => {
  beforeEach(() => {
    maxAmountFilter = undefined;
    itemAmount = undefined;
  });
  const exec = () => {
    const res = setMaxItem(maxAmountFilter, itemAmount);
    return res;
  };
  it("Should return the maximum number of items if maxAmount is provided", () => {
    maxAmountFilter = {
      quantity: 2.5,
      units: "kg",
    };
    itemAmount = {
      quantity: 250,
      units: "g",
    };
    const res = exec();
    expect(res).toBe(10);
  });
  it("Should return the maximum number if measurements are in units", () => {
    maxAmountFilter = {
      quantity: 10,
      units: "unit",
    };
    itemAmount = {
      quantity: 2,
      units: "unit",
    };
    const res = exec();
    expect(res).toBe(5);
  });
  it("Should return infinity if itemAmount is missing", () => {
    maxAmountFilter = {
      quantity: 2.5,
      units: "kg",
    };
    const res = exec();
    expect(res).toBe(Infinity);
  });
  it("Should return infinity if maxAmountFilter is missing", () => {
    itemAmount = {
      quantity: 250,
      units: "g",
    };
    const res = exec();
    expect(res).toBe(Infinity);
  });
  it("Should return infinity if data type is wrong", () => {
    maxAmountFilter = {
      // @ts-expect-error Testing error handling
      quantity: "string",
      units: "unit",
    };
    itemAmount = {
      quantity: 2,
      units: "unit",
    };
    let res = exec();
    expect(res).toBe(Infinity);
    maxAmountFilter = {
      quantity: 10,
      // @ts-expect-error Testing error handling
      units: 10,
    };
    itemAmount = {
      quantity: 2,
      units: "unit",
    };
    res = exec();
    expect(res).toBe(Infinity);
    maxAmountFilter = {
      quantity: 10,
      units: "unit",
    };
    itemAmount = {
      // @ts-expect-error Testing error handling
      quantity: "string",
      units: "unit",
    };
    res = exec();
    expect(res).toBe(Infinity);
    maxAmountFilter = {
      quantity: 10,
      units: "unit",
    };
    itemAmount = {
      quantity: 2,
      // @ts-expect-error Testing error handling
      units: 10,
    };
    res = exec();
    expect(res).toBe(Infinity);
  });
  it("Should return infinity if either itemAmount or maxAmountFilter is in units but not the other", () => {
    maxAmountFilter = {
      quantity: 10,
      units: "kg",
    };
    itemAmount = {
      quantity: 2,
      units: "unit",
    };
    let res = exec();
    expect(res).toBe(Infinity);
    maxAmountFilter = {
      quantity: 10,
      units: "unit",
    };
    itemAmount = {
      quantity: 2,
      units: "kg",
    };
    res = exec();
    expect(res).toBe(Infinity);
  });
  it("Should return infinity if units conversion did not work", () => {
    maxAmountFilter = {
      quantity: 10,
      units: "kg",
    };
    itemAmount = {
      quantity: 2,
      units: "mL",
    };
    const res = exec();
    expect(res).toBe(Infinity);
  });
});
