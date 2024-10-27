import { useContext } from "react"
import BasketItemContext from "../../state/contexts/BasketItemContext"

const useBasketItemState = () => {
  return useContext(BasketItemContext);
}

export default useBasketItemState