import categories from "../../data/Categories";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Dropdown from "../General/Miscellaneous/Dropdown";

// Navigation links, found in Home Page
const Navigation = () => {
  return (
    <div className="flex items-center gap-10 text-xl">
      <div className="flex h-full items-end justify-center">
        {/* Categories dropdown */}
        <Dropdown
          title={
            <div className="flex h-full items-center justify-start px-2">
              <IoMenu size="28px" className="pt-0.5" />
              <h3 className="font-semibold">Categories</h3>
            </div>
          }
          body={
            <div className="grid-rows-10-free mr-10 grid grid-flow-col rounded border-0.5 border-dark_gray bg-white">
              {categories.map((c) => (
                <Link
                  to={"/items/"}
                  key={c}
                  className="mx-4 w-40 flex-auto cursor-pointer border-b-0.5 border-light_gray py-1 text-base hover:text-green lg:text-lg"
                >
                  <p className="h-full w-full leading-snug">{c}</p>
                </Link>
              ))}
            </div>
          }
          className="rounded bg-light_gray/20 text-green"
          type="Hover"
        />
      </div>
      <button
        type="button"
        className="rounded hover:bg-light_gray/20 hover:text-green"
      >
        {/* Link to Flyers Page */}
        <Link to={"/flyers"} className="px-2 font-semibold">
          Flyers
        </Link>
      </button>
      <button
        type="button"
        className="rounded hover:bg-light_gray/20 hover:text-green"
      >
        {/* Link to Basket Page */}
        <Link to={"/basket"} className="px-2 font-semibold">
          Calculator
        </Link>
      </button>
      <button
        type="button"
        className="rounded hover:bg-light_gray/20 hover:text-green"
      >
        {/* Link to about page */}
        <Link to={"/about"} className="px-2 font-semibold">
          About
        </Link>
      </button>
    </div>
  );
};

export default Navigation;
