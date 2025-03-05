import { ItemServices } from "../../../services/serviceList";
import { createFetchQuery } from "../../../services/FetchQueryClass";

export type AutocompleteResultsType = {
  data: {
    suggestion: string;
  }[];
  message: string;
};

const getSearchAutocomplete = async (query: string) => {
  const instance = createFetchQuery(ItemServices);
  const res = await instance.post<AutocompleteResultsType>(
    "/autocomplete",
    {},
    { config: { value: query, language: "en", count: 10 } },
    { queryKey: [query], staleTime: 1000 * 60 * 5 },
  );
  return res.data.data.map((s) => s.suggestion);
};

export default getSearchAutocomplete;
