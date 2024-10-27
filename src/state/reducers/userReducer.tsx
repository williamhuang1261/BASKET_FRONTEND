import { RefProp } from "../../interface/Destructed";
import { allUnitsType } from "../../interface/UnitsProp";
import UserTransportProp from "../../interface/UserTransportProp";

interface GeneralChange {
  group: "CHANGE";
  type: "ID" | "EMAIL";
  new: string;
}

interface LocationChange {
  group: "CHANGE";
  type: "LOCATION";
  newLocation: {
    type: string;
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

interface BasketItemChangeBase {
  group: "CHANGE";
  type: "BASKET_ITEM_SELECTION";
  itemRef: RefProp;
}

interface MethodChange extends BasketItemChangeBase {
  target: "METHOD";
  newMethod: 'weight' | 'unit';
}

interface UnitsChange extends BasketItemChangeBase {
  target: "UNITS";
  newUnits: allUnitsType;
}

interface QuantityChange extends BasketItemChangeBase {
  target: "QUANTITY";
  newQuantity: number;
}

type BasketItemChange = MethodChange | UnitsChange | QuantityChange;

interface FilterMassChange {
  group: "CHANGE";
  type: "SEARCH_FILTERS_ARRAY";
  target: "STORES" | "CAT";
  new: string[];
}

interface BasketMassChange {
  group: "CHANGE";
  type: "BASKET_FILTERS_ARRAY";
  target: "STORES";
  new: string[];
}

type ChangeAction =
  | GeneralChange
  | LocationChange
  | LanguageChange
  | DistanceChange
  | MaxStoresChange
  | BasketItemChange
  | FilterMassChange
  | BasketMassChange;

interface GeneralAdd {
  group: "ADD";
  type: "MEMBERSHIP" | "CAT_SEARCH" | "STORE_SEARCH" | "STORE_BASKET";
  new: string;
}

interface ItemAdd {
  group: "ADD";
  type: "ITEM";
  item: {
    id: string
    ref: RefProp;
    select: {
      method: string;
      units: allUnitsType;
      quantity: number;
    };
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
  item: {
    ref: RefProp;
    select: {
      method: string;
      units: allUnitsType;
      quantity: number;
    };
  };
}

type DeleteAction = GeneralDelete | ItemDelete;

export type UserAction = ChangeAction | AddAction | DeleteAction;

// Another function should handle the update in the server

const userReducer = (
  state: UserTransportProp,
  action: UserAction,
): UserTransportProp => {
  const { group, type } = action;

  switch (group) {
    case "CHANGE":
      switch (type) {
        case "ID":
          return {
            ...state,
            meta: {
              ...state.meta,
              name: action.new,
            },
          };
        case "EMAIL":
          return {
            ...state,
            meta: {
              ...state.meta,
              email: action.new,
            },
          };
        case "LOCATION":
          return {
            ...state,
            meta: {
              ...state.meta,
              location: action.newLocation,
            },
          };
        case "LANGUAGE":
          return {
            ...state,
            meta: {
              ...state.meta,
              preferences: {
                ...state.meta.preferences,
                language: action.new,
              },
            },
          };
        case "DISTANCE":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchFilters: {
                  ...state.meta.filters.searchFilters,
                  distance: action.newDist,
                },
              },
            },
          };
        case "MAX_STORES":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                basketFilters: {
                  ...state.meta.filters.basketFilters,
                  maxStores: action.max,
                },
              },
            },
          };
        case "BASKET_ITEM_SELECTION":
          return {
            ...state,
            meta: {
              ...state.meta,
              items: state.meta.items.map((item) =>
                item.ref === action.itemRef
                  ? {
                      ...item,
                      select: {
                        ...item.select,
                        method:
                          action.target === "METHOD"
                            ? action.newMethod
                            : item.select.method,
                        units:
                          action.target === "UNITS"
                            ? action.newUnits
                            : item.select.units,
                        quantity:
                          action.target === "QUANTITY"
                            ? action.newQuantity
                            : item.select.quantity,
                      },
                    }
                  : item,
              ),
            },
          };
        case "SEARCH_FILTERS_ARRAY":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchFilters: {
                  ...state.meta.filters.searchFilters,
                  categories:
                    action.target === "CAT"
                      ? action.new
                      : state.meta.filters.searchFilters.categories,
                  stores:
                    action.target === "STORES"
                      ? action.new
                      : state.meta.filters.searchFilters.stores,
                },
              },
            },
          };
        case "BASKET_FILTERS_ARRAY":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                basketFilters: {
                  ...state.meta.filters.basketFilters,
                  filteredStores: action.new,
                },
              },
            },
          };
        default:
          return state;
      }

    case "ADD":
      switch (type) {
        case "ITEM":
          return {
            ...state,
            meta: {
              ...state.meta,
              items: state.meta.items.includes(action.item)
                ? state.meta.items
                : [...state.meta.items, action.item],
            },
          };
        case "MEMBERSHIP":
          return {
            ...state,
            meta: {
              ...state.meta,
              membership: state.meta.membership.includes(action.new)
                ? state.meta.membership
                : [...state.meta.membership, action.new],
            },
          };
        case "CAT_SEARCH":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchFilters: {
                  ...state.meta.filters.searchFilters,
                  categories: state.meta.filters.searchFilters.categories.includes(
                    action.new,
                  )
                    ? state.meta.filters.searchFilters.categories
                    : [...state.meta.filters.searchFilters.categories, action.new],
                },
              },
            },
          };
        case "STORE_SEARCH":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchFilters: {
                  ...state.meta.filters.searchFilters,
                  stores: state.meta.filters.searchFilters.stores.includes(action.new)
                    ? state.meta.filters.searchFilters.stores
                    : [...state.meta.filters.searchFilters.stores, action.new],
                },
              },
            },
          };
        case "STORE_BASKET":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                basketFilters: {
                  ...state.meta.filters.basketFilters,
                  filteredStores:
                    state.meta.filters.basketFilters.filteredStores.includes(action.new)
                      ? state.meta.filters.basketFilters.filteredStores
                      : [...state.meta.filters.basketFilters.filteredStores, action.new],
                },
              },
            },
          };
        default:
          return state;
      }

    case "DELETE":
      switch (type) {
        case "ITEM":
          return {
            ...state,
            meta: {
              ...state.meta,
              items: state.meta.items.filter((i) => i !== action.item),
            },
          };
        case "MEMBERSHIP":
          return {
            ...state,
            meta: {
              ...state.meta,
              membership: state.meta.membership.filter(
                (member) => member !== action.toDelete,
              ),
            },
          };
        case "CAT_SEARCH":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchFilters: {
                  ...state.meta.filters.searchFilters,
                  categories: state.meta.filters.searchFilters.categories.filter(
                    (cat) => cat !== action.toDelete,
                  ),
                },
              },
            },
          };
        case "STORE_SEARCH":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchFilters: {
                  ...state.meta.filters.searchFilters,
                  stores: state.meta.filters.searchFilters.stores.filter(
                    (store) => store !== action.toDelete,
                  ),
                },
              },
            },
          };
        case "STORE_BASKET":
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                basketFilters: {
                  ...state.meta.filters.basketFilters,
                  filteredStores: state.meta.filters.basketFilters.filteredStores.filter(
                    (store) => store !== action.toDelete,
                  ),
                },
              },
            },
          };
        default:
          return state;
      }

    default:
      return state;
  }
};


export default userReducer;
