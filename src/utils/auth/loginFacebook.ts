import {
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./initFirebase";

/**
 * @description Handles Facebook OAuth authentication using Firebase
 * @summary Creates a Facebook auth provider and initiates popup sign-in flow
 * @returns {Promise<void>} Resolves when login is successful
 */
const loginFacebook = () => {

  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider)
    .then(() => {
      console.log("Logging in with Facebook");
    })
};

export default loginFacebook;
