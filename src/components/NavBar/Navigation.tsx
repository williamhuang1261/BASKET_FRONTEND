import categories from "../../data/Categories";
import { IoMenu } from "react-icons/io5";
import Dropdown from "../General/Miscellaneous/Dropdown";
import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";

/**
 * @description Main navigation component displaying categories dropdown and main navigation links.
 * @returns {JSX.Element} The navigation component with categories and links.
 */
const Navigation = () => {
  return (
    <div className="flex items-center justify-start text-lg">
        {/* Categories dropdown */}
        <Dropdown
          title={
            <div className="flex h-full w-36 items-center justify-start rounded-sm p-2">
              <IoMenu size="28px" className="pt-0.5" />
              <h3 className="font-semibold">Categories</h3>
            </div>
          }
          body={
            <div className="grid grid-flow-col grid-rows-10-free rounded-sm border-[0.5px] border-dark_gray bg-white py-2 divide-y-[0.5px] divide-gray-200">
              {categories.map((c) => (
                <CustomDirectNav
                  pathname={"/items/"}
                  key={c}
                  aria-label={"Go to " + c + " Category"}
                  className="mx-2 px-2 flex-auto cursor-pointer py-1 hover:text-green"
                >
                  <p className="flex leading-snug w-max h-full items-start justify-start text-left">{c}</p>
                </CustomDirectNav>
              ))}
            </div>
          }
          className="rounded-sm bg-light_gray/20 text-green"
          type="Hover"
          ariaLabel="Categories"
        />
      {/* Link to Flyers Page */}
      <CustomDirectNav
        pathname={"/flyers"}
        className="w-36 rounded-sm p-2 font-semibold hover:bg-light_gray/20 hover:text-green"
      >
        Flyers
      </CustomDirectNav>

      {/* Link to Basket Page */}
      <CustomDirectNav
        pathname={"/basket"}
        className=" w-36 rounded-sm p-2 font-semibold hover:bg-light_gray/20 hover:text-green"
        aria-label="Go to Basket Calculator Page"
      >
        Calculator
      </CustomDirectNav>

      {/* Link to about page */}
      <CustomDirectNav
        pathname={"/about"}
        aria-label="Go to About Page"
        className="w-36 rounded-sm p-2 font-semibold hover:bg-light_gray/20 hover:text-green"
      >
        About
      </CustomDirectNav>
    </div>
  );
};

export default Navigation;
