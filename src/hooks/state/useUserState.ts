import { useContext } from "react";
import UserContext from "../../state/contexts/UserContext";

const useUserState = () => {
  return useContext(UserContext);
};

export default useUserState;
