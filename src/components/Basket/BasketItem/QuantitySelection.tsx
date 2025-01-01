/**
 * @description Component that renders a number input for quantity selection.
 * @summary Allows users to input the desired quantity of an item.
 * Updates the basket item state when quantity changes.
 * @returns {JSX.Element} The quantity input field
 */
import useBasketItemState from "../../../hooks/state/useBasketItemState";


const QuantitySelection = () => {

  const {basketItem, dispatch} = useBasketItemState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      group: 'CHANGE',
      type: 'QUANTITY',
      quantity: parseInt(e.target.value)
    })
  }

  return (
    <input
      type="number"
      min="0"
      aria-label="Change quantity"
      defaultValue={basketItem.quantity}
      className="w-14 rounded border-0.5 border-dark_gray px-2 py-1"
      onChange={handleChange}
    />
  );
};

export default QuantitySelection;
