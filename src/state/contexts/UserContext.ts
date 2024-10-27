import React, { Dispatch } from "react";
import UserTransportProp from "../../interface/UserTransportProp";
import { UserAction } from "../reducers/userReducer";

interface UserContextType {
  user: UserTransportProp;
  dispatch: Dispatch<UserAction>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;



