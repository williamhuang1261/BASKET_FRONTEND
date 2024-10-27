
import Logo from "../../NavBar/Logo";


const FooterDiv = () => {
  return (
    <footer className=" bg-green/80">
      <div className="px-3 py-2 md:container md:mx-auto md:px-20">
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
    </footer>
  );
};

export default FooterDiv;
