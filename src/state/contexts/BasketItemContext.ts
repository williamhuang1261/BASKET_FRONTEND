/**
 * @description Context for managing individual basket item states
 * @summary Provides basket item data and methods to modify items
 * @type {React.Context<BasketItemType>}
 */
import React, { Dispatch } from "react";
import { basketItemAction, basketItemProp } from "../reducers/basketItemReducer";

interface BasketItemType {
  basketItem: basketItemProp;
  dispatch: Dispatch<basketItemAction>;
}

const BasketItemContext = React.createContext<BasketItemType>({} as BasketItemType);

export default BasketItemContext;