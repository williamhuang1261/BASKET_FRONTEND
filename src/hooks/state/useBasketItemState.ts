import { useContext } from "react"
import BasketItemContext from "../../state/contexts/BasketItemContext"

/**
 * @description Custom hook to access the basket item context state
 * @returns {Context} The basket item context value
 */
const useBasketItemState = () => {
  return useContext(BasketItemContext);
}

export default useBasketItemState