import { useQueryClient } from "@tanstack/react-query";
import useUserState from "../../hooks/state/useUserState";
import { useEffect, useState } from "react";
import { UserServices } from "../../services/restricted-service";
import useError from "../../hooks/useError";
import Spinner from "../General/Miscellaneous/Spinner";

const WeightUnitsModif = () => {
  const queryClient = useQueryClient();
  const errHandler = useError();
  const { user, dispatch } = useUserState();
  const [weightUnit, setWeightUnit] = useState(
    user.meta.preferences.weightUnits,
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleWeightChange = (e: any) => {
    const opposite = e.target.value === "kg" ? "lb" : "kg";
    setWeightUnit(e.target.value);
    setIsLoading(true);
    queryClient.fetchQuery({
      queryKey: ["weight_units_preferences"],
      queryFn: () => {
        return UserServices.put(
          "/info/me",
          {},
          { preferences: { weightUnits: e.target.value } },
        )
          .then(() => {
            dispatch({
              group: "CHANGE",
              type: "WEIGHT_UNITS",
              new: e.target.value as "kg" | "lb",
            });
            return null;
          })
          .catch((err) => {
            errHandler(err);
            setWeightUnit(opposite);
          })
          .finally(() => setIsLoading(false));
      },
    });
  };

  useEffect(() => {
    setWeightUnit(user.meta.preferences.weightUnits);
  }, [user.meta.preferences.weightUnits]);

  return (
    <>
      <h3 className="font-semibold">Weight units</h3>
      {isLoading ? (
        <Spinner color="dark_gray" size={"2"} />
      ) : (
        <select
          id={"weight_units_preferences"}
          className="rounded-full bg-light_gray/50 px-2 outline-none"
          onChange={handleWeightChange}
          value={weightUnit}
        >
          <option value="kg" className="bg-white">
            Metric
          </option>
          <option value="lb" className="bg-white">
            Imperial
          </option>
        </select>
      )}
    </>
  );
};

export default WeightUnitsModif;
