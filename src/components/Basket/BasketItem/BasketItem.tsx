import BestPerSupplier from "../../../utils/SortingPrice/BestPerSupplier";
import SortByPrice from "../../../utils/SortingPrice/SortByPrice";
import QSelectionGroup from "./QSelectionGroup";
import useBasketItemState from "../../../hooks/state/useBasketItemState";
import SupplierSelection from "./SupplierSelection";
import useBasketState from "../../../hooks/state/useBasketState";
import { useCallback, useMemo } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { CardProps } from "../../../interface/CardProps";

/**
 * @description Component that renders a single item in the shopping basket.
 * @summary Displays item details, price, quantity controls, and supplier selection.
 * Provides responsive layout for different screen sizes.
 * @param {Object} props - The properties object
 * @param {string} props.id - Unique identifier for the basket item
 * @param {NameProp} props.name - Item name in different languages
 * @param {AmountProp} props.amount - Item amount information
 * @param {RefProp} props.reference - Item reference data
 * @param {SuppliersProp[]} props.suppliers - Array of supplier information
 * @param {string} props.image - URL of the item's image
 * @returns {JSX.Element} The basket item component
 */
interface Props {
  name: CardProps['name']
  amount: CardProps['amount']
  reference: CardProps['ref']
  suppliers: CardProps['suppliers']
  image: CardProps['image']
}

// Arrangement for every item in the Basket Page
const BasketItem = ({
  amount,
  name,
  image,
  reference,
  suppliers,
}: Props) => {
  const { basket } = useBasketState();
  const { basketItem } = useBasketItemState();
  const winSize = useWindowSize();

  const sorted = useMemo(() => {
    return SortByPrice(
      {
        name: name,
        ref: reference,
        amount: amount,
        suppliers: suppliers,
      },
      {
        hiddenSuppliers: basket.filteredStores,
        qSelection: {
          quantity: basketItem.quantity,
          units: basketItem.units,
        },
      },
    );
  }, [basket, basketItem, name, reference, amount, suppliers]);

  const filtered = BestPerSupplier(sorted);

  const showPrice = useCallback(() => {
    if (typeof filtered === "string" || !filtered.opts)
      return "No prices available";
    if (!basketItem.supplierSelection)
      return filtered.opts[0].process.priceToShow;

    const activeSupplier = filtered.opts.find(
      (f) =>
        basketItem.supplierSelection?.toLowerCase() ===
        f.supplier.toLowerCase(),
    );
    if (activeSupplier) return activeSupplier.process.priceToShow;
    return;
  }, [filtered, basketItem.supplierSelection]);

  const getSuppliers = () => {
    if (typeof filtered !== "string" && filtered.opts) {
      return <SupplierSelection opts={filtered.opts} />;
    } else return <p className="font-bold">No suppliers available</p>;
  };

  return (
    <>
      {/* below md display */}
      {winSize < 0 && (
        <div className="flex bg-white">
          <div className="flex items-center justify-center px-2">
            <div className="h-20 w-20 flex-none overflow-hidden rounded">
              <img src={image} alt={name.en} className="object-fit" />
            </div>
          </div>
          <div className="flex-auto">
            <div className="flex justify-between p-2">
              <div className="flex flex-wrap items-center justify-start px-2">
                <h2 className="... w-full overflow-hidden text-ellipsis font-bold ">
                  {name.en}
                </h2>
              </div>
              <h3 className="flex items-center px-2 font-bold ">
                {showPrice()}
              </h3>
            </div>
            <div className="flex justify-center gap-2 p-2">
              <QSelectionGroup id={"sm_md"} />
            </div>
            <div className="flex items-center justify-center p-2">
              {getSuppliers()}
            </div>
          </div>
          <div className="flex-none">
            <button
              type="button"
              aria-label="Delete item"
              className="h-full flex-none bg-red-100 p-1.5 font-bold text-dark_gray transition-all hover:bg-red-600 hover:text-white"
            >
              X
            </button>
          </div>
        </div>
      )}
      {/* md and above display */}
      {winSize >= 0 && (
        <div className="flex h-max w-full justify-between gap-2 bg-white">
          <div className="flex flex-none items-center">
            <div className="m-2 h-32 w-32 overflow-hidden rounded">
              <img alt={name.en} src={image} className="object-fit" />
            </div>
          </div>
          <div className="my-2 flex flex-auto items-center">
            <div className="flex w-3/12 flex-wrap items-center justify-start px-2">
              <h2 className="... w-full overflow-hidden text-ellipsis font-bold">
                {name.en}
              </h2>
            </div>
            {/* md - lg */}
            {winSize < 3 && (
              <div className="w-6/12">
                <div className="flex h-max flex-wrap items-center justify-center gap-2">
                  <QSelectionGroup id={"md_lg"} />
                </div>
                <div className="flex items-center justify-center px-2">
                  {getSuppliers()}
                </div>
              </div>
            )}
            {/* xl + */}
            {winSize >= 3 && (
              <>
                {" "}
                <div className="flex w-3/12 items-center justify-start px-2">
                  {getSuppliers()}
                </div>
                <div className="flex h-max w-4/12 flex-wrap items-center justify-start gap-2">
                  <QSelectionGroup id={"lg_+"} />
                </div>
              </>
            )}

            <h3 className="flex w-2/12 items-center px-2 font-bold ">
              {showPrice()}
            </h3>
          </div>
          <div className="flex-none">
            <button
              type="button"
              aria-label="Delete item"
              className=" h-full bg-red-100 p-1.5 font-bold text-dark_gray transition-all hover:bg-red-500 hover:text-white"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BasketItem;
