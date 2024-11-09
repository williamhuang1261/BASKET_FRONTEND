import { FaPlus } from "react-icons/fa6";

interface Props {
  onClick: () => void;
}

const AddToBasketBut = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded border-2 hover:shadow-md border-light_green px-2 py-1 transition-all duration-100 ease-in-out hover:border-green hover:bg-green"
    >
      <FaPlus size={20} />
      <h2 className="text-xl font-semibold">Add to Basket</h2>
      <FaPlus size={20} />
    </button>
  );
};

export default AddToBasketBut;
