import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import Spinner from "../General/Miscellaneous/Spinner";
import useWindowSize from "../../hooks/useWindowSize";
import { FaCheck } from "react-icons/fa6";
import CriteriaBox from "../Auth/Signup/CriteriaBox";

interface Props {
  text: string;
  placeholder: string;
  onConfirm: (v: string) => void;
  id: string;
  criteriaFn?: (v: string) => { label: string; isValid: boolean }[];
  isLoading?: boolean;
}

/**
 * @description A reusable edit field component with toggle functionality
 * @param {Object} props - The properties object
 * @param {string} props.text - The current text value
 * @param {string} props.placeholder - Placeholder text for the input field
 * @param {function} props.onConfirm - Callback function when changes are confirmed
 * @param {string} props.id - Unique identifier for the field
 * @param {boolean} [props.isLoading] - Loading state of the field
 * @returns {JSX.Element} An editable field component with confirm/cancel actions
 */
const EditField = ({
  text,
  placeholder,
  id,
  criteriaFn,
  onConfirm,
  isLoading = false,
}: Props) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const winSize = useWindowSize();

  const criteria = (criteriaFn ? criteriaFn(value) : [])
  const allValid = criteria.every((criterion) => criterion.isValid)

  return active ? (
    <div className="w-full sm:w-96">
      <div className="flex w-full items-center gap-1">
        <div className="flex w-full flex-auto" id={"ChangeDiv" + id}>
          <input
            id={"ChangeInputField" + id}
            type="text"
            placeholder={placeholder}
            className="flex-auto rounded-s border px-1 py-1 outline-none"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="button"
            id={"ApplyButton" + id}
            className={`${allValid ? "hover:bg-green" : "cursor-not-allowed"} flex-none rounded-e bg-green/50 px-2 py-1 transition-all duration-150 ease-in-out`}
            onClick={() => {
              onConfirm(value);
              setActive(false);
              setValue("");
            }}
            disabled={!allValid}
          >
            {winSize >= 0 ? "Apply" : <FaCheck />}
          </button>
        </div>
        <button
          type="button"
          onClick={() => setActive(false)}
          className="h-8 rounded bg-red-500 px-1 text-black transition-all duration-150 ease-in-out hover:text-white hover:shadow-md"
        >
          <IoClose size="20px" className="h-full" />
        </button>
      </div>
      <div>
        <CriteriaBox
          className="mx-5"
          criteria={criteria}
          successMessage="New username is valid"
        />
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-1">
      {isLoading ? (
        <>
          <Spinner color="dark_gray" size={"4"} />
        </>
      ) : (
        <>
          <div>{text}</div>
          <button
            id={"ChangeButton" + id}
            className="text-black/50 transition-all duration-150 ease-in-out hover:text-green"
            onClick={() => {
              setActive(true);
              document.getElementById("ChangeField" + id)?.focus();
            }}
          >
            <MdModeEdit />
          </button>
        </>
      )}
    </div>
  );
};

export default EditField;
