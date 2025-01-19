import Logo from "../../NavBar/Logo";

/**
 * @description Footer component displaying site information and navigation links
 * @returns {JSX.Element} Footer component
 */
const FooterDiv = () => {
  return (
    <footer className="bg-white">
      <div className=" bg-green/80">
        <div className="px-3 py-2 md:container md:mx-auto lg:px-20 2xl:px-44  3xl:px-64">
          <div className="md:flex md:justify-between">
            <div className="my-2">
              <Logo />
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
