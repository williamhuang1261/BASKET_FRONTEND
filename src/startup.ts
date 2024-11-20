import checkLoginStatus from "./utils/auth/checkLoginStatus";
import "./utils/auth/initFirebase";

export const startup = async () => {
  checkLoginStatus();
};
