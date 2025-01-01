import { allUnitsType, distanceUnitsType, weightUnitsType } from "./UnitsProp";

/**
 * @description Represents the user login data structure received from the server
 * @interface UserLogin
 */
interface UserLogin {
  name: string | null;
  email: string | null;
  location: {
    country: "Canada" | "USA";
    type: "Point";
    coordinates: number[];
    formattedAddress: string;
  };
  membership: string[];
  preferences: {
    weightUnits: weightUnitsType;
    distUnits: distanceUnitsType;
    language: "en" | "fr";
  };
  items: [
    string,
    { method: "weight" | "unit"; units: allUnitsType; quantity: number },
  ][];
  filters: {
    searchPreferences: {
      distance: {
        amount: number;
        units: distanceUnitsType;
      };
      categories: string[];
      stores: string[];
    };
    basketFilters: {
      filteredStores: string[];
      maxStores: number;
    };
  };
}

export default UserLogin;
