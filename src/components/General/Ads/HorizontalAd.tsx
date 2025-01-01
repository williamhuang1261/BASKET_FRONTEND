import ad from "../../../assets/AdExample(6_1).jpg";

// Horizontal ad

/**
 * @description Horizontal advertisement component.
 * @summary Displays a wide-format advertisement image that covers its container.
 * @returns {JSX.Element} A horizontal advertisement image.
 */
const HorizontalAd = () => {
  return <img src={ad} alt='Ad' className="object-cover" />;
};

export default HorizontalAd;
