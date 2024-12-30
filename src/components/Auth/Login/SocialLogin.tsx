import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useError from "../../../hooks/useError";
import useStartup from "../../../hooks/user_account/useStartup";

interface SocialLoginProps {
  type: "Sign in" | "Sign up";
  provider: "Facebook" | "X" | "Google" | "Microsoft";
  logo: string;
  color: string;
  onClick: () => Promise<void>;
}

// Microsoft: #00A3EE
// Facebook: #0866FF
// Google: #FBBC04

const SocialLogin = ({
  type,
  provider,
  logo,
  onClick,
  color,
}: SocialLoginProps) => {
  const [mouseOver, setMouseOver] = useState(false);
  const navigate = useNavigate();
  const errorHandler = useError();
  const location = useLocation();
  const startupFn = useStartup();

  const clickHandler = () => {
    onClick()
      .then(() => {
        startupFn().then(() => {
          const from = location.state?.from?.pathname || "/";
          navigate(from);
          window.location.reload()
        }).catch(() => {
          errorHandler({
            code: 500,
            message: "Failed reinitializing the app - Try reloading the Home Page",
          });
        })
      })
      .catch(() => {
        errorHandler({
          code: 500,
          message: `Failed to ${type.toLowerCase()} with ${provider}`,
        });
      });
  };

  return (
    <button
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={clickHandler}
      className={`flex h-10 w-full items-center justify-center gap-3 rounded
        border-none p-2 font-medium shadow-sm transition-all 
        duration-150 ease-in-out`}
      style={{
        backgroundColor: mouseOver ? `${color}50` : "",
        boxShadow: `1px 1px 2px 0.5px ${color}75, 0 1px 2px 0px ${color}50`,
      }}
    >
      <img
        src={logo}
        className="object-fit h-full"
        alt={`${provider} + logo`}
      />
      <h2 className="font-semi">{`${type} with ${provider}`}</h2>
    </button>
  );
};

export default SocialLogin;
