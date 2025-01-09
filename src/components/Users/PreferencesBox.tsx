import EmailModif from "./EmailModif";
import UsernameModif from "./UsernameModif";
import LanguageModif from "./LanguageModif";
import LocationModif from "./LocationModif";

/**
 * @description Component that handles user preferences including username, email, language and location
 * @returns {JSX.Element} A container with various user preference modification options
 */
const PreferencesBox = () => {
  return (
    <div className="rounded border">
      <div className="flex min-h-11 w-full flex-wrap items-center justify-between gap-2 border-b px-2 py-1">
        <UsernameModif />
      </div>
      <div className="flex min-h-11 w-full flex-wrap items-center justify-between gap-2 border-b px-2 py-1">
        <EmailModif />
      </div>
      <div className="flex h-11 w-full items-center justify-between border-b px-2">
        <LanguageModif />
      </div>
      <div className="min-h-auto relative flex w-full flex-wrap items-start justify-between gap-2 px-2">
        <LocationModif />
      </div>
    </div>
  );
};

export default PreferencesBox;
