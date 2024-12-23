import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

// TODO Add login check, if positive, get user info

const App = () => {
  useEffect(() => {
    const loadStartup = async () => {
      try {
        const {startup} = await import("./startup");
        setTimeout(() => {
          console.log("Startup check complete");
        }, 5000);
        startup();
      } catch (e) {
        console.error(e);
      }
    };
    loadStartup();
  }, []);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
