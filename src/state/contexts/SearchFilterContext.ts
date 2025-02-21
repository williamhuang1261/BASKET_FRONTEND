/**
 * @description Context for managing search and filter states
 * @summary Provides search filter configuration and dispatch methods
 * @type {React.Context<SearchFilterContextType>}
 */
import { Dispatch } from "react";

import React from "react";
import { filterAction } from "../../interface/reducers/searchFilterReducer";
import { SearchFilterProps } from "../../interface/SearchFilterProps";

interface SearchFilterContextType {
  searchFilter: SearchFilterProps;
  dispatch: Dispatch<filterAction>;
}

const SearchFilterContext = React.createContext<SearchFilterContextType>(
  {} as SearchFilterContextType,
);

export default SearchFilterContext;
