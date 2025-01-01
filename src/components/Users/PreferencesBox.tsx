import useUserState from "../../hooks/state/useUserState";
import EditField from "./EditField";
import EmailModif from "./EmailModif";
import UsernameModif from "./UsernameModif";

/**
 * @description Component that handles user preferences including username, email, language and location
 * @returns {JSX.Element} A container with various user preference modification options
 */
const PreferencesBox = () => {
  const { user, dispatch } = useUserState();

  const handleLanguageSelect = () => {
    const target = document.getElementById(
      "language_select_UserSettings",
    ) as HTMLSelectElement;
    dispatch({
      group: "CHANGE",
      type: "LANGUAGE",
      new: target.value as "fr" | "en",
    });
  };

  return (
    <div className="rounded border">
      <div className="flex max-h-min min-h-11 w-full flex-wrap items-center justify-between gap-2 border-b px-2 py-1">
        <UsernameModif />
      </div>
      <div className="flex max-h-min min-h-11 w-full flex-wrap items-center justify-between gap-2 border-b px-2 py-1">
        <EmailModif />
      </div>
      <div className="flex h-11 w-full items-center justify-between border-b px-2">
        <h2 className="font-semibold">Language</h2>
        <select
          className="rounded-full bg-light_gray/50 px-2 outline-none"
          id="language_select_UserSettings"
          defaultValue={
            user.meta.preferences.language === "fr" ? "French" : "English"
          }
          onSelect={handleLanguageSelect}
        >
          <option value="fr" className="bg-white">
            French
          </option>
          <option value="en" className="bg-white">
            English
          </option>
        </select>
      </div>
      <div className="flex max-h-min min-h-11 w-full flex-wrap items-center justify-between gap-2 px-2 py-1">
        <h2 className="font-semibold">Location</h2>
        <EditField
          text={user.meta.location.formattedAddress}
          placeholder="New Location"
          id={"location"}
          onConfirm={(v) => {
            console.log(v);
            // dispatch({
            //   group: "CHANGE",
            //   type: "LOCATION",
            //   new: v,
            // });
          }}
        />
      </div>
    </div>
  );
};

export default PreferencesBox;
