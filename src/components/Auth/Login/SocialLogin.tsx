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
 * @description This is a component that will allow you to sign in or sign up with a social media account.
 * @summary Can be used for sign in and sign up for one-click authentication.
 * @param {Object} props - The properties object.
 * @param {"Sign In" | "Sign Up"} props.type - The type of action to be performed.
 * @param {string} props.provider - The social media provider (e.g., Google, Facebook, Microsoft).
 * @param {string} props.logo - The URL of the provider's logo or its string representation.
 * @param {function} props.onClick - The asynchronous function to call when the button is clicked.
 * @param {string} props.color - The color of the button. Must use the format #RRGGBB.
 * @returns {JSX.Element} The social login button component.
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
          getUser()
            .then(() => {
              nav();
            })
            .catch(() => {
              errorHandler({
                code: 500,
                message:
                  "Failed initializing your account - Try reloading the Home Page",
              });
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
      className={`flex h-10 w-full items-center justify-center gap-3 rounded
        border-none p-2 font-medium shadow-sm transition-all`}
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
