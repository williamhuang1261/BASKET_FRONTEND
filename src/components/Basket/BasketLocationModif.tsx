import { useState } from "react";
import useUserState from "../../hooks/state/useUserState";
import LocationAutoComplete from "../General/Miscellaneous/LocationAutoComplete";
import { MdModeEdit } from "react-icons/md";

/**
 * @description Renders an input field for changing the user's location
 * @summary Allows users to update their shopping location for calculations
 * @returns {JSX.Element} The change location component
 */
const ChangeLocation = () => {
  const { user } = useUserState();
  const [open, setOpen] = useState(false);

  return open ? (
    <div className="relative flex w-full">
      <LocationAutoComplete
        id={"BasketModification"}
        inputClassName="border border-gray-200 rounded-s p-2 h-10 w-full lg:min-w-96"
        dropdownClassName="absolute top-11 z-50 w-full overflow-hidden rounded-sm bg-white"
        elemClassName="hover:bg-light_gray/50 cursor-pointer min-h-10 w-full px-4 py-1 flex items-center"
        loadingClassName="h-10 w-full px-4 py-1 flex items-center border-b border-gray-200"
        errorClassName="h-10 w-full px-4 py-1 flex items-center text-red-500"
      />
      <button className="rounded-e bg-green p-2" id={'BasketModificationApply'}>Apply</button>
    </div>
  ) : (
    <div className="items-center gap-1 sm:flex">
      <h3>
        <b>Your Location : </b>
      </h3>
      <div className="flex items-center gap-1">
        <h3>{user.meta.location.formattedAddress}</h3>
        <div
          className="cursor-pointer transition-all hover:text-green"
          onClick={() => setOpen(true)}
        >
          <MdModeEdit />
        </div>
      </div>
    </div>
  );
};

export default ChangeLocation;
