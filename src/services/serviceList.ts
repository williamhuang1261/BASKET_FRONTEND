import { createHttpService } from "./http-service";
import { createRestrictedService } from "./restricted-service";

export const UserServices = createRestrictedService("/users", {});
export const SearchServices = createHttpService("/items", {});
