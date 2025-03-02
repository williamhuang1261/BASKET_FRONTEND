import { ReactNode, useState } from "react";

/**
 * @description A customizable dropdown component that can be triggered by hover or click
 * @param {Object} props - The properties object
 * @param {string} props.ariaLabel - Accessibility label for the dropdown button
 * @param {ReactNode} props.title - The content displayed in the dropdown trigger button
 * @param {string} [props.className] - Optional CSS classes for the dropdown
 * @param {ReactNode} props.body - The content displayed in the dropdown menu
 * @param {"Hover" | "Click"} props.type - The interaction type to trigger the dropdown
 * @returns {JSX.Element} A dropdown menu component
 */
interface DropdownProps {
  ariaLabel: string;
  title: ReactNode;
  className?: string;
  body: ReactNode;
  type: "Hover" | "Click";
}

const Dropdown = ({
  title,
  body,
  className,
  type,
  ariaLabel,
}: DropdownProps) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`relative z-40 h-full`}
      onMouseOver={() => {
        if (type === "Hover") setActive(true);
      }}
      onMouseLeave={() => {
        if (type === "Hover") setActive(false);
      }}
    >
      <button
        type="button"
        onClick={() => setActive(!active)}
        onBlur={(e) => {
          if (!e.relatedTarget) setActive(false);
        }}
        className={"flex h-full items-center" + (active ? className || "" : "")}
        aria-label={ariaLabel}
      >
        {title}
      </button>
      <div
        className={`absolute transition-all duration-500 ${active ? "pointer-events-auto translate-y-0 opacity-100 shadow-md" : "pointer-events-none -translate-y-2 opacity-0 shadow-none"}`}
      >
        {body}
      </div>
    </div>
  );
};

export default Dropdown;
