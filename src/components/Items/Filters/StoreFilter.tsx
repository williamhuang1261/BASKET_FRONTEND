import suppliers from "../../../data/Suppliers";
import useSearchFilterState from "../../../hooks/state/useSearchFilterState";
import useUserState from "../../../hooks/state/useUserState";
import ExpandableCheckboxList from "./ExpandableCheckboxList";

/**
 * @description Component that handles store filtering functionality
 * @summary Displays a list of stores that can be filtered through checkboxes
 * @returns {JSX.Element} A store filter component with expandable checkbox list
 */
const StoreFilter = () => {
  const { dispatch } = useSearchFilterState();
  const {user} = useUserState();

  return (
    <div className=" py-5">
      <h2 className="pb-2 text-xl font-semibold">Stores</h2>
      <ExpandableCheckboxList
        checkedSet={user.meta.filters.searchPreferences.stores}
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
