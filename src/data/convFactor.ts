import { volumeUnitsType, weightUnitsType } from "../interface/UnitsType";

export const weightConvFactor: { [key in weightUnitsType]: number } = {
  mg: 1,
  g: 1000,
  kg: 1000000,
  oz: 28349.5,
  lb: 453592,
};

export const volumeConvFactor: { [key in volumeUnitsType]: number } = {
  mL: 1,
  L: 1000,
  "fl oz": 29.5735,
  pint: 473.176,
  quart: 946.353,
  gallon: 3785.41,
};
