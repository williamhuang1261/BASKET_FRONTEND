import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface ListProps {
  items: string[];
  show: number;
  onCheck: (i: string) => void;
  onUncheck: (i: string) => void;
}

// Logic to return many checkbox filters
const CheckboxList = ({
  items,
  show,
  onCheck,
  onUncheck,
}: ListProps) => {
  const [more, setMore] = useState(false);

  // Number of items to be shown
  const calcShow = (): number => {
    let showItems;
    if (more) showItems = items.length - 1;
    else showItems = show ?? 0;
    return showItems;
  };

  return (
    <div className="">
      <div>
        {items.slice(0, calcShow()).map((i) => (
          <div key={i}>
            <div className="my-2 ms-3 flex items-start">
              <input
                type="checkbox"
                key={i + "_checkbox"}
                id={i}
                value={i}
                className="peer relative mt-1.5 h-4 w-4 flex-none appearance-none border border-black ring-green/50 checked:bg-green/80 hover:bg-green/20 hover:ring-1 checked:hover:bg-green lg:h-5 lg:w-5"
                defaultChecked={false}
                onChange={(e) => {
                  if (e.target.checked) {
                    onCheck(i);
                  } else if (!e.target.checked) {
                    onUncheck(i);
                  }
                }}
              />
              <label
                key={i + " label"}
                htmlFor={i}
                className="flex-auto ps-2 text-lg"
              >
                {i}
              </label>
              {/* Check icon */}
              <svg
                key={i + " icon"}
                className=" pointer-events-none absolute mt-1.5 hidden h-4 w-4 peer-checked:block lg:h-5 lg:w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <h3
        className="mt-2 flex cursor-pointer items-center px-2 text-blue-600 hover:underline"
        onClick={() => setMore(!more)}
      >
        {/* Button show more/less */}
        <IoIosArrowUp className={more ? "" : "hidden"} />
        <IoIosArrowDown className={!more ? "" : "hidden"} />
        {!more ? "Show more " : "Show Less"}
      </h3>
    </div>
  );
};

export default CheckboxList;
