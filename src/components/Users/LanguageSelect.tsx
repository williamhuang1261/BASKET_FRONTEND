import { AxiosError } from "axios";
import { useState, useEffect, ReactNode } from "react";
import useUserState from "../../hooks/state/useUserState";
import useError from "../../hooks/useError";
import useUserSettingsModif from "../../hooks/user_info/useUserSettingsModif";

/**
 * @interface Props
 * @description Props for the LanguageSelect component
 * @property {string} id - Unique identifier for the select element
 * @property {ReactNode} loadingComponent - Component to display while language change is processing
 * @property {string} [selectClassName] - Optional CSS classes for the select element
 * @property {string} [optionClassName] - Optional CSS classes for the option elements
 */
interface Props {
  id: string;
  loadingComponent: ReactNode;
  selectClassName?: string;
  optionClassName?: string;
}

/**
 * @component LanguageSelect
 * @description A reusable language selection component that handles language switching
 * @param {Props} props - Component properties
 * @returns {JSX.Element} A select element for language switching or loading component
 */
const LanguageSelect = ({
  id,
  loadingComponent,
  selectClassName,
  optionClassName,
}: Props) => {
  const { putUserInfo } = useUserSettingsModif();
  const { user, dispatch } = useUserState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    user.meta.preferences.language,
  );
  const errHandler = useError();

  useEffect(() => {
    setSelectedLanguage(user.meta.preferences.language);
  }, [user.meta.preferences.language]);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    putUserInfo({ preferences: { language: e.target.value as "fr" | "en" } })
      .then(() => {
        dispatch({
          group: "CHANGE",
          type: "LANGUAGE",
          new: e.target.value as "fr" | "en",
        });
        setSelectedLanguage(e.target.value as "fr" | "en");
      })
      .catch((err) => errHandler(err as AxiosError))
      .finally(() => setIsLoading(false));
  };

  return isLoading ? (
    <>{loadingComponent}</>
  ) : (
    <select
      id={"Language_Selection" + id}
      className={selectClassName}
      onChange={changeLanguage}
      value={selectedLanguage}
      aria-label="LanguageSelection"
    >
      <option
        value="en"
        className={optionClassName + " bg-light_gray"}
      >
        English
      </option>
      <option value="fr" className={optionClassName}>
        French
      </option>
    </select>
  );
};

export default LanguageSelect;
