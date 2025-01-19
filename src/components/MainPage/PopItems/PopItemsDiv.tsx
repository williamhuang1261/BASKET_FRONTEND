import { useEffect, useState } from "react";
import items from "../../../data/ItemsEX";
import LoadingCard from "../../Loading/LoadingCard";
import ItemCard from "../../General/ItemCard/ItemCard";

// Containing all popular items

/**
 * @description Displays a grid of popular items with loading states
 * @summary Shows a collection of product cards with a loading animation while data is being fetched
 * @returns {JSX.Element} A grid section containing either loading placeholders or product cards
 */
const PopItemsDiv = () => {
  const [itemsLoading, setItemsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setItemsLoading(false);
    }, 2000);
  });

  return (
    <div>
      <section className="mx-3 pb-4 pt-2 md:container md:mx-auto lg:px-20 2xl:px-44  3xl:px-64">
        <h2 className="text-2xl">Popular Items</h2>
        <div className="mt-2 grid flex-none grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6">
          {itemsLoading
            ? Array(12).fill(null).map((_, index) => <LoadingCard key={index} />)
            : items.map((item) => (
                <ItemCard
                  id={item.id}
                  key={item.ref.code}
                  image={item.image}
                  name={{
                    fr: item.name.fr,
                    en: item.name.en,
                    size: item.name.size,
                  }}
                  reference={{
                    standard: item.ref.standard,
                    code: item.ref.code,
                  }}
                  amount={{
                    isApprox: item.amount.isApprox,
                    meas: item.amount.meas,
                    units: item.amount.units,
                    quantity: item.amount.quantity,
                  }}
                  brand={item.brand}
                  suppliers={item.suppliers}
                />
              ))}
        </div>
      </section>
    </div>
  );
};

export default PopItemsDiv;
