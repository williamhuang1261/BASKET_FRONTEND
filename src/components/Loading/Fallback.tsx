import Spinner from "../General/Miscellaneous/Spinner";
import BasketLogo from '../../assets/BasketLogo.svg'

const Fallback = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg">
      <div className="w-56 p-2 flex flex-col items-center justify-center">
        <div className="py-5">
          <img
            src={BasketLogo}
            alt={"The Basket BW Logo"}
            className="h-full w-full"
          />
        </div>
        <div className="w-12 h-12">
          <Spinner size="32px" color="#6ee94f" opacity=""/>
        </div>
      </div>
    </div>
  );
};

export default Fallback;
