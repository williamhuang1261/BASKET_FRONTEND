import {
  allMeasUnitsType,
  allUnitsType,
  nonMeasUnitsType,
  volumeUnitsType,
  weightUnitsType,
} from "../interface/UnitsProp";

/** Array of supported weight measurement units */
const weightUnits: weightUnitsType[] = ["mg", "g", "kg", "oz", "lb"];

/** Array of supported volume measurement units */
const volumeUnits: volumeUnitsType[] = [
  "mL",
  "L",
  "fl oz",
  "pint",
  "quart",
  "gallon",
];

/** Combined array of all measurement units (weight and volume) */
const allMeasUnits: allMeasUnitsType[] = [...weightUnits, ...volumeUnits];

/** Array of non-measurement units (e.g., count-based units) */
const nonMeasUnits: nonMeasUnitsType[] = ["unit"];

/** Complete array of all supported units (measurement and non-measurement) */
const allUnits: allUnitsType[] = [...weightUnits, ...volumeUnits, ...nonMeasUnits];

export { weightUnits, volumeUnits, allMeasUnits, nonMeasUnits, allUnits };
