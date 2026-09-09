import { ReactNode, useContext, useEffect, useReducer, useRef, useState } from "react";
import basketItemReducer from "../reducers/basketItemReducer";
import BasketItemContext from "../contexts/BasketItemContext";
import BasketCollaborationContext from "../contexts/BasketCollaborationContext";
import { basketItemAction } from "../../interface/reducers/basketItemAction";

interface Props {
  itemId: string
  children: ReactNode;
}

const HIGHLIGHT_DURATION_MS = 1500;

/**
 * @description Manages one basket item's local state. When a collaborative
 * session (BasketCollaborationContext) is active, every local change is
 * also published to it, and changes published by other collaborators are
 * applied through the same reducer and briefly flagged via
 * highlightedRemotely. With no active session this behaves exactly as
 * before - dispatch only ever updates local state - see
 * docs/prd-collaborative-editing.md.
 */
const BasketItemProvider = ({ itemId, children }: Props) => {
  const [basketItem, rawDispatch] = useReducer(basketItemReducer, {
    supplierSelection: undefined,
    itemId: itemId,
    method: "weight",
    units: "kg",
    quantity: 1,
  });

  const collaboration = useContext(BasketCollaborationContext);
  const [highlightedRemotely, setHighlightedRemotely] = useState(false);
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!collaboration.sessionId) return;

    const unsubscribe = collaboration.subscribe(itemId, (action) => {
      rawDispatch(action as basketItemAction);
      setHighlightedRemotely(true);
      clearTimeout(highlightTimer.current);
      highlightTimer.current = setTimeout(
        () => setHighlightedRemotely(false),
        HIGHLIGHT_DURATION_MS,
      );
    });

    return () => {
      unsubscribe();
      clearTimeout(highlightTimer.current);
    };
  }, [itemId, collaboration]);

  const dispatch = (action: basketItemAction) => {
    rawDispatch(action);
    collaboration.publish(itemId, action);
  };

  return (
    <BasketItemContext.Provider value={{ basketItem, dispatch, highlightedRemotely }}>
      {children}
    </BasketItemContext.Provider>
  );
};

export default BasketItemProvider;
