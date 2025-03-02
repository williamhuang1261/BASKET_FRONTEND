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
      inputClassName="rounded h-full w-full border-none p-4"
      dropdownClassName="absolute top-11 z-50 w-full overflow-hidden rounded bg-white"
      elemClassName="hover:bg-light_gray/50 cursor-pointer min-h-10 w-full px-4 py-1 flex items-center"
      loadingClassName="h-10 w-full px-4 py-1 flex items-center border-b"
      errorClassName="h-10 w-full px-4 py-1 flex items-center text-red-500"
    />
  );
};

export default LocationSearchSelection;
