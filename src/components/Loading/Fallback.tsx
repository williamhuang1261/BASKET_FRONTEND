import Spinner from "../General/Miscellaneous/Spinner";
import BWLogo from "../../assets/BW_Basket_Logo.svg";

const Fallback = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-56 p-2 flex flex-col items-center justify-center">
        <div className="py-5">
          <img
            src={BWLogo}
            alt={"The Basket BW Logo"}
            className="h-full w-full"
          />
        </div>
        <div className="w-12 h-12">
          <Spinner color="green/50" className="h-full w-full" size="full" borderSize="7"/>
        </div>
      </div>
    </div>
  );
};

export default Fallback;
