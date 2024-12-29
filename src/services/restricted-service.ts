import { getAuth } from "firebase/auth";
import { HttpService } from "./http-service";

class RestrictedService extends HttpService {
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
