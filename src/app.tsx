import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Fallback from "./routes/Fallback";
import router from "./routes";
import UserProvider from "./state/providers/UserProvider";
import checkLoginStatus from "./utils/auth/checkLoginStatus";

const App = () => {
  // TODO Add login check, if positive, get user info
  checkLoginStatus();
  return (
    <Suspense fallback={<Fallback />}>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </Suspense>
  );
};

export default App;
