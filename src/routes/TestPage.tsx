import { useEffect, useState } from "react";
import ItemCard from "../components/General/ItemCard/ItemCard";
import LoadingCard from "../components/Loading/LoadingCard";
import ItemsEx from "../data/ItemsEX";

const card = ItemsEx[2];

const TestPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <div className="w-72">
      {isLoading ? (
        <LoadingCard />
      ) : (
        <ItemCard
          id={card.id}
          image={card.image}
          name={card.name}
          reference={card.ref}
          amount={card.amount}
          brand={card.brand}
          suppliers={card.suppliers}
        />
      )}
    </div>
  );
};

export default TestPage;
