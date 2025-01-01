import { useContext } from "react";
import SearchFilterContext from "../../state/contexts/SearchFilterContext";

/**
 * @description Custom hook to access the search filter context state
 * @returns {Context} The search filter context value
 */
const useSearchFilterState = () => {
  return useContext(SearchFilterContext);
};

export default useSearchFilterState;
