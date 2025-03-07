import useBasketItemState from "../../../hooks/state/useBasketItemState";
import { allUnitsType } from "../../../interface/UnitsType";

/**
 * @description Component that renders a select dropdown for units of measurement.
 * @summary Allows users to switch between different measurement units (kg, g, lb, oz).
 * Only displays when basketItem.method is not "unit".
 * @returns {JSX.Element | null} The units selection dropdown or null if method is "unit"
 */
const UnitsSelection = () => {
  const { basketItem, dispatch } = useBasketItemState();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      group: "CHANGE",
      type: "UNITS",
      units: e.target.value as allUnitsType,
    });
  };

  return basketItem.method === "unit" ? null : (
    <select
      aria-label="Select the unit of measurement"
      className={`bg-light_gray/50 hover:text-green cursor-pointer rounded-full px-1 py-0.5 font-semibold`}
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
