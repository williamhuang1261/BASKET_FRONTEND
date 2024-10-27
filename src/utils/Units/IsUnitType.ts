import { volumeUnits, weightUnits } from "../../data/Units";

export const isWeightUnit = (unit: string) => {
  if (weightUnits.indexOf(unit) !== -1) return true;
  else return false;
};

export const isVolumeUnit = (unit: string) => {
  if (volumeUnits.indexOf(unit) !== -1) return true;
  else return false;
};

export const isSameUnitType = (a: string, b: string) => {
  if (
    (isWeightUnit(a) && isWeightUnit(b)) ||
    (isVolumeUnit(a) && isVolumeUnit(b))
  )
    return true;
  else return false;
};
