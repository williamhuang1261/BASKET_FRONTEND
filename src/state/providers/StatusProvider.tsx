import { ReactNode, useReducer } from "react";
import statusReducer, { StatusProp } from "../reducers/statusReducer";
import StatusContext from "../contexts/StatusContext";

interface Props {
  children: ReactNode;
}

const initStatus: StatusProp = {
  show: false,
  error: false,
  errorCode: 200,
  message: "",
  hideHome: false,
}

const StatusProvider = ({ children }: Props) => {
  const [status, dispatch] = useReducer(statusReducer, initStatus)

  return (
    <StatusContext.Provider value={{ status, dispatch }}>
      {children}
    </StatusContext.Provider>
  )
};

export default StatusProvider;