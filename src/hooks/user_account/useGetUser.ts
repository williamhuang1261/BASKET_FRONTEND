import { getAuth, onAuthStateChanged } from "firebase/auth";
import useUserState from "../state/useUserState";
import "../../utils/auth/initFirebase";
import { UserServices } from "../../services/restricted-service";
import { AxiosError, AxiosResponse } from "axios";
import useError from "../useError";
import { useQueryClient } from "@tanstack/react-query";

/**
 * @description Hook to fetch and initialize user data
 * @returns {() => Promise<void>} Async function that fetches and sets up user data
 * @summary Handles user authentication state and fetches user data from the server
 */
const useGetUser = () => {
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
        queryFn: () => UserServices.post("/oauth"),
      });
      setUser(res);
    } catch (err) {
      handleErr(err as AxiosError);
    }
  };

  return async () => {
    try {
      if (!auth.currentUser) {
        onAuthStateChanged(auth, async () => {
          if (auth.currentUser) {
            await handleRequest();
          }
        });
      } else {
        await handleRequest();
      }
    } catch (err) {
      handleErr(err as AxiosError);
    }
  };
};

export default useGetUser;
