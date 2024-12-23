import { AmountProp, LimitedProp } from "../../interface/Destructed";
import calcCost from "./calcCost";

const selectCost = (
  amount: AmountProp,
  limited: LimitedProp,
  reqNum: number,
  normalPrice: number,
  normalMethod: string,
) => {
  const { typeOfRebate, X, Y, C, rebatePricing } = limited;

  let X2: number;
  if (!X) X2 = 0;
  else X2 = X;

  let cost: number | undefined;
  let coeff: number;
  switch (typeOfRebate) {
    case "C":
      cost = calcCost(
        { amount },
        C,
        rebatePricing,
        { quantity: reqNum, units: "unit" },
        undefined,
      );
      break;
    case "buyXgetYforC":
    case "buyXgetYatC": {
      if (typeOfRebate === "buyXgetYatC" && rebatePricing !== "unit")
        return undefined;
      if (!Y) {
        cost = calcCost(
          { amount },
          normalPrice,
          normalMethod,
          { quantity: reqNum, units: "unit" },
          undefined,
        );
        break;
      }

      coeff = Math.floor(reqNum / (X2 + Y));
      if (isNaN(coeff)) return undefined;

      let rebatePart: number | undefined;
      if (typeOfRebate === "buyXgetYforC") {
        rebatePart = coeff * C;
      } else {
        rebatePart = calcCost(
          { amount },
          C,
          rebatePricing,
          { quantity: coeff * Y, units: "unit" },
          undefined,
        );
      }

      const conditionPart = calcCost(
        { amount },
        normalPrice,
        normalMethod,
        { quantity: X2 * coeff, units: "unit" },
        undefined,
      );
      const numNormal = reqNum - coeff * (X2 + Y);
      const normalPart = calcCost({ amount }, normalPrice, normalMethod, {
        quantity: numNormal,
        units: "unit",
      });

      if (
        rebatePart === undefined ||
        conditionPart === undefined ||
        normalPart === undefined
      )
        return undefined;
      cost = rebatePart + conditionPart + normalPart;

      break;
    }
    default:
      break;
  }
  if (!cost) return undefined;
  return cost;
};

export default selectCost;
