import FacebookLogIn from "../components/Auth/Login/FacebookLogIn";
import GoogleLogIn from "../components/Auth/Login/GoogleLogIn";
import MicrosoftLogIn from "../components/Auth/Login/MicrosoftLogIn";
import SignUp from "../components/Auth/Signup/SignUp";
import GenNavBar from "../components/NavBar/GenNavBar";

const UserSignUpPage = () => {
  return (
    <div className="">
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
        <div className="items-center justify-center border p-6 sm:w-min sm:rounded">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Sign Up to The Basket</h1>
            <div className="mb-3 py-2">
              <h3 className="sm:w-96">
                {
                  "Use our built-in calculator and stay \
                  tuned for upcoming features"
                }
              </h3>
            </div>
          </div>
          <div className="">
            <SignUp />
          </div>
          <div className="flex items-center py-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-4 text-black/50">or sign up with</span>
            <div className="flex-grow border-t"></div>
          </div>
          <div className="">
            <div className="pb-2">
              <GoogleLogIn />
            </div>
            <div className="py-2">
              <FacebookLogIn />
            </div>
            <div className="py-2">
              <MicrosoftLogIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUpPage;
