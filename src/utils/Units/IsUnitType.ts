import { volumeUnits, weightUnits } from "../../data/Units";
import { volumeUnitsType, weightUnitsType } from "../../interface/UnitsType";


/**
 * @deprecated This function is part of a deprecated pipeline. It is recommended to use the `AmountClass` class instead.
 * @param unit {string}
 * @returns {boolean}
 * @description Check if the unit is a weight unit
 */
export const isWeightUnit = (unit: string) => {
  if (weightUnits.has(unit as weightUnitsType)) return true;
  else return false;
};

/**
 * @deprecated This function is part of a deprecated pipeline. It is recommended to use the `AmountClass` class instead.
 * @param unit {string}
 * @returns {boolean}
 * @description Check if the unit is a volume unit
 */
export const isVolumeUnit = (unit: string) => {
  if (volumeUnits.has(unit as volumeUnitsType)) return true;
  else return false;
};

/**
 * @deprecated This function is part of a deprecated pipeline. It is recommended to use the `AmountClass` class instead.
 * @param a {string}
 * @param b {string}
 * @returns {boolean}
 * @description Check if the two units are of the same type
 */
export const isSameUnitType = (a: string, b: string) => {
  if (
    (isWeightUnit(a) && isWeightUnit(b)) ||
    (isVolumeUnit(a) && isVolumeUnit(b))
  )
    return true;
  else return false;
};
