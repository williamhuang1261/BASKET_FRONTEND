import { signOut } from "firebase/auth";
import { auth } from "./initFirebase";

const logOut = () => {
  console.log("Logging out");
  localStorage.clear();
  signOut(auth)
    .then((e) => console.log("Logged out", e))
    .catch((e) => console.log("Error logging out", e));
};

export default logOut;
