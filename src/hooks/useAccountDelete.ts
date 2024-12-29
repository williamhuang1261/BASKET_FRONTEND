import { deleteUser, getAuth } from "firebase/auth";
import { UserServices } from "../services/restricted-service";
import useUserState from "./state/useUserState";
import useError from "./useError";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

const useAccountDelete = () => {

  const {dispatch} = useUserState();
  const errorHandler = useError();
  const navigate = useNavigate();
  const auth = getAuth();

  return () => {
    // Delete the user account
    UserServices.delete("/account/me")
      .then(() => {
        if (!auth.currentUser) {
          errorHandler({
            code: 500,
            message: "Failed to delete account",
          });
          return;
        }
        deleteUser(auth.currentUser)
          .then(() => {
            dispatch({
              group: "CHANGE",
              type: "LOGIN_STATUS",
              status: false,
            });
            navigate("/");
          })
          .catch((err: FirebaseError) => errorHandler(err));
      })
      .catch(() =>
        errorHandler({
          code: 500,
          message: "Failed to delete account",
        }),
      );
  };
}

export default useAccountDelete