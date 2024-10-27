import { GrLanguage } from "react-icons/gr";
import Dropdown from "../General/Miscellaneous/Dropdown";

// Contains the dropdown for changing languages (using the icon)

const LanguageTab = () => {
  return (
    <div>
      <Dropdown
        title={
          <GrLanguage size="35" className={"cursor-pointer hover:text-green duration-150 transition-all"} />
        }
        className="text-green"
        body={
          <div className="grid-col-1 absolute z-10 grid -right-[35px] overflow-hidden rounded border-0.5 border-dark_gray bg-white">
            <button
              type="button"
              className="border-b-0.5 p-1 hover:bg-light_gray"
            >
              French
            </button>
            <button
              type="button"
              className="border-b-0.5 p-1 hover:bg-light_gray"
            >
              English
            </button>
          </div>
        }
        type="Click"
      />
    </div>
  );
};

export default LanguageTab;
