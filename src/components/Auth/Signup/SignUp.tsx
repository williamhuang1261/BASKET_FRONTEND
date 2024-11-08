import React, { useState } from "react";
import PasswordCriteriaBox from "./PasswordCriteriaBox";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCriteria, setShowCriteria] = useState(false);
  const [confirm_password, setConfirmPassword] = useState("");

  const criteria = [
    {
      label: "Contains 8 to 128 characters",
      isValid: password.length >= 8 && password.length <= 128,
    },
    { label: "Contains an uppercase letter", isValid: /[A-Z]/.test(password) },
    { label: "Contains a lowercase letter", isValid: /[a-z]/.test(password) },
    { label: "Contains a number", isValid: /\d/.test(password) },
    {
      label: "Contains any of the following special characters: !@#$%^&*(),.?\":{}|<>-",
      isValid: /[!@#$%^&*(),.?":{}|<>-]/.test(password),
    },
  ];

  const isSamePassword = [
    {
      label: "Passwords match",
      isValid: password === confirm_password && password.length > 0,
    },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
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
            id="email"
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
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onSelect={() => setShowCriteria(true)}
            required
            placeholder="Enter your password"
            className="w-full rounded border p-2"
          />
        </div>
        <div className={`${showCriteria ? "" : "hidden"}`}>
          <PasswordCriteriaBox criteria={criteria} />
        </div>
        <div className="py-1">
          <div className="flex justify-between py-1">
            <label htmlFor="confirm_password">
              <h3 className="font-semibold">Confirm password</h3>
            </label>
          </div>
          <input
            type="password"
            id="confirm_password"
            value={confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
            className="w-full rounded border p-2"
          />
        </div>
        <div className={`${confirm_password.length > 0 ? "" : "hidden"}`}>
          <PasswordCriteriaBox criteria={isSamePassword} />
        </div>
        <button
          type="submit"
          className={`${email && isSamePassword[0].isValid ? "bg-green/75 text-white ring-green hover:bg-green hover:ring-1" : "text-green/50 outline outline-green/50"} mt-4 w-full rounded p-2 font-black transition-all duration-150 ease-in-out`}
          disabled={!isSamePassword[0].isValid || email.length === 0}
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
