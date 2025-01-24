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
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className={`relative z-40 h-full`}>
      <button
        type="button"
        onClick={() => setActive(!active)}
        onBlur={() => setActive(false)}
        onMouseOver={() => setActive(type === "Hover" ? true : active)}
        onMouseLeave={() => setActive(type === "Hover" ? false : active)}
        className={
          "flex h-full items-center" +
          (active || mouseOver ? className || "" : "")
        }
        aria-label={ariaLabel}
      >
        {title}
      </button>

      <div
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        className={`absolute transition-all ${active || mouseOver ? "pointer-events-auto translate-y-0 opacity-100 shadow-md" : "pointer-events-none -translate-y-2 opacity-0 shadow-none"}`}
      >
        {body}
      </div>
    </div>
  );
};

export default Dropdown;
