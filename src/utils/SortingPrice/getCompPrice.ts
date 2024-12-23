import {
  AmountProp,
  LimitedProp,
  SuppliersProp,
} from "../../interface/Destructed";
import { OptsProps } from "../../interface/PriceProps";
import { FilterProps } from "./SortByPrice";
import calcCost from "./calcCost";
import giveTextAfterPrice from "./giveTextAfterPrice";
import selectCost from "./selectCost";
import toUnit from "../Units/toUnit";

const getCompPrice = (
  amount: AmountProp,
  supplierData: SuppliersProp,
  limited: LimitedProp,
  maxItem: number,
  { qSelection }: FilterProps,
): OptsProps | undefined => {
  const { supplier, pricing } = supplierData;
  const { normal, method } = pricing;

  // Logic for transforming price to be compared with normal price
  const { typeOfRebate, X, Y, C, rebatePricing, start, end } = limited;

  // Verifying date of rebate
  if (Date.now() < start || Date.now() > end) return undefined;

  // Verifying validity of rebate size
  if (
    X &&
    Y &&
    X + Y > maxItem &&
    (typeOfRebate === "buyXgetYforC" || typeOfRebate === "buyXgetYatC")
  )
    return undefined;

  // Verifying that all necessary information is present
  if (
    (typeOfRebate === "buyXgetYforC" &&
      (X === undefined || Y === undefined || C === undefined)) ||
    (typeOfRebate === "XforC" && (X === undefined || C === undefined)) ||
    (typeOfRebate === "C" && C === undefined)
  )
    return undefined;

  // Obtaining text after rebate format
  const rebateTextAfterPrice = giveTextAfterPrice(rebatePricing);
  if (!rebateTextAfterPrice) return undefined;

  // Calculating cost if quantity selection was asked for
  if (qSelection) {
    const units = toUnit(amount, qSelection);
    if (!units) return undefined;

    const cost = selectCost(amount, limited, units, normal, method);
    if (cost === undefined) return undefined;
    return {
      supplier: supplier,
      meta: {
        typeOfRebate: typeOfRebate,
        X: X,
        Y: Y,
        C: C,
        rebatePricing: rebatePricing,
        start: start,
        end: end,
      },
      process: {
        priceToCompare: cost,
        priceToShow: `${cost.toFixed(2)} $`,
        isRebate: true,
      },
    };
  }

  // Different method of calculations depending on method of rebate
  let calcPrice: number | undefined;
  let unitPrice: number | undefined;
  let convPrice: number | undefined;
  let compPrice: number | undefined;
  switch (typeOfRebate) {
    case "C":
      calcPrice = calcCost({ amount }, C, rebatePricing, undefined, method);
      if (calcPrice === undefined) return undefined;
      return {
        supplier: supplier,
        meta: {
          typeOfRebate: typeOfRebate,
          C: C,
          rebatePricing: rebatePricing,
          start: start,
          end: end,
        },
        process: {
          priceToCompare: calcPrice,
          priceToShow: `${calcPrice.toFixed(2)} ${rebateTextAfterPrice}`,
          isRebate: true,
        },
      };
    case "buyXgetYforC":
    case "buyXgetYatC": {
      let X2: number;
      if (!X) X2 = 0;
      else X2 = X;

      if (!Y) return undefined;
      if (typeOfRebate === "buyXgetYatC" && rebatePricing !== "unit")
        return undefined;

      const normalPart: number | undefined = calcCost(
        { amount },
        normal,
        method,
        { quantity: X2, units: "unit" },
        undefined,
      );

      let rebatePart: number | undefined;
      if (typeOfRebate === "buyXgetYforC") {
        rebatePart = C;
      } else {
        convPrice = calcCost({ amount }, C, rebatePricing, undefined, "unit");
        if (convPrice === undefined) return undefined;

        rebatePart = Y * convPrice;
      }
      if (normalPart === undefined || rebatePart === undefined)
        return undefined;
      calcPrice = normalPart + rebatePart;
      unitPrice = calcPrice / (X2 + Y);
      compPrice = calcCost({ amount }, unitPrice, "unit", undefined, method);
      if (compPrice === undefined) return undefined;
      // Pushing price

      const priceToShow = `${X2 !== 0 ? `Buy ${X}, get ${Y}` : `Buy ${Y}`} ${
        typeOfRebate === "buyXgetYatC" ? "at" : "for"
      } ${C !== 0 ? C : "FREE"} ${C !== 0 ? rebateTextAfterPrice : ""}`;

      return {
        supplier: supplier,
        meta: {
          typeOfRebate: typeOfRebate,
          X: X2,
          Y: Y,
          C: C,
          rebatePricing: rebatePricing,
          start: start,
          end: end,
        },
        process: {
          priceToCompare: compPrice,
          priceToShow: priceToShow,
          isRebate: true,
        },
      };
    }
    default:
      return undefined;
  }
};

export default getCompPrice;
