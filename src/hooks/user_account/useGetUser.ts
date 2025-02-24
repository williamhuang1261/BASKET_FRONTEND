import { getAuth, onAuthStateChanged } from "firebase/auth";
import useUserState from "../state/useUserState";
import "../../utils/auth/initFirebase";
import { AxiosError } from "axios";
import useError from "../useError";
import { UserServices } from "../../services/serviceList";
import { createFetchQuery } from "../../services/fetchQuery";
import { UserLogin } from "../../interface/UserLogin";

type Props = {
  callback?: () => void;
  promiseFn?: () => Promise<void>;
  onErr?: (err: AxiosError) => void;
};

type UserResponse = {
  user: UserLogin;
  message: string;
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
  const auth = getAuth();
  const errHandler = useError();

  const handleRequest = async () => {
    const res =
      await createFetchQuery(UserServices).post<UserResponse>("/account/oauth");
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

  return async ({ callback, promiseFn, onErr }: Props = {}) => {
    try {
      if (!auth.currentUser) {
        onAuthStateChanged(auth, () => {
          if (auth.currentUser) {
            handleRequest().then(() => {
              if (callback) callback();
              if (promiseFn) promiseFn();
            }).catch(errHandler);
          }
        });
      } else {
        await handleRequest();
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
