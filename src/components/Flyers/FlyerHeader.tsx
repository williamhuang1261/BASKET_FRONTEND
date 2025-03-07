import { AiOutlineStepBackward } from "react-icons/ai";
import useWindowSize from "../../hooks/useWindowSize";
import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";
import BasketLogo from "../../assets/BasketLogo.svg";

const logos = Array.from({ length: 1 }, (_, index) => ({
  src: BasketLogo,
  name: "BasketLogo" + index,
  ref: {
    cadFR: "",
    cadEN: "",
    usEN: "",
  },
}));

/**
 * @description Header component displayed above flyer content showing navigation, dates, and logos
 * @summary Renders different layouts based on window size with store logo, date range, and Flipp attribution
 * @returns {JSX.Element} Header component with responsive layout
 */
const FlyerHeader = () => {
  const winSize = useWindowSize();
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  return (
    <>
      {winSize < 1 && (
        <div className="flex h-full items-center justify-between gap-4 px-3 py-0.5">
          <CustomDirectNav
            pathname={"/items/search/testQuery"}
            className="flex items-center hover:text-black/50"
            aria-label="Go to Items Page"
          >
            <AiOutlineStepBackward size={30} />
          </CustomDirectNav>
          <div>
            <p className="flex text-center">
              {startDate.toLocaleDateString("en-US")} to{" "}
              {endDate.toLocaleDateString("en-US")}
            </p>
            <div className="flex h-full items-center justify-center">
              <a href={logos[0].ref.cadEN} target="_blank">
                <img
                  src={logos[0].src}
                  alt={logos[0].name}
                  className="h-8 object-contain"
                />
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="cursor-default text-center">Powered by</h3>
            <div className="flex h-full items-center justify-center">
              <a href="/" target="_blank">
                <img src={BasketLogo} alt="FlyerSupplier" className="h-8 object-contain" />
              </a>
            </div>
          </div>
        </div>
      )}
      {winSize >= 1 && (
        <div className="flex h-full items-center justify-between gap-4 px-3 py-0.5">
          <CustomDirectNav
            pathname={"/items/search/testQuery"}
            aria-label="Go to Items Page"
            className="flex items-center hover:text-black/50"
          >
            <AiOutlineStepBackward size={20} />
            <h2 className="text-center">Results</h2>
          </CustomDirectNav>
          <div className="flex h-full items-center justify-center">
            <a href={logos[0].ref.cadEN} target="_blank">
              <img
                src={logos[0].src}
                alt={logos[0].name}
                className="h-8 object-contain"
              />
            </a>
          </div>
          <div>
            {winSize < 2 && (
              <p className="flex text-center">
                {logos[0].name.charAt(0).toUpperCase() + logos[0].name.slice(1)}{" "}
                - {startDate.toLocaleDateString("en-US")} to{" "}
                {endDate.toLocaleDateString("en-US")}
              </p>
            )}
            {winSize >= 2 && (
              <p className="cursor-default text-center lg:flex">
                {logos[0].name.charAt(0).toUpperCase() + logos[0].name.slice(1)}{" "}
                - Valid from{" "}
                {startDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                to{" "}
                {endDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>
          <div className="flex h-full items-center justify-center">
            <a href="/" target="_blank">
              <img src={BasketLogo} alt="FlyerSupplier" className="h-8 object-contain" />
            </a>
          </div>
          <h3 className="cursor-default text-center">Powered by Flipp</h3>
        </div>
      )}
    </>
  );
};

export default FlyerHeader;
