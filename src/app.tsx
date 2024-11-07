import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Fallback from "./routes/Fallback";
import router from "./routes";
import UserProvider from "./state/providers/UserProvider";

// TODO Add login check, if positive, get user info
const loadCheckLoginStatus = async () => {
  try {
    const {checkLoginStatus} = await import("./utils/auth/checkLoginStatus");
    checkLoginStatus();
  } catch (e) {
    console.error(e);
  }
};

const App = () => {
  loadCheckLoginStatus();
  return (
    <Suspense fallback={<Fallback />}>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </Suspense>
  );
};

export default App;
