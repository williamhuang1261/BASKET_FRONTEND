import { weightUnits } from "../../data/Units";
import CardProps from "../../interface/CardProps";
import convertUnits from "../Units/ConversionChart";
import methToUnit from "./methToUnit";

type AmountType = Pick<CardProps, "amount">;
interface AmountProp extends AmountType {}

const calcCost = (
  { amount }: AmountProp,
  price: number,
  method: string,
  req?: {
    quantity: number | undefined;
    units: string;
  },
  conv?: string,
) => {
  // Verifying data
  if (!amount || isNaN(price) || method === undefined) return undefined;

  // Obtaining the desired units
  const desUnit: string | undefined = methToUnit(method);
  if (!desUnit) return undefined;

  // Converting price/units to price/desUnits
  let unitPrice: number;

  if (desUnit === "unit") {
    unitPrice = price;
  } else {
    const convFac = convertUnits({ from: amount.units, to: desUnit });
    if (!convFac) return undefined;

    let convPrice = price * convFac;
    if (isNaN(convPrice)) return undefined;
    if (method === "weight_100g") convPrice = convPrice / 100;
    // Getting the price per unit
    unitPrice = convPrice * amount.quantity;
  }

  // Converting req to units
  if (req) {
    let reqNum: number | undefined;
    if (req.units === "unit") {
      reqNum = req.quantity;
    } else if (weightUnits.indexOf(req.units) !== -1) {
      const convFac = convertUnits({ from: req.units, to: amount.units });
      if (!convFac) return undefined;

      // @ts-expect-error Handled by second if
      reqNum = (req.quantity * convFac) / amount.quantity;
      if (isNaN(reqNum)) return undefined;
    } else return undefined;

    // Obtaining cost for required amount
    // @ts-expect-error Handled by second if
    const cost = reqNum * unitPrice;
    if (isNaN(cost)) return undefined;
    if (!conv) return cost;
  }

  // Returning the converted cost
  switch (conv) {
    case "unit":
    case "volume":
      return unitPrice;
    case "weight_100g":
    case "weight_kg":
    case "weight_lb": {
      const outputUnits = methToUnit(conv);
      if (!outputUnits) return undefined;
      // Price for the conv unit
      const convFac = convertUnits({ from: outputUnits, to: amount.units });
      if (!convFac) return undefined;

      let output = (price * convFac) / amount.quantity;
      if (!output) return undefined;
      if (conv === "weight_100g") output = output * 100;
      return output;
    }
    default:
      return undefined;
  }
};

export default calcCost;
