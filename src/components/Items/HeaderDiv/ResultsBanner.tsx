import { useState } from "react";

// Choose the search query, allow change between products and flyers
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
