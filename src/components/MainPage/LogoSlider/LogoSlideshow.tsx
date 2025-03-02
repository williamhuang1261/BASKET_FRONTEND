import logos from "../../../data/Logos";
import "./LogoSlideShow.css";


const LogoBand = () => {
  return (
    <div className="cust-anim flex h-14 w-max flex-none py-2 transition-all duration-1000 2xl:h-16">
      {logos.map(({ src, name, ref }) => (
        <a
        key={name}
        tabIndex={-1}
        aria-hidden
        href={ref.cadEN}
        target="_blank"
        className="mx-5 h-full grayscale transition-all hover:scale-105 hover:grayscale-0 lg:mx-7 2xl:mx-10"
        >
          <img
            src={src}
            key={name}
            alt={name}
            className="h-full object-contain"
            />
        </a>
      ))}
    </div>
  );
};
// Slider (Found in Home Page)
// cust-anim found in ./LogoSlideShow.css

/**
 * @description Continuous sliding showcase of partner logos
 * @summary Creates an infinite horizontal scroll of company logos with hover pause functionality
 * @returns {JSX.Element} An auto-scrolling container of partner logos
 */
const LogoSlideShow = () => {
  return (
    <>
      <div className="slideshow flex flex-none overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]">
        <LogoBand />
        <LogoBand />
      </div>
    </>
  );
};

export default LogoSlideShow;
