import SocialLogin from "../components/Auth/Login/SocialLogin";
import LogOut from "../components/Auth/LogOut";
import loginFacebook from "../utils/auth/loginFacebook";
import loginGoogle from "../utils/auth/loginGoogle";
import loginMicrosoft from "../utils/auth/loginMicrosoft";
import microsoftLogo from "../assets/Microsoft_logo.svg";
import googleLogo from "../assets/Google__G__logo.svg";
import facebookLogo from "../assets/Facebook_Logo_Primary.png";
import StandardLogin from "../components/Auth/Login/StandardLogin";
import SignUp from "../components/Auth/Signup/SignUp";

const TestPage = () => {
  return (
    <div className="space-y-4">
      <div className="">
        <SocialLogin
          type="Sign in"
          color="#FBBC04"
          onClick={loginGoogle}
          provider="Google"
          logo={googleLogo}
        />
      </div>
      <div className="">
        <SocialLogin
          type="Sign in"
          color="#0866FF"
          onClick={loginFacebook}
          provider="Facebook"
          logo={facebookLogo}
        />
      </div>
      <div className="">
        <SocialLogin
          type="Sign in"
          color="#00A3EE"
          onClick={loginMicrosoft}
          provider="Microsoft"
          logo={microsoftLogo}
        />
      </div>
      <div className="outline outline-red-500">
        <SignUp />
      </div>
      <div className="outline outline-green">
        <StandardLogin />
      </div>
      <LogOut />
    </div>
  );
};

export default TestPage;
