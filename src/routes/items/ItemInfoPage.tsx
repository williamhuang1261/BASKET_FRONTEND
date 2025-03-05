import GenNavBar from "../../components/NavBar/GenNavBar";
import image from "../../assets/AdExample(1_1).jpg";
import { CardProps } from "../../interface/CardProps";
import ItemInformationBox from "../../components/ItemInfo/ItemInformationBox";

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
    en: "A test item for demonstration purposes. This acts as a place holder for item information.",
    fr: "Un article de test à des fins de démonstration. Cela sert de substitut aux informations sur l'article.",
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
        <div className="w-full rounded-md bg-white p-5 shadow-md lg:container lg:mx-auto lg:max-w-[960px]">
          <ItemInformationBox {...testItem} />
        </div>
      </div>
    </div>
  );
};

export default ItemInfoPage;
