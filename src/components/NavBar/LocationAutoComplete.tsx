import { useEffect, useState } from "react";
import useUserState from "../../hooks/state/useUserState";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { UserServices } from "../../services/restricted-service";

interface Props {
  id: string;
}

const LocationAutoComplete = ({ id }: Props) => {
  const { user, dispatch } = useUserState();
  const [tempAddress, setTempAddress] = useState(
    user.meta.location.formattedAddress || "Toronto, ON",
  );
  const [locSearchActive, setLocSearchActive] = useState(false);

  const findCountry = (info: google.maps.GeocoderResult[]) => {
    const countryComponent = info[0].address_components.find((c) =>
      c.types.includes("country"),
    );
    let country: "USA" | "Canada";
    if (countryComponent?.short_name == "US") {
      country = "USA";
    } else if (countryComponent?.short_name == "CA") {
      country = "Canada";
    } else {
      // Default to Canada
      country = "Canada";
    }
    return country
  }

  const handleSelect = async (address: string) => {
    try {
      const res = await geocodeByAddress(address);
      const country = findCountry(res);
      const ll = await getLatLng(res[0]);
      dispatch({
        group: "CHANGE",
        type: "LOCATION",
        newLocation: {
          country: country,
          type: "Point",
          coordinates: [ll.lng, ll.lat],
          formattedAddress: address,
        },
      });
      UserServices.put("/info/me")
        .then(() => {
          console.log("Location updated");
          console.log(user);
        })
        .catch((err) => {
          console.error(err);
        });
      setTempAddress(address);
      setLocSearchActive(false);
    } catch {
      console.warn("Could not confirm location selection");
    }
  };

  useEffect(() => {
    setTempAddress(user.meta.location.formattedAddress);
  }, [user.meta.location.formattedAddress]);

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
