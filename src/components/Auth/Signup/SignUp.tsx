import React, { useState } from "react";
import PasswordCriteriaBox from "./CriteriaBox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/auth/initFirebase";
import { FirebaseError } from "firebase/app";
import useError from "../../../hooks/useError";
import useCustomNavigation from "../../../hooks/useCustomNavigation";
import CustomDirectNav from "../../General/Miscellaneous/CustomDirectNav";
import EmailBox from "../EmailBox";
import PasswordBox from "../PasswordBox";
import passwordCriteria from "../../../utils/auth/passwordCriteria";

/**
 * @description Component for user registration with email and password
 * @summary Has the ability to register a user with:
 * - Email
 * + Password with the following criteria:
 *    + Contains 8 to 128 characters
 *    + Contains an uppercase letter
 *    + Contains a lowercase letter
 *    + Contains a number
 *    + Contains any of the following special characters: !@#$%^&*(),.?":{}|<>
 * - Confirm password
 *
 * @returns {JSX.Element} A form with email and password inputs, password criteria validation, and submit button
 */
const SignUp = () => {
  const errHandler = useError();
  const { nav } = useCustomNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCriteria, setShowCriteria] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alreadyExists, setAlreadyExists] = useState(false);
  const { criteria, isSamePassword, allValid } = passwordCriteria(
    password,
    confirmPassword,
    email,
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        nav();
      })
      .catch((err: FirebaseError) => {
        if (err.code === "auth/email-already-in-use") {
          setAlreadyExists(true);
        } else {
          errHandler(err);
        }
      });
  };

  return (
    <div className="flex flex-col items-center sm:w-96 ">
      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        <div className="">
          <EmailBox
            id={"signup_email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-2">
          <PasswordBox
            id={"signup_password"}
            value={password}
            showForgot={false}
            title={"Password"}
            placeholder={"Enter your password"}
            onChange={(e) => setPassword(e.target.value)}
            onSelect={() => setShowCriteria(true)}
          />
        </div>
        {showCriteria && (
          <div>
            <PasswordCriteriaBox
              className="mx-7"
              successMessage="Password is OK"
              criteria={criteria}
            />
          </div>
        )}
        <div className="py-1">
          <PasswordBox
            id={"confirm_password"}
            value={confirmPassword}
            showForgot={false}
            title={"Confirm password"}
            placeholder={"Confirm your password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {confirmPassword.length > 0 && (
          <div>
            <PasswordCriteriaBox
              className="mx-7"
              successMessage="Passwords match"
              criteria={isSamePassword}
            />
          </div>
        )}

        <button
          type="submit"
          className={`${allValid ? "bg-green/75 text-white outline-none ring-green hover:bg-green hover:ring-1" : "text-green outline outline-green/50 cursor-not-allowed"} mt-4 w-full rounded p-2 font-black transition-all duration-150 ease-in-out`}
          disabled={!allValid}
        >
          SIGN UP
        </button>
        {alreadyExists && (
          <h2 className="text-red-500">
            {"This email is already in use. Try "}
            <CustomDirectNav
              pathname="/auth/login"
              className="text-blue-500 underline"
            >
              {"Login"}
            </CustomDirectNav>
          </h2>
        )}
      </form>
    </div>
  );
};

export default SignUp;
