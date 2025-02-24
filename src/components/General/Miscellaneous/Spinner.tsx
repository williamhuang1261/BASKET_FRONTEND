import { HTMLAttributes } from "react";

/**
 * @description A loading spinner component that can be customized with different colors and sizes
 * @param {Object} props - The properties object
 * @param {string} props.color - The color of the spinner border
 * @param {string} props.size - The size of the spinner (width and height)
 * @returns {JSX.Element} A spinning circle loader component
 */
interface Props extends HTMLAttributes<HTMLDivElement> {
  color: string;
  size: string;
  borderSize: string;
}

const Spinner = ({ color, size, borderSize, className, ...rest }: Props) => {
  const adjustedSize = size === "full" ? "full" : `[${size}]`
  return (
    <div
      {...rest}
      className={`h-${adjustedSize} w-${adjustedSize} animate-spin rounded-full border-${borderSize} border-t-transparent border-${color} ${className}`}
    ></div>
  );
};

export default Spinner;
