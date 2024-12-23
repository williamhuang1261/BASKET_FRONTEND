import axios, { CanceledError } from "axios";
import { url } from "../../config/default.json";

const instance = axios.create({
  baseURL: url,
});

class HttpService {
  endpoint: string;
  headers: object;
  constructor(endpoint: string = "", headers: object = {}) {
    this.endpoint = endpoint;
    this.headers = headers;
  }

  get(endpoint: string = "", params?: object, headers: object = {}) {
    return instance.get(this.endpoint + endpoint, {
      headers: { ...this.headers, ...headers },
      params: params
    });
  }

  post(endpoint: string = "", headers: object = {}, body: object = {}) {
    return instance.post(this.endpoint + endpoint, body, {
      headers: { ...this.headers, ...headers },
    });
  }

  put(endpoint: string = "", headers: object = {}, body: object = {}) {
    return instance.put(this.endpoint + endpoint, body, {
      headers: { ...this.headers, ...headers },
    });
  }

  delete(endpoint: string = "", params?: object, headers: object = {}) {
    return instance.delete(this.endpoint + endpoint, {
      headers: { ...this.headers, ...headers },
      params: params
    });
  }
}
export { CanceledError };
export const createHttpService = (endpoint: string, headers: object) =>
  new HttpService(endpoint, headers);
