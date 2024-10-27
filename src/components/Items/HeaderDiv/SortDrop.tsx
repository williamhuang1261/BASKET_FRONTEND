
// Sorting filter
const SortDrop = () => {
  return (
    <div className="flex items-center gap-1">
      <h4>Sort:</h4>
      <select className="bg-light_gray/80 rounded-full px-2">
        <option className="bg-white">Relevance</option>
        <option className="bg-white">Alphabetical: A-Z</option>
        <option className="bg-white">Alphabetical: Z-A</option>
      </select>
    </div>
  );
};

export default SortDrop;
