import { RouterProvider } from "react-router-dom";
import router from "./routes";
import useGetUser from "./hooks/user_account/useGetUser";
import { useEffect } from "react";

const App = () => {
  const getUser = useGetUser();

  useEffect(() => {
    getUser().then(() => console.log("Startup complete"));
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
