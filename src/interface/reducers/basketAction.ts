interface basketProp {
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

type BasketAction = AddAction | ChangeAction | DeleteAction;

export type { basketProp, BasketAction };