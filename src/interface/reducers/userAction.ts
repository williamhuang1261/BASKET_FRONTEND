import { allUnitsType } from "../UnitsType";
import { UserLogin } from "../UserLogin";

interface GeneralChange {
  group: "CHANGE";
  type: "ID" | "EMAIL";
  new: string;
}

interface LocationChange {
  group: "CHANGE";
  type: "LOCATION";
  newLocation: {
    country: "Canada" | "USA";
    type: "Point";
    coordinates: number[];
    formattedAddress: string;
  };
}

interface DistanceChange {
  group: "CHANGE";
  type: "DISTANCE";
  newDist: {
    amount: number;
    units: string;
  };
}

interface LanguageChange {
  group: "CHANGE";
  type: "LANGUAGE";
  new: "fr" | "en";
}

interface MaxStoresChange {
  group: "CHANGE";
  type: "MAX_STORES";
  max: number;
}

type BasketItemChangeSelection = {
  group: "CHANGE";
  type: "BASKET_ITEM_SELECTION";
  itemId: string;
  new: {
    method: "weight" | "unit";
    units: allUnitsType;
    quantity: number;
  };
};

interface loginChange {
  group: "CHANGE";
  type: "LOGIN_STATUS";
  status: boolean;
}

interface DistUnitsChange {
  group: "CHANGE";
  type: "DISTANCE_UNITS";
  new: "km" | "mi";
}

interface WeightUnitsChange {
  group: "CHANGE";
  type: "WEIGHT_UNITS";
  new: "kg" | "lb";
}

type ChangeAction =
  | GeneralChange
  | LocationChange
  | LanguageChange
  | DistanceChange
  | MaxStoresChange
  | BasketItemChangeSelection
  | loginChange
  | DistUnitsChange
  | WeightUnitsChange;

interface GeneralAdd {
  group: "ADD";
  type: "MEMBERSHIP" | "CAT_SEARCH" | "STORE_SEARCH" | "STORE_BASKET";
  new: string;
}

interface ItemAdd {
  group: "ADD";
  type: "ITEM";
  itemId: string;
  select: {
    method: "weight" | "unit";
    units: allUnitsType;
    quantity: number;
  };
}

type AddAction = GeneralAdd | ItemAdd;

interface GeneralDelete {
  group: "DELETE";
  type: "MEMBERSHIP" | "CAT_SEARCH" | "STORE_SEARCH" | "STORE_BASKET";
  toDelete: string;
}

interface ItemDelete {
  group: "DELETE";
  type: "ITEM";
  itemId: string;
}

type DeleteAction = GeneralDelete | ItemDelete;

interface InitAction {
  group: "INIT";
  type: "USER";
  user: UserLogin;
}

export type UserAction = ChangeAction | AddAction | DeleteAction | InitAction;
