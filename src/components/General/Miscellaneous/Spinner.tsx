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
