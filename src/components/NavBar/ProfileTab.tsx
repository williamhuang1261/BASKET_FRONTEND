import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import Dropdown from "../General/Miscellaneous/Dropdown";

// Allows access to profile, profile settings, and sign out button
const ProfileTab = () => {
  return (
    <div>
      <Dropdown
        title={
          <LuUser2
            size="35"
            className="cursor-pointer transition-all duration-300 hover:text-green"
          />
        }
        className="text-green"
        body={
          <div className="absolute -left-14 z-10 grid grid-rows-2 w-28 rounded border-0.5 border-dark_gray bg-white">
            <button
              type="button"
              className="border-b-0.5 p-1 hover:bg-light_gray"
            >
              <Link to={"/users"} aria-label="Go to Profile Page">
                Settings
              </Link>
            </button>
            <button
              type="button"
              aria-label="Sign out"
              className="p-1 text-red-500 hover:bg-light_gray"
            >
              Sign out
            </button>
          </div>
        }
        type="Click"
      />
    </div>
  );
};

export default ProfileTab;
