import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import useError from "../../hooks/useError";
import getSearchAutocomplete from "../../utils/services/search/getSearchAutocomplete";

interface Props {
  hidden?: ("Location" | "Search")[];
  id: string;
}
const SearchField = ({ hidden, id }: Props) => {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const errHandler = useError();
  const isGoodLength = input.length >= 2 && input.length <= 20;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Search for:", input);
  };
  useEffect(() => {
    setIsLoading(true);
    const delayFetch = setTimeout(() => {
      if (isGoodLength) {
        getSearchAutocomplete(input)
          .then((res) => setSuggestions(res))
          .catch(errHandler)
          .finally(() => setIsLoading(false));
      }
      else {
        setIsLoading(false);
      }
    }, 400);
    return () => {
      clearTimeout(delayFetch);
      setIsLoading(false);
    };
  }, [input]);

  return (
    <div
      onBlur={() => {
        setActive(false);
        if (input.length < 2) setSuggestions([]);
      }}
      className={`${hidden?.includes("Location") ? "rounded-b md:w-full md:rounded-r" : "md:w-1/2 md:rounded-r-none lg:w-7/12"} relative flex rounded-t outline outline-1 outline-dark_gray md:rounded-l`}
    >
      <input
        type="text"
        placeholder="Search products"
        size={4}
        id={id + "_Search"}
        className="h-11 flex-auto border-none px-4 outline-none"
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setActive(true)}
      />
      <button
        onClick={handleClick}
        type="submit"
        aria-label="Search"
        className="flex-none bg-green px-4 hover:bg-light_gray md:bg-white md:transition-all md:hover:bg-green"
      >
        {/* Product Search Bar */}
        <IoSearch size="26" />
      </button>
      {active && (
        <div className="absolute top-11 z-10 w-full rounded-b border border-gray-300 bg-white shadow-md">
          {isLoading && isGoodLength && <div className="p-2">Loading ...</div>}
          {suggestions.length === 0 && !isLoading && isGoodLength && (
            <div className="p-2 text-red-600">No results found</div>
          )}
          {suggestions.map((s) => (
            <div
              key={s}
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => console.log(s)}
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
