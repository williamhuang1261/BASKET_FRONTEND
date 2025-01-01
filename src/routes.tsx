import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

export const HomePage = lazy(() => import("./routes/HomePage"));
export const ItemsPage = lazy(() => import("./routes/ItemsPage"));
export const FlyersPage = lazy(() => import("./routes/FlyersPage"));
export const BasketPage = lazy(() => import("./routes/BasketPage"));
export const AboutPage = lazy(() => import("./routes/AboutPage"));
export const UsersPage = lazy(() => import("./routes/UsersPage"));
export const ErrorPage = lazy(() => import("./routes/ErrorPage"));
export const UserLoginPage = lazy(() => import("./routes/UserLoginPage"));
export const UserSignUpPage = lazy(() => import("./routes/UserSignUpPage"));
export const TestPage = lazy(() => import("./routes/TestPage"));

/**
 * @description This is the router for all the mains pages in the application
 * @summary Lazy loads for all pages, ErrorPage is the errorElement page
 * @returns {Router} All the routes for the application
 * @see src/routes.tsx for the implementation of the router
 * 
 */

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage />},
  { path: "/users", element: <UsersPage />, errorElement: <ErrorPage /> },
  { path: "/items", element: <ItemsPage />, errorElement: <ErrorPage /> },
  { path: "/flyers", element: <FlyersPage />, errorElement: <ErrorPage /> },
  { path: "/basket", element: <BasketPage />, errorElement: <ErrorPage /> },
  { path: "/about", element: <AboutPage />, errorElement: <ErrorPage /> },
  {
    path: "/user-login/",
    element: <UserLoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-signup",
    element: <UserSignUpPage />,
    errorElement: <ErrorPage />,
  },
  { path: "/test", element: <TestPage />, errorElement: <ErrorPage /> },
]);

export default router;
