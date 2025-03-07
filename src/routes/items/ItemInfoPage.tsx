import GenNavBar from "../../components/NavBar/GenNavBar";
import image from "../../assets/AdExample(1_1).jpg";
import { CardProps } from "../../interface/CardProps";
import ItemInformationBox from "../../components/ItemInfo/ItemInformationBox";
import PricingListing from "../../components/ItemInfo/PricingListing";
import FooterDiv from "../../components/General/Footer/FooterDiv";

const testItem: CardProps = {
  id: "123456789",
  name: {
    en: "Test Item",
    fr: "Article de test",
    size: "M",
  },
  ref: {
    code: "12345",
    standard: "PLU",
  },
  amount: {
    quantity: 1,
    units: "unit",
    isApprox: false,
    method: "unit",
  },
  description: {
    en: "A test item for demonstration purposes. This acts as a place holder for item information. There can be alot of text at some times and this is a test to see how it looks.",
    fr: "Un article de test à des fins de démonstration. Cela sert de substitut aux informations sur l'article. Il peut y avoir beaucoup de texte parfois et c'est un test pour voir à quoi cela ressemble.",
  },
  suppliers: [
    {
      supplier: "Grocery Store 1",
      brand: "Test Brand",
      pricing: {
        normal: 1.99,
        method: "weight_kg",
        limited: [
          {
            typeOfRebate: "C",
            C: 1.49,
            method: "weight_kg",
            timeframe: {
              start: Date.now() - 1000000,
              end: Date.now() + 200000000,
            },
            onlyMembers: false,
          },
        ],
      },
    },
    {
      supplier: "Grocery Store 2",
      brand: "Test Brand",
      pricing: {
        normal: 2.99,
        method: "weight_kg",
        limited: [
          {
            typeOfRebate: "C",
            C: 2.49,
            method: "weight_kg",
            timeframe: {
              start: Date.now() - 1000000,
              end: Date.now() + 200000000,
            },
            onlyMembers: false,
          },
        ],
      },
    },
  ],
  categories: ["Produce", "Bio", "Health Foods"],
  image: image,
};

const ItemInfoPage = () => {
  return (
    <div className="flex min-h-screen min-w-80 flex-col overflow-hidden">
      <div className="border-dark_gray border-b-[0.5px] bg-white">
        {/* Nav Bar */}
        <GenNavBar page="General" size="Full" />
      </div>
      <div className="flex h-full w-full flex-grow flex-col items-center p-5 lg:p-10">
        <div className="flex w-full flex-col gap-5 rounded-md bg-white p-5 shadow-md lg:container lg:mx-auto lg:max-w-[960px]">
          <ItemInformationBox {...testItem} />
          <PricingListing />
        </div>
      </div>
      <div>
        <FooterDiv />
      </div>
    </div>
  );
};

export default ItemInfoPage;
