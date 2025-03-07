import { RiArrowDropDownLine } from "react-icons/ri";
import suppliers from "../../data/Suppliers";
import Dropdown from "../General/Miscellaneous/Dropdown";
import Checkbox from "../General/Miscellaneous/Checkbox";
import useBasketState from "../../hooks/state/useBasketState";

/**
 * @description Renders a dropdown menu for filtering store selections
 * @summary Provides a checkbox list of available stores that users can filter
 * @returns {JSX.Element} The filter stores dropdown component
 */
const FilterStoresDrop = () => {
  const { dispatch } = useBasketState();

  return (
    <div>
      <Dropdown
        title={
          <div className="flex h-max items-center justify-center overflow-hidden rounded-sm border-[0.5px]  border-gray-200 bg-light_gray px-3">
            <h3 className="pb-0.5 font-semibold">Filter Stores</h3>
            <RiArrowDropDownLine size={20} className="h-full" />
          </div>
        }
        body={
          <div className="h-96 w-80 absolute top-0 z-20 flex flex-col overflow-auto rounded-sm border-[0.5px] border-dark_gray bg-white p-2">
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
              size={16}
            />
          </div>
        }
        className="rounded-sm bg-light_gray/20 text-green"
        type="Click"
        ariaLabel="Filter Stores"
      />
    </div>
  );
};

export default FilterStoresDrop;
