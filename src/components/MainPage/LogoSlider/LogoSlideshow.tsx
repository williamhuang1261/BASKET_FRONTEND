import logos from "../../../data/Logos";
import "./LogoSlideShow.css";

// Slider (Found in Home Page)
// cust-anim found in ./LogoSlideShow.css
const LogoSlideShow = () => {
  return (
    <>
      <div className="slideshow flex flex-none overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]">
        <div className=" cust-anim flex h-14 w-max flex-none py-2 transition-all duration-1000 ease-in-out 2xl:h-16">
          {logos.map(({ src, name, ref }) => (
            <a
              key={name}
              href={ref.cadEN}
              target="_blank"
              className="mx-5 h-full grayscale transition-all duration-200 ease-in-out hover:scale-105 hover:grayscale-0 lg:mx-7 2xl:mx-10"
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
        <div className=" cust-anim flex h-14 w-max flex-none py-2 transition-all duration-1000 ease-in-out 2xl:h-16">
          {logos.map(({ src, name, ref }) => (
            <a
              key={name}
              href={ref.cadEN}
              target="_blank"
              className="mx-5 h-full grayscale transition-all duration-200 ease-in-out hover:scale-105 hover:grayscale-0 lg:mx-7 2xl:mx-10"
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
      </div>
    </>
  );
};

export default LogoSlideShow;
