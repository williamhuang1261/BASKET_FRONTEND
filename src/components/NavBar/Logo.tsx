import { IoLogoJavascript } from "react-icons/io";
import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";

/**
 * @description Logo component that links to the home page.
 * @returns {JSX.Element} The logo component with home page link.
 */
const Logo = () => {
  return (
    <CustomDirectNav aria-label="Go to Home Page" pathname="/">
      <IoLogoJavascript
        size="50"
        className="transition-all duration-150 hover:text-green"
      />
    </CustomDirectNav>
  );
};

export default Logo;
