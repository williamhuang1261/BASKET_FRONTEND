import { useQueryClient } from "@tanstack/react-query";
import {
  distanceUnitsType,
  weightUnitsType,
} from "../../../interface/UnitsProp";
import { UserServices } from "../../../services/restricted-service";

interface UserModifProp {
  name?: string;
  email?: string;
  location?: {
    country: "Canada" | "USA";
    type: "Point";
    coordinates: [number, number];
    formattedAddress: string;
  };
  preferences?: {
    weightUnits: weightUnitsType;
    distUnits: distanceUnitsType;
    language: "fr" | "en";
  };
}

const fn = (req: UserModifProp) => {
  const { name, email, location, preferences } = req;
  if (!(name || email || location || preferences)) {
    // Throw error?
    return;
  }

  const load = {
    name,
    email,
    location,
    preferences,
  };

  return UserServices.put("/info", {}, load).then()
}

const useUserSettingsModif = () => {
  const queryClient = useQueryClient();

  const putUserInfo = (req: UserModifProp) => {
    

    queryClient.fetchQuery({
      queryKey: ["user", "settings", "update"],
      queryFn: () => fn(req),
    });
  };

  return { putUserInfo };
};

export default useUserSettingsModif;
