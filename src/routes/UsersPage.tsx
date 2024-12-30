// import React from 'react'

import FooterDiv from "../components/General/Footer/FooterDiv";
import MustBeLoggedIn from "../components/General/Miscellaneous/MustBeLoggedIn";
import GenNavBar from "../components/NavBar/GenNavBar";
import AccountBox from "../components/Users/AccountBox";
import PreferencesBox from "../components/Users/PreferencesBox";
import ProfileBox from "../components/Users/ProfileBox";
import useUserState from "../hooks/state/useUserState";

const UsersPages = () => {
  const { user } = useUserState();

  return (
    <MustBeLoggedIn className="flex min-h-screen flex-col">
      <div className="flex-none border-b-0.5 border-dark_gray">
        <GenNavBar
          size="Container"
          page={"General"}
          hidden={["SearchBar", "Language", "Profile"]}
        />
      </div>
      <main className="flex justify-center px-3 py-5">
        <div className="w-full max-w-[1024px]">
          <div className="" onClick={() => console.log(user.meta)}>
            <ProfileBox />
          </div>
          <div className="flex flex-col gap-2 py-5">
            <h1 className="text-xl font-semibold">Settings & Preferences</h1>
            <PreferencesBox />
          </div>
          <div className="">
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

export default UsersPages;
