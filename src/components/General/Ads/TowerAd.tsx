// Tower Ad found in the side of results section
/**
 * @description Tall vertical advertisement component used in the results section.
 * @summary Displays a 1:2 aspect ratio advertisement with rounded borders.
 * @returns {JSX.Element} A tall advertisement container with an image.
 */
const TowerAd = () => {
  return (
    <div className="border-dark_gray aspect-1/2 w-full overflow-hidden rounded-sm border-[0.5px]">
      <div className="font-righteous relative flex h-full w-full items-center justify-center bg-amber-200 object-cover text-4xl hover:bg-amber-300 cursor-pointer transition-all">
        <div className="absolute top-0 flex h-24 w-full items-center justify-center rounded-b-full bg-black p-5 text-white outline">
          YOUR_STORE
        </div>
        <span className="flex-none -rotate-45">AD PLACEHOLDER</span>
      </div>
    </div>
  );
};

export default TowerAd;
