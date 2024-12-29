import DummyUser from "../../data/DummyUser";
import { allUnitsType } from "../../interface/UnitsProp";
import UserLogin from "../../interface/UserLogin";
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

type ChangeAction =
  | GeneralChange
  | LocationChange
  | LanguageChange
  | DistanceChange
  | MaxStoresChange
  | BasketItemChangeSelection
  | loginChange;

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
                searchPreferences: {
                  ...state.meta.filters.searchPreferences,
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
        case "BASKET_ITEM_SELECTION": {
          const updated = state.meta.items;
          updated.set(action.itemId, action.new);
          return {
            ...state,
            meta: {
              ...state.meta,
              items: updated,
            },
          };
        }
        case "LOGIN_STATUS":{
          if (action.status === false) {
            return DummyUser
          }
          return {
            ...state,
            isLoggedIn: action.status,
          };
        }
        default:
          return state;
      }

    case "ADD":
      switch (type) {
        case "ITEM": {
          const updated = state.meta.items.has(action.itemId)
            ? state.meta.items
            : state.meta.items.set(action.itemId, action.select);
          return {
            ...state,
            meta: {
              ...state.meta,
              items: updated,
            },
          };
        }
        case "MEMBERSHIP": {
          const updated = state.meta.membership.has(action.new)
            ? state.meta.membership
            : state.meta.membership.add(action.new);
          return {
            ...state,
            meta: {
              ...state.meta,
              membership: updated,
            },
          };
        }
        case "CAT_SEARCH": {
          const updated = state.meta.filters.searchPreferences.categories.has(
            action.new,
          )
            ? state.meta.filters.searchPreferences.categories
            : state.meta.filters.searchPreferences.categories.add(action.new);
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchPreferences: {
                  ...state.meta.filters.searchPreferences,
                  categories: updated,
                },
              },
            },
          };
        }

        case "STORE_SEARCH": {
          const updated = state.meta.filters.searchPreferences.stores.has(
            action.new,
          )
            ? state.meta.filters.searchPreferences.stores
            : state.meta.filters.searchPreferences.stores.add(action.new);
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchPreferences: {
                  ...state.meta.filters.searchPreferences,
                  stores: updated,
                },
              },
            },
          };
        }
        case "STORE_BASKET": {
          const updated = state.meta.filters.basketFilters.filteredStores.has(
            action.new,
          )
            ? state.meta.filters.basketFilters.filteredStores
            : state.meta.filters.basketFilters.filteredStores.add(action.new);
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                basketFilters: {
                  ...state.meta.filters.basketFilters,
                  filteredStores: updated,
                },
              },
            },
          };
        }
        default:
          return state;
      }

    case "DELETE":
      switch (type) {
        case "ITEM": {
          const updated = state.meta.items;
          if (updated.has(action.itemId)) {
            updated.delete(action.itemId);
          }
          return {
            ...state,
            meta: {
              ...state.meta,
              items: updated,
            },
          };
        }
        case "MEMBERSHIP": {
          const updated = state.meta.membership;
          if (updated.has(action.toDelete)) {
            updated.delete(action.toDelete);
          }
          return {
            ...state,
            meta: {
              ...state.meta,
              membership: updated,
            },
          };
        }
        case "CAT_SEARCH": {
          const updated = state.meta.filters.searchPreferences.categories;
          if (updated.has(action.toDelete)) {
            updated.delete(action.toDelete);
          }
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchPreferences: {
                  ...state.meta.filters.searchPreferences,
                  categories: updated,
                },
              },
            },
          };
        }
        case "STORE_SEARCH": {
          const updated = state.meta.filters.searchPreferences.stores;
          if (updated.has(action.toDelete)) {
            updated.delete(action.toDelete);
          }
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                searchPreferences: {
                  ...state.meta.filters.searchPreferences,
                  stores: updated,
                },
              },
            },
          };
        }
        case "STORE_BASKET": {
          const updated = state.meta.filters.basketFilters.filteredStores;
          if (updated.has(action.toDelete)) {
            updated.delete(action.toDelete);
          }
          return {
            ...state,
            meta: {
              ...state.meta,
              filters: {
                ...state.meta.filters,
                basketFilters: {
                  ...state.meta.filters.basketFilters,
                  filteredStores: updated,
                },
              },
            },
          };
        }
        default:
          return state;
      }
    case "INIT":
      return {
        ...state,
        meta: {
          name: action.user.name || "",
          email: action.user.email || "",
          location: action.user.location,
          preferences: action.user.preferences,
          membership: new Set(action.user.membership),
          items: new Map(action.user.items),
          filters: {
            searchPreferences: {
              distance: action.user.filters.searchPreferences.distance,
              categories: new Set(action.user.filters.searchPreferences.categories),
              stores: new Set(action.user.filters.searchPreferences.stores),
            },
            basketFilters: {
              filteredStores: new Set(action.user.filters.basketFilters.filteredStores),
              maxStores: action.user.filters.basketFilters.maxStores,
            }
          }
        },
      };
    default:
      return state;
  }
};

export default userReducer;
