import { deleteUser, getAuth } from "firebase/auth";
import { UserServices } from "../../services/restricted-service";
import useUserState from "../state/useUserState";
import useError from "../useError";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FirebaseError } from "firebase/app";
import useCustomNavigation from "../useCustomNavigation";

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
  const { add, nav } = useCustomNavigation();

  return async () => {
    // Delete the user account
    try {
      await queryClient.fetchQuery({
        queryKey: ["Delete_Account"],
        queryFn: () => UserServices.delete("/account/me"),
      });
      if (!auth.currentUser) {
        errorHandler({
          code: 500,
          message: "Failed to delete account",
        });
        return;
      }
      await deleteUser(auth.currentUser);
      dispatch({
        group: "CHANGE",
        type: "LOGIN_STATUS",
        status: false,
      });
      nav();
      window.location.reload();
    } catch (err) {
      if (
        err instanceof FirebaseError &&
        err.code === "auth/requires-recent-login"
      ) {
        add({
          pathname: "/user-login",
          error: {
            message: "You must re-authenticate to delete your account",
            code: 401,
            hideHome: true,
          },
        });
        return;
      } else {
        errorHandler(err as AxiosError | FirebaseError);
      }
    }
  };
};
export default useAccountDelete;
