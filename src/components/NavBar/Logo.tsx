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
      <img
        src={BWLogo}
        alt={"The Basket BW Logo"}
        className=""
        style={{
          filter: mouseOver
            ? "invert(79%) sepia(7%) saturate(4204%) hue-rotate(56deg) brightness(107%) contrast(83%)"
            : "invert(0%) sepia(93%) saturate(7468%) hue-rotate(182deg) brightness(124%) contrast(91%)",
        }}
      />
    </CustomDirectNav>
  );
};

export default Logo;
