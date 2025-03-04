import { useState } from "react";
import useError from "../../../hooks/useError";
import useGetUser from "../../../hooks/user_account/useGetUser";
import useCustomNavigation from "../../../hooks/useCustomNavigation";
import { useLocation } from "react-router-dom";
import { CustomLocationState } from "../../../interface/NavigateProps";

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

/**
 * Social media authentication button with visual feedback
 * @param {SocialLoginProps} props Component properties
 * @param {string} props.type - Type of authentication ("Sign in" or "Sign up")
 * @param {string} props.provider - OAuth provider name
 * @param {string} props.logo - Provider's logo URL
 * @param {string} props.color - Button theme color (hex format)
 * @param {() => Promise<void>} props.onClick - Authentication callback
 * @example
 * <SocialLogin
 *   type="Sign in"
 *   provider="Google"
 *   logo="/google-logo.png"
 *   color="#FBBC04"
 *   onClick={handleGoogleAuth}
 * />
 */
const SocialLogin = ({
  type,
  provider,
  logo,
  onClick,
  color,
}: SocialLoginProps) => {
  const [mouseOver, setMouseOver] = useState(false);
  const { nav } = useCustomNavigation();
  const errorHandler = useError();
  const getUser = useGetUser();
  const location = useLocation();

  const clickHandler = () => {
    onClick()
      .then(() => {
        if (
          (location.state as CustomLocationState).currErr?.message !==
          "You must re-authenticate to delete your account"
        ) {
          getUser({
            callback: () => {
              nav();
            },
          });
        } else {
          nav();
        }
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
      className={`flex h-10 w-full items-center justify-center gap-3 rounded-sm
        border-none p-2 font-medium shadow-xs transition-all`}
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
