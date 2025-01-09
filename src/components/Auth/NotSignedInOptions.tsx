import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";

/**
 * @description Component that displays options available for non-signed-in users
 * @returns {JSX.Element} A dropdown menu with sign in and sign up options
 */
const SignedInOptions = () => {
  return (
    <div className="absolute -left-14 z-10 grid w-28 grid-rows-2 rounded border-0.5 border-dark_gray bg-white">
      <CustomDirectNav
        pathname={"/user-login"}
        aria-label="Go to Sign In Page"
        className="m-1 flex items-center justify-center rounded border-b-0.5 bg-light_green p-0.5 shadow-sm transition-all duration-150 hover:bg-green"
      >
        Sign In
      </CustomDirectNav>
      <CustomDirectNav
        pathname={"/user-signup"}
        aria-label="Go to Sign Up Page"
        className="m-1 mt-0 flex items-center justify-center rounded p-0.5 transition-all duration-150 hover:bg-light_gray hover:shadow-sm"
      >
        Sign Up
      </CustomDirectNav>
    </div>
  );
};

export default SignedInOptions;
