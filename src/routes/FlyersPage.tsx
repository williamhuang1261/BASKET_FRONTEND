import FlyerContainer from "../components/Flyers/FlyerContainer";
import FlyerHeader from "../components/Flyers/FlyerHeader";
import ItemCard from "../components/General/ItemCard/ItemCard";
import GenNavBar from "../components/NavBar/GenNavBar";
import items from "../data/ItemsEX";
import useWindowSize from "../hooks/useWindowSize";

/**
 * @description Digital flyers viewing page
 * @summary Main sections:
 * - Navigation bar
 * - Flyer header with supplier info
 * - Item details sidebar (desktop)
 * - Flyer display area
 * - Footer section
 *
 * @returns {JSX.Element} Flyers page with navigation, item details sidebar, and flyer display
 */
const FlyersPage = () => {
  const winSize = useWindowSize();

  return (
    <>
      <div className="flex h-screen w-screen flex-col overflow-hidden min-w-80 bg-white">
        {/* Nav bar */}
        <div className="flex-none border-b-0.5 border-dark_gray">
          <GenNavBar page="General" size="Full" hidden={["Location"]} />
        </div>
        <div className="h-max flex-none bg-green/80">
          {/* Contains return button, supplier logo, valid dates, Flipp logo, Powered by Flipp */}
          <FlyerHeader />
        </div>
        <div className="flex h-44 w-screen flex-auto ">
          {winSize >= 1 && (
            <section className="flex w-60 flex-col border-e-0.5 border-dark_gray 2xl:w-80">
              {/* Contains item card showing the item that has been clicked */}
              <div className="flex-none p-3">
                <ItemCard
                  id={items[0].id}
                  key={items[0].ref.code}
                  image={items[0].image}
                  name={{
                    fr: items[0].name.fr,
                    en: items[0].name.en,
                    size: items[0].name.size,
                  }}
                  reference={{
                    standard: items[0].ref.standard,
                    code: items[0].ref.code,
                  }}
                  amount={{
                    isApprox: items[0].amount.isApprox,
                    method: items[0].amount.method,
                    units: items[0].amount.units,
                    quantity: items[0].amount.quantity,
                  }}
                  suppliers={items[0].suppliers}
                />
              </div>
              {/* Footer on bottom left */}
              <footer className="flex-auto bg-light_gray/50 p-3">Footer</footer>
            </section>
          )}
          {/* Flyer display and navigation */}
          <main className="flex-auto">
            <FlyerContainer />
          </main>
        </div>
      </div>
    </>
  );
};

export default FlyersPage;
