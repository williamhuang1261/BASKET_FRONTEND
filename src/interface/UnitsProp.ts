export type weightUnitsType = "mg"| "g"| "kg"| "oz"| "lb";
export type volumeUnitsType = "mL"| "L"| "fl oz"| "pint"| "quart"| "gallon";
export type allMeasUnitsType = weightUnitsType| volumeUnitsType;
export type nonMeasUnitsType = "unit";
export type allUnitsType = weightUnitsType| volumeUnitsType| nonMeasUnitsType;

export type distanceUnitsType = 'km' | 'mi'