import { useState } from "react";

/**
 * @description A banner component displaying search results and view toggles
 * @summary Shows the search query and allows switching between Products and Flyers views
 * @returns {JSX.Element} A banner with title and view toggle buttons
 */
const ResultsBanner = () => {
  const [section, setSection] = useState<string>("Products");

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-green/80 rounded h-28 lg:h-44 shadow-md">
      <h1 className="text-3xl lg:text-4xl font-bold ">Pineapples</h1>
      <div className="flex w-full justify-center lg:text-xl">
        <button
          type="button"
          disabled={section === "Products" ? true : false}
          onClick={() => setSection("Products")}
          className={
            (section === "Products" ? "underline" : "") +
            " " +
            " w-32 flex justify-center border-e-2 border-black hover:underline font-bold"
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
            " w-32 flex justify-center hover:underline font-bold"
          }
        >
          Flyers
        </button>
      </div>
    </div>
  );
};

export default ResultsBanner;
