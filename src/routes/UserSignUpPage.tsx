import SocialLogin from "../components/Auth/Login/SocialLogin";
import SignUp from "../components/Auth/Signup/SignUp";
import GenNavBar from "../components/NavBar/GenNavBar";
import loginGoogle from "../utils/auth/loginGoogle";
import googleLogo from "../assets/Google__G__logo.svg";
import loginFacebook from "../utils/auth/loginFacebook";
import facebookLogo from "../assets/Facebook_Logo_Primary.png";
import loginMicrosoft from "../utils/auth/loginMicrosoft";
import microsoftLogo from "../assets/Microsoft_logo.svg";
import { Link } from "react-router-dom";

/**
 * @description User registration page with standard and social sign-up options
 * @summary
 * - Provides email/password registration
 * - Offers social media sign-up options
 * - Links to login page for existing users
 * - Includes terms acceptance and validation
 * 
 * @returns {JSX.Element} Sign-up page with multiple registration methods
 */
const UserSignUpPage = () => {
  return (
    <div className=" ">
      <GenNavBar
        size={"Container"}
        hidden={[
          "Side",
          "SearchBar",
          "Location",
          "Profile",
          "Calc",
          "SideForSmall",
        ]}
        page="General"
      />
      <div className="flex justify-center">
        <div className="items-center justify-center p-6 sm:w-min rounded sm:border sm:shadow-lg">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Sign Up to The Basket</h1>
            <div className="mb-3 py-2">
              <h3 className="sm:w-96">
                Use our built-in calculator and stay tuned for upcoming
                features. Already have an account?{" "}
                <Link
                  className="font-bold underline transition-all duration-150 ease-in-out hover:text-green"
                  to="/user-login"
                >
                  Sign In
                </Link>
              </h3>
            </div>
          </div>
          <div className="">
            <SignUp />
          </div>
          <div className="flex items-center py-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-4 text-black/50">{"OR"}</span>
            <div className="flex-grow border-t"></div>
          </div>
          <div className="">
            <div className="pb-2">
              <SocialLogin
                type="Sign up"
                color="#FBBC04"
                onClick={loginGoogle}
                provider="Google"
                logo={googleLogo}
              />
            </div>
            <div className="py-2">
              <SocialLogin
                type="Sign up"
                color="#0866FF"
                onClick={loginFacebook}
                provider="Facebook"
                logo={facebookLogo}
              />
            </div>
            <div className="py-2">
              <SocialLogin
                type="Sign up"
                color="#00A3EE"
                onClick={loginMicrosoft}
                provider="Microsoft"
                logo={microsoftLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUpPage;
