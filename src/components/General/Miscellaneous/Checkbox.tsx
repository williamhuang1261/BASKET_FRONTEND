interface Props {
  items: string[];
  gap?: string;
  xpadding?: string;
  size?: number;
  textSize?: string;
  onCheck?: (i: string) => void;
  onUncheck?: (i: string) => void;
  checkSet?: Set<string>;
}

const Checkbox = ({
  items,
  gap,
  xpadding,
  size,
  onCheck,
  onUncheck,
  checkSet,
}: Props) => {
  return (
    <div>
      {items.map((i) => (
        <div
          key={i + " div"}
          className={`flex items-start px-${
            xpadding || "4"
          }`}
          style={{marginTop: gap || '0.125rem', marginBottom: gap || '0.125rem'}}
        >
          <div className="relative">
            <input
              type="checkbox"
              key={i + " checkbox"}
              id={i}
              defaultChecked={checkSet?.has(i)}
              className={`peer relative mt-1.5 flex-none appearance-none rounded-sm border border-black ring-green/50 checked:bg-green/80 hover:cursor-pointer hover:bg-green/20 hover:ring-1 checked:hover:bg-green`}
              onChange={(e) => {
                if (e.target.checked && onCheck) onCheck(i);
                else if (!e.target.checked && onUncheck) onUncheck(i);
              }}
              style={{ height: size || 16, width: size || 16 }}
            />
            <svg
              key={i + " icon"}
              className={`absolute pointer-events-none mt-1.5 hidden inset-0 peer-checked:block`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ height: size || 16, width: size || 16 }}
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <label
            key={i + " label"}
            htmlFor={i}
            className="flex-auto ps-2 text-lg hover:cursor-pointer"
          >
            {i}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
