import { BsFillStarFill, BsStar } from "react-icons/bs";

interface Props {
  rating: number;
  maxRating?: number;
}

const StarReviews = ({ rating, maxRating = 5 }: Props) => {
  // Create an array of stars based on the rating
  const stars = Array.from({ length: maxRating }, (_, index) => {
    return index < rating ? (
      <BsFillStarFill key={index} />
    ) : (
      <BsStar key={index} />
    );
  });

  return (
    <div className="flex w-full justify-center text-yellow-400">
      <div className="flex items-center gap-1">
        {stars}
      </div>
    </div>
  );
};

export default StarReviews;
