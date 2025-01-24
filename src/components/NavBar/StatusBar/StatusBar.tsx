import ErrorBar from "./ErrorBar";
import SuccessBar from "./SuccessBar";

interface Props {
  size: "Full" | "Container";
}

const StatusBar = ({size}: Props) => {
  return <div className="z-50">
    <ErrorBar size={size} />
    <SuccessBar size={size} />
  </div>;
};

export default StatusBar;
