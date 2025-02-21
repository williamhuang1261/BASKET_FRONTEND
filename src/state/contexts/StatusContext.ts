/**
 * @description Context for managing application status and error states
 * @summary Provides status information and methods to update application state
 * @type {React.Context<StatusContextProp>}
 */
import React from "react";
import { StatusProp, StatusAction } from "../../interface/reducers/statusAction";

interface StatusContextProp {
  status: StatusProp;
  dispatch: React.Dispatch<StatusAction>
}

const StatusContext = React.createContext<StatusContextProp>({} as StatusContextProp);

export default StatusContext;
