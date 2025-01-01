import Spinner from "../General/Miscellaneous/Spinner";

/**
 * @description A simple loading indicator section with a spinner
 * @summary Displays a centered spinner in a fixed height container
 * @returns {JSX.Element} A container with a centered spinner component
 */
const LoadingSection = () => {
  return (
    <div className="h-16 w-full">
      <Spinner color="green" size="12" />
    </div>
  );
};

export default LoadingSection;
