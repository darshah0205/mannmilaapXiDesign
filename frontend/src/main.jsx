import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing pages
import Landing from "./assets/pages/landingPage/Landing";
import Login from "./assets/pages/loginPage/Login";
import Register from "./assets/pages/register/Register";
import Admin from "./assets/pages/admin/Admin";
import Profile from "./assets/pages/profile/Profile";
import Request from "./assets/pages/requests/Request";
import Loader from "./assets/components/loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/requests",
        element: <Request />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
