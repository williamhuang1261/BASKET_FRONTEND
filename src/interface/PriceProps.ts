import { AmountProp, NameProp, RefProp } from "./Destructed";
import { allUnitsType } from "./UnitsProp";

export interface OptsProps {
  supplier: string;
  meta?: {
    typeOfRebate?: string;
    X?: number;
    Y?: number;
    C: number;
    rebatePricing: string;
    start: number;
    end: number;
  };
  process: {
    priceToCompare: number;
    priceToShow: string;
    isRebate: boolean;
  };
}

export interface QuantitySelection {
  method: string;
  units: allUnitsType;
  quantity: number
}

interface PriceProps {
  name : NameProp;
  ref: RefProp;
  amount: AmountProp;
  opts?: OptsProps[];
}

export default PriceProps;
