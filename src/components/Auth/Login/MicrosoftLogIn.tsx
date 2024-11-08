import MicrosoftLogo from "../../../assets/Microsoft_logo.svg";

const MicrosoftLogIn = () => {
  return (
    <button className="flex h-10 w-full items-center justify-center gap-3 rounded border border-[#00A3EE] p-2 font-medium transition-all duration-150 ease-in-out hover:bg-[#00A3EE]/50 ">
      <img
        src={MicrosoftLogo}
        className="object-fit h-full"
        alt="MicrosoftLogo"
      />
      <h2 className="font-semi">Microsoft</h2>
    </button>
  );
};

export default MicrosoftLogIn;
