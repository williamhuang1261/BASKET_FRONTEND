interface Props {
  color?: string;
}

const InlineAds = ({color}: Props) => {
  return (
    <div className={`${color ? color : 'bg-amber-200'} font-righteous row-span-2 flex w-72 max-w-80 min-h-[800px] items-center justify-center rounded text-4xl shadow-md md:w-full `}>
      <span className="flex-none rotate-45">AD PLACEHOLDER</span>
    </div>
  );
};

export default InlineAds;
