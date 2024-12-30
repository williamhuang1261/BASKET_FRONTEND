import useBasketItemState from "../../../hooks/state/useBasketItemState";
import { allUnitsType } from "../../../interface/UnitsProp";

const UnitsSelection = () => {
  const { basketItem, dispatch } = useBasketItemState();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      group: "CHANGE",
      type: "UNITS",
      units: e.target.value as allUnitsType,
    });
  };

  return (
    <select
      aria-label="Select the unit of measurement"
      className={`${basketItem.method === "unit" ? "hidden " : ""} cursor-pointer rounded-full bg-light_gray/50 px-1 py-0.5 font-semibold hover:text-green`}
      onChange={handleChange}
      defaultValue={basketItem.units}
    >
      <option value={"kg"} className="bg-white text-black">
        kg
      </option>
      <option value={"g"} className="bg-white text-black">
        g
      </option>
      <option value={"lb"} className="bg-white text-black">
        lb
      </option>
      <option value={"oz"} className="bg-white text-black">
        oz
      </option>
    </select>
  );
};

export default UnitsSelection;
