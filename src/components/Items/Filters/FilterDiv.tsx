import useSearchFilterState from "../../../hooks/state/useSearchFilterState";
import useUserState from "../../../hooks/state/useUserState";
import TowerAd from "../../General/Ads/TowerAd";
import CategoryFilter from "./CategoryFilter";
import LocationFilter from "./LocationFilter";
import StoreFilter from "./StoreFilter";

// Div containing all filters
const FilterDiv = () => {
  const { dispatch } = useUserState();
  const { searchFilter } = useSearchFilterState();

  const handleClick = () => {
    console.log(searchFilter);
    dispatch({
      group: "CHANGE",
      type: "SEARCH_FILTERS_ARRAY",
      target: "CAT",
      new: searchFilter.categories,
    });
    dispatch({
      group: "CHANGE",
      type: "SEARCH_FILTERS_ARRAY",
      target: "STORES",
      new: searchFilter.store,
    });
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
            className="rounded border-0.5 border-dark_gray bg-green/80 px-3 font-semibold ring-green transition-all duration-75 ease-in-out hover:scale-105 hover:ring-2"
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
