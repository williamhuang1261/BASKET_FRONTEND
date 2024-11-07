import checkFacebookLoginStatus from "./Facebook/checkFacebookLoginStatus";
import checkGoogleLoginStatus from "./Google/checkGoogleLoginStatus";
import checkMicrosoftLoginStatus from "./Microsoft/checkMicrosoftLoginStatus";

export const checkLoginStatus = async () => {
  // let userInfo: any;
  try {
    const facebookResponse = await checkFacebookLoginStatus();
    if (facebookResponse) {
      console.log("CALLING DB WITH FACEBOOK INFO");
    }
    const googleResponse = await checkGoogleLoginStatus();
    if (googleResponse) {
      console.log("CALLING DB WITH GOOGLE INFO");
    }
    const microsoftResponse = await checkMicrosoftLoginStatus();
    if (microsoftResponse) {
      console.log("CALLING DB WITH MICROSOFT INFO");
    }
  } catch (e) {
    console.error(e);
  }
};
