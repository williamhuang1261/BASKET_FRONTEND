import { useContext } from "react";
import SearchFilterContext from "../../state/contexts/SearchFilterContext";

const useSearchFilterState = () => {
  return useContext(SearchFilterContext);
};

export default useSearchFilterState;
