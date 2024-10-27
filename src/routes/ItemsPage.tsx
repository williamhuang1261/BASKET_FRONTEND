import FooterDiv from "../components/General/Footer/FooterDiv";
import FilterDiv from "../components/Items/Filters/FilterDiv";
import HeaderDiv from "../components/Items/HeaderDiv/HeaderDiv";
import ResultsDiv from "../components/Items/ResultsDiv/ResultsDiv";
import GenNavBar from "../components/NavBar/GenNavBar";
import SearchFilterProvider from "../state/providers/SearchFilterProvider";

const ItemsPage = () => {
  return (
    <SearchFilterProvider>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <div className="border-b-0.5 border-dark_gray">
          {/* Nav Bar */}
          <GenNavBar page="General" size="Full" />
        </div>
        <div className="flex flex-grow">
          <section className="hidden w-96 border-dark_gray/50 md:block md:border-e-0.5">
            {/* Filters : Not shown in small screens. In small screens, the filters will be in HeaderDiv */}
            <FilterDiv />
          </section>
          <main className="flex w-full flex-col p-5">
            {/* Presentation of the query, the #results, order of results + small screens : filters */}
            <HeaderDiv />
            {/* Presents the results of the search */}
            <ResultsDiv />
          </main>
        </div>
        <div>
          <FooterDiv />
        </div>
      </div>
    </SearchFilterProvider>
  );
};

export default ItemsPage;
