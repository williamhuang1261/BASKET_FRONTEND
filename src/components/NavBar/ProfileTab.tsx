import { LuUser2 } from "react-icons/lu";
import Dropdown from "../General/Miscellaneous/Dropdown";
import { useContext } from "react";
import UserContext from "../../state/contexts/UserContext";
import NotSignedInOptions from "../Auth/NotSignedInOptions";
import SignedInOptions from "../Auth/SignedInOptions";

/**
 * @description A profile dropdown component that displays different options based on user authentication status.
 * @returns {JSX.Element} The profile tab component with dropdown menu.
 */
const ProfileTab = () => {
  const {user} = useContext(UserContext)

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
          user.isLoggedIn ? <SignedInOptions /> : <NotSignedInOptions />
        }
        type="Click"
        ariaLabel="Profile"
      />
    </div>
  );
};

export default ProfileTab;
