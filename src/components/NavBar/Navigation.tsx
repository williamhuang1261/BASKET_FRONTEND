import categories from "../../data/Categories";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Dropdown from "../General/Miscellaneous/Dropdown";

// Navigation links, found in Home Page
const Navigation = () => {
  return (
    <div className="flex items-center justify-start text-xl">
      <div className="flex h-full items-end justify-between">
        {/* Categories dropdown */}
        <Dropdown
          title={
            <div className="flex h-full w-36 items-center justify-start p-2">
              <IoMenu size="28px" className="pt-0.5" />
              <h3 className="font-semibold">Categories</h3>
            </div>
          }
          body={
            <div className="mr-10 grid grid-flow-col grid-rows-10-free rounded border-0.5 border-dark_gray bg-white">
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
          ariaLabel="Categories"
        />
      </div>

      {/* Link to Flyers Page */}
      <Link to={"/flyers"} className="font-semibold">
        <button
          type="button"
          className="w-36 rounded p-2 hover:bg-light_gray/20 hover:text-green"
        >
          Flyers
        </button>
      </Link>

      {/* Link to Basket Page */}
      <Link to={"/basket"} className=" font-semibold">
        <button
          type="button"
          className="w-36 rounded p-2 hover:bg-light_gray/20 hover:text-green"
        >
          Calculator
        </button>
      </Link>

      {/* Link to about page */}
      <Link to={"/about"} className="font-semibold">
        <button
          type="button"
          className="w-36 rounded p-2 hover:bg-light_gray/20 hover:text-green"
        >
          About
        </button>
      </Link>
    </div>
  );
};

export default Navigation;
