import useAccountDelete from "../../hooks/user_account/useAccountDelete";
import useLogOut from "../../hooks/user_account/useLogOut";

/**
 * @description Component that provides account management options
 * @returns {JSX.Element} A container with logout and account deletion buttons
 */
const AccountBox = () => {
  const logOut = useLogOut();
  const deleteAccount = useAccountDelete();

  return (
    <div className="flex gap-5">
      <button
        onClick={logOut}
        className="w-full rounded bg-red-100 p-1 shadow-md transition-all duration-150 ease-in-out hover:bg-red-500"
      >
        Log out
      </button>
      <button
        onClick={deleteAccount}
        className="w-full rounded p-1 border-2 border-red-500 text-red-500 shadow-sm transition-all duration-150 ease-in-out hover:bg-red-500 hover:text-black hover:shadow-md"
      >
        Delete Account
      </button>
    </div>
  );
};

export default AccountBox;
