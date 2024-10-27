import convertUnits from "../Units/ConversionChart";

interface MaxAmountProp {
  quantity: number;
  units: string;
}

interface AmountPerUnit {
  quantity: number;
  units: string;
}

// This function will not return an error, instead it will return infinity which
// is equivalent to NOT setting a maximum
const setMaxItem = (
  maxAmountFilter?: MaxAmountProp,
  itemAmount?: AmountPerUnit,
) => {
  // Verifying data
  if (!maxAmountFilter || !itemAmount) return Infinity;
  if (
    typeof maxAmountFilter.quantity !== "number" ||
    typeof maxAmountFilter.units !== "string"
  )
    return Infinity;
  if (
    typeof itemAmount.quantity !== "number" ||
    typeof itemAmount.units !== "string"
  )
    return Infinity;

  // Covering case where measurements are in units
  if (itemAmount.units === "unit" && maxAmountFilter.units === "unit")
    return maxAmountFilter.quantity / itemAmount.quantity;
  if (itemAmount.units === "unit" && maxAmountFilter.units !== "unit")
    return Infinity;

  // Converting max units to item units
  const convFactor = convertUnits({
    from: maxAmountFilter.units,
    to: itemAmount.units,
  });
  if (!convFactor) return Infinity;

  // Calculating maxItems
  const res = Math.floor(
    (maxAmountFilter.quantity * convFactor) / itemAmount.quantity,
  );
  return res;
};

export default setMaxItem;
