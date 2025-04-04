interface Props {
  color?: string;
}

const InlineAds = ({color}: Props) => {
  return (
    <div className={`${color ? color : 'bg-amber-200'} font-righteous row-span-2 flex w-72 max-w-80 min-h-[650px] items-center justify-center rounded text-4xl shadow-md md:w-full relative`}>
      <div className="absolute outline w-full h-24 rounded-b-full top-0 p-5 flex items-center justify-center bg-black text-white">YOUR_STORE</div>
      <span className="flex-none rotate-45">AD PLACEHOLDER</span>
    </div>
  );
};

export default InlineAds;
