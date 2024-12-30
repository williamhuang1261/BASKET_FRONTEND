import { ReactNode, useState } from "react";

interface DropdownProps {
  ariaLabel: string
  title: ReactNode;
  className?: string;
  body: ReactNode;
  type: "Hover" | "Click";
}

const Dropdown = ({ title, body, className, type, ariaLabel}: DropdownProps) => {
  const [active, setActive] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className={`relative h-full z-40`}>
      <button
        type="button"
        onClick={() => setActive(!active)}
        onBlur={() => setActive(false)}
        onMouseOver={() => setActive(type === "Hover" ? true : active)}
        onMouseLeave={() => setActive(type === "Hover" ? false : active)}
        className={
          "flex items-center h-full" + (active || mouseOver ? className || "" : "")
        }
        aria-label={ariaLabel}
      >
        {title}
      </button>
      <div
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        className={`${active || mouseOver ? "" : "hidden"} absolute`}
      >
        {body}
      </div>
    </div>
  );
};

export default Dropdown;
