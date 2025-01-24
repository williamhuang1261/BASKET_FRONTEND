import { beforeEach, describe, expect, it } from "vitest";
import {PriceProps, OptsProps } from "../../../src/interface/PriceProps";
import {
  AmountProp,
  NameProp,
  RefProp,
} from "../../../src/interface/Destructed";
import genMatrix from "../../../src/utils/Optimization/genMatrix";

describe("genMatrix function", () => {
  const itemArray: PriceProps[] = [];
  let nameArray: NameProp[];
  let refArray: RefProp[];
  let amountArray: AmountProp[];
  let opts: OptsProps[][];
  let hiddenSuppliers: string[];
  let suppliers: string[];

  beforeEach(() => {
    nameArray = [
      {
        fr: "Pomme",
        en: "Apple",
        size: "S",
      },
      {
        fr: "Orange",
        en: "Orange",
        size: "S",
      },
      {
        fr: "Poire",
        en: "Peer",
        size: "S",
      },
    ];
    refArray = [
      {
        standard: "PLU",
        code: "12345",
      },
      {
        standard: "PLU",
        code: "11111",
      },
      {
        standard: "PLU",
        code: "22222",
      },
    ];
    amountArray = [
      {
        meas: "weight",
        units: "kg",
        quantity: 1,
        isApprox: false,
      },
      {
        meas: "weight",
        units: "kg",
        quantity: 1,
        isApprox: false,
      },
      {
        meas: "weight",
        units: "kg",
        quantity: 1,
        isApprox: false,
      },
    ];
    opts = [
      [
        {
          supplier: "S1",
          process: {
            priceToCompare: 1,
            priceToShow: "price",
            isRebate: false,
          },
        },
        {
          supplier: "S2",
          process: {
            priceToCompare: 2,
            priceToShow: "price",
            isRebate: false,
          },
        },
        {
          supplier: "S3",
          process: {
            priceToCompare: 3,
            priceToShow: "price",
            isRebate: false,
          },
        },
      ],
      [
        {
          supplier: "S1",
          process: {
            priceToCompare: 1,
            priceToShow: "price",
            isRebate: false,
          },
        },
        {
          supplier: "S2",
          process: {
            priceToCompare: 2,
            priceToShow: "price",
            isRebate: false,
          },
        },
        {
          supplier: "S3",
          process: {
            priceToCompare: 3,
            priceToShow: "price",
            isRebate: false,
          },
        },
      ],
      [
        {
          supplier: "S1",
          process: {
            priceToCompare: 1,
            priceToShow: "price",
            isRebate: false,
          },
        },
        {
          supplier: "S2",
          process: {
            priceToCompare: 2,
            priceToShow: "price",
            isRebate: false,
          },
        },
        {
          supplier: "S3",
          process: {
            priceToCompare: 3,
            priceToShow: "price",
            isRebate: false,
          },
        },
      ],
    ];
    hiddenSuppliers = [];
    suppliers = ["S1", "s2", "S3"];
  });
  const exec = () => {
    for (let i = 0; i < 3; i++) {
      itemArray[i] = {
        name: nameArray[i],
        ref: refArray[i],
        amount: amountArray[i],
        opts: opts[i],
      };
    }

    return genMatrix(itemArray, hiddenSuppliers, suppliers);
  };
  it("Should return a properly formatted matrix if all is ok", () => {
    const res = exec();
    expect(res[0].opts.length).toBe(3);
    expect(res[1].opts.length).toBe(3);
    expect(res[2].opts.length).toBe(3);
  });
  it("Should filter out any duplication in suppliers and put Infinity for inexistent prices", () => {
    opts[0][1].supplier = "S1";
    opts[0][2].supplier = "S1";
    const res = exec();
    expect(res[0].opts.length).toBe(3);
    expect(res[0].opts[0].cost).toBe(1);
    expect(res[0].opts[1].cost).toBe(Infinity);
    expect(res[0].opts[2].cost).toBe(Infinity);
    expect(res[1].opts.length).toBe(3);
    expect(res[2].opts.length).toBe(3);
  });
  it("Should return no opts if there were no initial options", () => {
    opts[0] = [];
    let res = exec();
    expect(res.length).toBe(3);
    expect(res[0].opts.length).toBe(3);
    expect(res[0].opts[0].cost).toBe(Infinity);
    expect(res[0].opts[1].cost).toBe(Infinity);
    expect(res[0].opts[2].cost).toBe(Infinity);
    opts = [];
    res = exec();
    expect(res.length).toBe(3);
    expect(res[0].opts.length).toBe(0);
    expect(res[1].opts.length).toBe(0);
    expect(res[2].opts.length).toBe(0);
  });
  it("Should filter out suppliers if provided", () => {
    hiddenSuppliers = ["s1"];
    const res = exec();
    expect(res.length).toBe(3);
    expect(res[0].opts.length).toBe(2);
    expect(res[1].opts.length).toBe(2);
    expect(res[2].opts.length).toBe(2);
  });
});
