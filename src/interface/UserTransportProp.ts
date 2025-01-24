import { allUnitsType, distanceUnitsType, weightUnitsType } from "./UnitsProp";

/**
 * @description Represents the core user data structure with preferences and settings
 * @interface UserProp
 */
interface UserProp {
  name: string;
  email: string;
  location: {
    country: "Canada" | "USA";
    type: "Point";
    coordinates: number[];
    formattedAddress: string;
  };
  membership: Set<string>;
  preferences: {
    weightUnits: weightUnitsType;
    distUnits: distanceUnitsType;
    language: "en" | "fr";
  };
  items: Map<
    string,
    { method: "weight" | "unit"; units: allUnitsType; quantity: number }
  >;
  filters: {
    searchPreferences: {
      distance: {
        amount: number;
        units: string;
      };
      categories: Set<string>;
      stores: Set<string>;
    };
    basketFilters: {
      filteredStores: Set<string>;
      maxStores: number;
    };
  };
}

/**
 * @description Extends UserProp to include authentication state
 * @interface UserTransportProp
 */
interface UserTransportProp {
  meta: UserProp;
  isLoggedIn: boolean;
}

export type { UserTransportProp, UserProp};
