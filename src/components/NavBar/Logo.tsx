import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";
import BWLogo from "../../assets/BW_Basket_Logo.svg";
import { useState } from "react";

/**
 * @description Logo component that links to the home page.
 * @returns {JSX.Element} The logo component with home page link.
 */
const Logo = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <CustomDirectNav
      aria-label="Go to Home Page"
      pathname="/"
      className="w-32 outline"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <img src={BWLogo} alt={"The Basket BW Logo"} className="" style={
        { color: mouseOver ? "#6ee94f" : "#000000" }
      }/>
    </CustomDirectNav>
  );
};

export default Logo;
