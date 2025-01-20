import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
  const rememberMeRef = React.useRef<HTMLInputElement>(null);
  const errHandler = useError();
  const isValid = email.length >= 3 && password.length >= 1;


  const handleSubmit = (event: React.FormEvent) => {

    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setPersistence(
          auth,
          rememberMeRef.current?.checked
            ? browserLocalPersistence
            : browserSessionPersistence,
        ).catch(errHandler);
        nav();
      })
      .catch((err: FirebaseError) => {
        errHandler(err);
        dispatch({
          group: "CHANGE",
          type: "ERROR_STATUS",
          errorCode: 400,
          message: "Invalid email or password",
        });
        dispatch({
          group: "CHANGE",
          type: "ERROR_DISPLAY",
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
          className={`${isValid ? "bg-green/75 text-black ring-green hover:bg-green hover:ring-1" : "cursor-not-allowed text-green outline outline-green/50"} mt-4 w-full rounded p-2 font-extrabold transition-all duration-150 ease-in-out hover:shadow-sm`}
          disabled={!isValid}
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default StandardLogin;
