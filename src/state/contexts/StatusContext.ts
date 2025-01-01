/**
 * @description Context for managing application status and error states
 * @summary Provides status information and methods to update application state
 * @type {React.Context<StatusContextProp>}
 */
import { StatusAction, StatusProp } from "../reducers/statusReducer";
import React from "react";

interface StatusContextProp {
  status: StatusProp;
  dispatch: React.Dispatch<StatusAction>
}

const StatusContext = React.createContext<StatusContextProp>({} as StatusContextProp);

export default StatusContext;
