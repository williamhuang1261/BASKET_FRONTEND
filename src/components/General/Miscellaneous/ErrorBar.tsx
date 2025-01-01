import { IoClose } from "react-icons/io5";
import useStatusState from "../../../hooks/state/useStatusState";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  }, [location, dispatch]);

  return (
    <div className="sticky top-0 z-50 w-full bg-red-500">
      {status.show && (
        <div
          className={`${size === "Container" ? "px-3 md:container md:mx-auto md:px-20" : "px-3 "} flex items-center justify-between`}
        >
          <h3 className="">
            Error: {status.message} ({status.errorCode}){" "}
            {status.hideHome ? null : (
              <Link className="font-bold underline" to="/">
                Return to Home Page
              </Link>
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
