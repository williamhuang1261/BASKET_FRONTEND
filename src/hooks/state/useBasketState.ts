import { useContext } from "react";
import BasketContext from "../../state/contexts/BasketContext";

const useBasketState = () => {
  return useContext(BasketContext);
}

export default useBasketState;