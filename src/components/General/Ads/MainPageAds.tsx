import useWindowSize from "../../../hooks/useWindowSize";
import CarouselAdDiv from "./CarouselAdDiv";
import VerticalAd from "./VerticalAd";

// TODO: Load ads conditionally according to window size
const MainPageAds = () => {
  const winSize = useWindowSize();
  return (
    <section className="mx-3 flex items-center gap-4 py-4 md:container md:mx-auto md:px-20">
      {winSize >= 0 && (
        <div className="hidden basis-full overflow-hidden rounded border-dark_gray shadow-lg sm:block lg:basis-9/13">
          <CarouselAdDiv />
        </div>
      )}
      {(winSize < 0 || winSize >= 2) && (
        <div className="h-full overflow-hidden rounded border-dark_gray shadow sm:hidden sm:basis-4/13 lg:block ">
          <VerticalAd />
        </div>
      )}
    </section>
  );
};

export default MainPageAds;
