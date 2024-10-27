import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import categories from "../../data/Categories";

interface Props {
  size: string;
}

// Drawer

const Drawer = ({ size }: Props) => {
  const [active, setActive] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  // Open and close logics
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(true);
    setActive(false);
  };
  const closeDrawer = () => {
    setOpen(false);
    setActive(false);
  };

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center"
        onClick={openDrawer}
      >
        {/* Button to open drawer */}
        <IoMenu size={size} className="hover:text-green" />
      </button>
      <div
        className={`fixed left-0 top-0 z-50 flex h-screen w-full transition-all duration-300 ease-in-out ${open ? "pointer-events-auto opacity-100 no-doc-scroll" : "pointer-events-none opacity-0"}`}
      >
        <div
          className={`flex h-full  flex-col bg-white pb-32 transition-all duration-300 ease-in-out md:pb-20 ${open ? "w-96 max-w-full" : "w-0 "}`}
        >
          {/* Drawer content */}
          <div className="flex-none">
            <div className="flex flex-row justify-between bg-green/80 p-3">
              {/* Drawer header */}
              <h2 className="cursor-default text-3xl">Navigate</h2>
              <button
                type="button"
                onClick={closeDrawer}
                className="transition ease-in hover:text-black/50"
              >
                <IoClose size="36px" />
              </button>
            </div>
          </div>
          <div className="flex-max flex flex-col gap-1 overflow-y-auto p-3">
            {/* Links */}
            <div className="cursor-pointer rounded p-1 px-2 text-xl font-semibold transition-all ease-in-out hover:bg-gray-50 hover:text-green">
              <Link to={"/"} aria-label="Go back to Home Page">
                Home
              </Link>
            </div>
            <div className="">
              {/* Categories  */}
              <div
                onClick={() => setActive(!active)}
                className="cursor-pointer rounded p-1 px-2 text-xl font-semibold transition-all ease-in-out hover:bg-gray-50 hover:text-green"
              >
                Categories
              </div>
              <div
                onMouseOver={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
                className={active || mouseOver ? "flex flex-col" : "hidden"}
              >
                {categories.map((c) => (
                  <Link
                    to={"/items"}
                    key={c}
                    aria-label="Go to Item Results Page"
                    className=" mx-4 cursor-pointer rounded border-b-0.5 border-light_gray p-2 text-lg hover:bg-light_gray hover:text-green"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
            {/* Continue normal links */}
            <div className="cursor-pointer rounded p-1 px-2 text-xl font-semibold transition-all ease-in-out hover:bg-gray-50 hover:text-green">
              <Link to={"/flyers"} aria-label="Go to Flyers result Page">
                Flyers
              </Link>
            </div>
            <div className="cursor-pointer rounded p-1 px-2 text-xl font-semibold transition-all ease-in-out hover:bg-gray-50 hover:text-green">
              <Link to={"/basket"} aria-label="Go to Basket Calculator Page">
                Calculator
              </Link>
            </div>
            <div className="cursor-pointer rounded p-1 px-2 text-xl font-semibold transition-all ease-in-out hover:bg-gray-50 hover:text-green">
              <Link to={"/about"} aria-label="Go to About Page">
                About
              </Link>
            </div>
          </div>
        </div>
        {/* Drawer gray zone */}
        <div className="flex-grow bg-black/50" onClick={closeDrawer}></div>
      </div>
    </>
  );
};

export default Drawer;
