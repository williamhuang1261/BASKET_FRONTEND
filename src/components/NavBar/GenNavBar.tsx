import CalculatorTab from "./CalculatorTab";
import LanguageTab from "./LanguageIcon";
import BasketLogo from "./BasketLogo";
import Navigation from "./Navigation";
import ProfileTab from "./ProfileTab";
import SearchBar from "./SearchBar";
import SideBarTab from "./Drawer";
import useWindowSize from "../../hooks/useWindowSize";
import StatusBar from "./StatusBar/StatusBar";

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

/**
 * @description Generic navbar component with configurable elements.
 * @param {Object} props - The properties object.
 * @param {Array<"Side"|"SearchBar"|"Calc"|"Language"|"Profile"|"Location"|"Search"|"SideForSmall">} [props.hidden] - Elements to hide from navbar.
 * @param {"Main"|"General"} [props.page] - Preset page configuration.
 * @param {"Full"|"Container"} props.size - Width configuration of navbar.
 * @returns {JSX.Element} The generic navbar component.
 */
const GenNavBar = ({ hidden, page, size }: Props) => {
  const searchBarHidden: ("Search" | "Location")[] = [];
  const winSize = useWindowSize();

  if (hidden?.includes("Search")) searchBarHidden.push("Search");
  if (hidden?.includes("Location")) searchBarHidden.push("Location");

  return (
    <>
      {/* Md + displays */}
      <StatusBar size={size} />
      {winSize >= 1 && (
        <nav
          className={`${size === "Container" ? "aspect container mx-auto px-3 lg:px-20 2xl:px-44 3xl:px-64 pb-1" : " px-3 pb-1"}`}
        >
          <div className="flex flex-row items-center justify-between py-2">
            <div className="flex flex-none flex-row items-center ">
              {(hidden?.indexOf("Side") !== -1 && hidden) || page ? null : (
                <div className={"flex-none pe-2"}>
                  <SideBarTab size="40px" />
                </div>
              )}
              <div className="flex-none pe-4">
                <div className="w-32">
                <BasketLogo />

                </div>
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
        <nav className="px-3 pb-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-none flex-row items-center">
              {hidden?.indexOf("SideForSmall") !== -1 ? null : (
                <div className={"me-2 flex-none"}>
                  <SideBarTab size="40px" />
                </div>
              )}

              <div className="me-2 flex-none w-28">
                <BasketLogo/>
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
