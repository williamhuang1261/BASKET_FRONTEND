import { getAuth, onAuthStateChanged } from "firebase/auth";
import useUserState from "../state/useUserState";
import "../../utils/auth/initFirebase";
import { UserServices } from "../../services/restricted-service";
import { AxiosError, AxiosResponse } from "axios";
import useError from "../useError";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  callback?: () => void;
  promiseFn?: () => Promise<void>;
  onErr?: (err: AxiosError) => void;
};

/**
 * Hook for managing user authentication and data synchronization
 * @returns {(options: Props) => Promise<void>} Authentication handler function
 * @example
 * const getUser = useGetUser();
 * await getUser({
 *   callback: () => console.log('Success'),
 *   onErr: (err) => console.error(err)
 * });
 */
const useGetUser = () => {
  const { dispatch: userDispatch } = useUserState();
  const queryClient = useQueryClient();
  const auth = getAuth();
  const errHandler = useError();

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

  const handleRequest = async () => {
    const res = await queryClient.fetchQuery({
      queryKey: ["account"],
      queryFn: () => UserServices.post("/account/oauth"),
    });
    setUser(res);
  };

  return async ({ callback, promiseFn, onErr }: Props = {}) => {
    try {
      if (!auth.currentUser) {
        onAuthStateChanged(auth, () => {
          if (auth.currentUser) {
            handleRequest().catch(errHandler)
            if (callback) callback();
            if (promiseFn) promiseFn();
          }
        });
      } else {
        if (callback) callback();
        if (promiseFn) await promiseFn();
      }
    } catch (err) {
      errHandler(err as AxiosError);
      if (onErr) onErr(err as AxiosError);
    }
  };
};

export default useGetUser;
