// Changing language in standard presentation (Home Page)
const LanguageHeader = () => {
  const changeLanguage = () => {
    console.log("Changed");
  };

  return (
    <select
      id={"Language_Selection"}
      className="cursor-pointer rounded-none border-none bg-green/5 outline-none hover:text-black/50"
      onChange={changeLanguage}
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
