import { IoLogoJavascript } from "react-icons/io";
import Spinner from "../General/Miscellaneous/Spinner";

const Fallback = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="p-2">
        <div className="py-5">
          <IoLogoJavascript size="50" />
        </div>
        <Spinner color="green" size="12" />
      </div>
    </div>
  );
};

export default Fallback;
