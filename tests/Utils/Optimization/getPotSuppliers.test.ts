import { beforeEach, describe, expect, it } from "vitest";
import PriceProps, { OptsProps } from "../../../src/interface/PriceProps";
import {
  AmountProp,
  NameProp,
  RefProp,
} from "../../../src/interface/Destructed";
import getPotSuppliers from '../../../src/utils/Optimization/getPotSuppliers';

describe("getPotSuppliers function", () => {
  let itemArray: PriceProps[] = [];
  let nameArray: NameProp[];
  let refArray: RefProp[];
  let amountArray: AmountProp[];
  let opts: OptsProps[][];
  let hiddenSuppliers: string[];

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
          supplier: "S4",
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

    return getPotSuppliers(itemArray);
  };
  it('Should return all the supplier options that were made available', () => {
    const res = exec();
    expect(res.length).toBe(4)
  });
  it('Should return an empty array if there are no avaible options', () => {
    opts = [];
    const res = exec();
    expect(res.length).toBe(0)
  });
});
