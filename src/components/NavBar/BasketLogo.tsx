import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";
import BasketLogoImage from "../../assets/BasketLogo.svg";

interface Props {
  color?: "colored" | "white" | "black";
}

/**
 * @description Logo component that links to the home page.
 * @returns {JSX.Element} The logo component with home page link.
 */
const BasketLogo = ({ color }: Props) => {
  return (
    <CustomDirectNav
      aria-label="Go to Home Page"
      pathname="/"
      className="mt-1 flex w-full flex-col items-center justify-center rounded-md hover:opacity-75 focus-visible:outline md:mt-0"
    >
      <img
        src={BasketLogoImage}
        alt={"The Basket BW Logo"}
        className="w-full"
        style={{
          filter: `
          ${color === "black" || color === "white" ? "brightness(0)" : ""} ${
            color === "white" ? "invert(1)" : ""
          }`,
        }}
      />
      <p className="font-righteous w-full text-2xl">The Basket</p>
    </CustomDirectNav>
  );
};

export default BasketLogo;
