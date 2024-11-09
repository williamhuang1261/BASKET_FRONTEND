import CarouselAdDiv from "./CarouselAdDiv";
import VerticalAd from "./VerticalAd";

// Home Page ad grid
const MainPageAds = () => {
  return (
    <section className="mx-3 flex items-center gap-4 py-4 md:container md:mx-auto md:px-20">
      <div className="hidden sm:block basis-full overflow-hidden rounded shadow-lg border-dark_gray lg:basis-9/13">
        <CarouselAdDiv />
      </div>
      <div className="sm:hidden h-full sm:basis-4/13 overflow-hidden rounded shadow border-dark_gray lg:block ">
        <VerticalAd />
      </div>
    </section>
  );
};

export default MainPageAds;
