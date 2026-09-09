/**
 * @description Context for managing individual basket item states
 * @summary Provides basket item data and methods to modify items
 * @type {React.Context<BasketItemType>}
 */
import React, { Dispatch } from "react";
import { basketItemProp, basketItemAction } from "../../interface/reducers/basketItemAction";

interface BasketItemType {
  basketItem: basketItemProp;
  dispatch: Dispatch<basketItemAction>;
  /** True for a brief window after this item changed via a remote collaborator, not a local edit */
  highlightedRemotely: boolean;
}

const BasketItemContext = React.createContext<BasketItemType>({} as BasketItemType);

export default BasketItemContext;