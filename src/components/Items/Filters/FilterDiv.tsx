import useSearchFilterState from "../../../hooks/state/useSearchFilterState";
import useUserState from "../../../hooks/state/useUserState";
import TowerAd from "../../General/Ads/TowerAd";
import CategoryFilter from "./CategoryFilter";
import LocationFilter from "./LocationFilter";
import StoreFilter from "./StoreFilter";

// Div containing all filters
/**
 * @description A container component for all filter components
 * @summary Displays all filter options in a sidebar layout with advertisements
 * @returns {JSX.Element} A filter container with location, category, and store filters
 */
const FilterDiv = () => {
  const { dispatch } = useUserState();
  const { searchFilter } = useSearchFilterState();

  const handleClick = () => {
    console.log(searchFilter);
    dispatch({
      group: "CHANGE",
      type: "DISTANCE",
      newDist: searchFilter.distance,
    });
  };

  return (
    <div className="p-5">
      <div>
        <div className="flex justify-between border-b-0.5 border-dark_gray/50 pb-3">
          <h1 className=" text-2xl font-semibold">Filters</h1>
          <input
            type="button"
            value={"Apply"}
            className="rounded border-0.5 hover:shadow-md hover:bg-green/80 hover:border-transparent bg-green/50 px-3 font-semibold transition-all duration-150 ease-in-out cursor-pointer"
            onClick={handleClick}
          />
        </div>
        <div className="border-b-0.5 border-dark_gray/50">
          <LocationFilter />
        </div>
        <div className="border-b-0.5 border-dark_gray/50">
          <CategoryFilter />
        </div>
        <div className="border-b-0.5 border-dark_gray/50">
          <StoreFilter />
        </div>
      </div>
      <div className="flex flex-col gap-10 py-5">
        <TowerAd />
        <TowerAd />
      </div>
    </div>
  );
};

export default FilterDiv;
