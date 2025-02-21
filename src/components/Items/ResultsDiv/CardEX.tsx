import ItemCard from "../../General/ItemCard/ItemCard";
import items from "../../../data/ItemsEX";

// Test cards
const card = (
  <ItemCard
    id = {items[0].id}
    key={items[0].ref.code}
    image={items[0].image}
    name={{
      fr: items[0].name.fr,
      en: items[0].name.en,
      size: items[0].name.size,
    }}
    reference={{
      standard: items[0].ref.standard,
      code: items[0].ref.code
    }}
    amount={{
      isApprox: items[0].amount.isApprox,
      method: items[0].amount.method,
      units: items[0].amount.units,
      quantity: items[0].amount.quantity,
    }}
    suppliers={items[0].suppliers}
  />
);

const cards = Array(48).fill(card);
export default cards;
