import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./initFirebase";

const loginGoogle = () => {

  console.log("Logging in with Google");
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then(() => {
      console.log('Logged In with Google')
    })
};

export default loginGoogle;
