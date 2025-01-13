import { QueryClient } from "@tanstack/react-query";

/**
 * @description React Query client configuration
 * @summary Creates a QueryClient instance with infinite stale time
 * @constant {QueryClient}
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
