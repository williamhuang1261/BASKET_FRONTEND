import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Fallback from "./routes/Fallback";
import router from "./routes";
import UserProvider from "./state/providers/UserProvider";

const App = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </Suspense>
  );
};

export default App;
