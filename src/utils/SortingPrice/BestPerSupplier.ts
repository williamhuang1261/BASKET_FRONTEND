import PriceProps, { OptsProps } from "../../interface/PriceProps";

const BestPerSupplier = (sorted: PriceProps | string): PriceProps | string => {
  if (typeof sorted === "string") return sorted;
  if (!sorted.opts || sorted.opts.length == 0) return sorted;

  const filtered: OptsProps[] = [];
  for (const opt of sorted.opts) {
    if (filtered.some((item) => item.supplier === opt.supplier)) continue;
    else filtered.push(opt);
  }

  sorted.opts = filtered;
  return sorted;
};

export default BestPerSupplier;
