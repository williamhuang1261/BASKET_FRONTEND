import SortByPrice from "../../../src/utils/SortingPrice/SortByPrice";
import { describe, it, expect, beforeEach } from "vitest";
import {CardProps} from "../../../src/interface/CardProps";
import {PriceProps} from "../../../src/interface/PriceProps";
import items from "../../../src/data/ItemsEX";

type ItemType = Pick<CardProps, "name" | "ref" | "amount" | "suppliers">;
interface ItemProp extends ItemType {}

describe("SortByPrice", () => {
  let item: ItemProp;
  let maxQuantity: { quantity: number; units: string } | undefined;
  let hiddenSuppliers: string[];
  let qSelection: { quantity: number; units: string } | undefined;

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
            normal: 10,
            method: "weight_kg",
            limited: [
              {
                typeOfRebate: "buyXgetYforC",
                X: 1,
                Y: 2,
                C: 1,
                rebatePricing: "unit",
                start: Date.now(),
                end: Date.now() + 200000000,
                onlyMembers: false,
              },
              {
                typeOfRebate: "buyXgetYatC",
                X: 1,
                Y: 2,
                C: 1,
                rebatePricing: "unit",
                start: Date.now(),
                end: Date.now() + 500000000,
                onlyMembers: false,
              },
            ],
          },
        },
        {
          supplier: "Metro",
          pricing: {
            normal: 10,
            method: "weight_kg",
            limited: [
              {
                typeOfRebate: "buyXgetYatC",
                X: 1,
                Y: 2,
                C: 1,
                rebatePricing: "unit",
                start: Date.now() + 200000000,
                end: Date.now() + 500000000,
                onlyMembers: false,
              },
            ],
          },
        },
        {
          supplier: "IGA",
          pricing: {
            normal: 10,
            method: "weight_kg",
          },
        },
      ],
    };
    maxQuantity = undefined;
    qSelection = undefined;
  });
  const exec = () => {
    const res: PriceProps | string = SortByPrice(
      {
        name: item.name,
        ref: item.ref,
        amount: item.amount,
        suppliers: item.suppliers,
      },
      {
        maxQuantity: maxQuantity,
        hiddenSuppliers: hiddenSuppliers,
        qSelection: qSelection,
      },
    );
    return res;
  };
  it("Should return the proper values at different quantities for item #1 in ItemEx", () => {
    item = items[0];
    const ans = [
      0, 2.56, 5.12, 7.68, 10.24, 12.8, 15.36, 17.92, 20.48, 23.04, 25.6, 2.56,
      5.12, 7.68, 10.24, 12.8, 15.36, 17.92, 20.48, 23.04, 25.6, 28.16, 30.72,
      5.12,
    ];
    for (let i = 0; i <= 23; i++) {
      qSelection = { quantity: i, units: "unit" };
      const res = exec();
      expect(res).toBeDefined();
      // @ts-expect-error Already checked
      expect(res.opts).toBeInstanceOf(Array);
      if (typeof res !== "string" && res.opts) {
        expect(
          res.opts[0].process.priceToCompare.toFixed(2) === ans[i].toFixed(2),
        );
      }
    }
  });
  it("Should return an ordered array of the best prices for an item using weight", () => {
    const res = exec();
    expect(res).toBeDefined();
    // @ts-expect-error Already checked
    expect(res.opts).toBeInstanceOf(Array);
    if (typeof res !== "string") {
      expect(res.opts?.length).not.toBe(0);
      // @ts-expect-error Already checked
      for (const obj of res.opts) {
        if (!obj.meta) {
          expect(obj).toMatchObject({
            supplier: expect.any(String),
            process: expect.any(Object),
          });
        } else {
          expect(obj).toMatchObject({
            supplier: expect.any(String),
            meta: expect.any(Object),
            process: expect.any(Object),
          });
        }
      }
      // @ts-expect-error Already checked
      expect(res.opts.length).toBe(5);
      // @ts-expect-error Already checked
      expect(res.opts[0].supplier).toBe("Provigo");
    }
  });
  it("Should return an ordered array of the best prices for an item using volume", () => {
    item.amount = {
      isApprox: true,
      meas: "volume",
      units: "mL",
      quantity: 250,
    };
    if (item.suppliers) {
      for (const s of item.suppliers) {
        s.pricing.method = "volume";
        if (!s.pricing.limited) continue;
      }
    }
    const res = exec();

    if (typeof res !== "string") {
      expect(res.opts?.length).not.toBe(0);
      // @ts-expect-error Already checked
      for (const obj of res.opts) {
        if (!obj.meta) {
          expect(obj).toMatchObject({
            supplier: expect.any(String),
            process: expect.any(Object),
          });
        } else {
          expect(obj).toMatchObject({
            supplier: expect.any(String),
            meta: expect.any(Object),
            process: expect.any(Object),
          });
        }
      }
      // @ts-expect-error Already checked
      expect(res.opts.length).toBe(5);
      // @ts-expect-error Already checked
      expect(res.opts[0].supplier).toBe("Provigo");
    }
  });
  it("Should return an ordered array of the best prices for an item using unit", () => {
    item.amount = {
      isApprox: true,
      meas: "unit",
      units: "unit",
      quantity: 1,
    };
    if (item.suppliers) {
      for (const s of item.suppliers) {
        s.pricing.method = "unit";
        if (!s.pricing.limited) continue;
      }
    }

    const res = exec();

    if (typeof res !== "string") {
      expect(res.opts?.length).not.toBe(0);
      // @ts-expect-error Already checked
      for (const obj of res.opts) {
        if (!obj.meta) {
          expect(obj).toMatchObject({
            supplier: expect.any(String),
            process: expect.any(Object),
          });
        } else {
          expect(obj).toMatchObject({
            supplier: expect.any(String),
            meta: expect.any(Object),
            process: expect.any(Object),
          });
        }
      }
      // @ts-expect-error Already checked
      expect(res.opts.length).toBe(5);
      // @ts-expect-error Already checked
      expect(res.opts[0].supplier).toBe("Provigo");
    }
  });
  it("Should adapt to the variations in units", () => {
    // Weight units
    let units = ["mg", "g", "kg", "oz", "lb"];
    if (item.amount) {
      for (const unit of units) {
        item.amount.units = unit;
        const res = exec();
        // @ts-expect-error Already checked
        expect(res.opts).toBeInstanceOf(Array);
        // @ts-expect-error Already checked
        expect(res.opts.length).toBe(5);
      }

      // Volume units
      units = ["mL", "L", "fl oz", "pint", "quart", "gallon"];
      item.amount.meas = "volume";
      if (item.suppliers) {
        for (const s of item.suppliers) {
          s.pricing.method = "volume";
          if (!s.pricing.limited) continue;
        }
      }
      for (const unit of units) {
        item.amount.units = unit;
        const res = exec();
        // @ts-expect-error Already checked
        expect(res.opts).toBeInstanceOf(Array);
        // @ts-expect-error Already checked
        expect(res.opts.length).toBe(5);
      }
    }
  });
  it("Should return a string if no prices are available", () => {
    item.suppliers = undefined;
    let res = exec();
    expect(typeof res).toBe("string");
    item.suppliers = [];
    res = exec();
    expect(typeof res).toBe("string");
  });
  it("Should filter out all expired / future deals", () => {
    item.suppliers = [
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
              rebatePricing: "unit",
              start: Date.now() - 200,
              end: Date.now() - 10,
              onlyMembers: false,
            },
            {
              typeOfRebate: "XforC",
              X: 2,
              C: 2.56,
              rebatePricing: "unit",
              start: Date.now() + 2000000000,
              end: Date.now() + 500000000,
              onlyMembers: false,
            },
          ],
        },
      },
    ];
    const res = exec();
    // @ts-expect-error Already checked
    expect(res.opts).toBeInstanceOf(Array);
    // @ts-expect-error Already checked
    expect(res.opts.length).toBe(1);
  });
  it("Should filter out rebates that are missing information", () => {
    // @ts-expect-error Already checked
    item.suppliers[0].pricing.limited[0].typeOfRebate = "C";
    // @ts-expect-error Error handling
    item.suppliers[0].pricing.limited[0].C = undefined;
    const res = exec();
    // @ts-expect-error Already checked
    expect(res.opts).toBeInstanceOf(Array);
    // @ts-expect-error Already checked
    expect(res.opts.length).toBe(4);

    const opts2 = ["X", "C"];
    for (const opt of opts2) {
      item.suppliers = [
        {
          supplier: "Provigo",
          pricing: {
            normal: 2.56,
            method: "weight_kg",
            limited: [
              {
                typeOfRebate: "XforC",
                X: 1,
                Y: 10,
                C: 0,
                rebatePricing: "unit",
                start: Date.now(),
                end: Date.now() + 5000000000,
                onlyMembers: false,
              },
            ],
          },
        },
      ];
      // @ts-expect-error Error handling
      item.suppliers[0].pricing.limited[0][opt] = undefined;
      const res = exec();
      // @ts-expect-error Already checked
      expect(res.opts).toBeInstanceOf(Array);
      // @ts-expect-error Already checked
      expect(res.opts.length).toBe(1);
    }

    const opts3 = ["X", "Y", "C"];
    for (const opt of opts3) {
      item.suppliers = [
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
                rebatePricing: "unit",
                start: Date.now(),
                end: Date.now() + 5000000000,
                onlyMembers: false,
              },
            ],
          },
        },
      ];
      // @ts-expect-error Testing error handling
      item.suppliers[0].pricing.limited[0][opt] = undefined;
      const res = exec();
      // @ts-expect-error Already checked
      expect(res.opts).toBeInstanceOf(Array);
      // @ts-expect-error Already checked
      expect(res.opts.length).toBe(1);
    }
  });
  it("Should filter out all rebates that exceed the maximum number of items", () => {
    maxQuantity = {
      quantity: 0.5,
      units: "kg",
    };
    const res = exec();
    // @ts-expect-error Already checked
    expect(res.opts).toBeInstanceOf(Array);
    // @ts-expect-error Already checked
    expect(res.opts.length).toBe(3);
  });
  it("Should ignore a faulty pricing method for a supplier", () => {
    // @ts-expect-error Already checked
    item.suppliers[2].pricing.method = "invalid";
    const res = exec();
    // @ts-expect-error Already checked
    expect(res.opts).toBeInstanceOf(Array);
    // Expect res.length to be 4 since we remove IGA's price
    // @ts-expect-error Already checked
    expect(res.opts.length).toBe(4);
  });
  it("Should return the proper values for prices (simple to read)", () => {
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
        units: "kg",
        quantity: 1,
      },
      suppliers: [
        {
          supplier: "Provigo",
          pricing: {
            normal: 10,
            method: "weight_kg",
            limited: [
              {
                typeOfRebate: "C",
                C: 1,
                rebatePricing: "unit",
                start: Date.now(),
                end: Date.now() + 200000000,
                onlyMembers: false,
              },
              {
                typeOfRebate: "buyXgetYatC",
                X: 1,
                Y: 2,
                C: 1,
                rebatePricing: "unit",
                start: Date.now(),
                end: Date.now() + 500000000,
                onlyMembers: false,
              },
              {
                typeOfRebate: "buyXgetYforC",
                X: 1,
                Y: 2,
                C: 1,
                rebatePricing: "unit",
                start: Date.now(),
                end: Date.now() + 500000000,
                onlyMembers: false,
              },
            ],
          },
        },
      ],
    };
    const res = exec();
    // @ts-expect-error Already checked
    expect(res.opts).toBeInstanceOf(Array);
    if (typeof res !== "string") {
      // @ts-expect-error Already checked
      expect(res.opts.length).toBe(4);
      // @ts-expect-error Already checked
      expect(res.opts[0].process.priceToCompare).toBe(1);
      // @ts-expect-error Already checked
      expect(res.opts[1].process.priceToCompare).toBe(11 / 3);
      // @ts-expect-error Already checked
      expect(res.opts[2].process.priceToCompare).toBe(12 / 3);
      // @ts-expect-error Already checked
      expect(res.opts[3].process.priceToCompare).toBe(10);
    }
  });
  it("Should filter out suppliers who are to be hidden", () => {
    hiddenSuppliers = ["IgA"];
    const res = exec();
    // @ts-expect-error Already checked
    expect(res.opts).toBeInstanceOf(Array);
    if (typeof res !== "string") {
      // @ts-expect-error Already checked
      expect(res.opts.length).toBe(4);
    }
  });
  it("Should return the proper values if qSelection is present (simple to read)", () => {
    item.suppliers?.splice(1, 2);
    // @ts-expect-error Already checked
    item.suppliers[0].pricing.limited?.splice(1, 1);
    qSelection = { quantity: 3, units: "unit" };
    const res = exec();
    expect(res).toBeInstanceOf(Object);
    if (typeof res !== "string") {
      // @ts-expect-error Already checked
      expect(res.opts[0].process.priceToCompare).toBe(3.5);
    }
  });
});
