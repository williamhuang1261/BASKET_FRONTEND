export interface NameProp {
  fr: string;
  en: string;
  size: string;
}

export interface RefProp {
  standard: string;
  code: string;
}
export interface AmountProp {
  isApprox?: boolean;
  meas: string;
  units: string;
  quantity: number;
}

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

export interface SuppliersProp {
  supplier: string;
  pricing: {
    normal: number;
    method: string;
    limited?: LimitedProp[];
  };
}
