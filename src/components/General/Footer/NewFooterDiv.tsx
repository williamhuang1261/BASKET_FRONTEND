import BasketLogo from "../../NavBar/BasketLogo";

const FooterDivColumn = () => {
  return (
    <div className="flex w-full flex-col items-center py-2 text-white">
      <h5 className="font-righteous flex w-full items-center justify-center border-b border-white text-xl">
        Title
      </h5>
      <ul className="">
        <li className="">Item</li>
        <li className="">Item</li>
        <li className="">Item</li>
        <li className="">Item</li>
        <li className="">Item</li>
      </ul>
    </div>
  );
};

/**
 * @description Footer component displaying site information and navigation links
 * @returns {JSX.Element} Footer component
 */
const FooterDiv = () => {
  return (
    <footer className="bg-white">
      <div className="bg-green">
        <div className="3xl:px-72 relative rounded-e-full bg-black px-3 md:container md:mx-auto md:px-3 lg:px-24 2xl:px-48">
          <div className="3xl:w-72 bg-green absolute top-0 left-0 h-full w-3 lg:w-24 2xl:w-48"></div>
          <div className="gap-5 md:grid md:grid-cols-5">
            <div className="bg-green flex h-full w-full items-center justify-start rounded-e-full">
              <div className="w-32 py-2">
                <BasketLogo color="black" />
              </div>
            </div>
            <FooterDivColumn />
            <FooterDivColumn />
            <FooterDivColumn />
            <FooterDivColumn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDiv;
