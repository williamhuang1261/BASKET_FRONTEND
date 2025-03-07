import { useRef, useState } from "react";
import useBasketItemState from "../../../hooks/state/useBasketItemState";
import { allUnitsType } from "../../../interface/UnitsType";
import useUserState from "../../../hooks/state/useUserState";

/**
 * @description Component that groups measurement method, units, and quantity selection controls.
 * @summary Manages the state and interactions between measurement method, units, and quantity.
 * Syncs changes with both basket item state and user preferences.
 * @param {Object} props - The properties object
 * @param {string} props.id - Unique identifier for the selection group (The item's id)
 * @returns {JSX.Element} The grouped selection controls
 */
interface Props {
  id: string;
}

const QSelectionGroup = ({ id }: Props) => {
  const { dispatch: userDispatch } = useUserState();
  const { basketItem, dispatch: basketItemDispatch } = useBasketItemState();
  const [method, setMethod] = useState(basketItem.method);

  const methodRef = useRef<HTMLSelectElement>(null);
  const unitsRef = useRef<HTMLSelectElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (methodRef.current && unitsRef.current && quantityRef.current) {
      basketItemDispatch({
        group: "CHANGE",
        type: "METHOD",
        method: methodRef.current.value,
      });
      basketItemDispatch({
        group: "CHANGE",
        type: "UNITS",
        units: unitsRef.current.value as allUnitsType,
      });
      basketItemDispatch({
        group: "CHANGE",
        type: "QUANTITY",
        quantity: parseInt(quantityRef.current.value),
      });
      userDispatch({
        group: "CHANGE",
        type: "BASKET_ITEM_SELECTION",
        itemId: basketItem.itemId,
        new: {
          method: methodRef.current.value as "weight" | "unit",
          units: unitsRef.current.value as allUnitsType,
          quantity: parseInt(quantityRef.current.value),
        },
      });
    }
  };

  return (
    <>
      <select
        ref={methodRef}
        aria-label="Select the method of measurement"
        className="bg-light_gray/50 hover:text-green cursor-pointer rounded-full px-1 py-0.5 font-semibold"
        onChange={(e) => {
          setMethod(e.target.value as string);
          handleChange();
        }}
        defaultValue={basketItem.method}
        id={basketItem.itemId + "_method_select_" + id}
      >
        <option value={"weight"} className="bg-white text-black">
          Weight
        </option>
        <option value={"unit"} className="bg-white text-black">
          Unit
        </option>
      </select>
      {method === "unit" ? null : (
        <select
          ref={unitsRef}
          aria-label="Select the unit of measurement"
          className="bg-light_gray/50 hover:text-green cursor-pointer rounded-full px-1 py-0.5 font-semibold"
          onChange={handleChange}
          defaultValue={basketItem.units}
          id={basketItem.itemId + "_unit_select_" + id}
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
      )}

      <input
        ref={quantityRef}
        id={basketItem.itemId + "_quantity_select_" + id}
        type="number"
        min="0"
        aria-label="Change quantity"
        defaultValue={basketItem.quantity}
        className="border-dark_gray w-14 rounded-sm border-[0.5px] px-2 py-1 sm:w-20"
        onChange={handleChange}
      />
    </>
  );
};

export default QSelectionGroup;
