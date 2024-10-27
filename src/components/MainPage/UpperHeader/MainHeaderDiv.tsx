import LanguageHeader from "./LanguageHeader";
import GenNavBar from "../../NavBar/GenNavBar";


// Div for entire header of Home Page
const MainHeaderDiv = () => {
  return (
    <div>
      <header className="border-b-0.5 border-b-dark_gray">
        <div className="hidden bg-green/80 md:block">
          <div className="container mx-auto flex flex-row items-center justify-between px-20">
            <p className="">
              Find the best deals for your groceries - Optimize your shopping
            </p>
            <LanguageHeader />
          </div>
        </div>
        <GenNavBar hidden={["Language"]} page="Main" size="Container" />
      </header>
    </div>
  );
};

export default MainHeaderDiv;
