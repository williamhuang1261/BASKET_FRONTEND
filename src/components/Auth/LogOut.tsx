import logOut from "../../utils/auth/logOut";

const LogOut = () => {
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
