import { categoriesType } from "../../data/Categories";
import { CardProps } from "../../interface/CardProps";
import { NameProp, RefProp, AmountProp, SuppliersProp } from "../../interface/Destructed";

class ItemClass {
  id: string;
  name: NameProp;
  ref: RefProp;
  amount: AmountProp;
  description: {
    en: string;
    fr: string;
  };
  suppliers: SuppliersProp[];
  categories: categoriesType[];
  image: string;

  constructor(item: CardProps) {
    this.id = item.id;
    this.name = item.name;
    this.ref = item.ref;
    this.amount = item.amount;
    this.description = item.description || { en: "", fr: "" };
    this.suppliers = item.suppliers;
    this.categories = item.categories;
    this.image = item.image;
  }

  
}

export default ItemClass;