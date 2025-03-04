import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

export const HomePage = lazy(() => import("./routes/HomePage"));
export const ItemsPage = lazy(() => import("./routes/ItemsPage"));
export const FlyersPage = lazy(() => import("./routes/FlyersPage"));
export const BasketPage = lazy(() => import("./routes/BasketPage"));
export const AboutPage = lazy(() => import("./routes/AboutPage"));
export const UserPage = lazy(() => import("./routes/UserPage"));
export const ErrorPage = lazy(() => import("./routes/ErrorPage"));
export const UserLoginPage = lazy(() => import("./routes/auth/UserLoginPage"));
export const UserSignUpPage = lazy(
  () => import("./routes/auth/UserSignUpPage"),
);
export const ResetPassswordPage = lazy(
  () => import("./routes/auth/ResetPassword"),
);
export const TestPage = lazy(() => import("./routes/TestPage"));

/**
 * @description This is the router for all the mains pages in the application
 * @summary Lazy loads for all pages, ErrorPage is the errorElement page
 * @returns {Router} All the routes for the application
 * @see src/routes.tsx for the implementation of the router
 *
 */

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  {
    path: "/account",
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/items',
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'search/:id',
        element: <ItemsPage />,
        errorElement: <ErrorPage />
      },
      {
        path: 'info/:id',
        element: <ItemsPage />,
        errorElement: <ErrorPage />
      }
      ]
  },
  { path: "/flyers", element: <FlyersPage />, errorElement: <ErrorPage /> },
  { path: "/basket", element: <BasketPage />, errorElement: <ErrorPage /> },
  { path: "/about", element: <AboutPage />, errorElement: <ErrorPage /> },
  {
    path: "/auth",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <UserLoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "signup",
        element: <UserSignUpPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "reset-request",
        element: <ResetPassswordPage />,
      },
    ],
  },
  { path: "/test", element: <TestPage />, errorElement: <ErrorPage /> },
]);

export default router;
