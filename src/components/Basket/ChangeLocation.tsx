import useUserState from "../../hooks/state/useUserState";
import EditField from "../Users/EditField";

/**
 * @description Renders an input field for changing the user's location
 * @summary Allows users to update their shopping location for calculations
 * @returns {JSX.Element} The change location component
 */
const ChangeLocation = () => {
  const { user } = useUserState();

  return (
    <div className="flex items-center gap-1">
      <h3>
        <b>Your Location : </b>
      </h3>
      <EditField
        text={user.meta.location.formattedAddress}
        placeholder="Change Location"
        id={"Basket_Change_Location"}
        onConfirm={(s: string) =>
          console.log('TO BE HANDLED', s)
          // dispatch({
          //   group: "CHANGE",
          //   type: "LOCATION",
          //   new: s
          // })
        }
      />
    </div>
  );
};

export default ChangeLocation;
