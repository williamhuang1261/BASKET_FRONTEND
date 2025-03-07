import { allUnitsType } from "./UnitsType";

/**
 * @description Multilingual name properties with size information
 * @interface NameProp
 */
interface NameProp {
  fr: string;
  en: string;
  size: "S" | "M" | "L" | "XL";
}

/**
 * @description Reference identifiers for products
 * @interface RefProp
 */
interface RefProp {
  standard: "PLU" | "UPC" | "EAN";
  code: string;
}

/**
 * @description Measurement and quantity properties
 * @interface AmountProp
 */
interface AmountProp {
  isApprox: boolean;
  method: "weight" | "unit" | "volume";
  units: allUnitsType;
  quantity: number;
}

/**
 * @description Properties for limited-time offers and rebates
 * @interface LimitedProp
 */
interface LimitedProp {
  typeOfRebate: "buyXgetYatC" | "buyXgetYforC" | "C";
  X?: number;
  Y?: number;
  C: number;
  method: "unit" | "weight_lb" | "weight_kg" | "weight_100g";
  timeframe: {
    start: number;
    end: number;
  };
  onlyMembers: boolean;
}

/**
 * @description Supplier information including pricing details
 * @interface SuppliersProp
 */
interface SuppliersProp {
  supplier: string;
  brand: string;
  pricing: {
    normal: number;
    method: "unit" | "weight_lb" | "weight_kg" | "weight_100g";
    limited?: LimitedProp[];
  };
}

export type { NameProp, RefProp, AmountProp, SuppliersProp, LimitedProp };
