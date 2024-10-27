import useBasketState from "../../hooks/state/useBasketState";
import InfoBox from "../General/Miscellaneous/InfoBox/InfoBox";
import ChangeLocation from "./ChangeLocation";
import FilterStoresDrop from "./FilterStoresDrop";
import MaxStoresSelect from "./MaxStoresSelect";

// Header of Basket Page containing banner, info boxes and filters
const BasketHeader = () => {
  const { basket } = useBasketState();

  return (
    <div className="">
      <div
        className="flex h-16 items-center justify-center gap-3 rounded border-0.5 bg-green/80 md:h-24 lg:h-32"
        onClick={() => console.log(basket)}
      >
        <h1 className="3xl:text-gray-4xl text-xl font-bold lg:text-3xl">
          Basket
        </h1>
        <div className="flex xl:mt-0.5">
          <InfoBox iconSize={25} title="Basket">
            Here, the website will calculate the best stores combination for you
            to minimize the of your groceries. Try playing with the filters to
            obtain a good representation of your shopping list
          </InfoBox>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-around py-2 lg:py-4">
        <div className="flex flex-none items-center justify-center gap-1 px-2 py-1 ">
          <FilterStoresDrop />
          <InfoBox iconSize={20} title="Filter Stores">
            Use this filter to see only the products of the selected stores. The
            calculator will find the best combination to minimize the cost in
            these stores
          </InfoBox>
        </div>
        <div className="flex flex-none items-center justify-center gap-1 px-2 py-1 ">
          <MaxStoresSelect />
          <InfoBox iconSize={20} title="Max Stores">
            Limit the number of stores you want to visit. Due to hardware
            limitation, this function can only be used to calculate the best
            combination with 7 stores.
          </InfoBox>
        </div>
        <div className="flex-none px-2 py-1">
          <ChangeLocation />
          {/* Have Distance option, change location as a button */}
        </div>
      </div>
    </div>
  );
};

export default BasketHeader;
