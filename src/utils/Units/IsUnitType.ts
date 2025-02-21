import { volumeUnits, weightUnits } from "../../data/Units";
import { volumeUnitsType, weightUnitsType } from "../../interface/UnitsProp";

export const isWeightUnit = (unit: string) => {
  if (weightUnits.indexOf(unit as weightUnitsType) !== -1) return true;
  else return false;
};

export const isVolumeUnit = (unit: string) => {
  if (volumeUnits.indexOf(unit as volumeUnitsType) !== -1) return true;
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
