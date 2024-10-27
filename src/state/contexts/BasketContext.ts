import React, { Dispatch } from "react";
import { BasketAction, basketProp } from "../reducers/basketReducer";

interface BasketContextType {
  basket: basketProp;
  dispatch: Dispatch<BasketAction>;
}

const BasketContext = React.createContext<BasketContextType>(
  {} as BasketContextType,
);

export default BasketContext;
