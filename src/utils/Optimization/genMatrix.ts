import { RefProp } from "../../interface/Destructed";
import PriceProps from "../../interface/PriceProps";

interface MatrixItem {
  ref: RefProp;
  inStock: boolean;
  opts: {
    supplier: string;
    cost: number;
  }[];
}

export type Matrix = MatrixItem[];

const genMatrix = (
  basket: PriceProps[],
  hiddenSuppliers: string[],
  suppliers: string[],
): Matrix => {
  const matrix: Matrix = [];
  for (const item of basket) {
    // Create initial elements of matrix column
    const matrixItem: MatrixItem = {
      ref: item.ref,
      inStock: false,
      opts: [],
    };

    // Handles case where there are no prices available
    if (!item.opts) {
      matrix.push(matrixItem);
      continue;
    }

    // Removing all suppliers that the user does not want
    const filtered: string[] = suppliers.filter(
      (s) => !hiddenSuppliers.some((h) => h.toLowerCase() === s.toLowerCase()),
    );

    // Pushing supplier options with the order of the suppliers array
    for (const supplier of filtered) {
      // Verifying if item is supplied by supplier
      const opt = item.opts.find(
        (i) => i.supplier.toLowerCase() === supplier.toLowerCase(),
      );
      let cost: number;
      if (
        !opt ||
        hiddenSuppliers.some((h) => h.toLowerCase() === supplier.toLowerCase())
      )
        cost = Infinity;
      else {
        matrixItem.inStock = true;
        cost = opt.process.priceToCompare;
      }

      matrixItem.opts.push({
        supplier: supplier,
        cost: cost,
      });
    }

    // Sort suppliers
    matrixItem.opts.sort((a, b) => a.supplier.localeCompare(b.supplier));
    matrix.push(matrixItem);
  }

  return matrix;
};

export default genMatrix;
