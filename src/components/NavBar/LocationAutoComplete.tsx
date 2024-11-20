import { useState } from "react";
import useUserState from "../../hooks/state/useUserState";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

interface Props {
  id: string;
}

const LocationAutoComplete = ({id}: Props) => {
  const { user, dispatch } = useUserState();
  const [tempAddress, setTempAddress] = useState(
    user.meta.location.formattedAddress,
  );
  const [locSearchActive, setLocSearchActive] = useState(false);

  const handleSelect = async (address: string) => {
    try {
      const res = await geocodeByAddress(address);
      const ll = await getLatLng(res[0]);
      dispatch({
        group: "CHANGE",
        type: "LOCATION",
        newLocation: {
          type: "Point",
          coordinates: [ll.lng, ll.lat],
          formattedAddress: address,
        },
      });
      setTempAddress(address);
      setLocSearchActive(false);
    } catch {
      console.warn("Could not confirm location selection");
    }
  };

  return (
    <>
      <PlacesAutocomplete
        value={tempAddress}
        onChange={setTempAddress}
        onSelect={handleSelect}
        key={"LocationAutocomplete"}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <div
              key={"Location_Search_Sugggestions"}
              className="h-full w-full "
            >
              <input
                {...getInputProps({
                  placeholder: "Set Location",
                  className: `${locSearchActive ? "text-black" : "text-black/60"} rounded w-full h-full border-none p-4 text-lg md:max-lg:text-sm outline-none`,
                })}
                id={"Location_input" + id}
                onSelect={() => setLocSearchActive(true)}
                onBlur={() => setLocSearchActive(false)}
              />
            </div>
            <div
              className={`
                ${suggestions.length !== 0 ? " " : "hidden "}
                autocomplete-dropdown-container absolute top-12 z-50 max-w-96 overflow-hidden rounded border bg-white`}
            >
              {loading && (
                <div className="h-12">Searching for locations...</div>
              )}
              {suggestions.map((suggestion, index) => {
                const className = `
                    ${suggestion.active ? "suggestion-item--active" : "suggestion-item"} 
                    ${index !== suggestions.length - 1 ? "border-b" : ""}
                    hover:bg-light_gray/50 cursor-pointer min-h-12 w-full px-4 py-1`;
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
            </div>
          </>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default LocationAutoComplete;
