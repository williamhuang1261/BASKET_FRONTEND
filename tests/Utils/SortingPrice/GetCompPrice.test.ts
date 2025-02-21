import { AmountProp, SuppliersProp } from "../../../src/interface/Destructed";
import getCompPrice from "../../../src/utils/SortingPrice/getCompPrice";
import { beforeEach, describe, expect, it } from "vitest";

let amount: AmountProp;
let supplierData: SuppliersProp;
let maxItem: number | undefined;
let qSelection:
  | {
      quantity: number;
      units: string;
    }
  | undefined;

describe("getCompPrice function", () => {
  beforeEach(() => {
    amount = {
      isApprox: false,
      method: "weight",
      units: "kg",
      quantity: 1,
    };
    supplierData = {
      supplier: "Provigo",
      brand: 'Sunkiss',
      pricing: {
        normal: 1,
        method: "unit",
        limited: [
          {
            typeOfRebate: "C",
            X: 1,
            Y: 1,
            C: 1,
            method: "unit",
            timeframe: {
              start: Date.now(),
              end: Date.now() + 200000,
            },
            onlyMembers: false,
          },
        ],
      },
    };
    maxItem = 3;
    qSelection = undefined;
  });
  const exec = () => {
    return getCompPrice(
      amount,
      supplierData,
      // @ts-expect-error testing purposes
      supplierData.pricing.limited[0],
      // @ts-expect-error testing purposes
      maxItem,
      { qSelection },
    );
  };
  it("Should return and Opts object and the right values if all is ok, C case", () => {
    const res = exec();
    expect(res).toBeDefined();
    expect(res).toMatchObject({
      supplier: expect.any(String),
      meta: {
        typeOfRebate: expect.any(String),
        C: expect.any(Number),
        rebatePricing: expect.any(String),
        start: expect.any(Number),
        end: expect.any(Number),
      },
      process: {
        priceToCompare: expect.any(Number),
        priceToShow: expect.any(String),
        isRebate: expect.any(Boolean),
      },
    });
    expect(res).toMatchObject({
      supplier: "Provigo",
      meta: {
        typeOfRebate: "C",
        C: 1,
        rebatePricing: "unit",
        start: expect.any(Number),
        end: expect.any(Number),
      },
      process: {
        priceToCompare: 1,
        priceToShow: "1.00 $",
        isRebate: true,
      },
    });
  });
  it("Should return and Opts object and the right values if all is ok, buyXgetYatC case", () => {
    // @ts-expect-error In our case, limited is never undefined
    supplierData.pricing.limited[0].typeOfRebate = "buyXgetYatC";
    const res = exec();
    expect(res).toBeDefined();
    expect(res).toMatchObject({
      supplier: expect.any(String),
      meta: {
        typeOfRebate: expect.any(String),
        X: expect.any(Number),
        Y: expect.any(Number),
        C: expect.any(Number),
        rebatePricing: expect.any(String),
        start: expect.any(Number),
        end: expect.any(Number),
      },
      process: {
        priceToCompare: expect.any(Number),
        priceToShow: expect.any(String),
        isRebate: expect.any(Boolean),
      },
    });
    expect(res).toMatchObject({
      supplier: expect.any(String),
      meta: {
        typeOfRebate: supplierData.pricing.limited?.[0].typeOfRebate,
        X: supplierData.pricing.limited?.[0].X,
        Y: supplierData.pricing.limited?.[0].Y,
        C: supplierData.pricing.limited?.[0].C,
        rebatePricing: supplierData.pricing.limited?.[0].method,
        start: expect.any(Number),
        end: expect.any(Number),
      },
      process: {
        priceToCompare: 1,
        priceToShow: "Buy 1, get 1 at 1 $",
        isRebate: true,
      },
    });
  });
  it("Should return and Opts object and the right values if all is ok, buyXgetYforC case", () => {
    // @ts-expect-error In our case, limited is never undefined
    supplierData.pricing.limited[0].typeOfRebate = "buyXgetYforC";
    const res = exec();
    expect(res).toBeDefined();
    expect(res).toMatchObject({
      supplier: expect.any(String),
      meta: {
        typeOfRebate: expect.any(String),
        X: expect.any(Number),
        Y: expect.any(Number),
        C: expect.any(Number),
        rebatePricing: expect.any(String),
        start: expect.any(Number),
        end: expect.any(Number),
      },
      process: {
        priceToCompare: expect.any(Number),
        priceToShow: expect.any(String),
        isRebate: expect.any(Boolean),
      },
    });
    expect(res).toMatchObject({
      supplier: expect.any(String),
      meta: {
        typeOfRebate: supplierData.pricing.limited?.[0].typeOfRebate,
        X: supplierData.pricing.limited?.[0].X,
        Y: supplierData.pricing.limited?.[0].Y,
        C: supplierData.pricing.limited?.[0].C,
        rebatePricing: supplierData.pricing.limited?.[0].method,
        start: expect.any(Number),
        end: expect.any(Number),
      },
      process: {
        priceToCompare: 1,
        priceToShow: "Buy 1, get 1 for 1 $",
        isRebate: true,
      },
    });
  });
  it("Should have the proper price to compare", () => {
    let res = exec();
    expect(res?.process.priceToCompare).toBe(1);
    // @ts-expect-error In our case, limited is never undefined
    supplierData.pricing.limited[0].Y = 2;
    // @ts-expect-error In our case, limited is never undefined
    supplierData.pricing.limited[0].typeOfRebate = "buyXgetYforC";
    res = exec();
    expect(res?.process.priceToCompare).toBe(2 / 3);
    // @ts-expect-error In our case, limited is never undefined
    supplierData.pricing.limited[0].typeOfRebate = "buyXgetYatC";
    res = exec();
    expect(res?.process.priceToCompare).toBe(1);
  });
  it("Should return the proper value in presence of qSelection", () => {
    maxItem = undefined;
    qSelection = {
      quantity: 5,
      units: "kg",
    };
    supplierData.pricing.normal = 10;
    const rebateOpts = ["C", "buyXgetYforC", "buyXgetYatC"];
    const outputs = [5, 32, 32];

    for (let i = 0; i < rebateOpts.length; i++) {
      // @ts-expect-error In our case, limited is never undefined
      supplierData.pricing.limited[0].typeOfRebate = rebateOpts[i];
      const res = exec();
      expect(res?.process.priceToCompare).toBe(outputs[i]);
    }
  });
});
