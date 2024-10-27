import { useState } from "react";
import useBasketItemState from "../../../hooks/state/useBasketItemState";
import { allUnitsType } from "../../../interface/UnitsProp";
import useUserState from "../../../hooks/state/useUserState";

interface Props {
  id: string;
}

const QSelectionGroup = ({ id }: Props) => {
  const { user, dispatch: userDispatch } = useUserState();
  const { basketItem, dispatch: basketItemDispatch } = useBasketItemState();

  const [method, setMethod] = useState(basketItem.method);

  const handleMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    basketItemDispatch({
      group: "CHANGE",
      type: "METHOD",
      method: e.target.value,
    });
    userDispatch({
      group: "CHANGE",
      type: "BASKET_ITEM_SELECTION",
      itemRef: basketItem.ref,
      target: "METHOD",
      newMethod: e.target.value as 'weight' | 'unit',
    });
    if (e.target.value !== "" && basketItem.units === "unit") {
      basketItemDispatch({
        group: "CHANGE",
        type: "UNITS",
        units: user.meta.preferences.weightUnits,
      });
      userDispatch({
        group: "CHANGE",
        type: "BASKET_ITEM_SELECTION",
        itemRef: basketItem.ref,
        target: "UNITS",
        newUnits: user.meta.preferences.weightUnits,
      });
    }
    setMethod(e.target.value);
  };

  const handleUnitsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    basketItemDispatch({
      group: "CHANGE",
      type: "UNITS",
      units: e.target.value as allUnitsType,
    });
    userDispatch({
      group: "CHANGE",
      type: "BASKET_ITEM_SELECTION",
      itemRef: basketItem.ref,
      target: "UNITS",
      newUnits: e.target.value as allUnitsType,
    });
    if(e.target.value !== 'unit' && basketItem.method === 'unit') {
      basketItemDispatch({
        group: "CHANGE",
        type: "METHOD",
        method: 'weight',
      });
      userDispatch({
        group: "CHANGE",
        type: "BASKET_ITEM_SELECTION",
        itemRef: basketItem.ref,
        target: "METHOD",
        newMethod: 'weight',
      });
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    basketItemDispatch({
      group: "CHANGE",
      type: "QUANTITY",
      quantity: parseInt(e.target.value),
    });
    userDispatch({
      group: "CHANGE",
      type: "BASKET_ITEM_SELECTION",
      itemRef: basketItem.ref,
      target: "QUANTITY",
      newQuantity: parseInt(e.target.value),
    });
  };

  return (
    <>
      <select
        aria-label="Select the method of measurement"
        className="cursor-pointer rounded-full bg-light_gray/50 px-1 py-0.5 font-semibold hover:text-green"
        onChange={handleMethodChange}
        defaultValue={basketItem.method}
        id={basketItem.ref.code + "_method_select_" + id}
      >
        <option value={"weight"} className="bg-white text-black">
          Weight
        </option>
        <option value={"unit"} className="bg-white text-black">
          Unit
        </option>
      </select>
      <select
        aria-label="Select the unit of measurement"
        className={`${method === "unit" ? "hidden " : ""} cursor-pointer rounded-full bg-light_gray/50 px-1 py-0.5 font-semibold hover:text-green`}
        onChange={handleUnitsChange}
        defaultValue={basketItem.units}
        id={basketItem.ref.code + "_unit_select_" + id}
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
      <input
        id={basketItem.ref.code + "_quantity_select_" + id}
        type="number"
        min="0"
        aria-label="Change quantity"
        defaultValue={basketItem.quantity}
        className="w-14 sm:w-20 rounded border-0.5 border-dark_gray px-2 py-1"
        onChange={handleQuantityChange}
      />
    </>
  );
};

export default QSelectionGroup;
