import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./initFirebase";

const loginMicrosoft = () => {
  const provider = new OAuthProvider("microsoft.com");
  signInWithPopup(auth, provider)
    .then((result) => {
      // User is signed in.
      // Get the OAuth access token and ID Token
      const credential = OAuthProvider.credentialFromResult(result);
      if (!credential) throw new Error("No credential found");
      const idToken = credential.idToken;
      console.log("ID Token:", idToken);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loginMicrosoft;
