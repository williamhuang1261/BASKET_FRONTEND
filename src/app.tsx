import { RouterProvider } from "react-router-dom";
import router from "./routes";
import useStartup from "./hooks/useStartup";

const App = () => {
  useStartup();
  return <RouterProvider router={router} />;
};

export default App;
