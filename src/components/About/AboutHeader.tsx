/**
 * @description Header for the About page (Green background)
 * @summary This is a simple header that is used to display the title of the page
 * @returns {JSX.Element} The header of the About page
 */

const AboutHeader = () => {
  return (
    <div className="flex h-28 items-center justify-center rounded bg-green/80 shadow-md">
      <h1 className="text-lg font-bold lg:text-2xl 3xl:text-3xl">About</h1>
    </div>
  );
};

export default AboutHeader;
