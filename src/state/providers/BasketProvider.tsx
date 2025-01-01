/**
 * @description Provider component for shopping basket functionality
 * @summary Wraps the application with basket context provider
 * @param {Object} props - The properties object
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} A provider component that supplies basket context
 */
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
