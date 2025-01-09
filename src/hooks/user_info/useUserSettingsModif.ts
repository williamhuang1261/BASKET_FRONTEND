import { useQueryClient } from "@tanstack/react-query";
import { distanceUnitsType, weightUnitsType } from "../../interface/UnitsProp";
import { UserServices } from "../../services/restricted-service";

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
    weightUnits?: weightUnitsType;
    distUnits?: distanceUnitsType;
    language?: "fr" | "en";
  };
}

/**
 * @description Internal function to handle user settings modification request
 * @param {UserModifProp} req - The user modification request object
 * @returns {Promise<void>} A promise that resolves when the modification is complete
 */
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

  return UserServices.put("/info/me", {}, load).then();
};

/**
 * @description Custom hook to handle user settings modifications
 * @returns {Object} Object containing the putUserInfo function

 */
const useUserSettingsModif = () => {
  const queryClient = useQueryClient();

  /**
   *
   * @param req
   * @example
   * // Must be of form
   * const { putUserInfo } = useUserSettingsModif();
   * putUserInfo({
   *   name?: string;
   *   email?: string;
   *   location?: {
   *     country: "Canada" | "USA";
   *     type: "Point";
   *     coordinates: [number, number];
   *     formattedAddress: string;
   *   };
   *   preferences?: {
   *      weightUnits: weightUnitsType;
   *      distUnits: distanceUnitsType;
   *      language: "fr" | "en";
   *   };
   * });
   */
  const putUserInfo = async (req: UserModifProp) => {
    await queryClient.fetchQuery({
      queryKey: ["user", "settings", "update"],
      queryFn: () => fn(req),
    });
  };

  return { putUserInfo };
};

export default useUserSettingsModif;
