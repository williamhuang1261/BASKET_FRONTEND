/**
 * @description Multilingual name properties with size information
 * @interface NameProp
 */
export interface NameProp {
  fr: string;
  en: string;
  size: string;
}

/**
 * @description Reference identifiers for products
 * @interface RefProp
 */
export interface RefProp {
  standard: string;
  code: string;
}

/**
 * @description Measurement and quantity properties
 * @interface AmountProp
 */
export interface AmountProp {
  isApprox?: boolean;
  meas: string;
  units: string;
  quantity: number;
}

/**
 * @description Properties for limited-time offers and rebates
 * @interface LimitedProp
 */
export interface LimitedProp {
  typeOfRebate: string;
  X?: number;
  Y?: number;
  C: number;
  rebatePricing: string;
  start: number;
  end: number;
  onlyMembers: boolean
}

/**
 * @description Supplier information including pricing details
 * @interface SuppliersProp
 */
export interface SuppliersProp {
  supplier: string;
  pricing: {
    normal: number;
    method: string;
    limited?: LimitedProp[];
  };
}
