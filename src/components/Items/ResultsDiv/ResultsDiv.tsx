import LoadingCard from "../../Loading/LoadingCard";
import cards from "./CardEX";
import { useEffect, useState } from "react";
import InlineAds from "./InlineAds";

/**
 * @description Component that displays a grid of result cards with loading states and pagination
 * @summary Shows product cards in a responsive grid layout with loading states, ads, and a show more button
 * @returns {JSX.Element} A grid container with product cards, loading states, and pagination controls
 */
const ResultsDiv = () => {
  const [more, setMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  if (isLoading) {
    return (
      <div className="3xl:grid-cols-6 mt-2 grid flex-none grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <LoadingCard key={index} />
          ))}
      </div>
    );
  }
  return (
    <div className="3xl:grid-cols-6 mt-2 grid flex-none grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <div className="col-span-1 row-span-2 flex w-full justify-center">
        <InlineAds color={"bg-blue-200"} />
      </div>
      {cards.slice(2, 12).map((c, i) => (
        <div
          key={i}
          className="col-span-1 flex w-full items-center justify-center"
        >
          {c}
        </div>
      ))}
      <div className="border-dark_gray 3xl:col-span-6 col-span-1 max-w-7xl overflow-hidden rounded-sm border-[0.5px] lg:col-span-2 xl:col-span-3 2xl:col-span-4">
        {/* <HorizontalAd /> */}
      </div>
      {cards.slice(12, 15).map((c, i) => (
        <div
          key={i}
          className="col-span-1 flex w-full items-center justify-center"
        >
          {c}
        </div>
      ))}
      <InlineAds color="bg-purple-300" />
      {cards.slice(16, 23).map((c, i) => (
        <div
          key={i}
          className="col-span-1 flex w-full items-center justify-center"
        >
          {c}
        </div>
      ))}
      <div className="border-dark_gray 3xl:col-span-6 col-span-1 max-w-7xl overflow-hidden rounded-sm border-[0.5px] lg:col-span-2 xl:col-span-3 2xl:col-span-4">
        {/* <HorizontalAd /> */}
      </div>
      <InlineAds color="bg-orange-200" />
      {cards.slice(22, 36).map((c, i) => (
        <div
          key={i}
          className="col-span-1 flex w-full items-center justify-center"
        >
          {c}
        </div>
      ))}
      <div className="border-dark_gray 3xl:col-span-6 col-span-1 max-w-7xl overflow-hidden rounded-sm border-[0.5px] lg:col-span-2 xl:col-span-3 2xl:col-span-4">
        {/* <HorizontalAd /> */}
      </div>
      {cards.slice(24, cards.length).map(
        (c, i) =>
          more && (
            <div
              key={i}
              className="col-span-1 flex w-full items-center justify-center"
            >
              {c}
            </div>
          ),
      )}
      <div className="3xl:col-span-6 col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-4">
        <button
          type="button"
          className="bg-green/50 hover:bg-green/80 rounded-sm border border-gray-200 px-4 py-2 transition-all hover:border-transparent hover:shadow-md"
          onClick={() => setMore(!more)}
        >
          {more ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ResultsDiv;
