import { useQueryClient } from "@tanstack/react-query";
import useUserState from "../../hooks/state/useUserState";
import EditField from "./EditField";
import { useState } from "react";
import useError from "../../hooks/useError";
import { AxiosError } from "axios";
import { UserServices } from "../../services/restricted-service";

/**
 * @description Component that handles username modification functionality
 * @returns {JSX.Element} A component with username editing capabilities
 */
const UsernameModif = () => {
  const { user, dispatch } = useUserState();
  const [isLoading, setIsLoading] = useState(false);
  const errorHandler = useError();
  const queryClient = useQueryClient();

  const fn = async (v: string) => {
    setIsLoading(true);
    return UserServices.put("/info/me", {}, { name: v }).then(() => {
      setIsLoading(false);
      dispatch({ group: "CHANGE", type: "ID", new: v });
      return null
    });
  };

  const useHandler = (v: string) => {
    try {
      queryClient.fetchQuery({
        queryKey: ["user", "settings", "username"],
        queryFn: () => fn(v),
      });
    } catch (err) {
      errorHandler(err as AxiosError);
    }
  };

  return (
    <>
      <h2 className="font-semibold">Username</h2>
      <EditField
        text={user.meta.name}
        placeholder="New Username"
        id="username"
        onConfirm={useHandler}
        isLoading={isLoading}
      />
    </>
  );
};

export default UsernameModif;
