import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import useUserState from "../../hooks/state/useUserState";
import LocationAutoComplete from "./LocationAutoComplete";

interface Props {
  hidden?: ("Location" | "Search")[];
  id: string;
}

// Search bar, flex in md+ and block in md-
const SearchBar = ({ hidden, id }: Props) => {
  const [locMouseOver, setLocMouseOver] = useState(false);

  const { user } = useUserState();

  return (
    <form className="w-full md:flex md:h-12">
      <div
        className={`${hidden?.includes("Search") ? "hidden" : ""} flex overflow-hidden rounded-t outline outline-1 outline-dark_gray md:w-1/2 md:rounded-l md:rounded-r-none lg:w-4/6`}
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
      <div
        className={`${hidden?.includes("Location") ? "hidden" : ""} relative flex items-center outline outline-dark_gray outline-1 rounded-b bg-white md:w-1/2 md:rounded-l-none md:rounded-r lg:w-2/6`}
      >
        <div className="flex h-12 w-full items-center relative rounded">
          <LocationAutoComplete />
        </div>
        <div
          className="flex-none bg-white pe-2"
          onMouseOver={() => setLocMouseOver(true)}
          onMouseLeave={() => setLocMouseOver(false)}
        >
          <p
            className={`${locMouseOver ? "" : " hidden"} absolute top-12 z-40 h-auto right-0 rounded bg-light_gray p-1 transition-all duration-1000`}
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
    </form>
  );
};

export default SearchBar;
