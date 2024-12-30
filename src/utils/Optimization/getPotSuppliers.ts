import PriceProps from "../../interface/PriceProps";

const getPotSuppliers = (basket: PriceProps[]): string[] => {
  const suppliers: string[] = [];
  for (const item of basket) {
    if (!item.opts) continue;

    for (const opt of item.opts) {
      if (
        !suppliers.some((s) => s.toLowerCase() === opt.supplier.toLowerCase())
      )
        suppliers.push(opt.supplier);
    }
  }

  return suppliers;
};

export default getPotSuppliers;
