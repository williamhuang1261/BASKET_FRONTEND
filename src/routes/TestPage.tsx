import Fallback from "../components/Loading/Fallback";

/**
 * @description Test page for development and debugging purposes
 * @returns {JSX.Element} Test page with any content for testing
 */
const TestPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Fallback />
    </div>
  );
};

export default TestPage;
