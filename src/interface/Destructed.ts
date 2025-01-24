/**
 * @description Multilingual name properties with size information
 * @interface NameProp
 */
interface NameProp {
  fr: string;
  en: string;
  size: string;
}

/**
 * @description Reference identifiers for products
 * @interface RefProp
 */
interface RefProp {
  standard: string;
  code: string;
}

/**
 * @description Measurement and quantity properties
 * @interface AmountProp
 */
interface AmountProp {
  isApprox?: boolean;
  meas: string;
  units: string;
  quantity: number;
}

/**
 * @description Properties for limited-time offers and rebates
 * @interface LimitedProp
 */
interface LimitedProp {
  typeOfRebate: string;
  X?: number;
  Y?: number;
  C: number;
  rebatePricing: string;
  start: number;
  end: number;
  onlyMembers: boolean;
}

/**
 * @description Supplier information including pricing details
 * @interface SuppliersProp
 */
interface SuppliersProp {
  supplier: string;
  pricing: {
    normal: number;
    method: string;
    limited?: LimitedProp[];
  };
}

export type { NameProp, RefProp, AmountProp, SuppliersProp, LimitedProp };
