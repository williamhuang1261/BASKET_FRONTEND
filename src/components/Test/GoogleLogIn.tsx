import logo from "../../assets/Google__G__logo.svg";

const GoogleLogIn = () => {
  return (
    <button
      className="font-medium flex h-10 w-full items-center justify-center gap-3 rounded border border-[#FBBC04] p-2  transition-all duration-150 ease-in-out hover:bg-[#FBBC04]/50"
      onClick={() => console.warn("Implement the GOOGLE API")}
    >
      <img src={logo} className="h-full object-contain" alt="GoogleLogo" />
      <h2 className="">Google</h2>
    </button>
  );
};

export default GoogleLogIn;
