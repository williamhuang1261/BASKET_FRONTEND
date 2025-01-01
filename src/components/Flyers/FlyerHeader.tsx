import logos from "../../data/Logos";
import flipp from "../../assets/Flipp_logo.webp";
import { AiOutlineStepBackward } from "react-icons/ai";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

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
          <Link to={"/items"}>
            <button
              type="button"
              className="flex items-center hover:text-black/50"
            >
              <AiOutlineStepBackward size={30} />
            </button>
          </Link>
          <div>
            <p className="flex text-center">
              {startDate.toLocaleDateString("en-US")} to{" "}
              {endDate.toLocaleDateString("en-US")}
            </p>
            <div className="flex h-full items-center justify-center ">
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
              <a href="https://flipp.com/" target="_blank">
                <img src={flipp} alt="Flipp" className="h-8 object-contain" />
              </a>
            </div>
          </div>
        </div>
      )}
      {winSize >= 1 && (
        <div className="flex h-full items-center justify-between gap-4 px-3 py-0.5 ">
          <Link to={"/items"}>
            <button
              type="button"
              className="flex items-center hover:text-black/50"
            >
              <AiOutlineStepBackward size={20} />
              <h2 className="text-center xl:text-lg">Results</h2>
            </button>
          </Link>
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
            <a href="https://flipp.com/" target="_blank">
              <img src={flipp} alt="Flipp" className="h-8 object-contain" />
            </a>
          </div>
          <h3 className="cursor-default text-center">Powered by Flipp</h3>
        </div>
      )}
    </>
  );
};

export default FlyerHeader;
