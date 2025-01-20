/**
 * @description Provider component for application status
 * @summary Wraps the application with status context provider
 * @param {Object} props - The properties object
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} A provider component that supplies status context
 */
import { ReactNode, useReducer } from "react";
import statusReducer, { StatusProp } from "../reducers/statusReducer";
import StatusContext from "../contexts/StatusContext";

interface Props {
  children: ReactNode;
}

const initStatus: StatusProp = {
  error: {
    errorCode: 200,
    message: "",
    hideHome: false,
    show: false,
  },
  succes: {
    message: "",
    show: false,
  },
  loading: false,
};

const StatusProvider = ({ children }: Props) => {
  const [status, dispatch] = useReducer(statusReducer, initStatus);

  return (
    <StatusContext.Provider value={{ status, dispatch }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
