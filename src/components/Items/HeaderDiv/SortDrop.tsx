/**
 * @description A dropdown component for sorting search results
 * @summary Provides options to sort results by relevance and alphabetical order
 * @returns {JSX.Element} A select element with sorting options
 */
const SortDrop = () => {

  const opts = ['Relevance', 'Alphabetical: A-Z', 'Alphabetical: Z-A'];

  return (
    <div className="flex items-center gap-1">
      <h4>Sort:</h4>
      <select className="rounded-sm bg-light_gray/80 px-2 ">
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
