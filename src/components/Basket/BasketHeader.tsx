import useBasketState from "../../hooks/state/useBasketState";
import InfoBox from "../General/Miscellaneous/InfoBox";
import ChangeLocation from "./BasketLocationModif";
import FilterStoresDrop from "./FilterStoresDrop";
import MaxStoresSelect from "./MaxStoresSelect";

/**
 * @component BasketHeader
 * @description Header component for the Basket page that displays a banner, information boxes, and filtering options
 * Contains controls for:
 * - Filtering stores
 * - Setting maximum number of stores
 * - Changing location
 *
 * @returns {JSX.Element} Header section with banner and filter controls
 */
const BasketHeader = () => {
  const { basket } = useBasketState();

  return (
    <div className="bg-white">
      <div
        className="flex h-16 items-center justify-center gap-3 rounded-sm border-0.5 border-gray-200 bg-green/80 shadow-md md:h-24 lg:h-32"
        onClick={() => console.log(basket)}
      >
        <h1 className="text-lg font-bold lg:text-2xl 3xl:text-3xl">Basket</h1>
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
        <div className="flex w-full flex-none items-center justify-center px-2 py-1 lg:max-w-max">
          <ChangeLocation />
          {/* Have Distance option, change location as a button */}
        </div>
      </div>
    </div>
  );
};

export default BasketHeader;
