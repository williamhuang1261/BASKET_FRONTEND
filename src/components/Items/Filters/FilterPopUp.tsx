import { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import LocationFilter from "./LocationFilter";
import CategoryFilter from "./CategoryFilter";
import StoreFilter from "./StoreFilter";

const FilterPopUp = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(false);
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  };

  return (
    <div className={`${open ? "no-doc-scroll" : ""} `}>
      <button
        type="button"
        className="flex gap-1 rounded border-0.5 bg-green/50 px-2 py-1 transition-all duration-150 ease-in-out hover:border-transparent hover:bg-green/80 hover:shadow-md"
        onClick={() => setOpen(true)}
      >
        <h2>Filters</h2>
        <HiOutlineAdjustmentsHorizontal size={25} />
      </button>
      {open && (
        <div className="fixed left-0 top-0 h-screen w-screen bg-black/50 p-5 pb-28">
          <form
            onSubmit={handleSubmit}
            className="flex h-full w-full flex-col items-center overflow-auto overscroll-contain rounded bg-white pb-5"
          >
            <div className="sticky top-0 z-20 w-full bg-white">
              <div className=" flex  items-center justify-between bg-green/80 p-2 px-5">
                <h2 className="bold text-3xl">Filters</h2>
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="submit"
                    value={"Apply"}
                    className="rounded border-0.5 border-light_gray bg-light_gray px-3 py-1 font-semibold shadow-md transition-all duration-150 ease-in-out hover:cursor-pointer hover:border-transparent hover:bg-light_green"
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
      )}
    </div>
  );
};

export default FilterPopUp;
