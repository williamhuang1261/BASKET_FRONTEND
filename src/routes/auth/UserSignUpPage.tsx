import CustomDirectNav from "../../components/General/Miscellaneous/CustomDirectNav";
import SocialLogin from "../../components/Auth/Login/SocialLogin";
import SignUp from "../../components/Auth/Signup/SignUp";
import GenNavBar from "../../components/NavBar/GenNavBar";
import loginGoogle from "../../utils/auth/loginGoogle";
import loginFacebook from "../../utils/auth/loginFacebook";
import loginMicrosoft from "../../utils/auth/loginMicrosoft";
import googleLogo from "../../assets/Google__G__logo.svg";
import facebookLogo from "../../assets/Facebook_Logo_Primary.png";
import microsoftLogo from "../../assets/Microsoft_logo.svg";
import { IoClose } from "react-icons/io5";

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
    <div className="min-w-80 min-h-screen">
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
        <div className="items-center justify-center rounded-sm bg-white p-6 sm:w-min sm:border sm:shadow-lg border-gray-200">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Sign Up to The Basket</h1>
              <CustomDirectNav pathname="/" aria-label="Close Sign Up Page">
                <IoClose
                  size={"28"}
                  className="text-black/50 transition-all hover:text-black"
                />
              </CustomDirectNav>
            </div>
            <div className="mb-3 py-2">
              <h3 className="sm:w-96">
                Use our built-in calculator and stay tuned for upcoming
                features. Already have an account?{" "}
                <CustomDirectNav
                  className="font-bold underline transition-all hover:text-green"
                  pathname="/auth/login"
                  aria-label="Go to Sign In Page"
                >
                  Sign In
                </CustomDirectNav>
              </h3>
            </div>
          </div>
          <div className="">
            <SignUp />
          </div>
          <div className="flex items-center py-4">
            <div className="grow border-t border-gray-200"></div>
            <span className="mx-4 text-black/50">{"OR"}</span>
            <div className="grow border-t border-gray-200"></div>
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
