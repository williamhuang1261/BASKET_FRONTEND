import { AmountProp, NameProp, RefProp } from "./Destructed";
import { allUnitsType } from "./UnitsProp";

/**
 * @description Configuration options for price calculations and display
 * @interface OptsProps
 */
interface OptsProps {
  supplier: string;
  meta?: {
    typeOfRebate?: string;
    X?: number;
    Y?: number;
    C: number;
    method: string;
    start: number;
    end: number;
  };
  process: {
    priceToCompare: number;
    priceToShow: string;
    isRebate: boolean;
  };
}

/**
 * @description Represents quantity selection with method, units, and amount
 * @interface QuantitySelection
 */
interface QuantitySelection {
  method: string;
  units: allUnitsType;
  quantity: number;
}

/**
 * @description Core price structure containing name, reference, amount and options
 * @interface PriceProps
 */
interface PriceProps {
  name: NameProp;
  ref: RefProp;
  amount: AmountProp;
  opts?: OptsProps[];
}

export type { PriceProps, QuantitySelection, OptsProps };
