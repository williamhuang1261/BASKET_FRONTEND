import { useEffect, useState } from "react";
import useUserState from "../../../hooks/state/useUserState";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import useError from "../../../hooks/useError";
import { useQueryClient } from "@tanstack/react-query";
import { UserServices } from "../../../services/serviceList";

interface Props {
  id: string;
  inputClassName: string;
  dropdownClassName: string;
  elemClassName: string;
  loadingClassName: string;
  errorClassName: string;
}

/**
 * A location search component that provides address autocomplete functionality using Google Places API.
 * This component allows users to search for and select addresses in Canada or the USA,
 * updates the user's location state, and persists the changes to the backend.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique identifier for the component instance
 * @param {string} props.inputClassName - CSS class names for styling the input field
 * @param {string} props.dropdownClassName - CSS class names for styling the suggestions dropdown container
 * @param {string} props.elemClassName - CSS class names for styling individual suggestion elements
 * @param {string} props.loadingClassName - CSS class names for styling the loading state indicator
 * @param {string} props.errorClassName - CSS class names for styling error messages
 *
 * @returns {JSX.Element} A location autocomplete input field with a suggestions dropdown
 *
 * @example
 * <LocationAutoComplete
 *   id="location-1"
 *   inputClassName="input-style"
 *   dropdownClassName="dropdown-style"
 *   elemClassName="suggestion-style"
 *   loadingClassName="loading-style"
 *   errorClassName="error-style"
 * />
 */
const LocationAutoComplete = ({
  id,
  inputClassName,
  dropdownClassName,
  elemClassName,
  loadingClassName,
  errorClassName,
}: Props) => {
  const { user, dispatch } = useUserState();
  const [tempAddress, setTempAddress] = useState(
    user.meta.location.formattedAddress || "Toronto, ON",
  );
  const [isInvalid, setIsInvalid] = useState(false);
  const errHandler = useError();
  const [locSearchActive, setLocSearchActive] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const fn = async () => await handleClickEvent(tempAddress);
    document.getElementById(id + "Apply")?.addEventListener("click", fn);

    return () => {
      document.getElementById(id + "Apply")?.removeEventListener("click", fn);
    };
  });

  const searchOptions = {
    types: ["address"],
    componentRestrictions: {
      country: ["CA", "US"],
    },
  };

  const handleError = (e: string) => {
    if (e === "ZERO_RESULTS") {
      setNoResults(true);
    }
  };

  const findCountry = (info: google.maps.GeocoderResult[]) => {
    const countryComponent = info[0].address_components.find((c) =>
      c.types.includes("country"),
    );
    let country: "USA" | "Canada";
    if (countryComponent?.short_name === "US") {
      country = "USA";
    } else if (countryComponent?.short_name === "CA") {
      country = "Canada";
    } else {
      // Default to Canada
      country = "Canada";
    }
    return country;
  };

  const handleChange = (address: string) => {
    setNoResults(false);
    setTempAddress(address);
    setIsInvalid(false);
  };

  const handleClickEvent = async (address: string) => {
    try {
      setLocSearchActive(false);
      const res = await geocodeByAddress(address);
      const country = findCountry(res);
      const ll = await getLatLng(res[0]);
      const newLocation = {
        country: country,
        type: "Point" as const,
        coordinates: [ll.lng, ll.lat],
        formattedAddress: address,
      };
      queryClient.fetchQuery({
        queryKey: ["location", id],
        queryFn: () => {
          return UserServices.put("/info/me", {}, { location: newLocation })
            .then(() => {
              dispatch({
                group: "CHANGE",
                type: "LOCATION",
                newLocation: newLocation,
              });
              return null;
            })
            .catch((err) => errHandler(err));
        },
      });
    } catch {
      setIsInvalid(true);
    }
  };

  useEffect(() => {
    setTempAddress(user.meta.location.formattedAddress);
  }, [user.meta.location.formattedAddress]);

  return (
    <PlacesAutocomplete
      value={tempAddress}
      onChange={handleChange}
      onError={handleError}
      searchOptions={searchOptions}
      key={id + "LocationAutocomplete"}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <div
            key={id + "Location_Search_Sugggestions"}
            className="h-full w-full"
          >
            <input
              {...getInputProps({
                placeholder: "Set Location",
                className: `${locSearchActive ? "" : "text-black/60"} ${inputClassName} ${isInvalid ? "text-red-500" : ""}`,
              })}
              id={"Location_input" + id}
              onSelect={() => setLocSearchActive(true)}
              onBlur={() => setLocSearchActive(false)}
            />
          </div>
          {locSearchActive && (
            <div
              className={
                `autocomplete-dropdown-container ${suggestions.length !== 0 ? "border border-gray-200" : ""}` +
                " " +
                dropdownClassName
              }
            >
              {noResults && (
                <div
                  className={
                    errorClassName +
                    " " +
                    (suggestions.length !== 0 && "border-b border-gray-200")
                  }
                >
                  No results found
                </div>
              )}
              {loading && (
                <div className={loadingClassName}>
                  Searching for locations...
                </div>
              )}
              {suggestions.length !== 0 && (
                <>
                  {suggestions.map((suggestion, index) => {
                    const className = `
                    ${suggestion.active ? "suggestion-item--active" : "suggestion-item"} 
                    ${index !== suggestions.length - 1 ? "border-b border-gray-200" : ""}
                    ${elemClassName}`;
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                        })}
                        key={suggestion.id || index}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          )}
        </>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationAutoComplete;
