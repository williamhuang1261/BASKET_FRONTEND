import { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  title: string;
  text: string;
}

// Description Card Component
const DescriptionCard = ({ Icon, title, text }: Props) => {
  return (
    <div className="my-3 mr-10 border-b-0.5 border-dark_gray/50 pb-2 lg:border-none">
      {Icon}
      <h3 className="pb-1 text-xl">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default DescriptionCard;
