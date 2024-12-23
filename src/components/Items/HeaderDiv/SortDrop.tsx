// Sorting filter
const SortDrop = () => {
  const opts = ['Relevance', 'Alphabetical: A-Z', 'Alphabetical: Z-A'];

  return (
    <div className="flex items-center gap-1">
      <h4>Sort:</h4>
      <select className="rounded-full bg-light_gray/80 px-2 ">
        {opts.map((opt, i) => (
          <option key={i} className="bg-white" value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDrop;
