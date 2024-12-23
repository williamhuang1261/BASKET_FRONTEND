import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./initFirebase";

const loginMicrosoft = () => {
  // const { dispatch } = useContext(UserContext); 

  const provider = new OAuthProvider("microsoft.com");
  signInWithPopup(auth, provider)
    .then((result) => {
      // User is signed in.
      // Get the OAuth access token and ID Token
      const credential = OAuthProvider.credentialFromResult(result);
      if (!credential) throw new Error("No credential found");
      const idToken = credential.idToken;
      console.log("ID Token:", idToken);

      // dispatch({
      //   group: "CHANGE",
      //   type: "LOGIN_STATUS",
      //   target: "LOGGED_IN",
      //   new: true,
      // })
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loginMicrosoft;
