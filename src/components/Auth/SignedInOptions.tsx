import LogOut from "./LogOut";
import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";

/**
 * @description Component that displays options available for signed-in users
 * @returns {JSX.Element} A dropdown menu with settings and logout options
 */
const NotSignedInOptions = () => {
  return (
    <div className="absolute -left-14 z-10 grid w-28 grid-rows-2 rounded-sm border-0.5 border-dark_gray bg-white">
      <CustomDirectNav
        pathname={"/account"}
        aria-label="Go to Profile Page"
        className="flex cursor-pointer items-center justify-center border-b-0.5 p-1 border-gray-200 hover:bg-light_gray"
      >
        Settings
      </CustomDirectNav>
      <LogOut />
    </div>
  );
};

export default NotSignedInOptions;
