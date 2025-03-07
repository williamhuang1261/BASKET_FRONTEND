import { AmountProp } from "../../interface/Destructed";
import { allUnitsType } from "../../interface/UnitsType";
import AmountClass from "./AmountClass";

class PriceClass {
  amount: AmountProp;
  normalPrice: number;
  normalMethod: "unit" | "weight_lb" | "weight_kg" | "weight_100g";

  constructor(
    amount: AmountProp,
    normalPrice: number,
    normalMethod: "unit" | "weight_lb" | "weight_kg" | "weight_100g",
  ) {
    this.amount = amount;
    this.normalPrice = normalPrice;
    this.normalMethod = normalMethod;
  }

  public getCost(quantity: number, units: allUnitsType): number | undefined {
    switch (this.normalMethod) {
      case "unit": {
        const batches = new AmountClass(this.amount).convertToBatches(
          quantity,
          units,
        );
        if (!batches) return undefined;
        return this.normalPrice * batches;
      }
      default:
        return undefined;
    }
  }
}

export default PriceClass;