import { allUnitsType } from "../UnitsProp";

interface basketItemProp {
  itemId: string;
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

type basketItemAction = ChangeAction;

export type { basketItemProp, basketItemAction };