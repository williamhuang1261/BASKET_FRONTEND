import { categoriesType } from "../data/Categories";
import { AmountProp, NameProp, RefProp, SuppliersProp } from "./Destructed";

/**
 * @description Properties for product card display components
 * @interface CardProps
 */
interface CardProps {
  id: string;
  name: NameProp;
  ref: RefProp;
  amount: AmountProp;
  description?: {
    en: string;
    fr: string;
  };
  suppliers: SuppliersProp[];
  categories: categoriesType[];
  image: string;
}

export type { CardProps };
