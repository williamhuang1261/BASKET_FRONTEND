import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Fallback from "./components/Loading/Fallback.tsx";
import UserProvider from "./state/providers/UserProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Fallback />}>
        <UserProvider>
          <App />
          <ReactQueryDevtools />
        </UserProvider>
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
);
