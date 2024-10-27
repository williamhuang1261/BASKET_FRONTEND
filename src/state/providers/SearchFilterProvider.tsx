import { ReactNode, useReducer } from "react";
import searchFilterReducer from "../reducers/searchFilterReducer";
import searchFilterEX from "../../data/SearchFilterEX";
import SearchFilterContext from "../contexts/SearchFilterContext";

interface Props {
  children: ReactNode;
}

const SearchFilterProvider = ({children} : Props) => {
  const [searchFilter, dispatch] = useReducer(searchFilterReducer, searchFilterEX);

  return (
    <SearchFilterContext.Provider value = {{searchFilter, dispatch}}>
      {children}
    </SearchFilterContext.Provider>
  )
}

export default SearchFilterProvider;