import { LuUser2 } from "react-icons/lu";
import Dropdown from "../General/Miscellaneous/Dropdown";
import { useContext } from "react";
import UserContext from "../../state/contexts/UserContext";
import NotSignedInOptions from "../Auth/NotSignedInOptions";
import SignedInOptions from "../Auth/SignedInOptions";

// Allows access to profile, profile settings, and sign out button
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
