import { FaPlus } from "react-icons/fa6";

/**
 * @description Button component for adding items to the shopping basket
 * @param {Object} props - The component props
 * @param {Function} props.onClick - Callback function when button is clicked
 * @returns {JSX.Element} Add to basket button component
 */
interface Props {
  onClick: () => void;
}

const AddToBasketBut = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded border-2 border-green/50 px-2 py-1 transition-all hover:border-green hover:bg-green hover:shadow-md"
    >
      <FaPlus size={20} />
      <h2 className="text-lg font-semibold">Add to Basket</h2>
      <FaPlus size={20} />
    </button>
  );
};

export default AddToBasketBut;
