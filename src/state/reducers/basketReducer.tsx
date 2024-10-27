export interface basketProp {
  filteredStores: string[];
  maxStores: number;
  totalCost: number;
}

interface AddFilteredStores {
  group: "ADD";
  type: "FILTERED_STORES";
  store: string;
}

type AddAction = AddFilteredStores;

interface GeneralChange {
  group: "CHANGE";
  type: "MAX_STORES" | "TOTAL_COST";
  number: number;
}

type ChangeAction = GeneralChange;

interface DeleteFilteredStores {
  group: "DELETE";
  type: "FILTERED_STORES";
  store: string;
}

type DeleteAction = DeleteFilteredStores;

export type BasketAction = AddAction | ChangeAction | DeleteAction;

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
