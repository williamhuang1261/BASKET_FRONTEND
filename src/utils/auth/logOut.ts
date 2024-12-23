
const logOut = () => {

  // const {dispatch} = useContext(UserContext)

  console.log("Logging out");
  localStorage.clear();
  // signOut(auth)
  //   .then((e) =>{
  //     console.log("Logged out", e)
  //     dispatch({
  //       group: 'CHANGE',
  //       type: 'LOGIN_STATUS',
  //       target: 'LOGGED_IN',
  //       new: false
  //     })
  //   })
  //   .catch((e) => console.log("Error logging out", e));
};

export default logOut;
