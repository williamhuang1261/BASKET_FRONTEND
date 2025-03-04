import { BsArchive } from "react-icons/bs";
import { CgDollar } from "react-icons/cg";
import { IoMdPricetag } from "react-icons/io";
import { SlCalculator } from "react-icons/sl";
import DescriptionCard from "./DescriptionCard";


// All description cards

/**
 * @description Container component for feature description cards
 * @summary Renders a section containing multiple description cards highlighting application features
 * @returns {JSX.Element} A section containing multiple feature description cards
 */
const Description = () => {
  const cards = [
    {
      icon: <BsArchive size="30px" />,
      title: "Wide Inventory",
      text: "Choose from 10,000+ products. Find fruits, vegetables, cereals & much more",
    },
    {
      icon: <IoMdPricetag size="30px" />,
      title: "View Flyers",
      text: "View our partner's flyers and find what to buy. Powered by Flipp",
    },
    {
      icon: <CgDollar size="30px" />,
      title: "Find Best Prices & Offers",
      text: "Search any products. The lowest price and the supplier will be displayed",
    },
    {
      icon: <SlCalculator size="30px" />,
      title: "Calculate the Lowest Price",
      text: "Choose from 10,000+ products. Find fruits, vegetables, cereals & much more",
    },
  ];

  return (
    <section className="border-none border-dark_gray lg:border-b-[0.5px]">
      <div className="container mx-auto px-10 pb-2 pt-4 lg:px-20 lg:flex lg:flex-row 2xl:px-44  3xl:px-64">
        {cards.map((c) => (
          <DescriptionCard
            Icon={c.icon}
            title={c.title}
            text={c.text}
            key={c.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Description;
