import BasketHeader from "../components/Basket/BasketHeader";
import BasketResults from "../components/Basket/BasketResults";
import StickyResults from "../components/Basket/StickyResults";
import HorizontalAd from "../components/General/Ads/HorizontalAd";
import FooterDiv from "../components/General/Footer/FooterDiv";
import GenNavBar from "../components/NavBar/GenNavBar";
import BasketProvider from "../state/providers/BasketProvider";

/**
 * @description Shopping basket page showing selected items
 * @summary Main sections:
 * - Navigation bar
 * - Basket header with filters
 * - Sticky calculation summary
 * - Basket items list
 * - Advertisement section
 * - Footer
 *
 * @returns {JSX.Element} Basket page with header, results, and sticky calculation summary
 */
const BasketPage = () => {
  return (
    <BasketProvider>
      <div className="flex min-h-screen min-w-80 flex-col">
        {/* NavBar, without calclulator icon and search bar */}
        {/* Full navbar limited by container in the outside to obtain the effect of changing size */}
        <div className="border-b-[0.5px] border-dark_gray bg-white lg:container lg:mx-auto lg:px-20 2xl:px-44 3xl:px-64">
          <div>
            <GenNavBar
              hidden={["Calc", "Location"]}
              page="General"
              size="Full"
            />
          </div>
        </div>
        <main className="flex flex-col px-3 py-5 lg:container lg:mx-auto lg:px-20 2xl:px-44 3xl:px-64">
          {/* Contains title box, info boxes and filters */}
          <BasketHeader />
          {/* Calculation results and button */}
          <StickyResults />
          {/* Basket itself */}
          <BasketResults />
        </main>
        <div className="grow"></div>
        <div className="flex items-center justify-center px-3 pb-5 lg:container lg:mx-auto lg:px-20 2xl:px-44 3xl:px-64">
          {/* Ad will always take full container size until a certain width, where it will stop growing*/}
          <div className="w-max max-w-7xl overflow-hidden rounded-sm border-[0.5px] border-gray-200">
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
