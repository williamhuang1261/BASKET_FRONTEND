import { RiArrowDropDownLine } from "react-icons/ri";
import suppliers from "../../data/Suppliers";
import Dropdown from "../General/Miscellaneous/Dropdown";
import Checkbox from "../General/Miscellaneous/Checkbox";
import useBasketState from "../../hooks/state/useBasketState";

// Filter the selection of stores
const FilterStoresDrop = () => {
  const { dispatch } = useBasketState();

  return (
    <div>
      <Dropdown
        title={
          <div className="flex h-max items-center justify-center overflow-hidden rounded-full border-0.5 bg-light_gray px-3 hover:text-green">
            <h3 className="pb-0.5 font-semibold">Filter Stores</h3>
            <RiArrowDropDownLine size={20} className="h-full" />
          </div>
        }
        body={
          <div className="h-96 w-80 absolute top-0 z-20 flex flex-col overflow-auto rounded border-0.5 border-dark_gray bg-white p-2">
            <Checkbox
              items={suppliers}
              onCheck={(s) =>
                dispatch({
                  group: "ADD",
                  type: "FILTERED_STORES",
                  store: s,
                })
              }
              onUncheck={(s) =>
                dispatch({
                  group: "DELETE",
                  type: "FILTERED_STORES",
                  store: s,
                })
              }
            />
          </div>
        }
        className="rounded bg-light_gray/20 text-green"
        type="Click"
      />
    </div>
  );
};

export default FilterStoresDrop;
