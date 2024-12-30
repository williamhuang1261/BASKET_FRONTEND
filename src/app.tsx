import { RouterProvider } from "react-router-dom";
import router from "./routes";
import useStartup from "./hooks/user_account/useStartup";
import { useEffect } from "react";

const App = () => {
  const startupFn = useStartup()

  useEffect(() => {
    startupFn().then(() => console.log('Startup complete'))
  }, [])

  return <RouterProvider router={router} />;
};

export default App;
