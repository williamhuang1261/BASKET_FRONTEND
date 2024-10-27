import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";

interface Props {
  text: string;
  placeholder: string;
  onConfirm: (v: string) => void;
  id: string;
}

const EditField = ({ text, placeholder, id, onConfirm }: Props) => {
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
      <div className={`${active ? "hidden" : ""}`}>{text}</div>
      <div
        className={`${!active ? "hidden" : "rounded bg-light_green"}`}
        id={"ChangeDiv" + id}
      >
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
        className={`rounded bg-red-500 px-1 text-black hover:text-white ${!active ? "hidden" : ""}`}
      >
        <IoClose size="20px" />
      </button>
      <button
        id={"ChangeButton" + id}
        className={`${!active ? "text-black/50 hover:text-green" : "hidden"}`}
        onClick={() => {
          setActive(true);
          console.log(document.getElementById("ChangeField" + id))
          document.getElementById("ChangeField" + id)?.focus();
        }}
      >
        <MdModeEdit />
      </button>
    </div>
  );
};

export default EditField;
