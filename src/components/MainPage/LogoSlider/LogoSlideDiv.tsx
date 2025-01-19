import LogoSlideShow from "./LogoSlideshow";

/**
 * @description Container component for the logo slideshow
 * @summary Wraps the logo slideshow component in a styled section
 * @returns {JSX.Element} A section containing the logo slideshow
 */
const LogoSlideDiv = () => {
  return (
    <section className="bg-light_green">
        <div className="px-3 md:px-0 md:container md:mx-auto md:w-max lg:px-20 2xl:px-44  3xl:px-64">
          <LogoSlideShow />
      </div>
    </section>
  );
};

export default LogoSlideDiv;
