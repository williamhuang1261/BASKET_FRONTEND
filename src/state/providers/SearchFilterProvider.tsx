/**
 * @description Provider component for search filter functionality
 * @summary Wraps the application with search filter context provider
 * @param {Object} props - The properties object
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} A provider component that supplies search filter context
 */
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