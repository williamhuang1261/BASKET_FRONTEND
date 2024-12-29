import BasketItem from "./BasketItem/BasketItem";
import items from "../../data/ItemsEX";
import BasketItemProvider from "../../state/providers/BasketItemProvider";

// TODO: Add first API
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
          <BasketItemProvider reference={i.ref}>
            <BasketItem
              id={i.id}
              image={i.image}
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
