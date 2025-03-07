import { volumeConvFactor, weightConvFactor } from "../../data/convFactor";
import { isSameUnitType } from "./IsUnitType";

const convFactor = {
  ...weightConvFactor,
  ...volumeConvFactor
}

interface Props {
  from: string;
  to: string;
}

/**
 * @param {Props} { from, to }
 * @deprecated This function is part of a deprecated pipeline. It is recommended to use the `AmountClass` class instead.
 * @description Convert units from one to another 
 * @returns 
 */

const convertUnits = ({ from, to }: Props) => {
  if (!isSameUnitType(from, to)) return undefined;
  // @ts-expect-error Handled by if
  if (convFactor[from] && convFactor[to])
    // @ts-expect-error Handled by if
    return convFactor[from] / convFactor[to];
  else return undefined;
};

export default convertUnits;
