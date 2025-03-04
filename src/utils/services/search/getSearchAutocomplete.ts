import { ItemServices } from "../../../services/serviceList";
import { createFetchQuery } from "../../../services/fetchQuery";

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
  );
  return res.data.data.map((s) => s.suggestion);
};

export default getSearchAutocomplete;
