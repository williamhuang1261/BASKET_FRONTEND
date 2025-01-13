import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../utils/auth/initFirebase";
import { FirebaseError } from "firebase/app";
import useError from "../../../hooks/useError";
import useStatusState from "../../../hooks/state/useStatusState";
import useCustomNavigation from "../../../hooks/useCustomNavigation";
import EmailBox from "../EmailBox";
import PasswordBox from "../PasswordBox";
import RememberMe from "../RememberMe";

/**
 * @description Component for user authentication with email and password
 * @summary This component is used for user authentication with email and password. Can also handle tasks that require re-authentification before proceeding.
 * @returns {JSX.Element} A form with email and password inputs, remember me option, and submit button
 */
const StandardLogin = () => {
  const { dispatch } = useStatusState();
  const { nav } = useCustomNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorHandler = useError();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        nav();
      })
      .catch((err: FirebaseError) => {
        errorHandler(err);
        dispatch({
          group: "CHANGE",
          type: "STATUS",
          newError: true,
          newErrorCode: 400,
          newMessage: "Invalid email or password",
        });
        dispatch({
          group: "CHANGE",
          type: "DISPLAY",
          show: true,
        });
      });
  };

  return (
    <div className="flex flex-col items-center sm:w-96 ">
      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        <div>
          <EmailBox
            id={"login_email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-2">
          <PasswordBox
            id={"login_password"}
            value={password}
            showForgot={true}
            title={"Password"}
            placeholder={"Enter your password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <RememberMe id={"login_remember_me"} />
        </div>
        <button
          type="submit"
          className={`${email && password ? "bg-green/75 text-white ring-green hover:bg-green hover:ring-1" : "cursor-not-allowed text-green/50 outline outline-green/50"} mt-4 w-full rounded p-2 font-black transition-all duration-150 ease-in-out hover:shadow-sm`}
          disabled={!email || !password}
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default StandardLogin;
