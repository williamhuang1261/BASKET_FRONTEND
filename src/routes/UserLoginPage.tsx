import SocialLogin from "../components/Auth/Login/SocialLogin";
import StandardLogin from "../components/Auth/Login/StandardLogin";
import GenNavBar from "../components/NavBar/GenNavBar";
import loginFacebook from "../utils/auth/loginFacebook";
import loginGoogle from "../utils/auth/loginGoogle";
import loginMicrosoft from "../utils/auth/loginMicrosoft";
import microsoftLogo from "../assets/Microsoft_logo.svg";
import googleLogo from "../assets/Google__G__logo.svg";
import facebookLogo from "../assets/Facebook_Logo_Primary.png";
import CustomDirectNav from "../components/General/Miscellaneous/CustomDirectNav";

/**
 * @description User authentication page
 * @summary Main sections:
 * - Navigation bar
 * - Login form
 * - Sign up link
 * - Social login options
 * - Error handling
 *
 * @returns {JSX.Element} Login page with multiple authentication methods
 */
const UserLoginPage = () => {
  return (
    <div className="flex h-screen flex-col min-w-80">
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
      <div className="my-4 flex w-full justify-center">
        <div className="w-full overflow-hidden rounded p-6 sm:w-min sm:border sm:shadow-lg">
          <div className="pb-4">
            <h2 className="w-full text-2xl font-bold">Login to The Basket</h2>
            <div className="flex w-full gap-2 py-2">
              <h3>Don't have an account yet? </h3>
              <CustomDirectNav
                pathname="/user-signup"
                aria-label="Go to Sign Up Page"
                className="font-bold underline transition-all duration-150 ease-in-out hover:text-green"
              >
                <h2>Sign Up</h2> 
              </CustomDirectNav>
            </div>
          </div>
          <div className="">
            <StandardLogin />
          </div>
          <div className="flex items-center py-4">
            <div className="flex-grow border-t "></div>
            <span className="mx-4 text-black/50">OR</span>
            <div className="flex-grow border-t"></div>
          </div>
          <div className="">
            <div className="pb-2">
              <SocialLogin
                type="Sign in"
                color="#FBBC04"
                onClick={loginGoogle}
                provider="Google"
                logo={googleLogo}
              />
            </div>
            <div className="py-2">
              <SocialLogin
                type="Sign in"
                color="#0866FF"
                onClick={loginFacebook}
                provider="Facebook"
                logo={facebookLogo}
              />
            </div>
            <div className="py-2">
              <SocialLogin
                type="Sign in"
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

export default UserLoginPage;
