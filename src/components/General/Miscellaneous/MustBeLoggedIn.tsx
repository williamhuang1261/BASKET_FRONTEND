import { ReactNode, useEffect } from "react";
import useUserState from "../../../hooks/state/useUserState";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
              from: location,
              error: {
                message: "You must be logged in to view this page",
                code: 401,
              },
            },
          });
        }
      });
    }
  }, []);

  return <div className={className}>{children}</div>;
};

export default MustBeLoggedIn;
