import SavingsSummary from "../components/Basket/SavingsSummary/SavingsSummary";
import FooterDiv from "../components/General/Footer/FooterDiv";
import GenNavBar from "../components/NavBar/GenNavBar";

/**
 * @description Demo page hosting the savings-summary A/B test - see
 * docs/prd-ab-testing.md. Not part of the main basket flow.
 * @returns {JSX.Element}
 */
const SavingsSummaryPage = () => {
  return (
    <div className="flex min-h-screen min-w-80 flex-col overflow-hidden">
      <div className="border-b-[0.5px] border-dark_gray bg-white">
        <GenNavBar page="General" size="Container" />
      </div>
      <main className="flex flex-1 flex-col items-center justify-center gap-5 px-3 py-10 md:container md:mx-auto lg:px-20 2xl:px-44 3xl:px-64">
        <SavingsSummary />
      </main>
      <div className="">
        <FooterDiv />
      </div>
    </div>
  );
};

export default SavingsSummaryPage;
