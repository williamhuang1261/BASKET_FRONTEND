/**
 * @description Context for managing the shopping basket state
 * @summary Provides basket data and methods to modify the basket
 * @type {React.Context<BasketContextType>}
 */
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
