import BasketItem from "./BasketItem/BasketItem";
import items from "../../data/ItemsEX";
import BasketItemProvider from "../../state/providers/BasketItemProvider";

/**
 * @description Renders a list of basket items with their details
 * @summary Displays all items in the basket with their respective suppliers and prices
 * @returns {JSX.Element} The basket results component containing all basket items
 */
const BasketResults = () => {
  return (
    <div className="mt-5 flex flex-col overflow-hidden border-0.5 rounded shadow-sm">
      {items.map((i) => (
        <div
          key={i.ref.code}
          className={
            items.indexOf(i) === items.length - 1
              ? ""
              : "border-b-0.5"
          }
        >
          <BasketItemProvider itemId={i.id}>
            <BasketItem
              image={i.image || ''}
              name={i.name}
              reference={i.ref}
              amount={i.amount}
              suppliers={i.suppliers}
            />
          </BasketItemProvider>
        </div>
      ))}
    </div>
  );
};

export default BasketResults;
