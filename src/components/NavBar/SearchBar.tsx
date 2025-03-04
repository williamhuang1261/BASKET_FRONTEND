import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import useUserState from "../../hooks/state/useUserState";
import LocationSearchSelection from "./LocationSearchSelection";
import HybridSearch from "./SearchField";

interface Props {
  hidden?: ("Location" | "Search")[];
  id: string;
}

/**
 * @description A search bar component that allows users to search for products and locations.
 * @param {Object} props - The properties object.
 * @param {Array<"Location" | "Search">} [props.hidden] - Array specifying which elements to hide.
 * @param {string} props.id - Unique identifier for the search inputs.
 * @returns {JSX.Element} The search bar component.
 */
const SearchBar = ({ hidden, id }: Props) => {
  const [locMouseOver, setLocMouseOver] = useState(false);

  const { user } = useUserState();

  return (
    <form className="w-full md:flex md:h-11">
      {hidden?.includes("Search") ? null : (
        <HybridSearch hidden={hidden} id={id} />
      )}
      {hidden?.includes("Location") ? null : (
        <div className="relative flex items-center rounded-b bg-white outline-1 outline-dark_gray md:w-1/2 md:rounded-l-none md:rounded-r lg:w-5/12">
          <div className="relative flex h-11 w-full items-center rounded-sm">
            <LocationSearchSelection />
          </div>
          <div className="aspect-square h-11 flex items-center justify-center">
            <CiLocationOn
              size="30"
              className={
                "transition-all hover:text-orange-600 focus-within:text-orange-600"
              }
              onMouseOver={() => setLocMouseOver(true)}
              onMouseLeave={() => setLocMouseOver(false)}
              onClick={() => setLocMouseOver(!locMouseOver)}
            />
          </div>
          <p
            className={`${locMouseOver ? "pointer-events-auto translate-y-0 opacity-100" : "-translate-y-2 opacity-0"} absolute right-0 top-11 z-40 h-auto rounded-sm bg-light_gray p-1 transition-all`}
          >
            <b>Your location :</b> {user.meta.location.formattedAddress}
          </p>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
