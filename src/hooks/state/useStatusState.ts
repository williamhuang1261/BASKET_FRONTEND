import { useContext } from "react";
import StatusContext from "../../state/contexts/StatusContext";

const useStatusState = () => {
  return useContext(StatusContext);
}

export default useStatusState;