import { IoLogoJavascript } from "react-icons/io";
import { Link } from "react-router-dom";

/**
 * @description Logo component that links to the home page.
 * @returns {JSX.Element} The logo component with home page link.
 */
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
