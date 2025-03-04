import Ad from "../../../assets/AdExample(1_2).jpg";

// Tower Ad found in the side of results section
/**
 * @description Tall vertical advertisement component used in the results section.
 * @summary Displays a 1:2 aspect ratio advertisement with rounded borders.
 * @returns {JSX.Element} A tall advertisement container with an image.
 */
const TowerAd = () => {
  return (
    <div className="aspect-1/2 w-full overflow-hidden rounded-sm border-[0.5px] border-dark_gray">
      <img src={Ad} alt="Tower Ad" className="h-full w-full object-cover" />
    </div>
  );
};

export default TowerAd;
