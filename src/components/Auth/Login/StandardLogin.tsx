import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../utils/auth/initFirebase";

const StandardLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then((idToken) => {
          console.log("ID Token (JWT):", idToken);
        });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.warn(errorCode);
        if (errorCode === "auth/invalid-credential") {
          setLoginFailed(true);
        }
      });
  };

  return (
    <div className="flex flex-col items-center sm:w-96 ">
      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        <div className="">
          <label htmlFor="email" className="py-1">
            <h3 className="font-semibold">Email</h3>
          </label>
          <input
            type="email"
            id="login_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter you email"
            className="w-full rounded border p-2"
          />
        </div>
        <div className="py-2">
          <div className="flex justify-between py-1">
            <label htmlFor="password">
              <h3 className="font-semibold">Password</h3>
            </label>
            <button className="text-black/50 underline">
              <h3>Forgot Password?</h3>
            </button>
          </div>
          <input
            type="password"
            id="login_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full rounded border p-2"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="rounded border p-1"
            id="RememberMe"
          />
          <label htmlFor="RememberMe">
            <h3>Remember me</h3>
          </label>
        </div>
        <button
          type="submit"
          className={`${email && password ? "bg-green/75 text-white ring-green hover:bg-green hover:ring-1" : "text-green/50 outline outline-green/50"} mt-4 w-full rounded p-2 font-black transition-all duration-150 ease-in-out hover:shadow-sm`}
          disabled={!email || !password}
        >
          SIGN IN
        </button>
        {loginFailed && (
          <div className="text-red-500">
            <h3>Invalid email or password</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default StandardLogin;
