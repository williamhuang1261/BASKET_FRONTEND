import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import useUserState from "../../hooks/state/useUserState";
import LocationSearchSelection from "./LocationSearchSelection";

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
    <form className="w-full md:flex md:h-12">
      {hidden?.includes("Search") ? null : (
        <div
          className={`${hidden?.includes("Location") ? "rounded-b md:w-full md:rounded-r" : "md:w-1/2 md:rounded-r-none lg:w-7/12"} flex overflow-hidden rounded-t outline outline-1 outline-dark_gray md:rounded-l  `}
        >
          <input
            type="text"
            placeholder="Search products"
            size={4}
            id={id + "_Search"}
            className="h-12 flex-auto border-none px-4 text-lg outline-none md:max-lg:text-sm"
          />
          <button
            aria-label="Search"
            className="flex-none bg-green px-4 hover:bg-light_gray md:bg-white md:transition-all md:duration-150 md:ease-in-out md:hover:bg-green"
          >
            {/* Product Search Bar */}
            <IoSearch size="30" />
          </button>
        </div>
      )}
      {hidden?.includes("Location") ? null : (
        <div className="relative flex items-center rounded-b bg-white outline outline-1 outline-dark_gray md:w-1/2 md:rounded-l-none md:rounded-r lg:w-5/12">
          <div className="relative flex h-12 w-full items-center rounded">
            <LocationSearchSelection />
          </div>
          <div
            className="flex-none bg-white pe-2"
            onMouseOver={() => setLocMouseOver(true)}
            onMouseLeave={() => setLocMouseOver(false)}
          >
            <p
              className={`${locMouseOver ? "pointer-events-auto translate-y-0 opacity-100" : "-translate-y-2 opacity-0"} absolute right-0 top-12 z-40 h-auto rounded bg-light_gray p-1 transition-all duration-150`}
            >
              <b>Your location :</b> {user.meta.location.formattedAddress}
            </p>
            {/* Location Search Bar */}
            <CiLocationOn
              size="35"
              className={"transition-all duration-150 hover:text-orange-600"}
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
