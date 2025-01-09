import { useEffect, useState } from "react";
import useUserState from "../../../hooks/state/useUserState";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { UserServices } from "../../../services/restricted-service";
import useError from "../../../hooks/useError";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  id: string;
  inputClassName: string;
  dropdownClassName: string;
  elemClassName: string;
  loadingClassName: string;
  errorClassName: string;
}

/**
 * Location autocomplete component using Google Places API for address selection and geocoding.
 * Allows users to search and select locations, updating the user's location state and persisting it.
 *
 * @param props - Component props
 * @param props.id - Unique identifier for the location input element
 * @param props.inputClassName - CSS classes for the input field
 * @param props.dropdownClassName - CSS classes for the suggestions dropdown container
 * @param props.elemClassName - CSS classes for each suggestion element
 * @param props.loadingClassName - CSS classes for the loading state element
 * @returns A location autocomplete input field with suggestions dropdown
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

  const handleSelect = async (address: string) => {
    try {
      setTempAddress(address);
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
              return null
            })
            .catch((err) => errHandler(err));
        },
      });
    } catch {
      setIsInvalid(true);
    }
  };

  const handleError = (e: string) => {
    if (e === "ZERO_RESULTS") {
      setNoResults(true);
    }
  };

  useEffect(() => {
    setTempAddress(user.meta.location.formattedAddress);
  }, [user.meta.location.formattedAddress]);

  const searchOptions = {
    types: ["address"],
    componentRestrictions: {
      country: ["CA", "US"],
    },
  };

  return (
    <PlacesAutocomplete
      value={tempAddress}
      onChange={handleChange}
      onSelect={handleSelect}
      onError={handleError}
      searchOptions={searchOptions}
      key={"LocationAutocomplete"}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <div key={"Location_Search_Sugggestions"} className="h-full w-full">
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
          <div
            className={
              `autocomplete-dropdown-container ${locSearchActive ? 'border' : ''}` + " " + dropdownClassName
            }
          >
            {noResults && locSearchActive && (
              <div
                className={
                  errorClassName +
                  " " +
                  (suggestions.length !== 0 && "border-b")
                }
              >
                No results found
              </div>
            )}
            {suggestions.length !== 0 && (
              <>
                {loading && (
                  <div className={loadingClassName}>
                    Searching for locations...
                  </div>
                )}
                {suggestions.map((suggestion, index) => {
                  const className = `
                    ${suggestion.active ? "suggestion-item--active" : "suggestion-item"} 
                    ${index !== suggestions.length - 1 ? "border-b" : ""}
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
        </>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationAutoComplete;
