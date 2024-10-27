import { ReactNode, useReducer } from "react";
import basketItemReducer from "../reducers/basketItemReducer";
import BasketItemContext from "../contexts/BasketItemContext";
import { RefProp } from "../../interface/Destructed";



interface Props {
  reference: RefProp;
  children: ReactNode;
}

const BasketItemProvider = ({ reference, children }: Props) => {

  const [basketItem, dispatch] = useReducer(basketItemReducer, {
    supplierSelection: undefined,
    ref: reference,
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
