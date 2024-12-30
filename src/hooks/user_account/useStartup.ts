import { getAuth, onAuthStateChanged } from "firebase/auth";
import useUserState from "../state/useUserState";
import "../../utils/auth/initFirebase";
import { UserServices } from "../../services/restricted-service";
import { AxiosError, AxiosResponse } from "axios";
import useError from "../useError";
import { useQueryClient } from "@tanstack/react-query";

const useStartup = () => {
  const { dispatch: userDispatch } = useUserState();
  const queryClient = useQueryClient();
  const auth = getAuth();
  const errorHandler = useError();

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

  const handleRequest = async () => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["account"],
        queryFn: () => UserServices.post("/account/oauth"),
      });
      setUser(res);
    } catch (err) {
      handleErr(err as AxiosError);
    }
  };

  return async () => {
    try{
      if (!auth.currentUser) {
        onAuthStateChanged(auth, async () => {
          if (auth.currentUser) {
            await handleRequest();
          }
        });
      } else {
        await handleRequest();
      }
    }
    catch (err) {
      handleErr(err as AxiosError);
    }
  };
};

export default useStartup;
