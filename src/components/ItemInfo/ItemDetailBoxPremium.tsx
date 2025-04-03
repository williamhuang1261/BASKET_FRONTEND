import BasketIcon from '../../assets/BasketLogoIcon.svg'


const ItemDetailBoxPremium = () => {
  return (
    <a className="relative z-10 flex h-52 cursor-pointer items-center justify-between overflow-hidden rounded-xl border p-5 border-gray-200 bg-black shadow-md transition-all hover:bg-purple-700">
      <div className="flex items-center justify-center">
        <img src={BasketIcon} className="w-32 object-contain -translate-y-1" />
      </div>
      <div className="z-30 h-full max-w-1/3">
        <div className="flex h-full items-center">
          <h1 className="text-2xl font-righteous text-white">
            PLACE YOUR AD HERE
          </h1>
        </div>
      </div>
    </a>
  );
};

export default ItemDetailBoxPremium;
