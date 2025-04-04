import BasketIcon from "../../../assets/BasketLogo.svg";

/**
 * @description A banner component displaying search results and view toggles
 * @summary Shows the search query and allows switching between Products and Flyers views
 * @returns {JSX.Element} A banner with title and view toggle buttons
 */
const ResultsBanner = () => {
  return (
    <div className="h-28 overflow-hidden rounded-xl bg-white shadow-md lg:h-44">
      <div className="relative flex h-full w-full rounded-xl bg-black">
        <div className="bg-green h-full w-1/5 items-center justify-center rounded-e-full p-5 outline">
          <h1 className="flex w-full items-center justify-center text-2xl font-bold lg:text-3xl">
            Apples
          </h1>
          <div className="flex h-full w-full justify-center gap-2">
            <img src={BasketIcon} className="h-24 object-contain" />
          </div>
        </div>
        <div className="font-righteous flex h-full -translate-x-5 items-center text-7xl font-bold text-white">
          X
        </div>
        <div className="flex h-full w-4/5 items-center text-white">
          <div className="border-e-3 border-white h-full rounded-e-full pe-12">
            <span className="font-righteous flex h-full rotate-45 items-center text-3xl">
              YOUR_STORE
            </span>
          </div>
          <span className="font-righteous flex h-full w-full items-center justify-center text-6xl">
            AD PLACEHOLDER
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultsBanner;
