import EditField from "./EditField";
import useUserState from "../../hooks/state/useUserState";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useError from "../../hooks/useError";
import { AxiosError } from "axios";
import { UserServices } from "../../services/restricted-service";
import {
  applyActionCode,
  getAuth,
  updateEmail,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useLocation, useNavigate } from "react-router-dom";
import {NavigationProps} from "../../interface/NavigateProps";

/**
 * @description Component that handles email modification with Firebase authentication
 * @returns {JSX.Element} A component with email editing capabilities
 */
const EmailModif = () => {
  const { user, dispatch } = useUserState();
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const errorHandler = useError();
  const navigate = useNavigate();
  const location = useLocation();

  const fn = async (v: string) => {
    try {
      setLoading(true);
      const auth = getAuth();

      if (!auth.currentUser) throw { message: "No user found", code: 401 };

      await verifyBeforeUpdateEmail(auth.currentUser, v);

      await applyActionCode(auth, "VERIFY_AND_CHANGE_EMAIL");

      await UserServices.put("/info/me", {}, { email: v });

      await updateEmail(auth.currentUser, v);
      setLoading(false);
      dispatch({ group: "CHANGE", type: "EMAIL", new: v });
      return null;
    } catch (err) {
      if ((err as FirebaseError).code === "auth/requires-recent-login") {
        navigate("/user-login", {
          state: {
            pathname: location,
            error: {
              message: "You must be logged in to view this page",
              code: 401,
            },
          } as NavigationProps,
        });
      }
      setLoading(false);
      errorHandler(err as AxiosError);
      return null;
    }
  };

  const handleConfirm = (v: string) => {
    queryClient.fetchQuery({
      queryKey: ["user", "settings", "email"],
      queryFn: () => fn(v),
    });
  };

  return (
    <>
      <h2 className="font-semibold">Email</h2>
      <EditField
        text={user.meta.email}
        placeholder="New Email"
        id="email"
        onConfirm={handleConfirm}
        isLoading={isLoading}
      />
    </>
  );
};

export default EmailModif;
