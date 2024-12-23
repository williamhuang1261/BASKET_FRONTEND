import { getAuth, onAuthStateChanged } from "firebase/auth";

const checkLoginStatus = () => {

  // const {dispatch} = useContext(UserContext);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is logged in:", user, navigator.language);
      user.getIdToken().then((idToken) => {
        console.log("ID Token (JWT):", idToken);
      });
      // dispatch({
      //   group: 'CHANGE',
      //   type: 'LOGIN_STATUS',
      //   target: 'LOGGED_IN',
      //   new: true
      // })
      // Handle user being logged in
    } else {
      console.log("NO USER LOGGED IN");
      // Handle user being logged out
    }
  });

  return null
};

export default checkLoginStatus;
