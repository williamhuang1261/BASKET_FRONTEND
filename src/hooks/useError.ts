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


const useError = () => {
  const { dispatch } = useStatusState();

  const errorHandler = (err: AxiosError | GenericError | FirebaseError) => {
    console.error(err);

    let code: number | string;
    let message: string;
    if (err instanceof AxiosError) {
      code = err.response?.status || err.code || "UKNOWN_ERR";
      message =
        (err.response?.data as GenericResponse).message ||
        err.message ||
        "An unknown error occured";
    } else {
      code = err.code;
      message = err.message;
    }

    dispatch({
      group: "CHANGE",
      type: "DISPLAY",
      show: true,
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
