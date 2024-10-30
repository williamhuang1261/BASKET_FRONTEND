// interface FacebookResponseConnectedProp {
//   status: "connected" | "not_authorized" | "unknown";
//   authResponse?: {
//     accessToken: string;
//     expiresIn: any;
//     signedRequest: any;
//     userID: any;
//   };
// }

// interface FacebookResponseNotConnectedProp {
//   status: "not_authorized" | "unknown";
// }

// type FacebookLoginCheckResponseType =
//   | FacebookResponseConnectedProp
//   | FacebookResponseNotConnectedProp;


// TODO HIDE Keys and implement facebook login
const checkFacebookLoginStatus = () => {
  // FB.getLoginStatus((response: FacebookLoginCheckResponseType) => {
  //   statusChangeCallback(response);
  // });
  console.warn('Checking if connected to Facebook, NOT IMPLEMENTED')
};

const checkGoogleLoginStatus = () => {
  console.warn('Checking if connected to Google, NOT IMPLEMENTED')
}

const checkLoginStatus = () => {
  checkFacebookLoginStatus();
  checkGoogleLoginStatus();
};

export default checkLoginStatus;
