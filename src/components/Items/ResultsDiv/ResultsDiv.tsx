import HorizontalAd from "../../General/Ads/HorizontalAd";
import LoadingCard from "../../Loading/LoadingCard";
import cards from "./CardEX";
import { useEffect, useState } from "react";

// Contains all results, show more button
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
        {Array(12).fill(<LoadingCard />)}
      </div>
    );
  }
  return (
    <div className="mt-2 grid flex-none grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
      {cards.slice(0, 12).map((c, i) => (
        <div key={i}>{c}</div>
      ))}
      <div className="col-span-1 max-w-7xl overflow-hidden rounded border-0.5 border-dark_gray lg:col-span-2 xl:col-span-3 2xl:col-span-4 3xl:col-span-6">
        <HorizontalAd />
      </div>
      {cards.slice(12, 24).map((c, i) => (
        <div key={i}>{c}</div>
      ))}
      <div className="col-span-1 max-w-7xl overflow-hidden rounded border-0.5 border-dark_gray lg:col-span-2 xl:col-span-3 2xl:col-span-4 3xl:col-span-6">
        <HorizontalAd />
      </div>
      {cards.slice(24, 36).map((c, i) => (
        <div key={i}>{c}</div>
      ))}
      <div className="col-span-1 max-w-7xl overflow-hidden rounded border-0.5 border-dark_gray lg:col-span-2 xl:col-span-3 2xl:col-span-4 3xl:col-span-6">
        <HorizontalAd />
      </div>
      {cards.slice(24, cards.length).map((c, i) => (
        <div key={i} className={more ? "" : "hidden"}>
          {c}
        </div>
      ))}
      <div className="col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-4 3xl:col-span-6">
        <button
          type="button"
          className="rounded bg-green/80 px-5 py-2 text-xl ring-green transition-all duration-75 ease-in-out hover:scale-105 hover:ring-2"
          onClick={() => setMore(!more)}
        >
          {more ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ResultsDiv;
