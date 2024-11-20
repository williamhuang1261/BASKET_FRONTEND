import { getAuth, onAuthStateChanged } from "firebase/auth";

const checkLoginStatus = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is logged in:", user);
      // Handle user being logged in
    } else {
      console.log("NO USER LOGGED IN");
      // Handle user being logged out
    }
  });
};

export default checkLoginStatus;
