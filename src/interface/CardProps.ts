import { AmountProp, NameProp, RefProp, SuppliersProp } from "./Destructed";

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