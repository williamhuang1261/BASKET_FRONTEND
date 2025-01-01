import useWindowSize from "../../../hooks/useWindowSize";
import CarouselAdDiv from "./CarouselAdDiv";
import VerticalAd from "./VerticalAd";

/**
 * @description Main advertisement section for the home page that adapts to window size.
 * @summary Displays a combination of carousel and vertical ads based on screen width.
 * @returns {JSX.Element} A responsive section containing different types of advertisements.
 */
const MainPageAds = () => {
  const winSize = useWindowSize();
  return (
    <section className="mx-3 flex items-center gap-4 py-4 md:container md:mx-auto md:px-20">
      {winSize >= 0 && (
        <div className="basis-full overflow-hidden rounded border-dark_gray shadow-lg lg:basis-9/13">
          <CarouselAdDiv />
        </div>
      )}
      {(winSize < 0 || winSize >= 2) && (
        <div className="h-full overflow-hidden rounded border-dark_gray shadow sm:basis-4/13">
          <VerticalAd />
        </div>
      )}
    </section>
  );
};

export default MainPageAds;
