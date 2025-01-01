import { useContext } from "react";
import UserContext from "../../state/contexts/UserContext";

/**
 * @description Custom hook to access the user context state
 * @returns {Context} The user context value
 */
const useUserState = () => {
  return useContext(UserContext);
};

export default useUserState;
