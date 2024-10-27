import { convFactor } from "../../data/ConvFactors";
import { isSameUnitType } from "./IsUnitType";

interface Props {
  from: string;
  to: string;
}

const convertUnits = ({ from, to }: Props) => {
  if (!isSameUnitType(from, to)) return undefined;
  if (convFactor.hasOwnProperty(from) && convFactor.hasOwnProperty(to))
    return convFactor[from] / convFactor[to];
  else return undefined;
};

export default convertUnits;
