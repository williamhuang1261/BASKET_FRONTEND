import {
  allMeasUnitsType,
  allUnitsType,
  nonMeasUnitsType,
  volumeUnitsType,
  weightUnitsType,
} from "../interface/UnitsType";

/** Array of supported weight measurement units */
const weightUnits: Set<weightUnitsType> = new Set([
  "mg",
  "g",
  "kg",
  "oz",
  "lb",
]);

/** Array of supported volume measurement units */
const volumeUnits: Set<volumeUnitsType> = new Set([
  "mL",
  "L",
  "fl oz",
  "pint",
  "quart",
  "gallon",
]);

/** Combined array of all measurement units (weight and volume) */
const allMeasUnits: Set<allMeasUnitsType> = weightUnits.union(volumeUnits);

/** Array of non-measurement units (e.g., count-based units) */
const nonMeasUnits: Set<nonMeasUnitsType> = new Set(["unit"]);

/** Complete array of all supported units (measurement and non-measurement) */
const allUnits: Set<allUnitsType> = weightUnits
  .union(volumeUnits)
  .union(nonMeasUnits);

export { weightUnits, volumeUnits, allMeasUnits, nonMeasUnits, allUnits };
