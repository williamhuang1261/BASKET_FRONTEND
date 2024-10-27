import { ReactNode, useReducer } from "react";
import basketReducer from "../reducers/basketReducer";
import BasketContext from "../contexts/BasketContext";

interface Props {
  children: ReactNode;
}

const BasketProvider = ({ children }: Props) => {
  const [basket, dispatch] = useReducer(basketReducer, {
    filteredStores: [],
    maxStores: Infinity,
    totalCost: 0,
  });

  return (
    <BasketContext.Provider value={{ basket, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
