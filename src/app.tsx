import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import UserProvider from "./state/providers/UserProvider";

// TODO Add login check, if positive, get user info

const App = () => {
  useEffect(() => {
    const loadCheckLoginStatus = async () => {
      try {
        const { checkLoginStatus } = await import(
          "./utils/auth/checkLoginStatus"
        );
        checkLoginStatus();
        setTimeout(() => {
          console.log("This is done");
        }, 5000);
      } catch (e) {
        console.error(e);
      }
    };
    loadCheckLoginStatus();
  }, []);

  return (
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
  );
};

export default App;
