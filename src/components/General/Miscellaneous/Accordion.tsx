import { useState } from "react";

/**
 * @description An expandable accordion component for showing/hiding content
 * @param {Object} props - The properties object
 * @param {string} props.title - The text shown in the accordion header
 * @param {string} props.answer - The content revealed when accordion is expanded
 * @returns {JSX.Element} An expandable accordion section
 */
interface Props {
  title: string;
  answer: string;
}

const Accordion = ({ title, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col">
      <button
        type="button"
        className="flex w-full items-center justify-between p-2 transition-all duration-100 ease-in-out hover:bg-light_gray"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className="ml-8 shrink-0"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-300 ease-out ${
              open && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-300 ease-out ${
              open && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 p-2" : "grid-rows-[0fr] opacity-0 p-0"}`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
