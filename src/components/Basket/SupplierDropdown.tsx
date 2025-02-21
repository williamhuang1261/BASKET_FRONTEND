import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import logos from "../../data/Logos";
import {PriceProps} from "../../interface/PriceProps";

/**
 * @interface Props
 * @description Interface for the SupplierDropdown component props
 * @property {PriceProps | string} filtered - The filtered price data or error message
 */
interface Props {
  filtered: PriceProps | string;
}

/**
 * @description Renders a dropdown component displaying supplier logos and their corresponding prices
 * @summary Shows the primary supplier at the top with optional dropdown for alternative suppliers
 * @param {Props} props - Component props
 * @param {PriceProps | string} props.filtered - The filtered price data or error message
 * @returns {JSX.Element | string | undefined} The supplier dropdown component, error message, or undefined
 */
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
        {filtered.opts.length === 1 ? null : (
          <RiArrowDropDownLine
            size={40}
            className={`${mouseOver ? "text-green" : ""} h-full transition-all duration-100`}
          />
        )}

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
        {filtered.opts.length === 1 ? null : (
          <RiArrowDropDownLine
            size={40}
            className={`${mouseOver ? "text-green" : ""} h-full transition-all duration-100`}
          />
        )}
      </button>
      <div className={"overflow-hidden rounded "}>
        {filtered.opts?.slice(1).map((s) => (
          <div
            className={` ${open ? "h-10 p-2 opacity-100" : "h-0 p-0 opacity-0"} ${filtered.opts?.indexOf(s) !== 1 ? "border-t-0.5" : ""} flex items-center justify-between gap-2 transition-all duration-100`}
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
