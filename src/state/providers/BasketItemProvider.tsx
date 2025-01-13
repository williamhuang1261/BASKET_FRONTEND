import { ReactNode, useReducer } from "react";
import basketItemReducer from "../reducers/basketItemReducer";
import BasketItemContext from "../contexts/BasketItemContext";

interface Props {
  itemId: string
  children: ReactNode;
}

const BasketItemProvider = ({ itemId, children }: Props) => {
  const [basketItem, dispatch] = useReducer(basketItemReducer, {
    supplierSelection: undefined,
    itemId: itemId,
    method: "weight",
    units: "kg",
    quantity: 1,
  });

  return (
    <BasketItemContext.Provider value={{ basketItem, dispatch }}>
      {children}
    </BasketItemContext.Provider>
  );
};

export default BasketItemProvider;
