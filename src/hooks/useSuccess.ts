import useStatusState from "./state/useStatusState";

const useSuccess = () => {
  const { dispatch } = useStatusState();

  return async (message: string) => {
    dispatch({
      group: "CHANGE",
      type: "SUCCESS_DETAILS",
      newMessage: message,
    });
    dispatch({
      group: "CHANGE",
      type: "SUCCESS_DISPLAY",
      show: true,
    });
    await new Promise((res) => setTimeout(res, 4000));
    dispatch({
      group: "CHANGE",
      type: "SUCCESS_DISPLAY",
      show: false,
    });
  };
};

export default useSuccess;
