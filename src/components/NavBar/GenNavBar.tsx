import CalculatorTab from "./CalculatorTab";
import LanguageTab from "./LanguageTab";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ProfileTab from "./ProfileTab";
import SearchBar from "./SearchBar";
import SideBarTab from "./Drawer";
import ErrorBar from "../General/Miscellaneous/ErrorBar";
import useWindowSize from "../../hooks/useWindowSize";

// NavBar

// Hidden: Hides certain element from the NavBar
// Page: Predetermined setups
// Size: Width of NavBar (Container becomes fluid in md- displays)
interface Props {
  hidden?: (
    | "Side"
    | "SearchBar"
    | "Calc"
    | "Language"
    | "Profile"
    | "Location"
    | "Search"
    | "SideForSmall"
  )[];
  page?: "Main" | "General";
  size: "Full" | "Container";
}

const GenNavBar = ({ hidden, page, size }: Props) => {
  const searchBarHidden: ("Search" | "Location")[] = [];
  const winSize = useWindowSize();

  if (hidden?.includes("Search")) searchBarHidden.push("Search");
  if (hidden?.includes("Location")) searchBarHidden.push("Location");

  return (
    <>
      <ErrorBar size={size} />
      {winSize >= 1 && (
        <nav
          className={
            size === "Container" ? "container mx-auto px-20 " : " px-3 "
          }
        >
          <div className="flex flex-row items-center justify-between py-2">
            <div className="flex flex-none flex-row items-center ">
              {(hidden?.indexOf("Side") !== -1 && hidden) || page ? null : (
                <div className={"flex-none pe-2"}>
                  <SideBarTab size="40px" />
                </div>
              )}
              <div className="flex-none pe-4">
                <Logo />
              </div>
            </div>
            {hidden?.indexOf("SearchBar") !== -1 && hidden ? null : (
              <div className={"flex-auto"}>
                <SearchBar hidden={searchBarHidden} id={"standard"} />
              </div>
            )}
            <div className="flex flex-none flex-row">
              {hidden?.indexOf("Calc") !== -1 && hidden ? null : (
                <div className={"flex-none ps-4"}>
                  <CalculatorTab />
                </div>
              )}
              {hidden?.indexOf("Profile") !== -1 && hidden ? null : (
                <div className={"flex-none ps-4"}>
                  <ProfileTab />
                </div>
              )}
              {hidden?.indexOf("Language") !== -1 && hidden ? null : (
                <div className={"flex-none ps-4"}>
                  <LanguageTab />
                </div>
              )}
            </div>
          </div>
          {page === "General" ? null : (
            <div className={""}>
              <Navigation />
            </div>
          )}
        </nav>
      )}
      {/* Small Diplays */}
      {winSize < 1 && (
        <nav className="px-3 pb-2 ">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-none flex-row items-center">
              {hidden?.indexOf("SideForSmall") !== -1 ? null : (
                <div className={"me-2 flex-none"}>
                  <SideBarTab size="40px" />
                </div>
              )}

              <div className="me-2 flex-none">
                <Logo />
              </div>
            </div>
            <div className="flex flex-none flex-row">
              {hidden?.indexOf("Calc") !== -1 && hidden ? null : (
                <div className={"flex-none ps-4"}>
                  <CalculatorTab />
                </div>
              )}
              {hidden?.indexOf("Profile") !== -1 && hidden ? null : (
                <div className={"flex-none ps-4"}>
                  <ProfileTab />
                </div>
              )}
              {hidden?.indexOf("Language") !== -1 &&
              hidden &&
              page !== "Main" ? null : (
                <div className={"flex-none ps-4"}>
                  <LanguageTab />
                </div>
              )}
            </div>
          </div>
          {hidden?.indexOf("SearchBar") !== -1 && hidden ? null : (
            <div className={""}>
              <SearchBar hidden={searchBarHidden} id={"small"} />
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default GenNavBar;
