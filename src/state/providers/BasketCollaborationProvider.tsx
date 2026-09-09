/**
 * @description Provides the active collaborative-basket session (or the
 * no-op default when there is none) to the component tree, so
 * BasketItemProvider instances underneath can publish/subscribe without
 * each opening their own socket connection.
 */
import { ReactNode } from "react";
import { useBasketCollaboration } from "../../utils/Realtime/useBasketCollaboration";
import BasketCollaborationContext from "../contexts/BasketCollaborationContext";

interface Props {
  children: ReactNode;
}

const BasketCollaborationProvider = ({ children }: Props) => {
  const collaboration = useBasketCollaboration();

  return (
    <BasketCollaborationContext.Provider value={collaboration}>
      {children}
    </BasketCollaborationContext.Provider>
  );
};

export default BasketCollaborationProvider;
