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
