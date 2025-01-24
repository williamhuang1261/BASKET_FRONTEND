import { getAuth, signOut } from "firebase/auth";
import useUserState from "../state/useUserState";
import useError from "../useError";
import { FirebaseError } from "firebase/app";
import useCustomNavigation from "../useCustomNavigation";
import useSuccess from "../useSuccess";

/**
 * @description Hook to handle user logout functionality
 * @returns {() => void} Function that handles the logout process
 * @summary Logs out the user, updates the global state, and redirects to home page
 */
const useLogOut = () => {
  const { dispatch } = useUserState();
  const { directNav } = useCustomNavigation();
  const errorHandler = useError();
  const successHandler = useSuccess();
  const auth = getAuth();

  return async (displaySucces?: boolean) => {
    signOut(auth)
      .then(() => {
        dispatch({
          group: "CHANGE",
          type: "LOGIN_STATUS",
          status: false,
        });
        directNav({ pathname: "/" }, );
        if (displaySucces) successHandler("Logged out successfully");
      })
      .catch((err: FirebaseError) => errorHandler(err));
  };
};

export default useLogOut;
