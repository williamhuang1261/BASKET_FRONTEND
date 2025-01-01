/**
 * @description Props for the Slider component
 * @interface SliderProps
 * @property {string} id - Unique identifier for the slider
 * @property {number} initial - Initial value of the slider
 * @property {number} min - Minimum value of the slider
 * @property {number} max - Maximum value of the slider
 * @property {number} steps - Step increment of the slider
 * @property {number} width - Width of the slider in tailwind units
 * @property {function} onChange - Callback function when slider value changes
 */
interface SliderProps {
  id: string;
  initial: number;
  min: number;
  max: number;
  steps: number;
  width: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @description A customizable range slider component
 * @summary Provides a range input with configurable min, max, and step values
 * @param {SliderProps} props - The properties object
 * @returns {JSX.Element} A slider component with labels for min and max values
 */
const Slider = ({
  id,
  initial,
  min,
  max,
  steps,
  width,
  onChange,
}: SliderProps): JSX.Element => {
  return (
    <div className="z-50">
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
