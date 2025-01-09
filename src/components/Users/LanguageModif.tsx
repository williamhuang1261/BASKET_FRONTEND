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
      <h2 className="font-semibold">Language</h2>
      <LanguageSelect
        id="User_Settings"
        loadingComponent={<Spinner color="dark_gray" size={"2"} />}
        selectClassName="rounded-full bg-light_gray/50 px-2 outline-none"
        optionClassName="bg-white"
      />
    </>
  );
};

export default LanguageModif;
