import { useState } from "react";

/**
 * @description A banner component displaying search results and view toggles
 * @summary Shows the search query and allows switching between Products and Flyers views
 * @returns {JSX.Element} A banner with title and view toggle buttons
 */
const ResultsBanner = () => {
  const [section, setSection] = useState<string>("Products");

  return (
    <div className=" h-28 rounded-sm bg-white shadow-md lg:h-44">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-sm bg-green/80">
        <h1 className="text-2xl font-bold lg:text-3xl ">Pineapples</h1>
        <div className="flex w-full justify-center lg:text-lg">
          <button
            type="button"
            disabled={section === "Products" ? true : false}
            onClick={() => setSection("Products")}
            className={
              (section === "Products" ? "underline" : "") +
              " " +
              " flex w-32 justify-center border-e-2 border-black font-bold hover:underline"
            }
          >
            Products
          </button>
          <button
            type="button"
            disabled={section === "Flyers" ? true : false}
            onClick={() => setSection("Flyers")}
            className={
              (section === "Flyers" ? "underline" : "") +
              " " +
              " flex w-32 justify-center font-bold hover:underline"
            }
          >
            Flyers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsBanner;
