/**
 * @description Provider component for user context
 * @summary Wraps the application with user context provider
 * @param {Object} props - The properties object
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} A provider component that supplies user context
 */
import { ReactNode, useReducer } from "react";
import UserContext from "../contexts/UserContext";
import userReducer from "../reducers/userReducer";
import DummyUser from "../../data/DummyUser";

interface Props {
  children: ReactNode
}

const UserProvider = ({children} : Props) => {
  const [user, dispatch] = useReducer(userReducer, DummyUser);

  return (
    <UserContext.Provider value={{user, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
