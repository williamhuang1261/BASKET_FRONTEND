import { getAuth } from "firebase/auth";
import { HttpService } from "./http-service";

/**
 * @description Service class that handles authenticated HTTP requests by extending HttpService
 * @summary Automatically adds Firebase authentication token to all requests
 */
class RestrictedService extends HttpService {
  /**
   * @description Gets the current user's Firebase ID token
   * @returns {Promise<string>} The authentication token
   * @throws {Error} If user is not logged in or token retrieval fails
   * @private
   */
  private async getToken() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      return Promise.reject({code: 401, message: "User not logged in" });
    }
    try {
      const token = await user.getIdToken();
      return token;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**
   * @description Performs an authenticated GET request
   * @param {string} endpoint - The API endpoint to call
   * @param {object} headers - Additional headers to include
   * @returns {Promise<any>} The response from the server
   */
  async get(endpoint: string = "", headers: object = {}) {
    try {
      const token = await this.getToken();
      return super.get(endpoint, {
        ...headers,
        "x-auth-token": token,
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**
   * @description Performs an authenticated POST request
   * @param {string} endpoint - The API endpoint to call
   * @param {object} headers - Additional headers to include
   * @param {object} body - The request body
   * @returns {Promise<any>} The response from the server
   */
  async post(endpoint: string = "", headers: object = {}, body: object = {}) {
    try {
      const token = await this.getToken();
      return super.post(
        endpoint,
        {
          ...headers,
          "x-auth-token": token,
        },
        body,
      );
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**
   * @description Performs an authenticated PUT request
   * @param {string} endpoint - The API endpoint to call
   * @param {object} headers - Additional headers to include
   * @param {object} body - The request body
   * @returns {Promise<any>} The response from the server
   */
  async put(endpoint: string = "", headers: object = {}, body: object = {}) {
    try {
      const token = await this.getToken();
      return super.put(
        endpoint,
        {
          ...headers,
          "x-auth-token": token,
        },
        body,
      );
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**
   * @description Performs an authenticated DELETE request
   * @param {string} endpoint - The API endpoint to call
   * @param {object} params - URL parameters to include
   * @param {object} headers - Additional headers to include
   * @returns {Promise<any>} The response from the server
   */
  async delete(endpoint: string = "", params?: object, headers: object = {}) {
    try {
      const token = await this.getToken();
      return super.delete(endpoint, params, {
        ...headers,
        "x-auth-token": token,
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export { RestrictedService };
export const createRestrictedService = (endpoint: string, headers: object) =>
  new RestrictedService(endpoint, headers);
export const UserServices = createRestrictedService("/users", {});
