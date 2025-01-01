import axios, { CanceledError } from "axios";
import { url } from "../../config/default.json";

const instance = axios.create({
  baseURL: url,
});

/**
 * @description Base service class for making HTTP requests
 * @summary Provides basic HTTP methods with configurable endpoints and headers
 */
class HttpService {
  endpoint: string;
  headers: object;
  
  /**
   * @description Creates a new HttpService instance
   * @param {string} endpoint - Base endpoint for all requests
   * @param {object} headers - Default headers to include in all requests
   */
  constructor(endpoint: string = "", headers: object = {}) {
    this.endpoint = endpoint;
    this.headers = headers;
  }

  /**
   * @description Performs a GET request
   * @param {string} endpoint - The API endpoint to call
   * @param {object} headers - Additional headers to include
   * @returns {Promise<any>} The response from the server
   */
  get(endpoint: string = "", headers: object = {}) {
    return instance.get(this.endpoint + endpoint, {
      headers: { ...this.headers, ...headers },
    });
  }

  /**
   * @description Performs a POST request
   * @param {string} endpoint - The API endpoint to call
   * @param {object} headers - Additional headers to include
   * @param {object} body - The request body
   * @returns {Promise<any>} The response from the server
   */
  post(endpoint: string = "", headers: object = {}, body: object = {}) {
    return instance.post(this.endpoint + endpoint, body, {
      headers: { ...this.headers, ...headers },
    });
  }

  /**
   * @description Performs a PUT request
   * @param {string} endpoint - The API endpoint to call
   * @param {object} headers - Additional headers to include
   * @param {object} body - The request body
   * @returns {Promise<any>} The response from the server
   */
  put(endpoint: string = "", headers: object = {}, body: object = {}) {
    return instance.put(this.endpoint + endpoint, body, {
      headers: { ...this.headers, ...headers },
    });
  }

  /**
   * @description Performs a DELETE request
   * @param {string} endpoint - The API endpoint to call
   * @param {object} params - URL parameters to include
   * @param {object} headers - Additional headers to include
   * @returns {Promise<any>} The response from the server
   */
  delete(endpoint: string = "", params?: object, headers: object = {}) {
    return instance.delete(this.endpoint + endpoint, {
      headers: { ...this.headers, ...headers },
      params: params
    });
  }
}
export {CanceledError, HttpService};
export const createHttpService = (endpoint: string, headers: object) =>
  new HttpService(endpoint, headers);
