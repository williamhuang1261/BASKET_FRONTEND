import LocationAutoComplete from "../General/Miscellaneous/LocationAutoComplete";

/**
 * Location search component for the navigation bar.
 * Wraps LocationAutoComplete with specific styling for the navbar context.
 *
 * @returns A styled location search input with autocomplete functionality
 */
const LocationSearchSelection = () => {
  return (
    <LocationAutoComplete
      id="location-search-selection"
      inputClassName="rounded h-full w-full outline-none border-none p-4 text-lg md:max-lg:text-sm"
      dropdownClassName="absolute top-12 z-50 w-full overflow-hidden rounded bg-white"
      elemClassName="hover:bg-light_gray/50 cursor-pointer min-h-12 w-full px-4 py-1 flex items-center"
      loadingClassName="h-12 w-full px-4 py-1 flex items-center border-b"
      errorClassName="h-12 w-full px-4 py-1 flex items-center text-red-500"
    />
  );
};

export default LocationSearchSelection;
