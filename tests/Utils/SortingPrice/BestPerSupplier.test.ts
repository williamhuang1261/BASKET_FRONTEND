import BestPerSupplier from "../../../src/utils/SortingPrice/BestPerSupplier";
import { describe, it, expect, beforeEach } from "vitest";
import SortByPrice from "../../../src/utils/SortingPrice/SortByPrice";
import {CardProps} from "../../../src/interface/CardProps";
import {PriceProps} from "../../../src/interface/PriceProps";

type itemType = Pick<CardProps, "name" | "ref" | "amount" | "suppliers">;
interface ItemProp extends itemType {}

describe("SortByPrice", () => {
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
        method: "weight",
        units: "g",
        quantity: 250,
      },
      suppliers: [
        {
          supplier: "Provigo",
          brand: 'Sunkiss',
          pricing: {
            normal: 2.56,
            method: "weight_kg",
            limited: [
              {
                typeOfRebate: "buyXgetYforC",
                X: 1,
                Y: 10,
                C: 0,
                method: "unit",
                timeframe: {
                  start: Date.now(),
                  end: Date.now() + 200000000,
                },
                onlyMembers: false,
              },
              {
                typeOfRebate: "buyXgetYforC",
                Y: 2,
                C: 2.56,
                method: "unit",
                timeframe: {
                  start: Date.now(),
                  end: Date.now() + 500000000,
                },
                onlyMembers: false,
              },
            ],
          },
        },
        {
          supplier: "Metro",
          brand: 'Selection',
          pricing: {
            normal: 2.56,
            method: "weight_kg",
            limited: [
              {
                typeOfRebate: "buyXgetYforC",
                X: 2,
                C: 2.56,
                method: "unit",
                timeframe: {
                  start: Date.now() + 200000000,
                  end: Date.now() + 500000000,
                },
                onlyMembers: false,
              },
            ],
          },
        },
        {
          supplier: "IGA",
          brand: 'IGA',
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


    const sorted: PriceProps | string = SortByPrice(
      {
        name: item.name,
        ref: item.ref,
        amount: item.amount,
        suppliers: item.suppliers,
      },
      { maxQuantity: undefined },
    );
    const filtered = BestPerSupplier(sorted);
    return filtered;
  };

  it("Should return an array of only the prices that are the best for each supplier and in increasing order of price", () => {
    const res = exec();
    if (typeof res !== "string") {
      expect(res.opts).toBeInstanceOf(Array);
      expect(res.opts?.length).toBe(3);
      expect(res.opts?.[0].supplier === "Provigo");
      expect(res.opts?.[1].supplier === "Metro");
      expect(res.opts?.[2].supplier === "IGA");
    }
  });
  it("Should return the error string if there was an error during the SortByPrice", () => {
    item.suppliers = [];
    const res = exec();
    expect(typeof res).toBe("string");
  });
});
