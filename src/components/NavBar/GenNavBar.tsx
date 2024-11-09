import CalculatorTab from "./CalculatorTab";
import LanguageTab from "./LanguageTab";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ProfileTab from "./ProfileTab";
import SearchBar from "./SearchBar";
import SideBarTab from "./Drawer";

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
  let searchBarHidden: ("Search" | "Location")[] = [];
  if (hidden?.includes("Search")) searchBarHidden.push("Search");
  if (hidden?.includes("Location")) searchBarHidden.push("Location");

  return (
    <>
      {/* Standard displays */}
      <nav
        // Size determination
        className={
          size === "Container"
            ? "container mx-auto hidden px-20 md:block"
            : "hidden px-3 md:block"
        }
      >
        <div className="flex flex-row items-center justify-between py-2">
          <div className="flex flex-none flex-row items-center ">
            {/* SideBar */}
            <div
              className={
                (hidden?.indexOf("Side") !== -1 && hidden) || page === "Main"
                  ? "hidden"
                  : "flex-none pe-2"
              }
            >
              <SideBarTab size="40px" />
            </div>
            <div className="flex-none pe-4">
              {/* Website Logo */}
              <Logo />
            </div>
          </div>
          <div
            className={
              hidden?.indexOf("SearchBar") !== -1 && hidden
                ? "hidden"
                : "flex-auto"
            }
          >
            {/* Search Bar */}
            <SearchBar hidden={searchBarHidden} id={"standard"} />
          </div>
          <div className="flex flex-none flex-row">
            <div
              className={
                hidden?.indexOf("Calc") !== -1 && hidden
                  ? "hidden"
                  : "flex-none ps-4"
              }
            >
              {/* Calculator button */}
              <CalculatorTab />
            </div>
            <div
              className={
                hidden?.indexOf("Profile") !== -1 && hidden
                  ? "hidden"
                  : "flex-none ps-4"
              }
            >
              {/* Profile dropdown */}
              <ProfileTab />
            </div>
            <div
              className={
                hidden?.indexOf("Language") !== -1 && hidden
                  ? "hidden"
                  : "flex-none ps-4"
              }
            >
              {/* Language change dropdown */}
              <LanguageTab />
            </div>
          </div>
        </div>
        <div className={page === "General" ? "hidden" : "" + ""}>
          {/* Navigation links */}
          <Navigation />
        </div>
      </nav>
      {/* Small Diplays */}
      <nav className="px-3 pb-2 md:hidden">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-none flex-row items-center">
            <div
              className={`${hidden?.indexOf("SideForSmall") !== -1 ? "hidden" : ""} me-2 flex-none`}
            >
              {/* Side Bar */}
              <SideBarTab size="40px" />
            </div>
            <div className="me-2 flex-none">
              {/* Logo */}
              <Logo />
            </div>
          </div>
          <div className="flex flex-none flex-row">
            <div
              className={
                hidden?.indexOf("Calc") !== -1 && hidden
                  ? "hidden"
                  : "flex-none ps-4"
              }
            >
              {/* Calculator button */}
              <CalculatorTab />
            </div>
            <div
              className={
                hidden?.indexOf("Profile") !== -1 && hidden
                  ? "hidden"
                  : "flex-none ps-4"
              }
            >
              {/* Profile dropdown */}
              <ProfileTab />
            </div>
            <div
              className={
                hidden?.indexOf("Language") !== -1 && hidden && page !== "Main"
                  ? "hidden"
                  : "flex-none ps-4"
              }
            >
              {/* Language dropdown */}
              <LanguageTab />
            </div>
          </div>
        </div>
        <div
          className={
            hidden?.indexOf("SearchBar") !== -1 && hidden ? "hidden" : ""
          }
        >
          {/* Search Bar */}
          <SearchBar hidden={searchBarHidden} id={"small"} />
        </div>
      </nav>
    </>
  );
};

export default GenNavBar;
