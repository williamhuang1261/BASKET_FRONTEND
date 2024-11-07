import StandardLogin from "../components/Test/StandardLogin";
import GoogleLogIn from "../components/Test/GoogleLogIn";
import FacebookLogIn from "../components/Test/FacebookLogIn";
import MicrosoftLogIn from "../components/Test/MicrosoftLogIn";
import GenNavBar from "../components/NavBar/GenNavBar";

const UserLoginPage = () => {
  return (
    <div className="flex h-screen flex-col">
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
      <div className="my-4 flex w-full justify-center overflow-hidden">
        <div className="w-min overflow-hidden rounded border p-6">
          <div className="pb-4">
            <h2 className="w-full text-2xl font-bold">Login to The Basket</h2>
            <div className="flex w-full gap-2 py-2">
              <h3>Don't have an account yet? </h3>
              <button className="font-bold underline">
                <h2>Sign Up</h2>
              </button>
            </div>
          </div>
          <div className="">
            <StandardLogin />
          </div>
          <div className="flex items-center py-4">
            <div className="flex-grow border-t "></div>
            <span className="mx-4 text-black/50">or login with</span>
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

export default UserLoginPage;
