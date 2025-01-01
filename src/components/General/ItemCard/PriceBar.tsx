import PriceProps from "../../../interface/PriceProps";

/**
 * @description Displays price information with optional rebate indication
 * @param {Object} props - The component props
 * @param {PriceProps | string} props.filtered - The filtered price data or error message
 * @param {Array<{supplier: string, normalPrice: string}> | undefined} props.normal - Normal price information for each supplier
 * @returns {JSX.Element} Price display component
 */
interface Props {
  filtered: PriceProps | string;
  normal: { supplier: string; normalPrice: string }[] | undefined;
}

const PriceBar = ({ filtered, normal }: Props) => {
  if (typeof filtered === "string") return <p>{filtered}</p>;
  return (
    <div className="">
      <div className="flex flex-wrap justify-between gap-2">
        <div
          className={`${filtered.opts?.[0].process.isRebate ? "bg-green/75" : ""} rounded px-1`}
        >
          <h3 className="font-mona text-xl font-semibold">
            {filtered.opts?.[0].process.priceToShow}
          </h3>
        </div>
        {filtered.opts?.[0].process.isRebate && (
          <h4 className="text-black/50 line-through">
            {
              normal?.find(
                (item) =>
                  item.supplier.toLowerCase() ===
                  filtered.opts?.[0].supplier.toLowerCase(),
              )?.normalPrice
            }
          </h4>
        )}
      </div>
    </div>
  );
};

export default PriceBar;
