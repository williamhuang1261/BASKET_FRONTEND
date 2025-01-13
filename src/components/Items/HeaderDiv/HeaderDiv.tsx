import useWindowSize from "../../../hooks/useWindowSize";
import FilterPopUp from "../Filters/FilterPopUp";
import ResultsBanner from "./ResultsBanner";
import SortDrop from "./SortDrop";

/**
 * @description Header component for the search results page
 * @summary Contains the results banner, item count, filters, and sorting options
 * @returns {JSX.Element} A header section with search results controls and information
 */
const HeaderDiv = () => {
  const winSize = useWindowSize();

  return (
    <div className="flex-none">
      <ResultsBanner />
      <div className="flex items-center justify-between py-2 flex-wrap">
        {winSize < 1 ? (
          <div className="z-[60]">
            <FilterPopUp />
          </div>
        ) : (
          <h4 className="flex-none">48 items found</h4>
        )}
        <div className="flex flex-wrap items-center justify-end gap-2 my-1">
          <SortDrop />
        </div>
      </div>
    </div>
  );
};

export default HeaderDiv;
