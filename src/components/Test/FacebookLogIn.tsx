import FBLogo from "../../assets/Facebook_Logo_Primary.png";

const FacebookLogIn = () => {
  return (
    <button
      className="flex h-10  w-full items-center justify-center gap-3 rounded border border-[#0866FF] p-2 font-medium transition-all duration-150 ease-in-out hover:bg-[#0866FF]/50"
      onClick={() => console.warn("Implement the Facebook JS SDK")}
    >
      <img src={FBLogo} className="h-full object-contain" alt="FacebookLogo" />
      <h2 className="">Facebook</h2>
    </button>
  );
};

export default FacebookLogIn;
