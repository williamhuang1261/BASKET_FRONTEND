import PriceProps from "../../../interface/PriceProps";

interface Props {
  filtered: PriceProps | string;
  normal: { supplier: string; normalPrice: string }[] | undefined;
}

const PriceBar = ({ filtered, normal }: Props) => {
  if (typeof filtered === "string") return filtered;
  return (
    <div className="">
      <div className="flex flex-wrap justify-between gap-2">
        <div
          // @ts-ignore
          className={`${filtered.opts[0].process.isRebate ? "bg-green/75" : ""} rounded px-1`}
        >
          <h3 className="text-xl font-semibold">
            {
              // @ts-ignore
              filtered.opts[0].process.priceToShow
            }
          </h3>
        </div>
        <h4
          className={`${
            // @ts-ignore
            filtered.opts[0].process.isRebate ? "" : "hidden"
          } text-black/50 line-through`}
        >
          {
            normal?.find(
              (item) =>
                item.supplier.toLowerCase() ===
                // @ts-ignore
                filtered.opts[0].supplier.toLowerCase(),
            )?.normalPrice
          }
        </h4>
      </div>
    </div>
  );
};

export default PriceBar;
