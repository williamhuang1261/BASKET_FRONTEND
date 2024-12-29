import { getAuth, signOut } from "firebase/auth";
import useUserState from "./state/useUserState";
import { useNavigate } from "react-router-dom";
import useError from "./useError";
import { FirebaseError } from "firebase/app";

const useLogOut = () => {
  const {dispatch} = useUserState();
  const navigate = useNavigate();
  const errorHandler = useError();
  const auth = getAuth();

  return () => {
    signOut(auth)
      .then(() => {
        dispatch({
          group: "CHANGE",
          type: "LOGIN_STATUS",
          status: false,
        });
        navigate("/");
      })
      .catch((err: FirebaseError) => errorHandler(err));
  }
};

export default useLogOut
