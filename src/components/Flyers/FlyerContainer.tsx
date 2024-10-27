import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ItemCard from "../General/ItemCard/ItemCard";
import items from "../../data/ItemsEX";
import { IoClose } from "react-icons/io5";
// import Flyer from "./FlyerEX";

// Div containing flyers
const FlyerContainer = () => {

  return (
    <div className="relative flex h-full max-w-full">
      <div className="pointer-events-auto h-full w-full flex-auto">
        {/* <Flyer /> */}
      </div>
      <div className="pointer-events-none absolute z-20 flex h-full w-full flex-none">
        <button
          type="button"
          className="pointer-events-auto flex w-10 flex-none items-center justify-center bg-light_gray/50 transition-all duration-100 ease-in-out hover:bg-light_gray/75 hover:text-green"
        >
          <IoIosArrowBack size={30} />
        </button>
        <div className="flex flex-auto items-start justify-center">
          <div className="pointer-events-auto flex items-center justify-center gap-2 p-2">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-light_gray transition-all duration-100 ease-in-out hover:bg-green/80"
            >
              <FaMinus />
            </button>
            <p className="flex h-8 items-center justify-center rounded-full border-0.5 border-dark_gray bg-white px-4 text-black/50">
              100%
            </p>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-light_gray transition-all duration-100 ease-in-out hover:bg-green/80"
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <button
          type="button"
          className="pointer-events-auto flex w-10 flex-none items-center justify-center bg-light_gray/50 transition-all duration-100 ease-in-out hover:bg-light_gray/75 hover:text-green"
        >
          <IoIosArrowForward size={30} />
        </button>
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/50 md:hidden">
          <div className="overflow-hidden rounded bg-white">
            <div className=" bg-green/80 ">
              <div className=" flex justify-between">
                <h2 className="ps-2 text-3xl">Item</h2>
                <button
                  type="button"
                  className="transition-all ease-in-out hover:text-black/50"
                >
                  <IoClose size="36px" />
                </button>
              </div>
              <ItemCard
                id = {items[0].id}
                key={items[0].ref.code}
                image={items[0].image}
                name={{
                  fr: items[0].name.fr,
                  en: items[0].name.en,
                  size: items[0].name.size,
                }}
                reference={{
                  standard: items[0].ref.standard,
                  code: items[0].ref.code,
                }}
                amount={{
                  isApprox: items[0].amount.isApprox,
                  meas: items[0].amount.meas,
                  units: items[0].amount.units,
                  quantity: items[0].amount.quantity,
                }}
                brand={items[0].brand}
                suppliers={items[0].suppliers}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyerContainer;
