import { ReactNode, useReducer } from "react";
import UserContext from "../contexts/UserContext";
import userReducer from "../reducers/userReducer";
import UserEx from "../../data/UserEX";

interface Props {
  children: ReactNode
}

const UserProvider = ({children} : Props) => {
  const [user, dispatch] = useReducer(userReducer, UserEx);


  return (
    <UserContext.Provider value={{user, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
