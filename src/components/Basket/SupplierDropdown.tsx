import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import logos from "../../data/Logos";
import PriceProps from "../../interface/PriceProps";

interface Props {
  filtered: PriceProps | string;
}

const SupplierDropdown = ({ filtered }: Props) => {
  const [open, setOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  if (typeof filtered === "string") return filtered;

  if (!filtered || !filtered.opts || filtered.opts.length === 0)
    return undefined;

  return (
    <div className="flex flex-col py-2 ">
      <button
        className={`${filtered.opts.length === 1 ? "justify-center hover:cursor-default" : "justify-between"} flex h-10 items-center rounded bg-light_gray p-1`}
        onClick={() => setOpen(!open)}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <RiArrowDropDownLine
          size={40}
          className={`${filtered.opts.length === 1 ? "hidden" : ""} ${mouseOver ? "text-green" : ""} h-full transition-all duration-100 ease-in-out`}
        />
        <img
          className="h-full object-contain"
          src={
            logos.find(
              (i) =>
                i.name.toLowerCase() ===
                filtered.opts?.[0].supplier.toLowerCase(),
            )?.src
          }
        />
        <RiArrowDropDownLine
          size={40}
          className={`${filtered.opts.length === 1 ? "hidden" : ""} ${mouseOver ? "text-green" : ""} h-full transition-all duration-100 ease-in-out`}
        />
      </button>
      <div className={"overflow-hidden rounded "}>
        {filtered.opts?.slice(1).map((s) => (
          <div
            className={` ${open ? "h-10 p-2 opacity-100" : "h-0 p-0 opacity-0"} ${filtered.opts?.indexOf(s) !== 1 ? "border-t-0.5" : ""} flex items-center justify-between gap-2 transition-all duration-100 ease-in-out`}
            key={s.supplier + "altSupplier"}
          >
            <div className="h-full items-center justify-center">
              <img
                className="h-full object-contain"
                src={
                  logos.find(
                    (i) => i.name.toLowerCase() === s.supplier.toLowerCase(),
                  )?.src
                }
              />
            </div>
            <div>
              <h4>{s.process.priceToShow}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierDropdown;
