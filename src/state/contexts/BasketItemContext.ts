import React, { Dispatch } from "react";
import { basketItemAction, basketItemProp } from "../reducers/basketItemReducer";

interface BasketItemType {
  basketItem: basketItemProp;
  dispatch: Dispatch<basketItemAction>;
}

const BasketItemContext = React.createContext<BasketItemType>({} as BasketItemType);

export default BasketItemContext;