import ItemDetailBoxSpecial from "./ItemDetailBoxSpecial";
import ItemDetailBoxAd from "./ItemDetailBoxAd";
import ItemDetailBox from "./ItemDetailBox";
import ItemDetailBoxPremium from "./ItemDetailBoxPremium";

import Avril from '../../assets/avril.png'


const PricingListing = () => {
  return (
    <>
      <ItemDetailBoxPremium />
      <div className="grid gap-5 lg:grid-cols-2">
        <ItemDetailBoxAd image={Avril} color={"#CCFFCC"} />
        <ItemDetailBoxSpecial image={Avril} />
        <ItemDetailBox />
        <ItemDetailBox />
        <ItemDetailBox />
      </div>
    </>
  );
};

export default PricingListing;
