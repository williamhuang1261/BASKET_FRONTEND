/**
 * @description Reads the active collaborative-basket session from context
 * and renders the presence indicator - a thin bridge so BasketPage doesn't
 * need to call useBasketCollaboration itself.
 */
import { useContext } from "react";
import BasketCollaborationContext from "../../state/contexts/BasketCollaborationContext";
import PresenceIndicator from "./PresenceIndicator";

const PresenceBar = () => {
  const { sessionId, presenceCount } = useContext(BasketCollaborationContext);
  return <PresenceIndicator sessionId={sessionId} presenceCount={presenceCount} />;
};

export default PresenceBar;
