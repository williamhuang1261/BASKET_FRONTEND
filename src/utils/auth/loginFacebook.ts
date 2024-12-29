import {
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./initFirebase";

const loginFacebook = () => {

  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider)
    .then(() => {
      console.log("Logging in with Facebook");
    })
};

export default loginFacebook;
