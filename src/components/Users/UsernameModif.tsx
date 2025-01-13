import useUserState from "../../hooks/state/useUserState";
import EditField from "./EditField";
import { useState } from "react";
import useError from "../../hooks/useError";
import { AxiosError } from "axios";
import useUserSettingsModif from "../../hooks/user_info/useUserSettingsModif";

/**
 * @description Component that handles username modification functionality
 * @returns {JSX.Element} A component with username editing capabilities
 */
const UsernameModif = () => {
  const { user, dispatch } = useUserState();
  const [isLoading, setIsLoading] = useState(false);
  const errorHandler = useError();
  const { putUserInfo } = useUserSettingsModif();

  const criteriaFn = (v: string) => {
    return [
      {
        label: "Contains between 3 and 32 characters",
        isValid: v.length >= 3 && v.length <= 32,
      },
    ];
  }

  const useHandler = (v: string) => {
    setIsLoading(true);
    putUserInfo({ name: v })
      .then(() => dispatch({ group: "CHANGE", type: "ID", new: v }))
      .catch((err) => errorHandler(err as AxiosError))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <h3 className="font-semibold">Username</h3>
      <EditField
        text={user.meta.name}
        placeholder="New Username"
        id="username"
        onConfirm={useHandler}
        isLoading={isLoading}
        criteriaFn={criteriaFn}
      />
    </>
  );
};

export default UsernameModif;
