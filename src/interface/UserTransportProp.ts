import { RefProp } from "./Destructed";
import { allUnitsType, distanceUnitsType, weightUnitsType } from "./UnitsProp";

// TODO Reformat UserProp according to backend

interface UserProp {
  name: string;
  email: string;
  location: {
    type: string;
    coordinates: number[];
    formattedAddress: string;
  };
  membership: string[];
  preferences: {
    weightUnits: weightUnitsType;
    distUnits: distanceUnitsType;
    language: string;
  };
  items: {
    id: string;
    ref: RefProp;
    select: {
      method: string;
      units: allUnitsType;
      quantity: number;
    };
  }[];
  filters: {
    searchFilters: {
      distance: {
        amount: number;
        units: string;
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

interface UserTransportProp {
  meta: UserProp;
}

export default UserTransportProp;
