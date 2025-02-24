import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useUserState from "../../hooks/state/useUserState";
import Spinner from "../General/Miscellaneous/Spinner";
import useError from "../../hooks/useError";
import { UserServices } from "../../services/serviceList";

const DistanceUnitsModif = () => {
  const queryClient = useQueryClient();
  const errHandler = useError();
  const { user, dispatch } = useUserState();
  const [distanceUnit, setDistanceUnit] = useState(
    user.meta.preferences.distUnits,
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleDistanceChange = (e: any) => {
    const opposite = e.target.value === "km" ? "mi" : "km";
    setDistanceUnit(e.target.value);
    setIsLoading(true);
    queryClient.fetchQuery({
      queryKey: ["distance_units_preferences"],
      queryFn: () => {
        return UserServices.put(
          "/info/me",
          {},
          { preferences: { distUnits: e.target.value } },
        )
          .then(() => {
            dispatch({
              group: "CHANGE",
              type: "DISTANCE_UNITS",
              new: e.target.value as "km" | "mi",
            });
            return null;
          })
          .catch((err) => {
            errHandler(err);
            setDistanceUnit(opposite);
          })
          .finally(() => setIsLoading(false));
      },
    });
  };

  useEffect(() => {
    setDistanceUnit(user.meta.preferences.distUnits);
  }, [user.meta.preferences.distUnits]);

  return (
    <>
      <h3 className="font-semibold">Distance units</h3>
      {isLoading ? (
        <Spinner color="dark_gray" size={"2"} />
      ) : (
        <select
          className="rounded-full bg-light_gray/50 px-2 outline-none"
          onChange={handleDistanceChange}
          id={"distance_units_preferences"}
          value={distanceUnit}
        >
          <option value="km" className="bg-white">
            Kilometres
          </option>
          <option value="mi" className="bg-white">
            Miles
          </option>
        </select>
      )}
    </>
  );
};

export default DistanceUnitsModif;
