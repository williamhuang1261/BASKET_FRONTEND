import BasketItem from "./BasketItem/BasketItem";
import items from "../../data/ItemsEX";
import BasketItemProvider from "../../state/providers/BasketItemProvider";

// Groups every item in the Basket Page
// TODO: Add first API
const BasketResults = () => {
  return (
    <div className="mt-5 flex flex-col overflow-hidden rounded border-0.5 border-dark_gray">
      {items.map((i) => (
        <div
          key={i.ref.code}
          className={
            items.indexOf(i) === items.length - 1
              ? ""
              : "border-b-0.5 border-dark_gray"
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
