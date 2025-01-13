import useBasketState from "../../hooks/state/useBasketState";
import useUserState from "../../hooks/state/useUserState";

/**
 * @description Renders a sticky banner showing the total cost and calculate button
 * @summary Displays the current basket total and provides a button to trigger calculations
 * @returns {JSX.Element} The sticky results component
 */
const StickyResults = () => {
  const {dispatch: userDispatch} = useUserState();
  const { basket, dispatch: basketDispatch } = useBasketState();

  const handleOnClick = () => {
    basketDispatch({
      group: "CHANGE",
      type: "TOTAL_COST",
      number: basket.totalCost + 1,
    });
    userDispatch({
      group: 'CHANGE',
      type: 'MAX_STORES',
      max: basket.maxStores
    })
    return
  }

  return (
    <div className=" sticky top-0 flex h-12 items-center justify-center w-full bg-white">
      <div className="flex h-full items-center rounded shadow-sm border overflow-hidden">
        <h2 className="text h-full p-2 px-2 text-lg font-bold lg:text-2xl flex items-center justify-center">
          Total : { `${basket.totalCost.toFixed(2)} $`}
        </h2>
        <button
          type="button"
          className="h-full w-24 bg-green/50 p-2 font-semibold transition duration-150 ease-in-out hover:bg-green/80 xl:w-40 xl:text-lg"
          onClick={handleOnClick}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default StickyResults;
