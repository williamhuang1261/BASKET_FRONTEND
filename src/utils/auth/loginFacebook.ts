import {
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./initFirebase";

// FIXME: Error 400 (Bad Request) when trying to login with Facebook
// message ClientVariations {
// Active Google-visible variation IDs on this client. These are reported for analysis, but do not directly affect any server-side behavior.
// repeated int32 variation_id = [3300016, 3300106, 3300133, 3313321, 3324732, 3330195, 3362821, 3367992, 3384274, 3385332];
// Active Google-visible variation IDs on this client that trigger server-side behavior. These are reported for analysis *and* directly affect server-side behavior.
// repeated int32 trigger_variation_id = [3368180];
// }
const loginFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Logging in with Facebook");
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
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
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.error(errorCode);
      console.error(errorMessage);
      console.error(email);
      console.error(credential);
      console.error(error);
      // ...
    });
};

export default loginFacebook;
