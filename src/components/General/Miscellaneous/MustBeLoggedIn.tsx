import { ReactNode, useEffect } from "react";
import useUserState from "../../../hooks/state/useUserState";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {NavigationProps} from "../../../interface/NavigateProps";

/**
 * @description A wrapper component that ensures users are logged in before accessing content
 * @summary Redirects to login page if user is not authenticated
 * @param {Object} props - The properties object
 * @param {ReactNode} props.children - The content to be rendered if user is logged in
 * @param {string} [props.className] - Optional CSS classes to apply to the wrapper div
 * @returns {JSX.Element} The protected content or redirects to login
 */
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MustBeLoggedIn = ({ children, className }: Props) => {
  const { user: userState } = useUserState();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    if (!userState.isLoggedIn) {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
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
      });
    }
  }, []);

  return <div className={className}>{children}</div>;
};

export default MustBeLoggedIn;
