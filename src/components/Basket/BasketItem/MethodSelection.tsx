/**
 * @description Component that renders a select dropdown for measurement method.
 * @summary Allows users to switch between weight-based and unit-based measurement.
 * Updates the basket item state when method changes.
 * @returns {JSX.Element} The method selection dropdown
 */
import useBasketItemState from "../../../hooks/state/useBasketItemState";

const MethodSelection = () => {

  const {basketItem, dispatch} = useBasketItemState()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      group: 'CHANGE',
      type: 'METHOD',
      method: e.target.value
    })
  }

  return (
    <select
      aria-label="Select the method of measurement"
      className="cursor-pointer rounded-full bg-light_gray/50 px-1 py-0.5 font-semibold hover:text-green"
      onChange={handleChange}
      defaultValue={basketItem.method}
    >
      <option value={"weight"} className="bg-white text-black">
        Weight
      </option>
      <option value={"unit"} className="bg-white text-black">
        Unit
      </option>
    </select>
  );
};

export default MethodSelection;
