import { weightConvFactor, volumeConvFactor } from "../../data/convFactor";
import { weightUnits, volumeUnits } from "../../data/Units";
import { AmountProp } from "../../interface/Destructed";
import {
  allUnitsType,
  volumeUnitsType,
  weightUnitsType,
} from "../../interface/UnitsType";

class AmountClass {
  method: "weight" | "volume" | "unit";
  units: allUnitsType;
  quantity: number;

  constructor(amount: AmountProp) {
    this.method = amount.method;
    this.units = amount.units;
    this.quantity = amount.quantity;
  }

  static getUnitConversionFactor<T extends volumeUnitsType | weightUnitsType>(
    from: T,
    to: T,
  ): number | undefined {
    if (from in weightUnits && to in weightUnits)
      return (
        weightConvFactor[to as weightUnitsType] /
        weightConvFactor[from as weightUnitsType]
      );
    if (from in volumeUnits && to in volumeUnits)
      return (
        volumeConvFactor[to as volumeUnitsType] /
        volumeConvFactor[from as volumeUnitsType]
      );
    return undefined;
  }

  public convertToBatches(
    quantity: number,
    units: allUnitsType,
  ): number | undefined {
    if (units === "unit" && this.units === "unit")
      return quantity / this.quantity;
    if (units === "unit") return quantity;
    if (this.units === "unit") return undefined;
    if (units in weightUnits && this.units in weightUnits) {
      const convFactor = AmountClass.getUnitConversionFactor(units, this.units);
      if (!convFactor) return undefined;
      return (quantity * convFactor) / this.quantity;
    }
    if (units in volumeUnits && this.units in volumeUnits) {
      const convFactor = AmountClass.getUnitConversionFactor(units, this.units);
      if (!convFactor) return undefined;
      return (quantity * convFactor) / this.quantity;
    }
    return undefined;
  }
}

export default AmountClass;
