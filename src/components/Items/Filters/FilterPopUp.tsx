import { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import LocationFilter from "./LocationFilter";
import CategoryFilter from "./CategoryFilter";
import StoreFilter from "./StoreFilter";

const FilterPopUp = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex gap-1 rounded border-0.5 border-dark_gray bg-green/80 px-2 py-1 transition-all ease-in-out hover:bg-green/50"
        onClick={() => setOpen(true)}
      >
        <h2>Filters</h2>
        <HiOutlineAdjustmentsHorizontal size={25} />
      </button>
      <div
        className={
          open
            ? "fixed left-0 top-0 h-screen w-screen bg-black/50 p-5 pb-28"
            : "hidden"
        }
      >
        <form className="flex h-full w-full flex-col items-center overflow-auto rounded bg-white pb-5 overscroll-contain">
          <div className="sticky top-0 z-20 w-full bg-white">
            <div className=" flex  items-center justify-between bg-green/80 p-2 px-5">
              <h2 className="bold text-3xl">Filters</h2>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="submit"
                  value={"Apply"}
                  className=" ounded rounded border-0.5 border-dark_gray bg-light_gray/80 px-3 py-1 font-semibold ring-green transition-all duration-75 ease-in-out hover:bg-green/80"
                />
                <button
                  type="button"
                  className="transition-all ease-in-out hover:text-black/50"
                  onClick={() => setOpen(false)}
                >
                  <IoClose size="36px" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-fit">
            <div className=" border-b-0.5 border-dark_gray">
              <LocationFilter />
            </div>
            <div className=" border-b-0.5 border-dark_gray">
              <CategoryFilter />
            </div>
            <div className="border-b-0.5 border-dark_gray">
              <StoreFilter />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterPopUp;
