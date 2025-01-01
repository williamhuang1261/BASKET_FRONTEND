import categories from "../../../data/Categories";
import useSearchFilterState from "../../../hooks/state/useSearchFilterState";
import useUserState from "../../../hooks/state/useUserState";
import ExpandableCheckboxList from "./ExpandableCheckboxList";

// Categories filter

/**
 * @description Component that handles category filtering functionality
 * @summary Displays a list of categories that can be filtered through checkboxes
 * @returns {JSX.Element} A category filter component with expandable checkbox list
 */
const CategoryFilter = () => {
  const { dispatch } = useSearchFilterState();
  const {user} = useUserState();

  return (
    <div className="py-5">
      <h2 className="pb-2 text-xl font-semibold">Categories</h2>
      <ExpandableCheckboxList
        items={categories}
        checkedSet={user.meta.filters.searchPreferences.categories}
        show={10}
        onCheck={(i) => {
          dispatch({
            group: "ADD",
            type: "CAT",
            item: i,
          });
        }}
        onUncheck={(i) => {
          dispatch({
            group: "DELETE",
            type: "CAT",
            item: i,
          });
        }}
      />
    </div>
  );
};

export default CategoryFilter;
