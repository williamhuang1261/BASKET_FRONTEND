import  ShowNormal from "../../src/components/General/ItemCard/ShowNormal";
import { beforeEach, describe, it, expect } from "vitest";
import { AmountProp, NameProp, RefProp, SuppliersProp } from "../../src/interface/Destructed";

interface ItemProp {
  name: NameProp;
  ref: RefProp
  amount: AmountProp;
  suppliers?: SuppliersProp[];
}

describe("ShowNormal function", () => {
  let item: ItemProp;
  // eslint-disable-next-line
  let maxQuantity:
    | {
        units: string;
        amount: number;
      }
    | undefined;
  // eslint-disable-next-line
  let maxCount: number | undefined;
  beforeEach(() => {
    item = {
      name: {
        fr: "Pomme",
        en: "Apple",
        size: "S",
      },
      ref: {
        standard: "PLU",
        code: "1234",
      },
      amount: {
        isApprox: true,
        meas: "weight",
        units: "g",
        quantity: 250,
      },
      suppliers: [
        {
          supplier: "Provigo",
          pricing: {
            normal: 2.56,
            method: "weight_kg",
            limited: [
              {
                typeOfRebate: "buyXgetYforC",
                X: 1,
                Y: 10,
                C: 0,
                rebatePricing: 'unit',
                start: Date.now(),
                end: Date.now() + 200000000,
                onlyMembers: false
              },
              {
                typeOfRebate: "XforC",
                X: 2,
                C: 2.56,
                rebatePricing: 'unit',
                start: Date.now(),
                end: Date.now() + 500000000,
                onlyMembers: false
              },
            ],
          },
        },
        {
          supplier: "Metro",
          pricing: {
            normal: 2.56,
            method: "weight_kg",
            limited: [
              {
                typeOfRebate: "XforC",
                X: 2,
                C: 2.56,
                rebatePricing: 'unit',
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
                onlyMembers: false
              },
            ],
          },
        },
        {
          supplier: "IGA",
          pricing: {
            normal: 2.57,
            method: "weight_kg",
          },
        },
      ],
    };
    maxQuantity = undefined;
    maxCount = undefined;
  });
  const exec = () => {
    const normals = ShowNormal({ suppliers: item.suppliers });
    return normals;
  };
  it("Should return the normal prices of every supplier", () => {
    const res = exec();
    expect(res).toBeInstanceOf(Array);
    // @ts-expect-error Testing purposes
    expect(res.length).toBe(3);
    // @ts-expect-error Testing purposes
    expect(res[0].normalPrice).toBe("2.56 $/kg");
  });
  it("Should return undefined if no prices are available", () => {
    item.suppliers = [];
    let res = exec();
    expect(res).toBeUndefined();

    item.suppliers = undefined;
    res = exec();
    expect(res).toBeUndefined();
  });
});
