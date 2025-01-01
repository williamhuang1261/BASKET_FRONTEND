import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import Spinner from "../General/Miscellaneous/Spinner";

interface Props {
  text: string;
  placeholder: string;
  onConfirm: (v: string) => void;
  id: string;
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
  onConfirm,
  isLoading = false,
}: Props) => {
  const [active, setActive] = useState(false);

  const getValue = () => {
    const input = document.getElementById(
      "ChangeField" + id,
    ) as HTMLInputElement;
    console.log(input.value);
    if (input.value === null || !input.value) return text;
    else return input.value;
  };

  return (
    <div className="flex flex-none gap-1 rounded">
      {active ? (
        <>
          <div className="rounded bg-light_green" id={"ChangeDiv" + id}>
            <input
              id={"ChangeField" + id}
              type="text"
              placeholder={placeholder}
              className="rounded border px-1 py-1 outline-none"
            />
            <button
              type="button"
              id={"ApplyButton" + id}
              className="rounded px-2 py-1 hover:bg-green"
              onClick={() => {
                onConfirm(getValue());
                setActive(false);
              }}
            >
              Apply
            </button>
          </div>
          <button
            type="button"
            onClick={() => setActive(false)}
            className="rounded bg-red-500 px-1 text-black transition-all duration-150 ease-in-out hover:text-white hover:shadow-md"
          >
            <IoClose size="20px" />
          </button>
        </>
      ) : (
        <>
          {isLoading ? (
            <>
              <Spinner color="dark_gray" size={"4"} />
            </>
          ) : (
            <>
              <div>{text}</div>
              <button
                id={"ChangeButton" + id}
                className="text-black/50 hover:text-green"
                onClick={() => {
                  setActive(true);
                  console.log(document.getElementById("ChangeField" + id));
                  document.getElementById("ChangeField" + id)?.focus();
                }}
              >
                <MdModeEdit />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default EditField;
