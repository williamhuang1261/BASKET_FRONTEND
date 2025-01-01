import { Link } from "react-router-dom";
import LogOut from "./LogOut";

/**
 * @description Component that displays options available for signed-in users
 * @returns {JSX.Element} A dropdown menu with settings and logout options
 */
const NotSignedInOptions = () => {
  return (
    <div className="absolute -left-14 z-10 grid w-28 grid-rows-2 rounded border-0.5 border-dark_gray bg-white">
      <button
        aria-label="Go to settings"
        type="button"
        className="border-b-0.5 p-1 hover:bg-light_gray"
      >
        <Link to={"/users"} aria-label="Go to Profile Page">
          Settings
        </Link>
      </button>
      <LogOut />
    </div>
  );
};

export default NotSignedInOptions;