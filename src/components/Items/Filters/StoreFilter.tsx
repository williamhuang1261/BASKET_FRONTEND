import suppliers from "../../../data/Suppliers";
import useSearchFilterState from "../../../hooks/state/useSearchFilterState";
import ExpandableCheckboxList from "./ExpandableCheckboxList";

// Store selection filters
const StoreFilter = () => {
  const { dispatch } = useSearchFilterState();

  return (
    <div className=" py-5">
      <h2 className="pb-2 text-xl font-semibold">Stores</h2>
      <ExpandableCheckboxList
        items={suppliers}
        show={8}
        onCheck={(i) => {
          dispatch({ group: "ADD", type: "FILTERED_STORE", item: i });
        }}
        onUncheck={(i) => {
          dispatch({ group: "DELETE", type: "FILTERED_STORE", item: i });
        }}
      />
    </div>
  );
};

export default StoreFilter;
