import useBasketState from "../../hooks/state/useBasketState";

/**
 * @description Renders a select dropdown for choosing maximum number of stores
 * @summary Allows users to limit the number of stores in their shopping calculation
 * @returns {JSX.Element} The max stores selection component
 */
const MaxStoresSelect = () => {
  const { dispatch } = useBasketState();

  const opts = [
    ["", Infinity],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
  ];

  return (
    <div className="flex items-center gap-1">
      <h2 className="">Max Stores :</h2>
      <select
        id={"Max_Stores_Selection"}
        className=" rounded-sm bg-light_gray px-1 pb-0.5 font-semibold"
        onChange={(e) =>
          dispatch({
            group: "CHANGE",
            type: "MAX_STORES",
            number: parseInt(e.target.value),
          })
        }
      >
        {opts.map(([name, value]) => (
          <option key={name} value={value} className="bg-white text-black">
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MaxStoresSelect;
