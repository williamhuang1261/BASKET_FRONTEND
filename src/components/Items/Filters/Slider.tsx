interface SliderProps {
  id: string;
  initial: number;
  min: number;
  max: number;
  steps: number;
  width: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Slider component
const Slider = ({
  id,
  initial,
  min,
  max,
  steps,
  width,
  onChange,
}: SliderProps) => {
  return (
    <div>
      <div className={`w-${width} flex justify-between`}>
        <h3>{min}</h3>
        <h3>{max}</h3>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={steps}
        defaultValue={initial}
        className={`w-${width}`}
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
