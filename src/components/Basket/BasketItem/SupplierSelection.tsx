import { ReactNode, useState } from "react";
import { OptsProps } from "../../../interface/PriceProps";
import { RiArrowDropDownLine } from "react-icons/ri";
import logos from "../../../data/Logos";
import useBasketItemState from "../../../hooks/state/useBasketItemState";

interface Props {
  opts: OptsProps[];
}

const SupplierSelection = ({ opts }: Props): string | ReactNode => {
  const { dispatch } = useBasketItemState();

  const [open, setOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [displayed, setDisplayed] = useState<string>(opts[0].supplier);

  if (!opts || opts.length === 0) return "No suppliers available";

  return (
    <div className="flex w-full max-w-96 flex-col p-2">
      <button
        className={`${opts.length === 1 ? "justify-center hover:cursor-default" : "justify-between"} flex h-10 items-center rounded bg-light_gray p-1 shadow-sm`}
        onClick={() => setOpen(!open)}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {opts.length === 1 ? null : (
          <RiArrowDropDownLine
            size={40}
            className={`${mouseOver ? "text-green" : ""} h-full flex-none transition-all duration-100 ease-in-out`}
          />
        )}

        <div className="flex h-full flex-auto items-center justify-center">
          <img
            className=" h-full object-contain"
            src={
              logos.find(
                (l) => l.name.toLowerCase() === displayed.toLowerCase(),
              )?.src
            }
          />
        </div>
        {opts.length === 1 ? null : (
          <RiArrowDropDownLine
            size={40}
            className={`${mouseOver ? "text-green" : ""} h-full flex-none transition-all duration-100 ease-in-out`}
          />
        )}
      </button>
      <div className={"overflow-hidden rounded "}>
        {opts.map((s) =>
          displayed.toLowerCase() === s.supplier.toLowerCase() ? null : (
            <div
              className={`${open ? "h-10 p-2 opacity-100" : "h-0 p-0 opacity-0"} ${opts.indexOf(s) !== 1 ? "border-t-0.5" : ""} flex cursor-pointer items-center justify-between gap-2 transition-all duration-100 ease-in-out hover:bg-light_gray/50`}
              key={s.supplier + "altSupplier"}
              onClick={() => {
                setDisplayed(s.supplier);
                setOpen(false);
                dispatch({
                  group: "CHANGE",
                  type: "SUPPLIER_SELECTION",
                  supplier: s.supplier,
                });
              }}
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
          ),
        )}
      </div>
    </div>
  );
};

export default SupplierSelection;
