import {
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./initFirebase";

const loginFacebook = () => {
  // const {dispatch} = useContext(UserContext);

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
      // dispatch({
      //   group: 'CHANGE',
      //   type: 'LOGIN_STATUS',
      //   target: 'LOGGED_IN',
      //   new: true
      // })
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
  
  return null;
};

export default loginFacebook;
