import { getAuth, onAuthStateChanged } from "firebase/auth";
import useUserState from "./state/useUserState";
import "../utils/auth/initFirebase";
import { UserServices } from "../services/restricted-service";
import { AxiosError, AxiosResponse } from "axios";
import useError from "./useError";
import { useEffect } from "react";

const useStartup = () => {
  const { dispatch: userDispatch } = useUserState();
  const auth = getAuth();
  const errorHandler = useError();

  // TODO error handling
  const setUser = (res: AxiosResponse) => {
    userDispatch({
      group: "CHANGE",
      type: "LOGIN_STATUS",
      status: true,
    });
    userDispatch({
      group: "INIT",
      type: "USER",
      user: res.data.user,
    });
  };

  const handleErr = (err: AxiosError) => {
    errorHandler(err);
  };

  useEffect(() => {
    if (!auth.currentUser) {
      onAuthStateChanged(auth, () => {
        if (auth.currentUser) {
          UserServices.post("/account/oauth").then(setUser).catch(handleErr);
        }
      });
    } else {
      UserServices.post("/account/oauth").then(setUser).catch(handleErr);
    }
  }, [])
};

export default useStartup;
