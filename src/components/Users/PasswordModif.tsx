import { FormEvent, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import Popup from "../General/Miscellaneous/Popup";
import EmailBox from "../Auth/EmailBox";
import PasswordBox from "../Auth/PasswordBox";
import PasswordCriteriaBox from "../Auth/Signup/CriteriaBox";
import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { auth } from "../../utils/auth/initFirebase";
import useError from "../../hooks/useError";
import { FirebaseError } from "firebase/app";
import { IoClose } from "react-icons/io5";
import passwordCriteria from "../../utils/auth/passwordCriteria";

const PasswordModif = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCriteria, setShowCriteria] = useState(false);
  const errHandler = useError();
  const { criteria, isSamePassword, allValid } = passwordCriteria(
    newPassword,
    confirmNewPassword,
    email,
  );

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      await updatePassword(cred.user, newPassword);
      console.log("Password updated successfully");
    } catch (err) {
      errHandler(err as FirebaseError);
    }
    setOpen(false);
  };

  return (
    <>
      <h3 className="font-semibold">Password</h3>
      <div className="flex items-center gap-1">
        <p className="font-semibold">{"\u25CF".repeat(8)}</p>
        <button
          className="flex h-min cursor-pointer text-black/50 transition-all hover:text-green"
          onClick={() => setOpen(true)}
        >
          <MdModeEdit />
        </button>
      </div>
      <Popup id={"PasswordModif_Popup"} openCondition={open} className="">
        <div className=" max-h-screen overflow-auto rounded-sm bg-white">
          <div className="flex items-center justify-between border-b border-gray-200 bg-green px-5 py-3">
            <h3 className="text-lg font-semibold lg:text-xl">
              Modify your password
            </h3>
            <button
              className="hover:text-black/50 transition-all"
              onClick={() => setOpen(false)}
            >
              <IoClose size={"28"} />
            </button>
          </div>
          <div className="flex flex-col items-center px-5 pb-5 pt-3 sm:w-96 ">
            <form onSubmit={handleSubmit} className="flex w-full flex-col">
              <div>
                <EmailBox
                  id={"modify_password_login_email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="py-2">
                <PasswordBox
                  id={"modify_password_login_password"}
                  value={password}
                  showForgot={true}
                  title={"Current password"}
                  placeholder={"Enter your current password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="">
                <PasswordBox
                  id={"modify_password_new_password"}
                  value={newPassword}
                  showForgot={false}
                  title={"New password"}
                  placeholder={"Enter your new password"}
                  onChange={(e) => setNewPassword(e.target.value)}
                  onSelect={() => setShowCriteria(true)}
                />
              </div>
              {showCriteria && (
                <div>
                  <PasswordCriteriaBox className="mx-7" successMessage="Password is OK" criteria={criteria} />
                </div>
              )}
              <div className="py-1">
                <PasswordBox
                  id={"modify_password_confirm_password"}
                  value={confirmNewPassword}
                  showForgot={false}
                  title={"Confirm new password"}
                  placeholder={"Confirm your new password"}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>
              {confirmNewPassword.length > 0 && (
                <div>
                  <PasswordCriteriaBox className="mx-7" successMessage="Passwords match" criteria={isSamePassword} />
                </div>
              )}
              <button
                type="submit"
                className={`${
                  allValid
                    ? "bg-green/75 text-white ring-green hover:bg-green hover:ring-1"
                    : "text-green/50 outline outline-green/50 cursor-not-allowed"
                } mt-4 w-full rounded-sm p-2 font-black transition-all hover:shadow-xs`}
                disabled={!allValid}
              >
                SAVE CHANGES
              </button>
            </form>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default PasswordModif;
