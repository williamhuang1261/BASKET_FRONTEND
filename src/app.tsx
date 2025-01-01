import { RouterProvider } from "react-router-dom";
import router from "./routes";
import useGetUser from "./hooks/user_account/useGetUser";
import { useEffect } from "react";

/**
 * @description This is the app component that will be rendered after the main element and certain providers
 * @see main.tsx for providers that have been covered
 * @returns {JSX.Element} The RouterProvider component
 */
const App = () => {
  const getUser = useGetUser();

  useEffect(() => {
    getUser().then(() => console.log("Startup complete"));
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
