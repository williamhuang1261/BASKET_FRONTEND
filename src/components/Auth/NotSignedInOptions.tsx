import useWindowSize from "../../hooks/useWindowSize";
import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";

/**
 * @description Component that displays options available for non-signed-in users
 * @returns {JSX.Element} A dropdown menu with sign in and sign up options
 */
const SignedInOptions = () => {
  const winSize = useWindowSize(undefined, [767, 800]);

  return (
    <div
      className={`${winSize === 1 ? "-left-[76px]" : "-left-14"} flex absolute -left-14 z-10 w-28 flex-col rounded border-0.5 border-dark_gray bg-white`}
    >
      <CustomDirectNav
        pathname={"/auth/login"}
        aria-label="Go to Sign In Page"
        className="m-1 flex items-center justify-center rounded bg-green/50 p-0.5 shadow-sm transition-all hover:bg-green/80"
      >
        Sign In
      </CustomDirectNav>
      <CustomDirectNav
        pathname={"/auth/signup"}
        aria-label="Go to Sign Up Page"
        className="m-1 mt-0 flex items-center justify-center rounded p-0.5 transition-all hover:bg-light_gray hover:shadow-sm"
      >
        Sign Up
      </CustomDirectNav>
    </div>
  );
};

export default SignedInOptions;
