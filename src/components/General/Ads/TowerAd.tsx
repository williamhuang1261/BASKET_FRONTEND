// Tower Ad found in the side of results section
/**
 * @description Tall vertical advertisement component used in the results section.
 * @summary Displays a 1:2 aspect ratio advertisement with rounded borders.
 * @returns {JSX.Element} A tall advertisement container with an image.
 */
const TowerAd = () => {
  return (
    <div className="border-dark_gray aspect-1/2 w-full overflow-hidden rounded-sm border-[0.5px]">
      <div className="h-full w-full object-cover bg-amber-200 flex justify-center items-center text-4xl font-righteous"><span className="flex-none -rotate-45">AD PLACEHOLDER</span></div>
    </div>
  );
};

export default TowerAd;
