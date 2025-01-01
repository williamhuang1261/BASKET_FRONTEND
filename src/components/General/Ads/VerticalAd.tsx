import Ad from "../../../assets/AdExample(3_2).jpg";

// Vertical ad found in Home Page

/**
 * @description Vertical advertisement component for the home page.
 * @summary Displays a static vertical advertisement image.
 * @returns {JSX.Element} A vertical advertisement container with an image.
 */
const VerticalAd = () => {
  return (
    <div className="cursor-pointer">
      <img src={Ad} alt="Ads" className="" />
    </div>
  );
};

export default VerticalAd;
