import MicrosoftLogo from "../../assets/Microsoft_logo.svg";

const MicrosoftLogIn = () => {
  return (
    <button className="w-full border p-2 h-10 flex items-center justify-center gap-3">
      <img src={MicrosoftLogo} className="object-fit h-full"/>
      <h2>Sign in with Microsoft</h2>
    </button>
  );
};

export default MicrosoftLogIn;
