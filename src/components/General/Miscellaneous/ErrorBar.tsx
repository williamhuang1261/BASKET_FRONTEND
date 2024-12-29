import { IoClose } from "react-icons/io5";
import useStatusState from "../../../hooks/state/useStatusState";

interface Props {
  size: "Full" | "Container";
}

const ErrorBar = ({ size }: Props) => {
  const { status, dispatch } = useStatusState();

  const handleClick = () => {
    dispatch({
      group: "CHANGE",
      type: "DISPLAY",
      show: false,
    });
  };

  return (
    <div className="w-full bg-red-500">
      <div
        className={`${size === "Container" ? "px-3 md:container md:mx-auto md:px-20" : "px-3 "} ${status.show ? "" : "hidden"} flex items-center justify-between`}
      >
        <h3 className="">{`Error: ${status.message} (${status.errorCode})`}</h3>
        <button
          className="flex h-min w-min items-center justify-center transition-all duration-150 ease-in-out hover:text-dark_gray"
          onClick={handleClick}
        >
          <IoClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default ErrorBar;
