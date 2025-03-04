import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import GenNavBar from "../components/NavBar/GenNavBar";
import FooterDiv from "../components/General/Footer/FooterDiv";
import CustomDirectNav from "../components/General/Miscellaneous/CustomDirectNav";

/**
 * @description Error handling and display page
 * @summary Main sections:
 * - Navigation bar
 * - Error message display
 * - Error description
 * - Navigation options
 * - Footer
 *
 * @returns {JSX.Element} Error page with custom error message and navigation
 */
const ErrorPage = () => {
  const error = useRouteError();

  // Handle 404 error
  const typeError = () => {
    if (isRouteErrorResponse(error))
      return "Error 404: You went too far. This page does not exist";
    return "An unexpected error occured";
  };

  return (
    <>
      <div className="flex min-h-screen w-screen min-w-80 flex-col overflow-hidden">
        <div className=" border-b-0.5 border-dark_gray">
          <GenNavBar page="General" size="Container" />
        </div>
        <main className="md: mx-auto flex flex-col items-center px-3 md:container lg:px-20 2xl:px-44 3xl:px-64">
          <h1 className="p-5 text-4xl">Oops...</h1>
          <p className=" text-2xl">{typeError()}</p>
          <CustomDirectNav
            pathname="/"
            className="p-5 text-2xl underline transition-all hover:text-green"
          >
            Go to Home Page
          </CustomDirectNav>
        </main>
        <div className="grow"></div>
        <div>
          <FooterDiv />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
