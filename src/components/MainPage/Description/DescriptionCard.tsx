import { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  title: string;
  text: string;
}

// Description Card Component
/**
 * @description A card component displaying a feature description with an icon
 * @summary Renders a card with an icon, title, and descriptive text
 * @param {Object} props - The properties object
 * @param {ReactNode} props.Icon - The icon element to display
 * @param {string} props.title - The title of the feature
 * @param {string} props.text - The description text
 * @returns {JSX.Element} A formatted card displaying feature information
 */
const DescriptionCard = ({ Icon, title, text }: Props) => {
  return (
    <div className="my-3 mr-10 border-b-[0.5px] border-dark_gray/50 pb-2 lg:border-none">
      {Icon}
      <h3 className="pb-1 text-lg font-semibold">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default DescriptionCard;
