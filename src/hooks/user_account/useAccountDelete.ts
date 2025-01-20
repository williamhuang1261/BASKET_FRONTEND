import { deleteUser, getAuth } from "firebase/auth";
import { UserServices } from "../../services/restricted-service";
import useUserState from "../state/useUserState";
import useError from "../useError";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FirebaseError } from "firebase/app";
import useCustomNavigation from "../useCustomNavigation";
import useLogOut from "./useLogOut";

/**
 * @description Hook to handle account deletion
 * @returns {() => Promise<void>} Async function that handles the account deletion process
 * @summary Deletes user account from both backend and Firebase, handles re-authentication if needed
 */
const useAccountDelete = () => {
  const queryClient = useQueryClient();
  const { dispatch } = useUserState();
  const errorHandler = useError();
  const auth = getAuth();
  const logOut = useLogOut();
  const { add, nav } = useCustomNavigation();

  const reauthenticateHandler = async () => {
    console.log("reauthenticating");
    const user = auth.currentUser;
    if (!user) {
      errorHandler({
        code: 401,
        message: "Could not reauthenticate user",
      });
      return;
    }
    try {
      await deleteUser(user);
      await logOut();
    } catch (err) {
      errorHandler(err as FirebaseError);
    }
  };

  const fn = async () => {
    if (!auth.currentUser) {
      errorHandler({
        code: 401,
        message: "User is not authenticated",
      });
      return;
    }
    // Delete the user account
    try {
      await queryClient.fetchQuery({
        queryKey: ["Delete_Account"],
        queryFn: () => UserServices.delete("/account/me"),
      });
      await deleteUser(auth.currentUser);
      dispatch({
        group: "CHANGE",
        type: "LOGIN_STATUS",
        status: false,
      });
      await logOut();
      nav();
      window.location.reload();
    } catch (err) {
      if (
        err instanceof FirebaseError &&
        err.code === "auth/requires-recent-login"
      ) {
        add(
          {
            pathname: "/auth/login",
            error: {
              message: "You must re-authenticate to delete your account",
              code: 401,
              hideHome: true,
            },
          },
          {
            name: "accountDeletionRetry",
            promiseFn: reauthenticateHandler,
          },
        );
        add({
          pathname: "/",
          customEvent: "accountDeletionRetry",
        });
        nav();
      } else {
        errorHandler(err as AxiosError | FirebaseError);
      }
    }
  };

  return fn;
};
export default useAccountDelete;
