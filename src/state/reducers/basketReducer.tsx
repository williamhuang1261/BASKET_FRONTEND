import {
  BasketAction,
  basketProp,
} from "../../interface/reducers/basketAction";

/**
 * @description Reducer function to manage shopping basket state
 * @summary Handles basket operations including filtered stores, max stores limit, and total cost
 * @param {basketProp} state - Current basket state
 * @param {BasketAction} action - Action object containing group, type and payload
 * @returns {basketProp} Updated basket state
 */
const basketReducer = (state: basketProp, action: BasketAction): basketProp => {
  const { group, type } = action;

  switch (group) {
    case "ADD":
      return {
        ...state,
        filteredStores: state.filteredStores.includes(action.store)
          ? state.filteredStores
          : [...state.filteredStores, action.store],
      };
    case "CHANGE":
      switch (type) {
        case "MAX_STORES":
          return { ...state, maxStores: action.number };
        case "TOTAL_COST":
          return { ...state, totalCost: action.number };
        default:
          return state;
      }
    case "DELETE":
      return {
        ...state,
        filteredStores: state.filteredStores.filter(
          (store) => store !== action.store,
        ),
      };

    default:
      return state;
  }
};

export default basketReducer;
