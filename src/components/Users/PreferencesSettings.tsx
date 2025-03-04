import LanguageModif from "./LanguageModif";
import DistanceUnitsModif from "./DistanceUnitsModif";
import WeightUnitsModif from "./WeightUnitsModif";

const PreferencesSettings = () => {
  return (
    <div className="rounded-sm border border-gray-200 bg-white">
      <div className="flex h-11 w-full items-center justify-between border-b border-gray-200 px-2">
        <LanguageModif />
      </div>
      <div className="flex h-11 w-full items-center justify-between border-b border-gray-200 px-2">
        <DistanceUnitsModif />
      </div>
      <div className="flex h-11 w-full items-center justify-between px-2">
        <WeightUnitsModif />
      </div>
    </div>
  );
};

export default PreferencesSettings;
