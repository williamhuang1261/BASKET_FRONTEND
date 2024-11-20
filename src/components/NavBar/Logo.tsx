import { IoLogoJavascript } from "react-icons/io";
import { Link } from "react-router-dom";

// Logo icon with link to Home Page
const Logo = () => {
  return (
    <button aria-label="Go to Home Page">
      <Link to="/" aria-label="Go back to Home Page">
        <IoLogoJavascript
          size="50"
          className="transition-all duration-150 hover:text-green"
        />
      </Link>
    </button>
  );
};

export default Logo;
