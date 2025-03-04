import { IoClose } from "react-icons/io5";
import CustomDirectNav from "../../components/General/Miscellaneous/CustomDirectNav";
import GenNavBar from "../../components/NavBar/GenNavBar";
import EmailBox from "../../components/Auth/EmailBox";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../utils/auth/initFirebase";
import useError from "../../hooks/useError";
import { FirebaseError } from "firebase/app";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const errHandler = useError();

  const isValid = email.length >= 3 && email.includes("@");

  const handleClick = async () => {
    try {
      await sendPasswordResetEmail(auth, email, { url: 'https://localhost:5173/auth/login' });
      setSent(true);
      console.log("Email sent");
    } catch (err) {
      console.error(err);
      errHandler(err as FirebaseError);
    }
  };

  return (
    <div className="flex h-screen min-w-80 flex-col">
      <GenNavBar
        size={"Container"}
        hidden={[
          "Side",
          "SearchBar",
          "Location",
          "Profile",
          "Calc",
          "SideForSmall",
        ]}
        page="General"
      />
      <div className="my-4 flex w-full justify-center">
        <div className="w-full min-w-96 overflow-hidden rounded-sm bg-white p-6 sm:w-min sm:border sm:shadow-lg border-gray-200">
          <div className="">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Reset Your Password</h2>
              {!sent && (
                <CustomDirectNav pathname="/" aria-label="Close Login Page">
                  <IoClose
                    size={"28"}
                    className="text-black/50 transition-all hover:text-black"
                  />
                </CustomDirectNav>
              )}
            </div>
            {sent ? (
              <div className="">
                <p className="py-2">
                  A reset email was sent to {email}. If you cannot find it,
                  check your spam folder.
                </p>
                <CustomDirectNav
                  pathname="/auth/login"
                  aria-label="Close Reset Password Page"
                >
                  <h2 className="font-semibold underline transition-all hover:text-green">
                    Return to Login Page
                  </h2>
                </CustomDirectNav>
              </div>
            ) : (
              <>
                <div className="py-2">
                  <p>
                    Enter your email address and we will send a link to reset
                    your password
                  </p>
                </div>
                <div className="sm:min-w-96">
                  <EmailBox
                    id={"ResetPasswordEmailInput"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex w-full gap-2 py-2">
                  <h3>{"Remember your password?"}</h3>
                  <CustomDirectNav
                    pathname="/auth/login"
                    aria-label="Go to Sign Up Page"
                    className="font-bold underline transition-all hover:text-green"
                  >
                    <h2>Sign in</h2>
                  </CustomDirectNav>
                </div>
                <button
                  type="submit"
                  className={`${isValid ? "bg-green/75 text-white ring-green hover:bg-green hover:ring-1" : "cursor-not-allowed text-green/50 outline outline-green/50"} w-full rounded-sm p-2 font-black transition-all hover:shadow-xs`}
                  disabled={!isValid}
                  onClick={handleClick}
                >
                  SEND RESET LINK
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
