import GenNavBar from "../../NavBar/GenNavBar";
import useWindowSize from "../../../hooks/useWindowSize";
import LanguageSelect from "../../Users/LanguageSelect";
import Spinner from "../../General/Miscellaneous/Spinner";

/**
 * @description Main header component that contains the language selector and navigation bar
 * @summary Renders the top section of the home page, including a promotional message and language controls
 * @returns {JSX.Element} A header containing language selection and navigation components
 */
const MainHeaderDiv = () => {
  const winSize = useWindowSize();
  return (
    <div>
      <header className="border-b-0.5 border-b-dark_gray bg-white">
        {winSize >= 1 && (
          <div className="bg-green/80">
            <div className="container mx-auto flex flex-row items-center justify-between lg:px-20 2xl:px-44 3xl:px-64">
              <p className="text-sm">
                Find the best deals for your groceries - Optimize your shopping
              </p>
              <LanguageSelect
                id="header"
                loadingComponent={<Spinner color="dark_gray" size={"2"} />}
                selectClassName="cursor-pointer rounded-none border-none bg-green/5 outline-none hover:text-black/50 text-sm"
                optionClassName="bg-white text-black text-sm"
              />
            </div>
          </div>
        )}
        <GenNavBar hidden={["Language"]} page="Main" size="Container" />
      </header>
    </div>
  );
};

export default MainHeaderDiv;
