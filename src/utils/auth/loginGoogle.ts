import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./initFirebase";

/**
 * @description Handles Google OAuth authentication using Firebase
 * @summary Creates a Google auth provider and initiates popup sign-in flow
 * @returns {Promise<void>} Resolves when login is successful
 */
const loginGoogle = () => {

  console.log("Logging in with Google");
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then(() => {
      console.log('Logged In with Google')
    })
};

export default loginGoogle;
