import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./initFirebase";

const loginGoogle = () => {
  console.log("Logging in with Google");
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);

      // Firebase ID token (JWT)
      const user = result.user;
      user.getIdToken().then((idToken) => {
        console.log("ID Token (JWT):", idToken);
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error(errorCode, errorMessage, email, credential);
    });
};

export default loginGoogle;
