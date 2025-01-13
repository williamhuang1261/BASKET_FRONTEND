import { MdModeEdit } from "react-icons/md";
import useUserState from "../../hooks/state/useUserState";
import { useState } from "react";
import LocationAutoComplete from "../General/Miscellaneous/LocationAutoComplete";

/**
 * Component for modifying user location settings.
 * Provides a toggle between displaying current location and an editable location input.
 *
 * @returns A location modification interface with edit and apply functionality
 */
const LocationModif = () => {
  const { user } = useUserState();
  const [active, setActive] = useState(false);

  return (
    <>
      <h3 className={`${active ? "mt-2 md:my-5" : "mt-3"}  font-semibold`}>
        Location
      </h3>
      {active ? (
        <div className="relative mb-2 flex w-full rounded outline-none md:my-2 md:w-8/12">
          <div className="h-full w-full">
            <LocationAutoComplete
              id="UserSettings"
              inputClassName="outline-none w-full h-12 px-2 border rounded-s"
              dropdownClassName="z-50 w-full rounded bg-white shadow-md"
              elemClassName="hover:bg-light_gray/50 cursor-pointer min-h-10 w-full px-4 py-1 flex items-center"
              loadingClassName="h-12 w-full px-4 py-1 flex items-center border-b"
              errorClassName="h-12 w-full px-4 py-1 flex items-center text-red-500"
            />
          </div>
          <button
            className="h-12 rounded-e bg-green/75 px-3 transition-all duration-150 ease-in-out hover:bg-green"
            id={"UserSettingsApply"}
          >
            Apply
          </button>
        </div>
      ) : (
        <div className="my-3 flex items-center justify-end gap-1">
          <div>{user.meta.location.formattedAddress}</div>
          <button
            id={"ChangeButton" + "location"}
            className="text-black/50 transition-all duration-150 ease-in-out hover:text-green"
            onClick={() => setActive(true)}
          >
            <MdModeEdit />
          </button>
        </div>
      )}
    </>
  );
};

export default LocationModif;
