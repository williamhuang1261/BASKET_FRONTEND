import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./initFirebase";

const loginMicrosoft = () => {
  // const { dispatch } = useContext(UserContext); 

  const provider = new OAuthProvider("microsoft.com");
  return signInWithPopup(auth, provider)
    .then(() => {
      console.log("Logged in with Microsoft");
    })
};

export default loginMicrosoft;
