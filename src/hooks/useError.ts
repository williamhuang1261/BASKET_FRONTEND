import { AxiosError } from "axios";
import useStatusState from "./state/useStatusState";
import { FirebaseError } from "firebase/app";

type GenericError = {
  code: number | string;
  message: string;
};

type GenericResponse = {
  message: string;
  [key: string]: any;
};

/**
 * @description Hook to handle error states and messages
 * @returns {(err: AxiosError | GenericError | FirebaseError, hideHome?: boolean) => void} Error handling function
 * @summary Provides unified error handling for Axios, Firebase, and generic errors
 */
const useError = () => {
  const { dispatch } = useStatusState();

  const errorHandler = (
    err: AxiosError | GenericError | FirebaseError,
    hideHome?: boolean,
  ) => {
    console.error(err);

    let code: number | string;
    let message: string;
    if (err instanceof AxiosError) {
      if (err.response) {
        code = err.response.status || err.code || "UKNOWN_ERR";
        message =
          (err.response.data as GenericResponse).message ||
          err.message ||
          "An unknown error occured";
      } else {
        code = err.code || "UNKNOWN_ERR";
        message = err.message || "An unknown error occured";
      }
    } else {
      code = err.code;
      message = err.message;
    }

    dispatch({
      group: "CHANGE",
      type: "DISPLAY",
      show: true,
      hideHome: hideHome ? true : false,
    });
    dispatch({
      group: "CHANGE",
      type: "STATUS",
      newError: true,
      newErrorCode: code,
      newMessage: message,
    });
  };

  return errorHandler;
};

export default useError;
