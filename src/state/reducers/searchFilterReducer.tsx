import SearchFilterProps from "../../interface/SearchFilterProps";

interface filterAdd {
  group: "ADD";
  type: "CAT" | "FILTERED_STORE";
  item: string;
}

type ActionAdd = filterAdd;

interface distanceAmountChange {
  group: "CHANGE";
  type: "DIST_AMOUNT";
  amount: number;
}

interface distanceUnitsChange {
  group: "CHANGE";
  type: "DIST_UNITS";
  units: string;
}

type ActionChange = distanceAmountChange | distanceUnitsChange;

interface filterDelete {
  group: "DELETE";
  type: "CAT" | "FILTERED_STORE";
  item: string;
}

type ActionDelete = filterDelete;

export type filterAction = ActionAdd | ActionChange | ActionDelete;

const searchFilterReducer = (
  state: SearchFilterProps,
  action: filterAction,
): SearchFilterProps => {
  const { group, type } = action;

  switch (group) {
    case "ADD":
      switch (type) {
        case "CAT":
          return {
            ...state,
            categories: state.categories.includes(action.item)
              ? state.categories
              : [...state.categories, action.item],
          };
        case "FILTERED_STORE":
          return {
            ...state,
            store: state.store.includes(action.item)
              ? state.store
              : [...state.store, action.item],
          };
        default:
          return state;
      }
    case "CHANGE":
      switch (type) {
        case "DIST_AMOUNT":
          return {
            ...state,
            distance: {
              ...state.distance,
              amount: action.amount,
            },
          };
        case "DIST_UNITS":
          return {
            ...state,
            distance: {
              ...state.distance,
              units: action.units,
            },
          };
        default:
          return state;
      }
    case "DELETE":
      switch (type) {
        case "CAT":
          return {
            ...state,
            categories: state.categories.filter(
              (category) => category !== action.item,
            ),
          };
        case "FILTERED_STORE":
          return {
            ...state,
            store: state.store.filter((store) => store !== action.item),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default searchFilterReducer;
