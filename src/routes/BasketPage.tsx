import BasketHeader from "../components/Basket/BasketHeader";
import BasketResults from "../components/Basket/BasketResults";
import StickyResults from "../components/Basket/StickyResults";
import HorizontalAd from "../components/General/Ads/HorizontalAd";
import FooterDiv from "../components/General/Footer/FooterDiv";
import GenNavBar from "../components/NavBar/GenNavBar";
import BasketProvider from "../state/providers/BasketProvider";

const BasketPage = () => {
  return (
    <BasketProvider>
      <div className="flex min-h-screen flex-col">
        {/* NavBar, without calclulator icon and search bar */}
        {/* Full navbar limited by container in the outside to obtain the effect of changing size */}
        <div className="border-b-0.5 border-dark_gray lg:container lg:mx-auto lg:px-20">
          <div className="hidden md:block">
            <GenNavBar hidden={["Calc"]} page="General" size="Full" />
          </div>
          <div className="md:hidden">
            <GenNavBar
              hidden={["Calc", "Location"]}
              page="General"
              size="Full"
            />
          </div>
        </div>
        <main className="flex flex-col px-3 py-5 lg:container lg:mx-auto lg:px-20">
          {/* Contains title box, info boxes and filters */}
          <BasketHeader />
          {/* Calculation results and button */}
          <StickyResults />
          {/* Basket itself */}
          <BasketResults />
        </main>
        <div className="flex-grow"></div>
        <div className="flex items-center justify-center px-3 pb-5 lg:container lg:mx-auto lg:px-20">
          {/* Ad will always take full container size until a certain width, where it will stop growing*/}
          <div className="w-max max-w-7xl overflow-hidden rounded border-0.5 ">
            <HorizontalAd />
          </div>
        </div>
        <div>
          <FooterDiv />
        </div>
      </div>
    </BasketProvider>
  );
};

export default BasketPage;
