import LanguageSelect from "./LanguageSelect";
import Spinner from "../General/Miscellaneous/Spinner";

/**
 * @component LanguageModif
 * @description Language modification section for user settings
 * @returns {JSX.Element} A section containing a header and language selection component
 */
const LanguageModif = () => {
  return (
    <>
      <h3 className="font-semibold">Language</h3>
      <LanguageSelect
        id="User_Settings"
        loadingComponent={<Spinner color="dark_gray" size={"2"} borderSize="1"/>}
        selectClassName="rounded-full bg-light_gray/50 px-2"
        optionClassName="bg-white"
      />
    </>
  );
};

export default LanguageModif;
