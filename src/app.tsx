import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import UserProvider from "./state/providers/UserProvider";

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
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
  );
};

export default App;
