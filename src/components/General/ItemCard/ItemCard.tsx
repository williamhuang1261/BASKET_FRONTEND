import AddToBasketBut from "./AddToBasketBut";
import {
  AmountProp,
  NameProp,
  RefProp,
  SuppliersProp,
} from "../../../interface/Destructed";
import { BsThreeDotsVertical } from "react-icons/bs";
import useCustomNavigation from "../../../hooks/useCustomNavigation";

interface Props {
  id: string;
  image: string;
  name: NameProp;
  reference: RefProp;
  amount: AmountProp;
  suppliers: SuppliersProp[];
}

/**
 * @description Displays a product card with image, details, pricing, and purchase options
 * @param {Object} props - The component props
 * @param {string} props.id - Product identifier
 * @param {string} props.image - Product image URL
 * @param {NameProp} props.name - Product name in different languages
 * @param {RefProp} props.reference - Product reference information
 * @param {AmountProp} props.amount - Product quantity information
 * @param {SuppliersProp[]} props.suppliers - Array of supplier information
 * @returns {JSX.Element} Product card component
 */
const ItemCard = ({ id, image, name, amount }: Props) => {
  const { directNav } = useCustomNavigation();

  return (
    <div className="flex max-h-full min-h-max w-72 flex-col rounded-sm border border-gray-200 bg-white shadow-lg md:w-full max-w-80">
      <div className="w-full flex-none">
        <div className="flex w-full justify-center p-1">
          <img
            alt={name?.en}
            src={image}
            className="h-52 w-52 rounded-sm object-contain"
          />
        </div>
        <div className="p-2">
          <div className="flex flex-wrap justify-between">
            <h5 className="text-black/50">
              {(amount?.isApprox ? "\x7E " : "") +
                amount?.quantity.toString() +
                " " +
                amount?.units}
            </h5>
          </div>
          <h4 className="text-lg font-semibold">{name?.en}</h4>
        </div>
      </div>
      <div className="flex w-full flex-auto flex-col justify-end gap-2 px-2 pb-2">
        <button
          onClick={() => directNav({ pathname: "/items/info/" + id })}
          className="bg-light_gray hover:bg-dark_gray hover:text-green flex h-10 items-center justify-between rounded-sm p-1 font-sans text-lg font-semibold shadow-md transition-all hover:cursor-default"
        >
          <BsThreeDotsVertical size={20} className="h-full" />
          <span className="flex h-full items-center justify-center text-black">
            See prices
          </span>
          <BsThreeDotsVertical size={20} className="h-full" />
        </button>
        <div>
          <AddToBasketBut onClick={() => console.log("Added")} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
