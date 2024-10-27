import convertUnits from "../../../src/utils/Units/ConversionChart";
import { convFactor } from "../../../src/data/ConvFactors";
import { describe, expect, it } from "vitest";

describe("convertUnits", () => {
  it("Should return the proper conversion factor of a weight from mg", () => {
    const mg = convertUnits({ from: "mg", to: "mg" });
    expect(mg).toBe(1 / convFactor["mg"]);
    const g = convertUnits({ from: "mg", to: "g" });
    expect(g).toBe(1 / convFactor["g"]);
    const kg = convertUnits({ from: "mg", to: "kg" });
    expect(kg).toBe(1 / convFactor["kg"]);
    const oz = convertUnits({ from: "mg", to: "oz" });
    expect(oz).toBe(1 / convFactor["oz"]);
    const lb = convertUnits({ from: "mg", to: "lb" });
    expect(lb).toBe(1 / convFactor["lb"]);
  });
  it("Should return the proper conversion factor of a volume from mL"),
    () => {
      const mL = convertUnits({ from: "mL", to: "mL" });
      expect(mL).toBe(1 / convFactor["mL"]);
      const L = convertUnits({ from: "mL", to: "L" });
      expect(L).toBe(1 / convFactor["L"]);
      const floz = convertUnits({ from: "mL", to: "fl oz" });
      expect(floz).toBe(1 / convFactor["fl oz"]);
      const pint = convertUnits({ from: "mL", to: "pint" });
      expect(pint).toBe(1 / convFactor["pint"]);
      const quart = convertUnits({ from: "mL", to: "quart" });
      expect(quart).toBe(1 / convFactor["quart"]);
      const gallon = convertUnits({ from: "mL", to: "gallon" });
      expect(gallon).toBe(1 / convFactor["gallon"]);
    };
});
