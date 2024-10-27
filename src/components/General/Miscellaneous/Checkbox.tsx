interface Props {
  items: string[];
  gap?: string;
  xpadding?: string;
  size?: string;
  textSize?: string;
  onCheck?: (i: string) => void;
  onUncheck?: (i:string) => void
}

const Checkbox = ({ items, gap, xpadding, size, onCheck, onUncheck }: Props) => {
  return (
    <div>
      {items.map((i) => (
        <div
          key={i + " div"}
          className={`flex items-start my-${gap || "0.5"} px-${
            xpadding || "4"
          }`}
        >
          <input
            type="checkbox"
            key={i + " checkbox"}
            id={i}
            className={`peer relative flex-none appearance-none w-${
              size || "4"
            } h-${
              size || "4"
            } mt-1.5 border border-black ring-green/50 checked:bg-green/80 hover:bg-green/20 hover:ring-1 checked:hover:bg-green`}
            onChange={(e) => {
              if(e.target.checked && onCheck) onCheck(i);
              else if (!e.target.checked && onUncheck) onUncheck(i)
            }}
          />
          <label
            key={i + " label"}
            htmlFor={i}
            className="flex-auto ps-2 text-lg"
          >
            {i}
          </label>
          <svg
            key={i + " icon"}
            className={`absolute w-${size || "4"} h-${
              size || "4"
            } pointer-events-none mt-1.5 hidden peer-checked:block`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
