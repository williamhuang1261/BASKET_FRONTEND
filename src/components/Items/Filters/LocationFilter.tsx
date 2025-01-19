import Slider from "./Slider";
import useSearchFilterState from "../../../hooks/state/useSearchFilterState";
import searchFilterEX from "../../../data/SearchFilterEX";
import { useState } from "react";

// Location slider

/**
 * @description Component for filtering items by distance/location
 * @summary Provides a slider to adjust the search radius/distance
 * @returns {JSX.Element} A location filter component with distance slider
 */
const LocationFilter = () => {
  const { searchFilter, dispatch } = useSearchFilterState();
  const [value, setValue] = useState(searchFilterEX.distance.amount);

  return (
    <div className="py-5">
      <h2 className="font-semibold">Distance</h2>
      <Slider
        id={"LocationSlider"}
        initial={searchFilterEX.distance.amount}
        min={0}
        max={100}
        steps={10}
        width={52}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
          dispatch({
            group: "CHANGE",
            type: "DIST_AMOUNT",
            amount: parseInt(e.target.value),
          });
        }}
      />
      <div className="flex w-52 justify-center text">
        <h3 className="flex w-8 justify-end pe-1 ">{value}</h3>
        <h3 className="">{searchFilter.distance.units}</h3>
      </div>
    </div>
  );
};

export default LocationFilter;
