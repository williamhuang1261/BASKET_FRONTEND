import { useContext } from "react";
import StatusContext from "../../state/contexts/StatusContext";

/**
 * @description Custom hook to access the status context state
 * @returns {Context} The status context value
 */
const useStatusState = () => {
  return useContext(StatusContext);
}

export default useStatusState;