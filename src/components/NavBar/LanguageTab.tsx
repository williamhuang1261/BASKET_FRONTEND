import { GrLanguage } from "react-icons/gr";
import Dropdown from "../General/Miscellaneous/Dropdown";

/**
 * @description Language selection dropdown component.
 * @returns {JSX.Element} The language selection component with dropdown menu.
 */
const LanguageTab = () => {
  return (
    <div>
      <Dropdown
        title={
          <GrLanguage size="35" className={"cursor-pointer hover:text-green transition-all"} />
        }
        className="text-green"
        body={
          <div className="grid-col-1 absolute z-10 grid -right-[35px] overflow-hidden rounded border-0.5 border-dark_gray bg-white">
            <button
              type="button"
              className="border-b-0.5 p-1 hover:bg-light_gray"
              aria-label="French"
            >
              French
            </button>
            <button
              type="button"
              className="border-b-0.5 p-1 hover:bg-light_gray"
              aria-label="English"
            >
              English
            </button>
          </div>
        }
        type="Click"
        ariaLabel="Language"
      />
    </div>
  );
};

export default LanguageTab;
