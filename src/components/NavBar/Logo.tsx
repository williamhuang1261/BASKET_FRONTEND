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
        className="transition-all hover:opacity-90"
        style={{
          filter: mouseOver
            ? "invert(72%) sepia(39%) saturate(748%) hue-rotate(72deg) brightness(95%) contrast(92%)"
            : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
        }}
      />
    </CustomDirectNav>
  );
};

export default Logo;