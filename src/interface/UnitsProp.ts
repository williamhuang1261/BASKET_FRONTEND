/**
 * @description Units of weight measurement supported by the application
 * @typedef weightUnitsType
 */
export type weightUnitsType = "mg"| "g"| "kg"| "oz"| "lb";

/**
 * @description Units of volume measurement supported by the application
 * @typedef volumeUnitsType
 */
export type volumeUnitsType = "mL"| "L"| "fl oz"| "pint"| "quart"| "gallon";

/**
 * @description Combined type of all measurement units (weight and volume)
 * @typedef allMeasUnitsType
 */
export type allMeasUnitsType = weightUnitsType| volumeUnitsType;

/**
 * @description Units for items counted by piece rather than measurement
 * @typedef nonMeasUnitsType
 */
export type nonMeasUnitsType = "unit";

/**
 * @description All possible unit types supported by the application
 * @typedef allUnitsType
 */
export type allUnitsType = weightUnitsType| volumeUnitsType| nonMeasUnitsType;

/**
 * @description Distance units supported for location-based features
 * @typedef distanceUnitsType
 */
export type distanceUnitsType = 'km' | 'mi'