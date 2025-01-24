
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

type filterAction = ActionAdd | ActionChange | ActionDelete;

export type { filterAction };