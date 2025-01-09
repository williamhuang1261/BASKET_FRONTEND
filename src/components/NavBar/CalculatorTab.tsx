import { SlCalculator } from "react-icons/sl";
import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";

/**
 * @description Calculator tab component that links to the basket calculator page.
 * @returns {JSX.Element} The calculator tab component with link.
 */
const CalculatorTab = () => {
  return (
    <>
      <CustomDirectNav
        pathname="/basket"
        aria-label="Go to Calculator Basket Page"
        className="flex"
      >
        <SlCalculator
          size="35"
          className=" cursor-pointer transition-all duration-300 ease-in-out hover:text-green"
        />
      </CustomDirectNav>
    </>
  );
};

export default CalculatorTab;
