import FooterDiv from "../components/General/Footer/FooterDiv";
import NewFooterDiv from "../components/General/Footer/NewFooterDiv";

/**
 * @description Test page for development and debugging purposes
 * @returns {JSX.Element} Test page with any content for testing
 */
const TestPage = () => {
  return (
    <div className="flex h-screen w-screen items-end">
      <div className="w-full">
        <NewFooterDiv />
        {/* <FooterDiv /> */}
      </div>
    </div>
  );
};

export default TestPage;
