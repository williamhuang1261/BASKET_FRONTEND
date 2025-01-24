import DummyUser from "../../data/DummyUser";
import { UserAction } from "../../interface/reducers/userAction";
import { UserTransportProp } from "../../interface/UserTransportProp";

/**
 * @description Reducer function to manage user state in the application
 * @summary Handles various user-related state changes including profile updates, preferences, filters, and items
 * @param {UserTransportProp} state - Current user state
 * @param {UserAction} action - Action object containing group, type and payload
 * @returns {UserTransportProp} Updated user state
 */
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
        case "LOGIN_STATUS": {
          if (action.status === false) {
            return DummyUser;
          }
          return {
            ...state,
            isLoggedIn: action.status,
          };
        }
        case "DISTANCE_UNITS":
          return {
            ...state,
            meta: {
              ...state.meta,
              preferences: {
                ...state.meta.preferences,
                distUnits: action.new,
              },
            },
          };
        case "WEIGHT_UNITS":
          return {
            ...state,
            meta: {
              ...state.meta,
              preferences: {
                ...state.meta.preferences,
                weightUnits: action.new,
              },
            },
          };
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
              categories: new Set(
                action.user.filters.searchPreferences.categories,
              ),
              stores: new Set(action.user.filters.searchPreferences.stores),
            },
            basketFilters: {
              filteredStores: new Set(
                action.user.filters.basketFilters.filteredStores,
              ),
              maxStores: action.user.filters.basketFilters.maxStores,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default userReducer;
