/**
 * @description Context for managing user state throughout the application
 * @summary Provides user data and dispatch function to update user state
 * @type {React.Context<UserContextType>}
 */
import React, { Dispatch } from "react";
import { UserAction } from "../../interface/reducers/userAction";
import { UserTransportProp } from "../../interface/UserTransportProp";


interface UserContextType {
  user: UserTransportProp;
  dispatch: Dispatch<UserAction>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;
