import { useContext } from "react";
import BasketContext from "../../state/contexts/BasketContext";

/**
 * @description Custom hook to access the basket context state
 * @returns {Context} The basket context value
 */
const useBasketState = () => {
  return useContext(BasketContext);
}

export default useBasketState;