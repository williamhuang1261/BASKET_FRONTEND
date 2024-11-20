import { useEffect, useState } from "react";
import CarouselAd1 from "../../../assets/AdExample(2_3).jpg";
import CarouselAd2 from "../../../assets/AdExample(2_3)Blue.jpg";
import CarouselAd3 from "../../../assets/AdExample(2_3)Red.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Carousel ad found in the Home Page
const CarouselAdDiv = () => {
  const [index, setIndex] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);

  const images = [CarouselAd1, CarouselAd2, CarouselAd3];
  const indexMax = images.length - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < indexMax) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className=" relative flex"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={() => setMouseOver(true)}
    >
      <div className="flex flex-nowrap">
        {images.map((c) => (
          <img
            src={c}
            key={images.indexOf(c)}
            alt="Carousel Advertisement"
            className="aspect-3/2 w-full object-cover transition-all duration-500 ease-in-out"
            style={{ translate: `${-100 * index}%` }}
          />
        ))}
      </div>
      <div className="absolute flex h-full w-full justify-between outline">
        <button
          className={
            (mouseOver ? "text-black" : "text-transparent") +
            " " +
            "p-1 transition duration-300 ease-in-out hover:bg-dark_gray/40 hover:text-green md:p-3"
          }
          type="button"
          onClick={() => setIndex(index !== 0 ? index - 1 : indexMax)}
          aria-label="Previous Ad"
        >
          <IoIosArrowBack size={"30"} />
        </button>
        <div className="flex flex-grow flex-col items-end gap-1">
          <button
            type="button"
            className="w-full flex-grow"
            onClick={() => console.log("Redirecting")}
            aria-label="Go to Ad Page"
          ></button>
          <div className="flex w-full">
            {images.map((c) => (
              <button
                type="button"
                key={images.indexOf(c)}
                onClick={() => setIndex(images.indexOf(c))}
                className={
                  (images.indexOf(c) === index
                    ? "bg-green"
                    : "bg-dark_gray hover:bg-green/50") +
                  " " +
                  "mx-2 my-2 h-1 flex-auto rounded border-black transition-all duration-500 ease-in-out md:h-1.5"
                }
                aria-label={`Go to Ad ${images.indexOf(c) + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <button
          className={
            (mouseOver ? "text-black" : "text-transparent") +
            " " +
            "p-1 transition duration-300 ease-in-out hover:bg-dark_gray/40 hover:text-green md:p-3"
          }
          type="button"
          onClick={() => setIndex(index < indexMax ? index + 1 : 0)}
          aria-label="Next Ad"
        >
          <IoIosArrowForward size={"30"} />
        </button>
      </div>
    </div>
  );
};

export default CarouselAdDiv;
