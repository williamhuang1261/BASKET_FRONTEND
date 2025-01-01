import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./initFirebase";

/**
 * @description Handles Microsoft OAuth authentication using Firebase
 * @summary Creates a Microsoft auth provider and initiates popup sign-in flow
 * @returns {Promise<void>} Resolves when login is successful
 */
const loginMicrosoft = () => {
  // const { dispatch } = useContext(UserContext); 

  const provider = new OAuthProvider("microsoft.com");
  return signInWithPopup(auth, provider)
    .then(() => {
      console.log("Logged in with Microsoft");
    })
};

export default loginMicrosoft;
