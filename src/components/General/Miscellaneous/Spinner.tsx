/**
 * @description A loading spinner component that can be customized with different colors and sizes
 * @param {Object} props - The properties object
 * @param {string} props.color - The color of the spinner border
 * @param {string} props.size - The size of the spinner (width and height)
 * @returns {JSX.Element} A spinning circle loader component
 */
interface Props {
  color: string;
  size: string;
}

const Spinner = ({ color, size }: Props) => {
  return (
    <div
      className={`h-${size} w-${size} animate-spin rounded-full border-5 border-t-transparent border-${color}`}

    ></div>
  );
};

export default Spinner;
