import useLogOut from "../../hooks/user_account/useLogOut";

/**
 * @description Component that handles user logout functionality
 * @returns {JSX.Element} A button that triggers the logout process
 */
const LogOut = () => {
  const logOut = useLogOut();

  return (
    <button
      type="button"
      aria-label="Sign out"
      className="p-1 text-red-500 hover:bg-light_gray"
      onClick={logOut}
    >
      Sign out
    </button>
  );
};

export default LogOut;
