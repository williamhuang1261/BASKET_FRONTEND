/**
 * @description Language selection component for switching between available languages
 * @summary Provides a dropdown menu to change the application's language
 * @returns {JSX.Element} A select element with language options
 */
const LanguageHeader = () => {
  const changeLanguage = () => {
    console.log("Changed");
  };

  return (
    <select
      id={"Language_Selection"}
      className="cursor-pointer rounded-none border-none bg-green/5 outline-none hover:text-black/50"
      onChange={changeLanguage}
      aria-label="LanguageSelection"
    >
      <option value="en" className="bg-white text-black">
        English
      </option>
      <option value="fr" className="bg-white text-black">
        French
      </option>
    </select>
  );
};

export default LanguageHeader;
