import {
  AmountProp,
  NameProp,
  RefProp,
  SuppliersProp,
} from "../../../interface/Destructed";
import BestPerSupplier from "../../../utils/SortingPrice/BestPerSupplier";
import SortByPrice from "../../../utils/SortingPrice/SortByPrice";
import QSelectionGroup from "./QSelectionGroup";
import useBasketItemState from "../../../hooks/state/useBasketItemState";
import SupplierSelection from "./SupplierSelection";
import useBasketState from "../../../hooks/state/useBasketState";
import { useCallback } from "react";

interface Props {
  id: string;
  name: NameProp;
  amount: AmountProp;
  reference: RefProp;
  suppliers: SuppliersProp[];
  image: string;
}

// Arrangement for every item in the Basket Page
const BasketItem = ({
  amount,
  name,
  image,
  reference,
  suppliers,
  id,
}: Props) => {
  const { basket } = useBasketState();
  const { basketItem } = useBasketItemState();

  const sorted = SortByPrice(
    {
      id: id,
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
      <div className="flex sm:hidden">
        <div className="flex items-center justify-center px-2">
          <div className="h-20 w-20 flex-none overflow-hidden rounded">
            <img src={image} alt={name.en} className="object-fit" />
          </div>
        </div>
        <div className="flex-auto">
          <div className="flex justify-between p-2">
            <div className="flex flex-wrap items-center justify-start px-2">
              <h2 className="... w-full overflow-hidden text-ellipsis font-bold lg:text-lg ">
                {name.en}
              </h2>
            </div>
            <h3 className="flex items-center px-2 font-bold lg:text-lg">
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
            className="h-full flex-none bg-red-100 p-1.5 font-bold text-dark_gray transition-all duration-100 ease-in-out hover:bg-red-600 hover:text-white"
          >
            X
          </button>
        </div>
      </div>
      {/* md and above display */}
      <div className="hidden h-max w-full justify-between gap-2 sm:flex">
        <div className="flex flex-none items-center">
          <div className="m-2 h-32 w-32 overflow-hidden rounded">
            <img alt={name.en} src={image} className="object-fit" />
          </div>
        </div>
        <div className="my-2 flex flex-auto items-center">
          <div className="flex w-3/12 flex-wrap items-center justify-start px-2">
            <h2 className="... w-full overflow-hidden text-ellipsis font-bold lg:text-lg">
              {name.en}
            </h2>
          </div>
          {/* md - lg */}
          <div className="w-6/12 xl:hidden ">
            <div className="flex h-max flex-wrap items-center justify-center gap-2">
              <QSelectionGroup id={"md_lg"} />
            </div>
            <div className="flex items-center justify-center px-2">
              {getSuppliers()}
            </div>
          </div>
          {/* lg + */}
          <div className=" hidden w-3/12 items-center justify-start px-2 xl:flex">
            {getSuppliers()}
          </div>
          <div className=" hidden h-max w-4/12 flex-wrap items-center justify-start gap-2 xl:flex">
            <QSelectionGroup id={"lg_+"} />
          </div>
          <h3 className="flex w-2/12 items-center px-2 font-bold xl:text-lg">
            {showPrice()}
          </h3>
        </div>
        <div className="flex-none">
          <button
            type="button"
            aria-label="Delete item"
            className=" h-full bg-red-100 p-1.5 font-bold text-dark_gray transition-all duration-100 ease-in-out hover:bg-red-500 hover:text-white"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketItem;
