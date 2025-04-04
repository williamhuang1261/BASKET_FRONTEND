import NewFooterDiv from "../../components/General/Footer/NewFooterDiv";
import FilterDiv from "../../components/Items/Filters/FilterDiv";
import HeaderDiv from "../../components/Items/HeaderDiv/HeaderDiv";
import ResultsDiv from "../../components/Items/ResultsDiv/ResultsDiv";
import GenNavBar from "../../components/NavBar/GenNavBar";
import useWindowSize from "../../hooks/useWindowSize";
import SearchFilterProvider from "../../state/providers/SearchFilterProvider";

/**
 * @description Product catalog and search page
 * @summary Main sections:
 * - Navigation bar
 * - Filter sidebar (desktop only)
 * - Search results header
 * - Product grid/list
 * - Footer
 *
 * @returns {JSX.Element} Items page with filter sidebar, search results, and responsive layout
 */
const ItemsPage = () => {
  const winSize = useWindowSize();
  return (
    <SearchFilterProvider>
      <div className="flex min-h-screen min-w-80 flex-col overflow-hidden">
        <div className="border-dark_gray border-b-[0.5px] bg-white">
          {/* Nav Bar */}
          <GenNavBar page="General" size="Full" />
        </div>
        <div className="flex grow">
          {winSize >= 1 && (
            <section className="border-dark_gray/50 w-96 bg-white md:border-e-[0.5px]">
              {/* Filters : Not shown in small screens. In small screens, the filters will be in HeaderDiv */}
              <FilterDiv />
            </section>
          )}
          <main className="3xl:container 3xl:mx-auto flex w-full flex-col p-5">
            {/* Presentation of the query, the #results, order of results + small screens : filters */}
            <HeaderDiv />
            {/* Presents the results of the search */}
            <ResultsDiv />
          </main>
        </div>
        <div>
          <NewFooterDiv />
          {/* <FooterDiv /> */}
        </div>
      </div>
    </SearchFilterProvider>
  );
};

export default ItemsPage;
