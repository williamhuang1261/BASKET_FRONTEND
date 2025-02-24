import { AxiosResponse } from "axios";
import { HttpService } from "./http-service";
import queryClient from "./queryClient";
import { RestrictedService } from "./restricted-service";

class FetchQueryClass {
  service: HttpService | RestrictedService;

  constructor(service: HttpService | RestrictedService) {
    this.service = service;
  }

  async get<T>(endpoint: string = "", headers: object = {}) {
    const res: AxiosResponse<T> = await queryClient.fetchQuery({
      queryKey: ["fetchQuery", "get", this.service.endpoint + endpoint],
      queryFn: () => this.service.get(endpoint, headers),
    });
    return res;
  }

  async post<T>(endpoint: string = "", headers: object = {}, body: object = {}) {
    const res: AxiosResponse<T> = await queryClient.fetchQuery({
      queryKey: ["fetchQuery", "post", this.service.endpoint + endpoint],
      queryFn: () => this.service.post(endpoint, headers, body),
    });
    return res;
  }

  async put<T>(endpoint: string = "", headers: object = {}, body: object = {}) {
    const res: AxiosResponse<T> = await queryClient.fetchQuery({
      queryKey: ["fetchQuery", "put", this.service.endpoint + endpoint],
      queryFn: () => this.service.put(endpoint, headers, body),
    });
    return res;
  }

  async delete<T>(endpoint: string = "", headers: object = {}) {
    const res: AxiosResponse<T> = await queryClient.fetchQuery({
      queryKey: ["fetchQuery", "delete", this.service.endpoint + endpoint],
      queryFn: () => this.service.delete(endpoint, headers),
    });
    return res;
  }
}

export default FetchQueryClass;
export const createFetchQuery = (service: HttpService | RestrictedService) => new FetchQueryClass(service);
