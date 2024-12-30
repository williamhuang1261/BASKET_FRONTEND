import useAccountDelete from "../../hooks/user_account/useAccountDelete";
import useLogOut from "../../hooks/useLogOut";

const AccountBox = () => {
  const logOut = useLogOut();
  const deleteAccount = useAccountDelete();

  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={logOut}
        className="w-full rounded bg-red-100 shadow-md transition-all duration-150 ease-in-out hover:bg-red-500"
      >
        Log out
      </button>
      <button
        onClick={deleteAccount}
        className="w-full rounded text-red-500 shadow-sm outline outline-2 outline-red-500 transition-all duration-150 ease-in-out hover:bg-red-500 hover:text-black hover:shadow-md"
      >
        Delete Account
      </button>
    </div>
  );
};

export default AccountBox;
