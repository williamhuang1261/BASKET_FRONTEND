import HorizontalAd from "../../General/Ads/HorizontalAd";
import LoadingCard from "../../Loading/LoadingCard";
import cards from "./CardEX";
import { useEffect, useState } from "react";

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
    }, 5000);
  });
  if (isLoading) {
    return (
      <div className="mt-2 grid flex-none grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <LoadingCard key={index} />
          ))}
      </div>
    );
  }
  return (
    <div className="mt-2 grid flex-none grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
      {cards.slice(0, 12).map((c, i) => (
        <div key={i} className="xl:w-full">{c}</div>
      ))}
      <div className="col-span-1 max-w-7xl overflow-hidden rounded-sm border-[0.5px] border-dark_gray lg:col-span-2 xl:col-span-3 2xl:col-span-4 3xl:col-span-6">
        <HorizontalAd />
      </div>
      {cards.slice(12, 24).map((c, i) => (
        <div key={i} className="xl:w-full">{c}</div>
      ))}
      <div className="col-span-1 max-w-7xl overflow-hidden rounded-sm border-[0.5px] border-dark_gray lg:col-span-2 xl:col-span-3 2xl:col-span-4 3xl:col-span-6">
        <HorizontalAd />
      </div>
      {cards.slice(24, 36).map((c, i) => (
        <div key={i} className="xl:w-full">{c}</div>
      ))}
      <div className="col-span-1 max-w-7xl overflow-hidden rounded-sm border-[0.5px] border-dark_gray lg:col-span-2 xl:col-span-3 2xl:col-span-4 3xl:col-span-6">
        <HorizontalAd />
      </div>
      {cards
        .slice(24, cards.length)
        .map((c, i) => more && <div key={i} className="xl:w-full">{c}</div>)}
      <div className="col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-4 3xl:col-span-6">
        <button
          type="button"
          className="rounded-sm border border-gray-200 bg-green/50 px-4 py-2 transition-all hover:border-transparent hover:bg-green/80 hover:shadow-md"
          onClick={() => setMore(!more)}
        >
          {more ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ResultsDiv;
