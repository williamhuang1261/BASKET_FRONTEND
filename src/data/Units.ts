/** Array of supported weight measurement units */
export const weightUnits = ["mg", "g", "kg", "oz", "lb"];

/** Array of supported volume measurement units */
export const volumeUnits = ["mL", "L", "fl oz", "pint", "quart", "gallon"];

/** Combined array of all measurement units (weight and volume) */
export const allMeasUnits = [...weightUnits, ...volumeUnits];

/** Array of non-measurement units (e.g., count-based units) */
export const nonMeasUnits = ["unit"];

/** Complete array of all supported units (measurement and non-measurement) */
export const allUnits = [...weightUnits, ...volumeUnits, nonMeasUnits];

