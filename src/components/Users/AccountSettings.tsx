import UsernameModif from "./UsernameModif";
import LocationModif from "./LocationModif";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import useUserState from "../../hooks/state/useUserState";
import PasswordModif from "./PasswordModif";

/**
 * @description Component that handles user preferences including username, email, language and location
 * @returns {JSX.Element} A container with various user preference modification options
 */
const AccountSettings = () => {
  const [provider, setProvider] = useState<string | null>(null);
  const { user } = useUserState();

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) setProvider(user.providerData[0].providerId);
    });
  });

  return (
    <div className="rounded-sm border bg-white border-gray-200">
      <div className="flex min-h-11 w-full flex-wrap justify-between gap-2 border-b border-gray-200 p-3">
        <UsernameModif />
      </div>
      {user && user.meta.email && (
        <div className="flex min-h-11 w-full flex-wrap items-center justify-between gap-2 border-b border-gray-200 px-2 py-1">
          <h3 className="font-semibold">Email (Cannot be modified)</h3>
          <p>{user.meta.email}</p>
        </div>
      )}
      {provider === "password" && (
        <div className="flex min-h-11 w-full flex-wrap items-center justify-between gap-2 border-b border-gray-200 px-2 py-1">
          <PasswordModif />
        </div>
      )}
      <div className="min-h-auto relative flex w-full flex-wrap items-start justify-between gap-2 px-2">
        <LocationModif />
      </div>
    </div>
  );
};

export default AccountSettings;
