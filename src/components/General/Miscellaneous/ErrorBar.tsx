import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useStatusState from "../../../hooks/state/useStatusState";
import { CustomLocationState } from "../../../interface/NavigateProps";
import useError from "../../../hooks/useError";
import CustomDirectNav from "./CustomDirectNav";

/**
 * @description A sticky error notification bar that displays at the top of the page
 * @param {Object} props - The properties object
 * @param {"Full" | "Container"} props.size - The width style of the error bar
 * @returns {JSX.Element} A dismissible error notification bar
 */
interface Props {
  size: "Full" | "Container";
}

const ErrorBar = ({ size }: Props) => {
  const { status, dispatch } = useStatusState();
  const location = useLocation();
  const errHandler = useError();

  const handleClick = () => {
    dispatch({
      group: "CHANGE",
      type: "DISPLAY",
      show: false,
    });
  };

  useEffect(() => {
    dispatch({
      group: "CHANGE",
      type: "DISPLAY",
      show: false,
    });
    if ((location.state as CustomLocationState)?.currErr) {
      errHandler(location.state?.currErr);
    }
  }, [location.pathname]);

  return (
    <div className="sticky top-0 z-50 w-full bg-red-500">
      {status.show && (
        <div
          className={`${size === "Container" ? "px-3 md:container md:mx-auto lg:px-20 2xl:px-44 3xl:px-64" : "px-3 "} flex items-center justify-between `}
        >
          <h3 className="">
            Error: {status.message} ({status.errorCode}){" "}
            {status.hideHome || location.pathname === '/' ? null : (
              <CustomDirectNav className="font-bold underline" pathname="/">
                Return to Home Page
              </CustomDirectNav>
            )}
          </h3>
          <button
            className="flex h-min w-min items-center justify-center transition-all duration-150 ease-in-out hover:text-dark_gray"
            onClick={handleClick}
          >
            <IoClose size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorBar;
