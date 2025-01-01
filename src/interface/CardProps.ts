import { AmountProp, NameProp, RefProp, SuppliersProp } from "./Destructed";

/**
 * @description Properties for product card display components
 * @interface CardProps
 */
interface CardProps {
  id?: string
  name?: NameProp;
  ref?:RefProp;
  amount?: AmountProp;
  description?: string;
  brand?: string;
  suppliers?: SuppliersProp[]
  tags?: string[];
  image?: string;
}

export default CardProps