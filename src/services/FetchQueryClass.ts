import { AxiosResponse } from "axios";
import { HttpService } from "./http-service";
import queryClient from "./queryClient";
import { RestrictedService } from "./restricted-service";
import { FetchQueryOptions } from "@tanstack/react-query";

type ModifiedFetchQueryOptions<T> = Omit<
  FetchQueryOptions<AxiosResponse<T, any>>,
  "queryKey" | "queryFn"
>;

class FetchQueryClass {
  service: HttpService | RestrictedService;

  constructor(service: HttpService | RestrictedService) {
    this.service = service;
  }

  async get<T>(
    endpoint: string = "",
    headers: object = {},
    options: ModifiedFetchQueryOptions<T> = {},
  ) {
    const res: AxiosResponse<T> = await queryClient.fetchQuery({
      queryKey: ["fetchQuery", "get", this.service.endpoint + endpoint],
      queryFn: () => this.service.get(endpoint, headers),
      ...options,
    });
    return res;
  }

  async post<T>(
    endpoint: string = "",
    headers: object = {},
    body: object = {},
    options: ModifiedFetchQueryOptions<T> = {},
  ) {
    const res: AxiosResponse<T> = await queryClient.fetchQuery({
      queryKey: ["fetchQuery", "post", this.service.endpoint + endpoint],
      queryFn: () => this.service.post(endpoint, headers, body),
      ...options,
    });
    return res;
  }

  async put<T>(
    endpoint: string = "",
    headers: object = {},
    body: object = {},
    options: ModifiedFetchQueryOptions<T> = {},
  ) {
    const res: AxiosResponse<T> = await queryClient.fetchQuery({
      queryKey: ["fetchQuery", "put", this.service.endpoint + endpoint],
      queryFn: () => this.service.put(endpoint, headers, body),
      ...options,
    });
    return res;
  }

  async delete<T>(
    endpoint: string = "",
    headers: object = {},
    options: ModifiedFetchQueryOptions<T> = {},
  ) {
    const res: AxiosResponse<T> = await queryClient.fetchQuery({
      queryKey: ["fetchQuery", "delete", this.service.endpoint + endpoint],
      queryFn: () => this.service.delete(endpoint, headers),
      ...options,
    });
    return res;
  }
}

export default FetchQueryClass;
export const createFetchQuery = (service: HttpService | RestrictedService) =>
  new FetchQueryClass(service);
