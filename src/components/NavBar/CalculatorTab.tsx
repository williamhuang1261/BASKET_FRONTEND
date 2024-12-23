import { SlCalculator } from "react-icons/sl";
import { Link } from "react-router-dom";

// Links to Basket Page
const CalculatorTab = () => {
  return (
    <Link to="/basket" aria-label="Go to Calculator Basket Page" className="w-full h-full">
      <SlCalculator size="35" className="cursor-pointer hover:text-green transition-all duration-300 ease-in-out" />
    </Link>
  );
};

export default CalculatorTab;
