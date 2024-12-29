import { StatusAction, StatusProp } from "../reducers/statusReducer";
import React from "react";

interface StatusContextProp {
  status: StatusProp;
  dispatch: React.Dispatch<StatusAction>
}

const StatusContext = React.createContext<StatusContextProp>({} as StatusContextProp);

export default StatusContext;
