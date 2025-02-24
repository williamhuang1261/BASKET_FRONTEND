import { useQueryClient } from "@tanstack/react-query";
import { SearchServices } from "../../services/serviceList";
import { AxiosResponse } from "axios";

export type AutocompleteResultsType = {
  data: {
    suggestion: string;
  }[];
  message: string;
};

const useSearchAutocomplete = () => {
  const queryClient = useQueryClient();
  return async (query: string) => {
    const res: AxiosResponse<AutocompleteResultsType> =
      await queryClient.fetchQuery({
        queryKey: ["search", "autocomplete"],
        queryFn: () => {
          return SearchServices.post(
            "/autocomplete",
            {},
            {
              config: {
                value: query,
                language: "en",
                count: 10,
              },
            },
          );
        },
      });
    return res.data;
  };
};

export default useSearchAutocomplete;
