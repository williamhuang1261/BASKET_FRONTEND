import useBasketState from "../../hooks/state/useBasketState";

// Setting the maximum number of stores to be visited
const MaxStoresSelect = () => {
  const { dispatch } = useBasketState();

  return (
    <div className="flex items-center gap-1">
      <h2 className="">Max Stores :</h2>
      <select
        id={"Max_Stores_Selection"}
        className=" rounded-full bg-light_gray px-1 pb-0.5 font-semibold outline-none hover:text-green"
        onChange={(e) =>
          dispatch({
            group: "CHANGE",
            type: "MAX_STORES",
            number: parseInt(e.target.value),
          })
        }
      >
        <option value={Infinity} className="bg-white text-black">
          All
        </option>
        <option value={1} className="bg-white text-black">
          1
        </option>
        <option value={2} className="bg-white text-black">
          2
        </option>
        <option value={3} className="bg-white text-black">
          3
        </option>
        <option value={4} className="bg-white text-black">
          4
        </option>
        <option value={5} className="bg-white text-black">
          5
        </option>
        <option value={6} className="bg-white text-black">
          6
        </option>
        <option value={7} className="bg-white text-black">
          7
        </option>
      </select>
    </div>
  );
};

export default MaxStoresSelect;
