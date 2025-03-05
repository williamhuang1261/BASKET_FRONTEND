import { distanceUnitsType, weightUnitsType } from "../../interface/UnitsProp";
import { UserServices } from "../../services/serviceList";
import { createFetchQuery } from "../../services/FetchQueryClass";

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
 * @description Custom hook to handle user settings modifications
 * @returns {Object} Object containing the putUserInfo function

 */
const useUserSettingsModif = () => {
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
    const { name, email, location, preferences } = req;
    if (!(name || email || location || preferences)) return;
    await createFetchQuery(UserServices).put("/info/me", {}, req);
  };

  return { putUserInfo };
};

export default useUserSettingsModif;
