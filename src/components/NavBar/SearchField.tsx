import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import useError from "../../hooks/useError";
import getSearchAutocomplete from "../../utils/services/search/getSearchAutocomplete";

interface Props {
  hidden?: ("Location" | "Search")[];
  id: string;
}
const SearchField = ({ hidden, id }: Props) => {
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const errHandler = useError();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Search for:", input);
  };

  useEffect(() => {
    setIsLoading(true);
    const delayFetch = setTimeout(() => {
      if (input.length >= 2 && input.length <= 20)
        getSearchAutocomplete(input)
          .then(setSuggestions)
          .catch(errHandler)
          .finally(() => setIsLoading(false));
      else setIsLoading(false);
    }, 400);
    return () => {
      clearTimeout(delayFetch);
      setIsLoading(false);
    };
  }, [input]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        if (input.length < 2 || input.length > 20) setSuggestions([]);
        setActive(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [dropdownRef, input]);

  return (
    <div
      ref={dropdownRef}
      className={`${hidden?.includes("Location") ? "rounded-b md:w-full md:rounded-r" : "md:w-1/2 md:rounded-r-none lg:w-7/12"} outline-dark_gray relative flex h-11 rounded-t bg-white outline outline-1 focus-within:z-50 md:rounded-l`}
    >
      <input
        type="text"
        autoComplete="off"
        placeholder="Search products"
        size={4}
        id={id + "_Search"}
        className={`h-full flex-auto rounded-sm border-none px-4`}
        onChange={(e) => setInput(e.currentTarget.value)}
        onFocus={() => setActive(true)}
      />
      {active && (
        <div
          className={`absolute top-11 z-10 w-full divide-y-[0.5px] divide-gray-200 rounded-b border border-gray-200 bg-white shadow-md ${active && isLoading ? "border border-gray-300" : "border-none"} `}
        >
          {isLoading && input.length >= 2 && input.length <= 20 && (
            <div className="p-2">Loading ...</div>
          )}
          {suggestions.length === 0 &&
            !isLoading &&
            input.length >= 2 &&
            input.length <= 20 && (
              <div className="p-2 text-red-600">No results found</div>
            )}
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              arial-label={"Suggestion: " + s}
              className="flex w-full cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => console.log(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={handleClick}
        type="submit"
        aria-label="Search"
        className="bg-green hover:bg-light_gray md:hover:bg-green md:focus-visible:bg-green flex-none px-4 focus-visible:outline-hidden md:bg-white md:transition-all"
      >
        {/* Product Search Bar */}
        <IoSearch size="26" />
      </button>
    </div>
  );
};

export default SearchField;
