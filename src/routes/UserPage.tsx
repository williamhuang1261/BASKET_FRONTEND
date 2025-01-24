import FooterDiv from "../components/General/Footer/FooterDiv";
import MustBeLoggedIn from "../components/General/Miscellaneous/MustBeLoggedIn";
import GenNavBar from "../components/NavBar/GenNavBar";
import AccountBox from "../components/Users/AccountBox";
import AccountSettings from "../components/Users/AccountSettings";
import PreferencesSettings from "../components/Users/PreferencesSettings";
import ProfileBox from "../components/Users/ProfileBox";
import useCustomNavigation from "../hooks/useCustomNavigation";

/**
 * @description User profile and settings management page
 * @summary Main sections:
 * - Navigation bar
 * - Profile information box
 * - Preferences settings
 * - Account management
 * - Footer
 *
 * @returns {JSX.Element} User page with profile, preferences, and account settings
 */
const UserPage = () => {
  const { directNav } = useCustomNavigation();

  return (
    <MustBeLoggedIn className="flex min-h-screen min-w-80 flex-col">
      <div className="flex-none border-b-0.5 border-dark_gray bg-white">
        <GenNavBar
          size="Container"
          page={"General"}
          hidden={["SearchBar", "Language", "Profile"]}
        />
      </div>
      <main className="flex justify-center px-3 py-5">
        <div className="w-full max-w-[1024px]">
          <div className="">
            <ProfileBox />
          </div>
          <div className="flex flex-col gap-2 py-5">
            <h2 className="text-xl font-semibold">Account Settings</h2>
            <div className="px-3">
              <AccountSettings />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Preferences</h2>
            <div className="px-3">
              <PreferencesSettings />
            </div>
          </div>
          <div className="flex w-full items-center justify-center py-5">
            <div className="bg-white w-full">
              <button
                className="w-full rounded bg-green/50 p-1 shadow-sm transition-all hover:bg-green"
                onClick={() => directNav({ pathname: "/" }, true)}
              >
                Done
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <AccountBox />
          </div>
        </div>
      </main>
      <div className="flex-auto"></div>
      <div className="flex-none">
        <FooterDiv />
      </div>
    </MustBeLoggedIn>
  );
};

export default UserPage;
