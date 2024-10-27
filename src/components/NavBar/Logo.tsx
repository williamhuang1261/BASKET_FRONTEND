import { IoLogoJavascript } from "react-icons/io";
import { Link } from "react-router-dom";


// Logo icon with link to Home Page
const Logo = () => {
  return (
    <Link to="/" aria-label="Go back to Home Page">
      <IoLogoJavascript size="50" className="hover:text-green transition-all duration-150"/>
    </Link>
  );
};

export default Logo;
