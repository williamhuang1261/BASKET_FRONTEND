import { useState } from "react";
import useAccountDelete from "../../hooks/user_account/useAccountDelete";
import useLogOut from "../../hooks/user_account/useLogOut";
import Popup from "../General/Miscellaneous/Popup";

/**
 * @description Component that provides account management options
 * @returns {JSX.Element} A container with logout and account deletion buttons
 */
const AccountBox = () => {
  const logOut = useLogOut();
  const deleteAccount = useAccountDelete();
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="flex gap-5 w-full">
      <button
        onClick={logOut}
        className="w-full rounded bg-red-100 p-1 shadow-md transition-all duration-150 ease-in-out hover:bg-red-500"
      >
        Log out
      </button>
      <button
        onClick={() => setConfirm(true)}
        className="w-full rounded border-2 border-red-500 p-1 bg-white text-red-500 shadow-sm transition-all duration-150 ease-in-out hover:bg-red-500 hover:text-black hover:shadow-md"
      >
        Delete Account
      </button>

      <Popup openCondition={confirm}>
        <div className="w-96 overflow-hidden rounded bg-white shadow-md">
          <h2 className="flex items-center justify-center bg-green p-2 text-xl font-semibold">
            Account Deletion
          </h2>
          <div className="bg-white p-2">
            <span className="w-full flex justify-center">Please confirm you want to delete your account</span>
            <div className="flex justify-center gap-5 mt-1">
              <button
                onClick={() => setConfirm(false)}
                className="w-full rounded bg-green/50 p-1 transition-all duration-150 ease-in-out hover:bg-green/80 hover:shadow-md"
                aria-label="Cancel account deletion"
              >
                Cancel
              </button>
              <button
                onClick={deleteAccount}
                className="w-full rounded border-2 border-red-500 p-1 text-red-500 shadow-sm transition-all duration-150 ease-in-out hover:bg-red-500 hover:text-black hover:shadow-md"
                aria-label="Confirm account deletion"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default AccountBox;
