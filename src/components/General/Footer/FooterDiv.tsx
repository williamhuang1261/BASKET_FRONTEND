import BasketLogo from "../../NavBar/BasketLogo";

/**
 * @description Footer component displaying site information and navigation links
 * @returns {JSX.Element} Footer component
 */
const FooterDiv = () => {
  return (
    <footer className="bg-white">
      <div className=" bg-green/80">
        <div className="px-3 py-2 md:container md:mx-auto md:px-3 lg:px-24 2xl:px-48 3xl:px-72">
          <div className="md:flex md:justify-between">
            <div className="my-2 w-32">
              <BasketLogo color="black" />
            </div>
            <ul className="my-2 border-b-0.5 border-dark_gray px-4 pb-2 md:border-none">
              <h3 className="text-lg font-semibold">Title</h3>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
            <ul className="my-2 border-b-0.5 border-dark_gray px-4 pb-2 md:border-none">
              <h3 className="text-lg font-semibold">Title</h3>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
            <ul className="my-2 border-b-0.5 border-dark_gray px-4 pb-2 md:border-none">
              <h3 className="text-lg font-semibold">Title</h3>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
            <ul className="my-2 px-4 pb-2">
              <h3 className="text-lg font-semibold">Title</h3>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDiv;
