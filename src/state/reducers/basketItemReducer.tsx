import { RefProp } from "../../interface/Destructed";
import { allUnitsType } from "../../interface/UnitsProp";

export interface basketItemProp {
  ref: RefProp;
  method: string;
  units: allUnitsType;
  quantity: number;
  supplierSelection: string | undefined;
}

interface methodChange {
  group: "CHANGE";
  type: "METHOD";
  method: string;
}

interface unitsChange {
  group: "CHANGE";
  type: "UNITS";
  units: allUnitsType;
}

interface quantityChange {
  group: "CHANGE";
  type: "QUANTITY";
  quantity: number;
}

interface supplierSelectionChange {
  group: "CHANGE";
  type: "SUPPLIER_SELECTION";
  supplier: string;
}

type ChangeAction =
  | methodChange
  | unitsChange
  | quantityChange
  | supplierSelectionChange;

export type basketItemAction = ChangeAction;

const basketItemReducer = (
  state: basketItemProp,
  action: basketItemAction,
): basketItemProp => {
  const { group, type } = action;
  if (group !== "CHANGE") return state;

  switch (type) {
    case "METHOD":
      return {
        ...state,
        method: action.method,
        units: action.method === "unit" ? "unit" : state.units,
      };
    case "UNITS":
      return {
        ...state,
        units: action.units,
        method: action.units === "unit" ? "units" : state.method,
      };
    case "QUANTITY":
      return {
        ...state,
        quantity: action.quantity,
      };
    case "SUPPLIER_SELECTION":
      return {
        ...state,
        supplierSelection: action.supplier,
      };
    default:
      return state;
  }
};

export default basketItemReducer;
