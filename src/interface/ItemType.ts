import { allUnitsType } from "./UnitsType";

type ItemType = {
  id: string;
  name: {
    fr: string;
    en: string;
    size?: "XXXS" | "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
  };
  description: {
    fr: string;
    en: string;
  };
  ref: {
    PLU?: string;
    UPC?: string;
    EAN?: string;
    SKU?: string;
    other?: [string, string][];
  };
  amount: {
    isApprox: boolean;
    method: "weight" | "unit" | "volume";
    units: allUnitsType;
    quantity: number;
  };
  categories: string[];
  image: string;
  availabilities: {
    supplier: {
      company: string;
      brand?: string;
    };
    groceryStore: {
      company: string;
      participating: {
        groups: string[];
        includedLocations: string[];
        excludedLocations: string[];
      };
    };
    deal: {
      type: string;
      membersOnly: boolean;
      must: {
        buy: {
          quantity: number;
          units: allUnitsType;
          pricing: {
            price: number;
            for: {
              quantity: number;
              units: allUnitsType;
            };
          };
        };
        other: string[];
      };
      receive: {
        sameProduct: {
          quantity: number;
          units: allUnitsType;
          pricing: {
            price: number;
            for: {
              quantity: number;
              units: allUnitsType;
            };
          };
        };
        otherProducts: {
          quantity: number;
          units: allUnitsType;
          pricing: {
            price: number;
            for: {
              quantity: number;
              units: allUnitsType;
            };
          };
        }[];
        deferred: {
          deferredDiscount: {
            price: number;
            for: {
              quantity: number;
              units: allUnitsType;
            };
            timeframe: {
              start: number;
              end: number;
            };
          };
          storeCredits: {
            pointsQuantity: number;
            pointsName: string;
            monetaryEquivalent: number;
          };
          moneyBack: {
            quantity: number;
            timeframe: {
              start: number;
              end: number;
            }
          }
        };
        limits: {
          buyLimit: {
            quantity: number;
            units: allUnitsType;
          }
          receiveLimit: {
            maxRepetitions: {
              sameProduct: number;
              otherProducts: number;
              deferred: {
                deferredDiscount: number;
                storeCredits: number;
                moneyBack: number;
              }
            }
            maxDeferredDiscount: {
              count: number;
            }
          }
        }
      };
      details: string;
    };
  }[];
  exclusivity: {
    isExclusive: boolean;
    exclusiveGroceryStores?: string[];
  };
  uniqueOrigin: {
    hasUniqueOrigin?: boolean;
    country?: string;
    region?: string;
    city?: string;
  };
};

export type { ItemType };
