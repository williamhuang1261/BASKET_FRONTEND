import logos from "../../data/Logos";
import flipp from "../../assets/Flipp_logo.webp";
import { AiOutlineStepBackward } from "react-icons/ai";
import { Link } from "react-router-dom";

// Header above flyer display
const FlyerHeader = () => {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  return (
    <>
      <div className="flex h-full items-center justify-between gap-4 px-3 py-0.5 md:hidden">
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
            <a href={logos[0].ref.cadEN} target='_blank'>
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
      <div className="hidden h-full items-center justify-between gap-4 px-3 py-0.5 md:flex ">
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
          <a href={logos[0].ref.cadEN} target='_blank'>
            <img
              src={logos[0].src}
              alt={logos[0].name}
              className="h-8 object-contain"
            />
          </a>
        </div>
        <div>
          <p className="flex text-center lg:hidden">
            {logos[0].name.charAt(0).toUpperCase() + logos[0].name.slice(1)} -{" "}
            {startDate.toLocaleDateString("en-US")} to{" "}
            {endDate.toLocaleDateString("en-US")}
          </p>
          <p className="hidden cursor-default text-center lg:flex">
            {logos[0].name.charAt(0).toUpperCase() + logos[0].name.slice(1)} -
            Valid from{" "}
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
        </div>
        <div className="flex h-full items-center justify-center">
          <a href="https://flipp.com/" target="_blank">
            <img src={flipp} alt="Flipp" className="h-8 object-contain" />
          </a>
        </div>
        <h3 className="cursor-default text-center">Powered by Flipp</h3>
      </div>
    </>
  );
};

export default FlyerHeader;
