import CardProps from "../../interface/CardProps";
import shuffleArray from "../ShuffleArray";
import giveTextAfterPrice from "./giveTextAfterPrice";
import setMaxItem from "./setMaxItem";
import calcCost from "./calcCost";
import PriceProps, { OptsProps } from "../../interface/PriceProps";
import toUnit from "../Units/toUnit";
import getCompPrice from "./getCompPrice";

// Interface for maximum quantity the user wants to buy
export interface FilterProps {
  maxQuantity?: {
    // Unit measure of the quantity
    units: string;
    // Amount of the selected quantity
    quantity: number;
  };
  // Users may decide to filter some supliers
  hiddenSuppliers?: string[];
  //
  qSelection?: {
    units: string;
    quantity: number;
  };
}

// Function to sort prices for further uses in cards / basket item
const SortByPrice = (
  { name, ref, amount, suppliers }: CardProps,
  { maxQuantity, hiddenSuppliers, qSelection }: FilterProps,
): PriceProps | string => {
  // Case where no supplier provides this item / no data for comparison
  if (!name) return "Name is missing";
  if (!ref) return "Reference is missing";
  if (!suppliers) return "No prices available";
  if (!amount) return "No metadata provided on this item";

  // Formatting into an array of form UnsortedProps
  const priceTransport: PriceProps = { name: name, ref: ref, amount: amount };
  priceTransport.opts = [];

  // Getting max number of items
  const maxItem: number = setMaxItem(maxQuantity, {
    quantity: amount.quantity,
    units: amount.units,
  });

  // Shuffling suppliers so that different ones appear when prices are the same
  const shuffledSuppliers = shuffleArray(suppliers);

  // Run the process for each supplier
  const lowerHiddenSuppliers = new Set(
    hiddenSuppliers?.map((s) => s.toLowerCase()),
  );
  for (const s of shuffledSuppliers) {
    // Verifying filter
    if (lowerHiddenSuppliers?.has(s.supplier.toLowerCase()) === true) continue;

    const { supplier, pricing } = s;
    const { normal, method, limited } = pricing;

    // Defining units to show for normal pricing
    const textAfterPrice = giveTextAfterPrice(method);
    if (!textAfterPrice) continue;

    // Push normal price
    if (!qSelection) {
      priceTransport.opts.push({
        supplier: supplier,
        process: {
          priceToCompare: normal,
          priceToShow: `${normal !== 0 ? normal.toFixed(2) : "FREE"} ${normal !== 0 ? textAfterPrice : ""}`,
          isRebate: false,
        },
      });
    } else {
      const num = toUnit(amount, qSelection);
      const normalCost = calcCost(
        { amount },
        normal,
        method,
        { quantity: num, units: "unit" },
        undefined,
      );
      if (normalCost !== undefined) {
        priceTransport.opts.push({
          supplier: supplier,
          process: {
            priceToCompare: normalCost,
            priceToShow: `${normalCost !== 0 ? normalCost.toFixed(2) : "FREE"} ${normalCost !== 0 ? "$" : ""}`,
            isRebate: false,
          },
        });
      }
    }

    // Pushing any rebates
    if (!limited) continue;
    for (const l of limited) {
      const rebate = getCompPrice(amount, s, l, maxItem, { qSelection });

      if (!rebate) continue;
      priceTransport.opts.push(rebate);
    }
  }

  // Sorting array
  if (priceTransport.opts.length === 0) return "No prices available";
  const sorted = priceTransport.opts
    .slice()
    .sort((a: OptsProps, b: OptsProps) => {
      return a.process.priceToCompare - b.process.priceToCompare;
    });

  // Returning sorted opts in the transport
  priceTransport.opts = sorted;
  return priceTransport;
};

export default SortByPrice;
