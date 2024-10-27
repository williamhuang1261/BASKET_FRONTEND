import PriceBar from "./PriceBar";
import SortByPrice from "../../../utils/SortingPrice/SortByPrice";
import BestPerSupplier from "../../../utils/SortingPrice/BestPerSupplier";
import { ShowNormal } from "./ShowNormal";
import AddToBasketBut from "./AddToBasketBut";
import SupplierDropdown from "./SupplierDropdown";
import {
  AmountProp,
  NameProp,
  RefProp,
  SuppliersProp,
} from "../../../interface/Destructed";

interface Props {
  id: string
  image: string;
  name: NameProp;
  reference: RefProp;
  amount: AmountProp;
  brand: string;
  suppliers: SuppliersProp[];
}

const ItemCard = ({ id, image, name, reference, amount, brand, suppliers }: Props) => {
  const sorted = SortByPrice(
    { id: id, name: name, ref: reference, amount: amount, suppliers: suppliers },
    { maxQuantity: undefined },
  );
  const filtered = BestPerSupplier(sorted);
  const normals = ShowNormal({ id: id, suppliers: suppliers });

  return (
    <div className="flex max-h-full min-h-max w-72 flex-col rounded border-1 border-dark_gray bg-white md:w-full ">
      <div className="w-full flex-none">
        <div className="items-align flex w-full justify-center">
          <img alt={name?.en} src={image} className="h-52 w-52 object-cover" />
        </div>
        <div className="p-2">
          <div>
            <div className="flex flex-wrap justify-between">
              <h5 className="text-black/50">{brand}</h5>
              <h5 className="text-black/50">
                {(amount?.isApprox ? "\x7E " : "") +
                  amount?.quantity.toString() +
                  " " +
                  amount?.units}
              </h5>
            </div>
          </div>
          <h4 className="text-xl">{name?.en}</h4>
        </div>
        <div className="px-2">
          <PriceBar filtered={filtered} normal={normals} />
        </div>
      </div>
      <div className="flex flex-auto flex-col justify-end px-2 pb-2">
        <div>
          <SupplierDropdown filtered={filtered} />
        </div>
        <div>
          <AddToBasketBut onClick={() => console.log("Added")} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
