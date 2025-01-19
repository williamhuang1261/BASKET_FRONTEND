import LanguageModif from "./LanguageModif";
import DistanceUnitsModif from "./DistanceUnitsModif";
import WeightUnitsModif from "./WeightUnitsModif";

const PreferencesSettings = () => {
  return (
    <div className="rounded border bg-white">
      <div className="flex h-11 w-full items-center justify-between border-b px-2">
        <LanguageModif />
      </div>
      <div className="flex h-11 w-full items-center justify-between border-b px-2">
        <DistanceUnitsModif />
      </div>
      <div className="flex h-11 w-full items-center justify-between px-2">
        <WeightUnitsModif />
      </div>
    </div>
  );
};

export default PreferencesSettings;
