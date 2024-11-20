import { useState } from "react";

interface SocialLoginProps {
  type: "Sign in" | "Sign up";
  provider: "Facebook" | "X" | "Google" | "Microsoft";
  logo: string;
  color: string;
  onClick: () => void;
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

  return (
    <button
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={onClick}
      className={`flex h-10 w-full items-center justify-center gap-3 rounded
        border p-2 font-medium transition-all duration-150 
        ease-in-out`}
      style={{
        borderColor: color,
        backgroundColor: mouseOver ? `${color}50` : '',
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
