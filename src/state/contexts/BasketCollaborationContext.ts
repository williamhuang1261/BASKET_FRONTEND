/**
 * @description Context exposing the active collaborative-basket session (if
 * any) to every BasketItemProvider beneath it, so item-level changes can be
 * published/subscribed without prop-drilling the socket connection.
 */
import React from "react";

interface BasketCollaborationContextType {
  sessionId: string | null;
  presenceCount: number;
  publish: (itemId: string, action: unknown) => void;
  subscribe: (itemId: string, listener: (action: unknown) => void) => () => void;
}

const noop = () => {};

const BasketCollaborationContext = React.createContext<BasketCollaborationContextType>({
  sessionId: null,
  presenceCount: 0,
  publish: noop,
  subscribe: () => noop,
});

export default BasketCollaborationContext;
