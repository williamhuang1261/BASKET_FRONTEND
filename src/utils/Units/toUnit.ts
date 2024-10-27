import { AmountProp } from "../../interface/Destructed";
import convertUnits from "./ConversionChart";

const toUnit = (
  amount: AmountProp,
  required: {
    quantity: number;
    units: string;
  },
): number | undefined => {
  if (!amount || !required) return undefined;

  if (amount.units === "unit" && required.units === 'unit') {
    return required.quantity / amount.quantity;
  } else if (required.units === "unit") {
    return required.quantity
  } else {
    const convFactor = convertUnits({ from: required.units, to: amount.units });
    if (!convFactor) return undefined;

    const convReq = required.quantity * convFactor;
    const count = convReq / amount.quantity;

    return count;
  }
};

export default toUnit;
