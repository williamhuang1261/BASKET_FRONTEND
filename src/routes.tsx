import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("./routes/HomePage"));
const ItemsPage = lazy(() => import("./routes/ItemsPage"));
const FlyersPage = lazy(() => import("./routes/FlyersPage"));
const BasketPage = lazy(() => import("./routes/BasketPage"));
const AboutPage = lazy(() => import("./routes/AboutPage"));
const UsersPage = lazy(() => import("./routes/UsersPage"));
const ErrorPage = lazy(() => import("./routes/ErrorPage"));
const TestPage = lazy(() => import('./routes/TestPage'));

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/users", element: <UsersPage />, errorElement: <ErrorPage /> },
  { path: "/items", element: <ItemsPage />, errorElement: <ErrorPage /> },
  { path: "/flyers", element: <FlyersPage />, errorElement: <ErrorPage /> },
  { path: "/basket", element: <BasketPage />, errorElement: <ErrorPage /> },
  { path: "/about", element: <AboutPage />, errorElement: <ErrorPage /> },
  { path: "/test", element: <TestPage />, errorElement: <ErrorPage /> },
]);

export default router;
