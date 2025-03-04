import { JSX, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Checkbox from "../../General/Miscellaneous/Checkbox";

/**
 * @description Props for the ExpandableCheckboxList component
 * @interface ListProps
 * @property {string[]} items - Array of items to display as checkboxes
 * @property {Set<string>} checkedSet - Set of currently checked items
 * @property {number} show - Number of items to show initially
 * @property {function} onCheck - Callback when an item is checked
 * @property {function} onUncheck - Callback when an item is unchecked
 */
interface ListProps {
  items: string[];
  checkedSet: Set<string>;
  show: number;
  onCheck: (i: string) => void;
  onUncheck: (i: string) => void;
}

/**
 * @description A component that displays an expandable list of checkboxes
 * @summary Shows a limited number of checkboxes with option to show more
 * @param {ListProps} props - The properties object
 * @returns {JSX.Element} An expandable list of checkboxes with show more/less functionality
 */
const ExpandableCheckboxList = ({
  items,
  show,
  onCheck,
  onUncheck,
  checkedSet,
}: ListProps): JSX.Element => {
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
      <div className="">
        <Checkbox
          checkSet={checkedSet}
          items={items.slice(0, calcShow())}
          onCheck={onCheck}
          onUncheck={onUncheck}
          gap={"2px"}
          size={16}
        />
      </div>
      <h3
        className="mt-2 flex cursor-pointer items-center px-2 text-blue-600 hover:underline"
        onClick={() => setMore(!more)}
      >
        {/* Button show more/less */}
        {more ? <IoIosArrowUp /> : <IoIosArrowDown />}
        {!more ? "Show more " : "Show Less"}
      </h3>
    </div>
  );
};

export default ExpandableCheckboxList;
