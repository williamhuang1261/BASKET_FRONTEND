import FilterPopUp from "../Filters/FilterPopUp";
import ResultsBanner from "./ResultsBanner";
import SortDrop from "./SortDrop";

// Contains result header, #results, display changing layout, sort filter
const HeaderDiv = () => {
  return (
    <div className="flex-none">
      <ResultsBanner />
      <div className="flex items-center justify-between py-2">
        <h4 className=" hidden flex-none md:block">48 items found</h4>
        <div className="md:hidden">
          <FilterPopUp />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2 ">
          <SortDrop />
        </div>
      </div>
    </div>
  );
};

export default HeaderDiv;
