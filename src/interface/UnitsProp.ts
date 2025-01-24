/**
 * @description Units of weight measurement supported by the application
 * @typedef weightUnitsType
 */

type weightUnitsType = "mg" | "g" | "kg" | "oz" | "lb";

/**
 * @description Units of volume measurement supported by the application
 * @typedef volumeUnitsType
 */

type volumeUnitsType = "mL" | "L" | "fl oz" | "pint" | "quart" | "gallon";

/**
 * @description Combined type of all measurement units (weight and volume)
 * @typedef allMeasUnitsType
 */

type allMeasUnitsType = weightUnitsType | volumeUnitsType;

/**
 * @description Units for items counted by piece rather than measurement
 * @typedef nonMeasUnitsType
 */

type nonMeasUnitsType = "unit";

/**
 * @description All possible unit types supported by the application
 * @typedef allUnitsType
 */

type allUnitsType = weightUnitsType | volumeUnitsType | nonMeasUnitsType;

/**
 * @description Distance units supported for location-based features
 * @typedef distanceUnitsType
 */

type distanceUnitsType = "km" | "mi";

export type {
  allMeasUnitsType,
  allUnitsType,
  distanceUnitsType,
  nonMeasUnitsType,
  volumeUnitsType,
  weightUnitsType,
};
