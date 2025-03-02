interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size: string;
  color: string;
  backgroundColor?: string;
  opacity?: string;
}

const Spinner = ({ size, color, backgroundColor, opacity }: Props) => {
  return (
    <div
      className="animate-spin"
      style={{
        width: size,
        height: size,
        borderWidth: parseInt(size) / 8,
        borderTopColor: color,
        borderBottomColor: backgroundColor,
        borderLeftColor: backgroundColor,
        borderRightColor: backgroundColor,
        opacity: opacity,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Spinner;
