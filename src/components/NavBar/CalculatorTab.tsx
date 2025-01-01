import { SlCalculator } from "react-icons/sl";
import { Link } from "react-router-dom";

/**
 * @description Calculator tab component that links to the basket calculator page.
 * @returns {JSX.Element} The calculator tab component with link.
 */
const CalculatorTab = () => {
  return (
    <Link to="/basket" aria-label="Go to Calculator Basket Page" className="w-full h-full">
      <SlCalculator size="35" className="cursor-pointer hover:text-green transition-all duration-300 ease-in-out" />
    </Link>
  );
};

export default CalculatorTab;
