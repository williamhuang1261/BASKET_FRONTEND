import LogoSlideShow from "./LogoSlideshow";

/**
 * @description Container component for the logo slideshow
 * @summary Wraps the logo slideshow component in a styled section
 * @returns {JSX.Element} A section containing the logo slideshow
 */
const LogoSlideDiv = () => {
  return (
    <section className="bg-green/60">
      <div className="px-3 md:container md:mx-auto md:w-max md:px-20">
        <LogoSlideShow />
      </div>
    </section>
  );
};

export default LogoSlideDiv;
