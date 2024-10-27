import { Dispatch } from "react";
import SearchFilterProps from "../../interface/SearchFilterProps";
import { filterAction } from "../reducers/searchFilterReducer";
import React from "react";

interface SearchFilterContextType {
  searchFilter: SearchFilterProps;
  dispatch: Dispatch<filterAction>;
}

const SearchFilterContext = React.createContext<SearchFilterContextType>(
  {} as SearchFilterContextType,
);

export default SearchFilterContext;
